import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ethers } from 'ethers';
import abi from "../utils/CourseFactory.json";

export default function MyDashBoard() {
  const [allCoursesCreated, setAllCoursesCreated] = useState([]);
  const contractAddress = "0x88E94879A723541EDfb814258224CBB4819981D0"
  const contractABI = abi.abi

  useEffect(() => {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const courseFactoryContract = new ethers.Contract(contractAddress, contractABI, signer);

      const getAllCourses = async () => {
        const allContracts = courseFactoryContract.getCourses("0xFe48Eb58b0B889E57844F50B4da7B1886F680C4F")
        allContracts.then(v => console.log(v))
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
