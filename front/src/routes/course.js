import { ethers } from "ethers";
import abi from "../utils/CourseFactory.json"
import React, { Component, useState } from 'react';

export default function Course() {
  const [currAccount, setCurrentAccount] = useState("")
  const contractAddress = "0x50d0d47C2C08d5A70BC9bC29734a2f62bEe9Bc24"
  const contractABI = abi.abi

  const [allCourses, setAllCourses] = React.useState([])
  async function getAllCourses() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    const waveportalContract = new ethers.Contract(contractAddress, contractABI, signer);

    let courses = await waveportalContract.getCreatorCourse(currAccount);

    console.log("cleaned", courses)
    setAllCourses(courses)
  }

  React.useEffect(() => {
    getAllCourses()
  }, [])

  return (
    <div>
      <p>Hello World</p>
    </div>
  );
}