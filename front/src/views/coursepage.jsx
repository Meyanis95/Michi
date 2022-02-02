import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import env from 'react-dotenv';
import { ethers } from 'ethers';
import course from '../utils/course.json';
var CryptoJS = require('crypto-js');
const FormData = require('form-data');

export default function AvailableCourse() {
  const location = useLocation();
  const [lesson, setLesson] = useState(location.state);
  const [courseContract, setCourseContract] = useState(null);

  useEffect(() => {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      console.log(signer);
      const courseContract = new ethers.Contract(
        lesson.address,
        course.abi,
        signer
      );
      setCourseContract(courseContract);
    } else {
      console.log('Ethereum object not found');
    }
  }, []);

  const mintCourse = async () => {
    try {
      if (courseContract) {
        console.log('clicked');
        console.log(courseContract);
        // const mintTxn = await courseContract.takeClass({
        //   value: ethers.utils.parseEther('0.1'),
        // });
        // await mintTxn.wait();
        // console.log('mintTxn:', mintTxn);
      }
    } catch (error) {
      console.error('Error while minting:', error);
    }
  };

  return (
    <div>
      <h1> {lesson.title}</h1>
      <p>{lesson.description} </p>
      <button onClick={() => mintCourse()}>Buy the lesson</button>
    </div>
  );
}
