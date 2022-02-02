import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Home() {
  const [currentAccount, setCurrentAccount] = useState('');

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log('Make sure you have metamask!');
      return;
    } else {
      console.log('We have the ethereum object', ethereum);
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log('Found an authorized account:', account);
      setCurrentAccount(account);
    } else {
      console.log('No authorized account found');
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert('Get Metamask!');
        return;
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      console.log('Connected', accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const renderNotConnectedContainer = () => (
    <button
      onClick={connectWallet}
      className="cta-button connect-wallet-button"
    >
      Connect to Wallet
    </button>
  );

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div>
      <h1>Welcome To Michi</h1>
      <p>Connect your wallet to start your journey!</p>
      {currentAccount === '' ? (
        renderNotConnectedContainer()
      ) : (
        <div>
          <p>Wallect connected!!</p>
          <nav>
            <div>
              <Link to={`/courses/${currentAccount}`}>Check your NFT</Link>
            </div>
            <div>
              <Link to="/Form">Create your first course</Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Home;
