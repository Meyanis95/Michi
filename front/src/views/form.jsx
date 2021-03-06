import '../App.css';
import axios from 'axios';
import React, { Component, useState } from 'react';
import env from 'react-dotenv';
import { v4 as uuidv4 } from 'uuid';
import { ethers } from "ethers";
import { createClient } from '@supabase/supabase-js'
import abi from "../utils/CourseFactory.json";
var CryptoJS = require("crypto-js");
const FormData = require('form-data');
const supabase = createClient(env.DB_URL, env.DB_KEY)

export default function Form() {
  const [selectedVideoFile, setSelectedVideoFile] = useState(null);
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState(0);
  const [contractAddressCreated, setContractAddressCreated] = useState('');
  const [encryptionKey, setEncryptionKey] = useState(null);
  const [currAccount, setCurrentAccount] = useState("")
  const contractAddress = "0x88E94879A723541EDfb814258224CBB4819981D0"
  const contractABI = abi.abi

  const onVideoChange = (event) => {
    setSelectedVideoFile(event.target.files[0]);
  };

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onImageChange = (event) => {
    setSelectedImageFile(event.target.files[0]);
  };

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const onContentChange = (event) => {
    setContent(event.target.value);
  };

  const onPriceChange = (event) => {
    setPrice(event.target.value);
  };

  const uploadHashOnDb = async (_address) => {
    const { data, error } = await supabase.from('lesson_hash').insert([
      {
        course_address: _address,
        hash: encryptionKey,
      },
    ]);
    if (error) {
      console.log(error);
      return 'not ok'
    } else {
      console.log(data);
      return 'ok'
    }
  }

  async function mintLesson(price, url) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    const courseFactoryContract = new ethers.Contract(contractAddress, contractABI, signer);

    let course_txn = await courseFactoryContract.createLesson(price, url);
    const receipt = await course_txn.wait()

    const event = receipt.events

    console.log("Address of the contract created ==> ", event[0].address)
    setContractAddressCreated(event[0].address)

    console.log("txn:", course_txn);

    return event[0].address
  }

  const onFileUpload = () => {
    const pinVideoFileToIPFS = async (pinataApiKey, pinataSecretApiKey) => {
      const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
      let data = new FormData();
      data.append('file', selectedVideoFile);

      const metadata = JSON.stringify({
        name: title,
        content: content,
      });
      data.append('pinataMetadata', metadata);

      const pinataOptions = JSON.stringify({
        cidVersion: 0,
        customPinPolicy: {
          regions: [
            {
              id: 'FRA1',
              desiredReplicationCount: 1,
            },
            {
              id: 'NYC1',
              desiredReplicationCount: 2,
            },
          ],
        },
      });
      data.append('pinataOptions', pinataOptions);

      const result = axios
        .post(url, data, {
          maxBodyLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
          headers: {
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
            pinata_api_key: pinataApiKey,
            pinata_secret_api_key: pinataSecretApiKey,
          },
        })
        .then(function (response) {
          console.log(response);
          return 'https://ipfs.io/ipfs/' + response.data.IpfsHash;
        })
        .catch(function (error) {
          console.log(error);
        });

      return result;
    };

    const pinImageFileToIPFS = async (pinataApiKey, pinataSecretApiKey) => {
      const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
      let data = new FormData();
      data.append('file', selectedImageFile);

      const metadata = JSON.stringify({
        name: title,
        description: description,
        content: content,
      });
      data.append('pinataMetadata', metadata);

      const pinataOptions = JSON.stringify({
        cidVersion: 0,
        customPinPolicy: {
          regions: [
            {
              id: 'FRA1',
              desiredReplicationCount: 1,
            },
            {
              id: 'NYC1',
              desiredReplicationCount: 2,
            },
          ],
        },
      });
      data.append('pinataOptions', pinataOptions);

      const result = axios
        .post(url, data, {
          maxBodyLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
          headers: {
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
            pinata_api_key: pinataApiKey,
            pinata_secret_api_key: pinataSecretApiKey,
          },
        })
        .then(function (response) {
          console.log(response);
          return 'https://ipfs.io/ipfs/' + response.data.IpfsHash;
        })
        .catch(function (error) {
          console.log(error);
        });

      return result;
    };

    const pinJSONToIPFS = (pinataApiKey, pinataSecretApiKey, JSONBody) => {
      const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
      return axios
        .post(url, JSONBody, {
          headers: {
            pinata_api_key: pinataApiKey,
            pinata_secret_api_key: pinataSecretApiKey,
          },
        })
        .then(function (response) {
          console.log(response);
          return 'https://ipfs.io/ipfs/' + response.data.IpfsHash;
        })
        .catch(function (error) {
          //handle error here
        });
    };

    async function main() {
      const encryption_key = uuidv4();
      setEncryptionKey(encryption_key)
      const ipfsVideoUrl = await pinVideoFileToIPFS(
        env.PINATA_KEY,
        env.PINATA_SECRET_KEY
      );
      var ciphertext = CryptoJS.AES.encrypt(
        JSON.stringify(ipfsVideoUrl),
        encryptionKey
      ).toString();
      const ipfsImageUrl = await pinImageFileToIPFS(
        env.PINATA_KEY,
        env.PINATA_SECRET_KEY
      );
      const dataJson = {
        name: 'MICHI',
        description: 'MICHI is a new way to learn and share knowledge.',
        image:
          'https://ipfs.io/ipfs/QmNyKyL9YssHQWGfAUGkigioZWDGZnEbBJHy8pcajmiC7G',
        slug: 'michi_learn',
        'ipfs_video_url': ciphertext,
        'metadata': {
          'name': title,
          'description': description,
          'background_image': ipfsImageUrl,
        }
      }
      const uri = await pinJSONToIPFS(env.PINATA_KEY, env.PINATA_SECRET_KEY, dataJson);
      const up = await mintLesson(price, uri);
      uploadHashOnDb(up);
    }

    main();
  };

  const fileData = () => {
    if (selectedVideoFile) {
      return (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {selectedVideoFile.name}</p>

          <p>File Type: {selectedVideoFile.type}</p>

          <p>
            Last Modified: {selectedVideoFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }

  };

  return (
    <div>
      <h1>Web3 Udemy</h1>
      <h3>Create your first course!</h3>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={onTitleChange}></input>
        <label>Upload your video content</label>
        <input type="file" onChange={onVideoChange} />
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={onDescriptionChange}
        ></input>
        <label>Upload a background image</label>
        <input type="file" onChange={onImageChange} />
        <label>Content</label>
        <input
          id="textarea"
          type="textarea"
          value={content}
          onChange={onContentChange}
        ></input>
        <input
          type="text"
          value={price}
          pattern="[0-9]*"
          onChange={onPriceChange}
        ></input>
        <br />
        <button onClick={onFileUpload}>Upload!</button>
      </div>
      {fileData()}
    </div>
  );
}
