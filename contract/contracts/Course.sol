//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "hardhat/console.sol";

contract Course is ERC1155 {
    address owner;
    uint256 public amount;
    uint256 public constant seat = 0;

    constructor(
        address owner,
        uint256 amount,
        string memory url
    ) public ERC1155(url) {
        owner = owner;
        amount = amount;
        return (address(this));
    }

    function takeClass() public payable {
        require(
            msg.value > amount,
            "You must provide eth in order to access the class!"
        );
        _mint(msg.sender, 0, 1, "");
    }

    function withDrawMoney(uint256 amountToWithdraw) public {
        require(msg.sender == owner, "You must be the owner to withdraw.");
        require(
            balanceOf(this) > amountToWithdraw,
            "There is no money on this contract"
        );
        bool sent = payable(msg.sender).send(amountToWithdraw);
        require(sent, "Failed to send Ether");
    }

    function changeAmount(uint256 newPrice) public {
        require(msg.sender == owner, "You must be the owner to change prices.");
        amount = newPrice;
    }

    receive() external payable {}
}
