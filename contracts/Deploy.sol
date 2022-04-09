// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./AgioERC1155.sol";
import "./AgioSMARTDAO.sol";
import "./AgioGovernance.sol";

/// @custom:security-contact devs@agiodigital.com
contract Deploy {
  AgioGovernance public token ;
  AgioERC1155 public nft;
  AgioSMARTDAO public dao;

  constructor() payable {
    token = new AgioGovernance("Agio Governance Token", "AGIO", 5000 ether);
    nft = new AgioERC1155("Agio Approved Investment Proposal", "SMART");
    dao = new AgioSMARTDAO("Agio SMART DAO", token, nft);
  }
}