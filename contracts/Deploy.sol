// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./AgioERC1155.sol";
import "./AgioSMARTDAO.sol";
import "./AgioGovernance.sol";
import "hardhat/console.sol";

/// @custom:security-contact devs@agiodigital.com
contract Deploy {
  AgioGovernance public token ;
  AgioERC1155 public nft;
  AgioSMARTDAO public dao;

  constructor() payable {
    uint initialSupply = 0 ether;
    address account = address(this);

    token = new AgioGovernance("Agio Governance Token", "AGIO", initialSupply, account);
    nft = new AgioERC1155("Agio Approved Investment Proposal", "SMART");
    dao = new AgioSMARTDAO("Agio SMART DAO", token, nft);
    nft.transferOwnership(address(dao));
    token.transferOwnership(msg.sender);
  }
}