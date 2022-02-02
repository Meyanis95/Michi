import '../form.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import env from 'react-dotenv';
import { ethers } from 'ethers';
import course from '../utils/course.json';
var CryptoJS = require('crypto-js');
const FormData = require('form-data');

export default function Course() {
  // const [courseContract, setCourseContract] = useState(null);
  // useEffect(() => {
  //   const { ethereum } = window;
  //   if (ethereum) {
  //     const provider = new ethers.providers.Web3Provider(ethereum);
  //     const signer = provider.getSigner();
  //     console.log(signer);
  //     const courseContract = new ethers.Contract(
  //       '0xfBe45f41c2EdB5eFDfD9dCc36aD834651ac81B06',
  //       course.abi,
  //       signer
  //     );
  //     console.log(courseContract);
  //     setCourseContract(courseContract);
  //   } else {
  //     console.log('Ethereum object not found');
  //   }
  // }, []);
  // const mintCourse = async () => {
  //   try {
  //     if (courseContract) {
  //       console.log('clicked');
  //       console.log(courseContract);
  //       console.log('here');
  //       const mintTxn = await courseContract.takeClass({
  //         value: ethers.utils.parseEther('0.1'),
  //       });
  //       await mintTxn.wait();
  //       console.log('mintTxn:', mintTxn);
  //     }
  //   } catch (error) {
  //     console.error('Error while minting:', error);
  //   }
  // };
  // return (
  //   <div>
  //     <div> Hello world</div>
  //     <button onClick={() => mintCourse()}>Mint Course</button>
  //     {/* <div>
  //       <video controls crossOrigin="anonymous">
  //         <source
  //           // label="1080p"
  //           src="https://ipfs.io/ipfs/QmWRAzSgv5VrPHYyBAV5YUwU4taPhrVS9suyUdSL11nDiL"
  //         />
  //       </video>
  //     </div> */}
  //   </div>
  // );
}
