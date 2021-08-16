import React, { useState } from 'react';
import styles from './Faqs.module.scss';
import { Row, Col } from 'reactstrap';
import { Collapse } from 'antd';
import './OverRide.scss';
import { PlusOutlined } from '@ant-design/icons';
import { MinusOutlined } from '@ant-design/icons';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const { Panel } = Collapse;

const Faqs = () => {
  let [keyCheckerState, setKeyCheckerState] = useState();

  const genExtra = () => (
    <PlusOutlined
      onClick={event => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );
  const genExtra2 = () => (
    <MinusOutlined
      onClick={event => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );
  function callback(key) {
    if (key[1]) {
      key.shift();
      setKeyCheckerState(key[0]);
    } else {
      setKeyCheckerState(key[0]);
    }
  }

  return (
    <div className={styles.main_faqs} id='faqs'>
      {/* <Animated
        isVisible={true}
        animationIn='animate__fadeInUp'
        animationOut='animate__fadeInUp'
      > */}
      <ScrollAnimation animateIn="fadeInUp" delay={600} animateOnce>
        <Row>
          <Col sm={12} md={12}>
            <div className={styles.faqs_head}>
              <h1>FAQ</h1>
            </div>
          </Col>
          <Col sm={12} md={12} id='faqs'>
            <Collapse
              defaultActiveKey={[]}
              onChange={callback}
              expandIconPosition='right'
            >
              <Panel
                header='What is NFT?'
                key='1'
                extra={keyCheckerState === '1' ? genExtra2() : genExtra()}
              >
                <p>NFT stands for “Non-fungible token” and is a cool way of saying it’s a truly unique digital item that YOU can buy, own, and trade</p>
              </Panel>
              <Panel
                header='What is Metamask?'
                key='2'
                extra={keyCheckerState === '2' ? genExtra2() : genExtra()}
              >
                <p>Metamask is a crypto-wallet that can store your Ethereum, and is needed to purchase and mint a Timeless Ape. Having a wallet gives you an Ethereum address (i.e. 0xaD2x….777), this is where your NFT will be stored</p>
              </Panel>
              <Panel
                header='When is the sale open and how much will it cost?'
                key='3'
                extra={keyCheckerState === '3' ? genExtra2() : genExtra()}
              >
                <p>The pre-sale will be opened for 2,000 NFTs to be Mint and each Bunnie Too 0fficial will cost 0.09 ETH. Join our discord to learn how to get in on the pre-sale!</p>
              </Panel>
              <Panel
                header='Buying NFT for the first time?'
                key='4'
                extra={keyCheckerState === '4' ? genExtra2() : genExtra()}
              >
                <p>Get the Metamask Chrome or Firefox extension. Load it with ETH through services that allow you to change your money to ETH like Coinbase, Binance or Kraken. Then, click the button "MINT" on the top banner to connect your wallet and approve the transaction on Metamask. That’s it!</p>
              </Panel>
              <Panel
                header='Where can I see my Bunnies Too 0fficial after purchase?'
                key='5'
                extra={keyCheckerState === '5' ? genExtra2() : genExtra()}
              >
                <p>Your Bunnie Too 0fficial NFT will appear in metamask wallet. You can also see your freshly minted NFT art directly on your Opensea.io account.</p>
              </Panel>
              <Panel
                header='What can I do with my Bunnies Too 0fficial / How can I trade them?'
                key='6'
                extra={keyCheckerState === '6' ? genExtra2() : genExtra()}
              >
                <p>You are free to do anything with them under a non-exclusive license. Bunnies Too 0fficial adheres to the ERC-721 standard so you can trade them on platforms like OpenSea..</p>
              </Panel>
              <Panel
                header='Are Bunnies Too 0fficial a good investment?'
                key='7'
                extra={keyCheckerState === '7' ? genExtra2() : genExtra()}
              >
                <p>Of course! You get a chance to win up to lots of prizes and all-expense paid. We also believe that Bunnies Too 0fficial have a solid development ahead and will keep growing as the project to grow into the metaverse for virtual reality gaming to buy and sell items like your NFT or things you like to purchase in the real world in the metaverse. </p>
              </Panel>
            </Collapse>
          </Col>
        </Row>
        </ScrollAnimation>
      {/* </Animated> */}
    </div>
  );
};

export default Faqs;
