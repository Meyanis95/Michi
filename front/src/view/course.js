import '../form.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import env from 'react-dotenv';
var CryptoJS = require('crypto-js');
const FormData = require('form-data');

export default function Course() {
  useEffect(() => {
    console.log(window.location.pathname.split('/')[2]);
  });

  const mintCourse = () => {
    console.log('clicked');
  };

  return (
    <div>
      <div> Hello world</div>

      <button onClick={() => mintCourse()}>Mint Course</button>
      {/* <div>
        <video controls crossOrigin="anonymous">
          <source
            // label="1080p"
            src="https://ipfs.io/ipfs/QmWRAzSgv5VrPHYyBAV5YUwU4taPhrVS9suyUdSL11nDiL"
          />
        </video>
      </div> */}
    </div>
  );
}
