import React from 'react';
import styles from './RoadMap.module.scss';
import { Row, Col } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const RoadMap = () => {
  return (
    <div className={styles.main_road_map} id='roadmaps'>
      <Row>
        <Col sm={12} md={12}>
          <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce>
            <div className={styles.road_map_head}>
              <h2>ROADMAP</h2>
              <h1>ROADMAP</h1>
            </div>
          </ScrollAnimation>
        </Col>
        <Col xs={2} sm={2} md={2}>
          <div className={styles.line}>
            <div className={styles.dottedline}></div>
          </div>
        </Col>
        <Col xs={10} sm={10} md={10}>
          <div className={styles.road_map_content}>
            <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce>
                <div className={styles.circle}>
                  <div className={styles.circle_inner}></div>
                </div>
                <div>
                  <h1>01</h1>
                </div>
                <div>
                  <h2>Designer Drip</h2>
                </div>
                <div>
                  <p>
                  10% Presale of 2,000 NFTS minted to be sold 
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce>
                <div className={styles.circle}>
                  <div className={styles.circle_inner}></div>
                </div>
                <div>
                  <h1>02</h1>
                </div>
                <div>
                  <h2>Road to Riches</h2>
                </div>
                <div>
                  <p>
                  20% 10 NFT’s worth 20,000 dollars plus 2,000 dollars cash prize giveaway to a lucky pre-sale holder straight to your wallet
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce>
                <div className={styles.circle}>
                  <div className={styles.circle_inner}></div>
                </div>
                <div>
                  <h1>03</h1>
                </div>
                <div>
                  <h2>Exotic Living</h2>
                </div>
                <div>
                  <p>
                  40% Bunnies Too 0fficial NFT opeansea launch for purchase. Get in early before public sale. 5% will go towards marketing for social media influencer celebrity guess / platinum producer reveal. Will be holding one of our special NFTS for promotional use
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce>
                <div className={styles.circle}>
                  <div className={styles.circle_inner}></div>
                </div>
                <div>
                  <h1>04</h1>
                </div>
                <div>
                  <h2>Carrot Eating</h2>
                </div>
                <div>
                  <p>
                  50% Give back 10% to Rabbit Rescue Charity and animal rescue. Help us save a bunny rabbit from going extinct
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce>
                <div className={styles.circle}>
                  <div className={styles.circle_inner}></div>
                </div>
                <div>
                  <h1>05</h1>
                </div>
                <div>
                  <h2>Forever Grateful</h2>
                </div>
                <div>
                  <p>
                  75% All 7,777 NFT minted, Giveaway prize to some lucky holders for all expense paid trip to Maldives with a free NFT worth 30,000 dollars
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce>
                <div className={styles.circle}>
                  <div className={styles.circle_inner}></div>
                </div>
                <div>
                  <h1>06</h1>
                </div>
                <div>
                  <h2> Wining Season </h2>
                </div>
                <div>
                  <p>
                  100% Develop metaverse for virtual reality living with your NFT character in human like form. In the Metaverse you will be able to buy real estate houses to live in and cars to drive on our private island in game with special events like music concerts, partying events, and merch clothing stores for your NFT. This will be a rich community were everyone here looks and feels like the millionaire they are. NFT holders will be able to buy, sell, and trade there NFTs. In the future we will make the metaverse compatible with other NFT brands to join our metaverse as a community with their NFT character in human like form to participate in our exchange world. Transactional fees for buying and selling will go towards our brand Bunnies Too 0fficial to help advance our community and metaverse
                  </p>
                </div>
              </ScrollAnimation>
              <div className={styles.bottomArrow}>
                <img src='Assets/downarrow.png' alt='' />
              </div>
            </div>
        </Col>
      </Row>
    </div>
  );
};

export default RoadMap;
