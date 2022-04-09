// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.2;

import "./@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "./@openzeppelin/contracts/access/Ownable.sol";
import "./@openzeppelin/contracts/utils/math/SafeMath.sol";
import "hardhat/console.sol";

struct Nft {
  string metadataHash;
  string name;
  address payable previousOwner;
  address payable minter;
  address payable owner;
  uint256 id;
}

contract AgioERC1155 is ERC1155, Ownable {
    bool public paused = true;
    address public originalOwner;
    address contractAddress = address(this);
    string public symbol;
    string public name;
    string public baseTokenURI = ""; // https://docs.opensea.io/docs/metadata-standards
    string public contractURI = ""; // https://docs.opensea.io/docs/contract-level-metadata
    uint256 public totalSupply = 1000000000;
    uint256 public totalTokens = 0;

    mapping(uint256 => Nft) public tokens;
    mapping(string => bool) private tokenNameExist;
    mapping(string => bool) private metadataHashesExist;


    // -------------------------------
    //  Events
    // -------------------------------

    event PermanentURI(string _value, uint256 indexed _id);
    event SetPaused(bool _paused);
    event SetBaseTokenURI(string _baseTokenURI);
    event SetContractURI(string _contractURI);
    event MintToken(uint256 indexed _id, address indexed _to, string _hash, string _name);

    // -------------------------------
    //   Initialization
    //    - keep track of original owner
    //    - set baseTokenURI (ipfs hash will be appended in uri function)
    // -------------------------------

    constructor(string memory _name, string memory _symbol) ERC1155("") {
        originalOwner = msg.sender;
        name = _name;
        symbol = _symbol;
        setBaseTokenURI("ipfs://");
    }


    // -------------------------------
    //   Modifiers
    // -------------------------------

    modifier onlyNotPaused() {
        require(!paused, "Only not when not paused");
        _;
    }

    modifier onlyTokenExists(uint256 _id) {
        Nft memory token = tokens[_id];
        require(token.id > 0 && token.id == _id, "Only when token exists");
        _;
    }

    modifier onlyTokenOwner(uint256 _id) {
        Nft memory token = tokens[_id];
        uint256 balance = balanceOf(msg.sender, _id);
        require(token.owner == msg.sender && balance >= 1, "Only token owner");
        _;
    }

    // -------------------------------
    //   Owner Contract Functions
    // -------------------------------

    // Important for OpenSea to scrape token metadata // https://docs.opensea.io/docs/contract-level-metadata
    function setBaseTokenURI(string memory _baseTokenURI) public onlyOwner {
        _setURI(_baseTokenURI);
        baseTokenURI = _baseTokenURI;
        emit SetBaseTokenURI(_baseTokenURI);
    }

    function setPaused(bool _paused) external onlyOwner {
        require(_paused != paused, "New value required");
        paused = _paused;
        emit SetPaused(_paused);
    }

    function setContractURI(string memory _contractURI) public onlyOwner {
        contractURI = _contractURI;
        emit SetContractURI(_contractURI);
    }

    // -------------------------------
    //   Getters View Only
    // -------------------------------

    function tokenUriFromMetadataHash(string memory _hash)
        internal
        view
        returns (string memory)
    {
        return string(abi.encodePacked(baseTokenURI, _hash));
    }

    // Important for OpenSea to scrape contract-level metadata https://docs.opensea.io/docs/metadata-standards
    function uri(uint256 _id) public view override returns (string memory) {
        if (!tokenExists(_id)) return "";
        return tokenUriFromMetadataHash(tokens[_id].metadataHash);
    }

    function getNextTokenId() public view returns (uint256) {
        return totalTokens + 1;
    }

    function tokenExists(uint256 _id) public view returns (bool) {
        Nft memory nft = tokens[_id];
        return bool(nft.id > 0 && nft.id == _id);
    }

    function isOwner(uint256 _id) public view returns (bool) {
        return bool(tokens[_id].owner == msg.sender);
    }

    function allTokens() public view returns (Nft[] memory) {
        Nft[] memory _tokens = new Nft[](totalTokens);
        for (uint256 i = 0; i < totalTokens; i++) {
            _tokens[i] = tokens[i + 1];
        }
        return _tokens;
    }

    // -------------------------------
    //   Public Override
    // -------------------------------

    function safeTransferFrom(
        address _from,
        address _to,
        uint256 _id,
        uint256 _amount,
        bytes memory _data
    ) public virtual override {
        super.safeTransferFrom(_from, _to, _id, _amount, _data);
        Nft memory nft = tokens[_id];
        nft.previousOwner = nft.owner;
        nft.owner = payable(_to);
        tokens[_id] = nft;
    }


    // -------------------------------
    //   Internal Core Functions
    // -------------------------------

    function _mintToken(
        uint256 _id,
        address _to,
        string memory _hash,
        string memory _name
    ) internal onlyNotPaused {
        require(tokenExists(_id) != true, "Token already exists");
        require(metadataHashesExist[_hash] != true, "Hash already exists");
        require(_id == (totalTokens + 1), "Token ID incorrect");
        require(bytes(_hash).length != 0, "Metadata Hash required");
        require(bytes(_name).length != 0, "Name required");
        require(tokenNameExist[_name] != true, "Name already exists");
        require(_id <= totalSupply, "All tokens minted");

        _mint(_to, _id, 1, "");

        totalTokens = _id;
        metadataHashesExist[_hash] = true;
        tokenNameExist[_name] = true;

        Nft memory nft = Nft({
            id: _id,
            metadataHash: _hash,
            name: _name,
            previousOwner: payable(address(0)),
            minter: payable(msg.sender),
            owner: payable(_to)
        });

        tokens[_id] = nft;

        emit PermanentURI(tokenUriFromMetadataHash(_hash), _id);
        emit MintToken(_id, nft.owner, _hash, _name);
    }


    // -------------------------------
    //   External Core Functions
    // -------------------------------

    function mintToken(uint256 _id, address _to, string memory _hash, string memory _name) external payable onlyOwner {
        _mintToken(_id, _to, _hash, _name);
    }
}
