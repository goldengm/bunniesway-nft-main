import React from 'react';
import styles from './Slider.module.scss';
import './OverRide.scss';
import Marquee from 'react-fast-marquee';

export default function SliderComponent({ imgs }) {
  return (
    <div className={styles.main_slider}>
      <Marquee
        className={styles.slideImgDiv}
        direction='right'
        gradient={false}
      >
        {imgs.map((el, i) => (
          <div key={i} className='landing__main-content__slider__item'>
            <img src={el.name} alt={el.name} />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
