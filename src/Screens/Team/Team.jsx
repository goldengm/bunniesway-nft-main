import React from 'react';
import { Col, Row } from 'reactstrap';
import styles from './Team.module.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Team = () => {
  return (
    <div className={styles.main_team}id="teams">
      <Row>
        <Col sm={12} md={12}>
          <ScrollAnimation animateIn="fadeInUp" delay={400} animateOnce>
            <div className={styles.team_head}>
              <h2>TEAM</h2>
              <h1>TEAM</h1>
            </div>
          </ScrollAnimation>
        </Col>
        <Col sm={12} md={12}>
          <ScrollAnimation animateIn="fadeInUp" delay={700} animateOnce>
            <div className={styles.team}>
              <div className={styles.character1}>
                <div>
                  <img src='Assets/rabbit4.png' alt='art1' />
                </div>
                <div>
                  <h3>FOUNDER<br />@NEVOSWAY</h3>
                </div>
              </div>
              <div className={styles.character2}>
                <div>
                  <img src='Assets/rabbit5.png' alt='art2' />
                </div>
                <div>
                  <h3>Project Manager<br />Dan Borseth</h3>
                </div>
              </div>
              <div className={styles.character3}>
                <div>
                  <img src='Assets/rabbit2.png' alt='art3' />
                </div>
                <div>
                  <h3>Art designer<br />@Savagemadethabeat</h3>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </Col>
      </Row>
    </div>
  );
};

export default Team;
