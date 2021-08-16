import React from 'react';
import { Col, Row } from 'reactstrap';
import styles from './AboutUs.module.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const AboutUs = () => {
  return (
    <div className={`${styles.main_about}`} id="aboutus">
      <Row>
        <Col sm={12} md={8}>
          <ScrollAnimation animateIn="fadeInUp" delay={600} animateOnce>
            <div className={styles.about_content}>
              <div>
                <h1>
                  ABOUT <span>US</span>
                </h1>
                <p>
                  Welcome, Bunnies Too 0fficial is a unique brand of NFTs that is designed to give you sense of character to your personality. Each bunny rabbit is made with a touch of love that brings a sense of joy. Start with a dream to make it reality. Making everyone a successful individual and a millionaire in the making. Help us save bunny rabbits from going extinct with our missing to save a bunny
                </p>
              </div>
              <div>
                <p>
                  Don’t get left behind during this revolutionary time were anyone can be wealthy with Bunnies Too 0fficial.   
                </p>
              </div>
              <div>
                <p>
                  Bunnies Too 0fficial is a society off 7,777 NFTs get your hands on them first before they blow because anything is possible. We will be holding a pre-sale mint for 2,000 NFT’s during our first phase. Come live the lavish lifestyle you always been dreaming of. From designer too business casual, exotic way of living. Think Believe Achieve “TBA”
                </p>
              </div>
              <div>
                <h2>Future Prize Winings</h2>
                <p>
                  The First 100 Investors who jump in before takeoff will have a chance to reveal the first Bunnie Too 0fficial NFT that will be worth 5ETH that will be minted just for them.  Lucky investors will be able to win $2,000 cash once pre-sale is complete. Once 7,777 NFT’s are minted there will be many give aways for investors of a cash winning prize up to $10,000 dollars or an all-expense paid trip to Maldives for you and your guest 
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </Col>
        <Col sm={12} md={4}>
          <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce>
            <div className={styles.sideRabbit}>
              <img src='Assets/rabbit4.png' alt='sidebear' />
            </div>
          </ScrollAnimation>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
