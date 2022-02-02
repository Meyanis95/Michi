//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./Course.sol";

contract CourseFactory {
    address[] array;
    address owner;

<<<<<<< HEAD
    constructor(address owner) public {
        owner = msg.sender;
        return (address(this));
    }

    function createLesson(uint256 coursePrice, string memory url) public {
        address newCourseAddress = new Course(msg.sender, coursePrice, url);
        //console.log(type(newCourseAddress).name);
        require(
            type(newCourseAddress).name.length != 0,
            "There was an issue while creating the course"
        );
        array.append(newCourseAddress);
=======
    constructor() {
        owner = msg.sender;
    }

    function createLesson(uint256 coursePrice, string memory url) public {
        Course newCourseCreated = new Course(msg.sender, coursePrice, url);
        console.log(address(newCourseCreated));
        require(address(newCourseCreated) != address(0), "There was an issue while creating the course");
        array.push(address(newCourseCreated));
>>>>>>> 12bcde798dbc542f06ef2221c7f7a2b502595b49
    }
}
