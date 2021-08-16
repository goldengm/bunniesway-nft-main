import React from 'react';
import { Row, Col } from 'reactstrap';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.main_footer}>
            <Row>
                <Col sm={12} md={12}>
                    <div className={styles.footer}>
                        <p>Bunnies Too Official. All rights reserved 2022</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Footer;
