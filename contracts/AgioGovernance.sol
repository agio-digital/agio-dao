// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./@openzeppelin/contracts/security/Pausable.sol";
import "./@openzeppelin/contracts/access/Ownable.sol";
import "./@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";
import "./@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
import "hardhat/console.sol";

/// @custom:security-contact devs@agiodigital.com
contract AgioGovernance is ERC20, Pausable, Ownable, ERC20Permit, ERC20Votes {
    uint256 public tokenPrice = 0.25 ether;

    constructor(string memory _name, string memory _symbol, uint _initialSupply) ERC20(_name, _symbol) ERC20Permit(_name) {
        _mint(address(this), _initialSupply);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override whenNotPaused {
        super._beforeTokenTransfer(from, to, amount);
    }

    // The following functions are overrides required by Solidity.

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC20, ERC20Votes) {
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(address to, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._mint(to, amount);
    }

    function _burn(address account, uint256 amount)
        internal
        override(ERC20, ERC20Votes)
    {
        super._burn(account, amount);
    }

    function buyToken() public payable {
        require(msg.value >= tokenPrice, "MINIMUM_TOKEN_PRICE_NOT_MET");
        uint wholeTokensToReceive = msg.value / tokenPrice;
        uint tokensToReceive = wholeTokensToReceive * 10**decimals();
        uint tokensForSale = balanceOf(address(this));
        require(tokensToReceive <= tokensForSale, "NOT_ENOUGH_TOKENS_FOR_SALE");
        this.transfer(msg.sender, tokensToReceive);
    }
}
