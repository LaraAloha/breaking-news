import React from 'react';
import Swiper from 'react-id-swiper';
import './swiper.css';

type Props = {
  newsData: React.ReactNode | any
}

export const SwiperComponent = ({ newsData }: Props): React.ReactElement => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    }
  }
  
  return (
    <Swiper {...params}>
      {newsData}
    </Swiper>
  )

}