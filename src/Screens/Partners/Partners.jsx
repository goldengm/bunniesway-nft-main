/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Row, Col } from 'reactstrap';
import styles from './Partners.module.scss';
import { ReactSVG } from 'react-svg';

const Partners = () => {
  return (
    <div className={styles.main_partners}>
      <Row>
        <Col sm={12} md={12}>
          <div className={styles.img_container}>
            <img src='Assets/mark.png' alt='' />
          </div>
        </Col>
        <Col sm={12} md={12}>
          <div className={styles.partners}>
            <div className={styles.head}>
              <h3>
                Bunnies <br />
                To Official
              </h3>
            </div>
            {/* <div className={styles.partners_icons}>
              <a href='https://discord.gg/WYDmSGhJ9u' target='_blank'>
              </a>
            </div> */}
            <div className={styles.social_icons}>
              {/* <img src="Assets/discord3.png" alt="discord3" /> */}
              <a href='https://twitter.com/bunnies20fficia?s=11' target='_blank'><ReactSVG src='Assets/twitter.svg'className={styles.svgTwo} /></a>
              <a href='https://instagram.com/bunniestoo0fficial?utm_medium=copy_link' target='_blank'><ReactSVG src='Assets/instagram.svg'className={styles.svgTwo} /></a>
              <a href='https://t.me/BunniesTooOfficial' target='_blank'><ReactSVG src='Assets/icons8-telegram-app.svg'className={styles.svgTwo} /></a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Partners;
