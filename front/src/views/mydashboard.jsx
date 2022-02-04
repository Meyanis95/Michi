import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ethers } from 'ethers';
import abi from "../utils/CourseFactory.json";

export default function MyDashBoard() {
  const [allCoursesCreated, setAllCoursesCreated] = useState([]);
  const [arrPrice, setArrPrice] = useState([]);
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
        const all_addresses = []
        allContracts.then(v =>
          all_addresses.push(v)
        )
        return all_addresses
      };

      const fetchPrice = (_arrayAddress) => {
        const arr = []
        _arrayAddress.forEach(course => {
          const price = getPrice(course)
          arr.push(price)
          console.log("price", price)
        })
        console.log(arr)
        setArrPrice(arr);
        return arr;
      }

      const getPrice = (_address) => {
        let courseContract = new ethers.Contract(_address, contractABI, signer);
        const price = courseContract.getAmount()
        return price
      }

      const main = async () => {
        console.log("ca démarre")
        const all = await getAllCourses();
        console.log("toutes les adresses", all)
        fetchPrice(all)
      }
      main()

    } else {
      console.log('Ethereum object not found');
    }
  }, []);

  return (
    <div>
      <h1> Hello World!</h1>
      {arrPrice}
    </div>
  );
}
