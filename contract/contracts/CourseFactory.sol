//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./Course.sol";

contract CourseFactory {
    address[] public allContracts;
    address owner;
    mapping(address => address) public ownerContracts;

    constructor() {
        owner = msg.sender;
    }

    function createLesson(uint256 coursePrice, string memory url) public {
        Course newCourseCreated = new Course(msg.sender, coursePrice, url);
        console.log(address(newCourseCreated));
        require(
            address(newCourseCreated) != address(0),
            "There was an issue while creating the course"
        );
        allContracts.push(address(newCourseCreated));
        ownerContracts[msg.sender] = address(newCourseCreated);
    }

    function getContracts() public view returns (address[] memory) {
        return allContracts;
    }

    function getCreatorCourse(address _ownerAddress)
        public
        view
        returns (address)
    {
        return ownerContracts[_ownerAddress];
    }

    function create 
}
