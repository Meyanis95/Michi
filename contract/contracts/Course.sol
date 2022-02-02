//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "hardhat/console.sol";

contract Course is ERC1155 {
    address owner;
    uint256 public amount;
    uint256 public constant seat = 0;

<<<<<<< HEAD
    constructor(
        address owner,
        uint256 amount,
        string memory url
    ) public ERC1155(url) {
        owner = owner;
        amount = amount;
        return (address(this));
=======
    constructor(address deployer, uint256 coursePrice, string memory url) ERC1155(url) {
        owner = deployer;
        amount = coursePrice;
>>>>>>> 12bcde798dbc542f06ef2221c7f7a2b502595b49
    }

    function takeClass() public payable {
        require(
            msg.value > amount,
            "You must provide eth in order to access the class!"
        );
        _mint(msg.sender, 0, 1, "");
    }

    function withDrawMoney(uint256 amountToWithdraw) public {
<<<<<<< HEAD
        require(msg.sender == owner, "You must be the owner to withdraw.");
        require(
            balanceOf(this) > amountToWithdraw,
            "There is no money on this contract"
        );
=======
        require (msg.sender == owner, "You must be the owner to withdraw.");
        require (address(this).balance > amountToWithdraw, "There is no money on this contract");
>>>>>>> 12bcde798dbc542f06ef2221c7f7a2b502595b49
        bool sent = payable(msg.sender).send(amountToWithdraw);
        require(sent, "Failed to send Ether");
    }

    function changeAmount(uint256 newPrice) public {
        require(msg.sender == owner, "You must be the owner to change prices.");
        amount = newPrice;
    }

    receive() external payable {}
}
