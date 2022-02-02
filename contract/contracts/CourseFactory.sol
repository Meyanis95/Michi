//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./Course.sol";

contract CourseFactory {
    address[] array;
    address owner;

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
        array.push(address(newCourseCreated));
    }

    function create 
}
