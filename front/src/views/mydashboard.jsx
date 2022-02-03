import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ethers } from 'ethers';
import abi from "../utils/CourseFactory.json";

export default function MyDashBoard() {
  const [allCoursesCreated, setAllCoursesCreated] = useState([]);
  const contractAddress = "0x898bFA5BDfb0a8D36DF067b20D4fdBA7528a4998"
  const contractABI = abi.abi

  useEffect(() => {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const courseFactoryContract = new ethers.Contract(contractAddress, contractABI, signer);

      const getAllCourses = async () => {
        const allContracts = courseFactoryContract.getContracts(signer);
        console.log(getAllCourses)
      };

      getAllCourses();

    } else {
      console.log('Ethereum object not found');
    }
  }, []);

  return (
    <div>
      <h1> Hello World!</h1>
    </div>
  );
}
