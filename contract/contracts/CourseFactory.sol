//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./Course.sol";

contract CourseFactory {
    address[] array;

    function createLesson(uint256 coursePrice, string url) public {
        address newCourseAddress = new Course(msg.sender, coursePrice, url);
        console.log(type(newCourseAddress).name);
        require(type(newCourseAddress).name.length != 0, "There was an issue while creating the course");
        array.append(newCourseAddress);
    }
}
