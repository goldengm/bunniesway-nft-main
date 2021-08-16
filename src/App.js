/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import AboutUs from './Screens/AboutUs/AboutUs';
import Heading from './Screens/Heading/Heading';
import Home from './Screens/Home/Home';
import Works from './Screens/Works/Works';
import Team from './Screens/Team/Team';
import RoadMap from './Screens/RoadMap/RoadMap';
import Faqs from './Screens/Faqs/Faqs'
import Line from './Screens/Line/Line';
import RightLine from './Screens/RightLine/RightLine';
import Partners from './Screens/Partners/Partners';
import Footer from './Screens/Footer/Footer';
import { connectWallet, getCurrentWalletConnected } from './Components/util/interact';
import { chainId } from './Components/constants/address';
import { getContract } from './Components/util/interact';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BigNumber } from 'ethers';

const App = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [status, setStatus] = useState(null);
  const [totalSupply, setTotalSupply] = useState(0);
  const [numberOfWallet, setNumberOfWallet] = useState(0)
  const [counter, setCount] = useState(1)
  const [loading, setMintLoading] = useState(false)
  
  const onClickConnectWallet = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWalletAddress(walletResponse.address);
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWalletAddress(walletResponse.address);
  };

  const onClickDisconnectWallet = async () => {
    setWalletAddress(null)
    setStatus('😥 Connect your wallet account to the site.')
  }
  
  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        console.log('accountchain')
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          setStatus("👆🏽 You can mint new now.");
        } else {
          setWalletAddress(null);
          setStatus("🦊 Connect to Metamask and choose the correct chain using the top right button.");
        }
      });
      window.ethereum.on("chainChanged", (chain) => {
        console.log('chainchange')
        connectWalletPressed()
        console.log(chain)
        if (chain !== chainId) {
          setWalletAddress(null);
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          {/* <a target="_blank" href={`https://metamask.io/download.html`}> */}
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.(https://metamask.io/download.html)
          {/* </a> */}
        </p>
      );
    }
  }

  const notify = () => toast.info(status, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  const decrease = () => {
    if(counter > 1) {
      setCount(counter-1)
    }
  }

  const increase = () => {
    if(counter < 2)
    setCount(counter+1)
  }

  const max = () => {
    setCount(2)
  }

  const onMint = async () => {
    if(!walletAddress) {
      setStatus('Please connect with Metamask')
      return
    }

    if(parseInt(numberOfWallet) + counter > 10) {
      setStatus(`Exceeded max token purchase per wallet`)
      return
    }

    setMintLoading(true)

    const contract = getContract()

    try {
      let tx = await contract.mintToken(counter, { value: BigNumber.from(1e9).mul(BigNumber.from(1e9)).mul(9).div(100).mul(counter), from: walletAddress})
      let res = await tx.wait()
      if (res.transactionHash) {
        setStatus(`You minted ${counter} BUNNIESWAY Successfully`)
      }
    } catch(err) {
      let status = "Transaction failed because you have insufficient funds or sales not started"
      setStatus(status)
      setMintLoading(false)
    }
    setMintLoading(false)
  }

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected()
    setWalletAddress(address)
    setStatus(status)
    addWalletListener()
  }, [])

  useEffect( async () => {
    if(!loading && walletAddress) {
      console.log(loading, walletAddress)
      let contract = getContract()
      let res = await contract.totalSupply()
      setTotalSupply(BigNumber.from(res).toString())
      let numofwallet = await contract.numberOfwallets(walletAddress)
      setNumberOfWallet(BigNumber.from(numofwallet).toString())
    } else if(!walletAddress) {
      setTotalSupply('0')
    }
  }, [loading, walletAddress] ) 

  useEffect(() => {
    if (status) {
      notify()
      setStatus(null)
    }
  }, [status])

  return (
    <Home>
      <div style={{background: 'rgba(0,0,0,0.2)'}}>
        <Heading  
          onClickConnectWallet={onClickConnectWallet}
          onClickDisconnectWallet={onClickDisconnectWallet}
          walletAddress={walletAddress}
        />
        <AboutUs />
        <Works
          walletAddress={walletAddress}
          onMint={onMint}
          increase={increase}
          decrease={decrease}
          max={max}
          counter={counter}
          totalSupply={totalSupply}
          loading={loading}
        />
        <Line />
        <Team />
        <RightLine />
        <RoadMap />
        <Line />
        <Faqs />
        <RightLine />
        <Partners />
        <Footer />
      </div>
      <ToastContainer />
    </Home>
  );
};

export default App;
