// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./@openzeppelin/contracts/governance/Governor.sol";
import "./@openzeppelin/contracts/governance/extensions/GovernorSettings.sol";
import "./@openzeppelin/contracts/governance/extensions/GovernorCountingSimple.sol";
import "./@openzeppelin/contracts/governance/extensions/GovernorVotes.sol";
import "./@openzeppelin/contracts/governance/extensions/GovernorVotesQuorumFraction.sol";
import "./@openzeppelin/contracts/governance/compatibility/GovernorCompatibilityBravo.sol";

import "./AgioERC1155.sol";

/// @custom:security-contact devs@agiodigital.com
contract AgioSMARTDAO is Governor, GovernorSettings, GovernorCountingSimple, GovernorVotes, GovernorVotesQuorumFraction {
    AgioERC1155 nft;

    constructor(string memory _name, IVotes _token, AgioERC1155 _nft)
        Governor(_name)
        GovernorSettings(1 /* 1 block */, 136 /* 30 minutes */, 0)
        GovernorVotes(_token)
        GovernorVotesQuorumFraction(25)
    {
        nft = _nft;
    }

    function votingDelay()
        public
        view
        override(IGovernor, GovernorSettings)
        returns (uint256)
    {
        return super.votingDelay();
    }

    function votingPeriod()
        public
        view
        override(IGovernor, GovernorSettings)
        returns (uint256)
    {
        return super.votingPeriod();
    }

    function quorum(uint256 blockNumber)
        public
        view
        override(IGovernor, GovernorVotesQuorumFraction)
        returns (uint256)
    {
        return super.quorum(blockNumber);
    }

    function getVotes(address account, uint256 blockNumber)
        public
        view
        override(IGovernor, GovernorVotes)
        returns (uint256)
    {
        return super.getVotes(account, blockNumber);
    }

    function proposalThreshold()
        public
        view
        override(Governor, GovernorSettings)
        returns (uint256)
    {
        return super.proposalThreshold();
    }
}