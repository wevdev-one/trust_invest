import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from './Awards.module.scss';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import icon from '../../../assets/images/acc-arrow.svg';
import image0 from '../../../assets/images/whypage/awards/image0.webp';
import image1 from '../../../assets/images/whypage/awards/image1.webp';
import image2 from '../../../assets/images/whypage/awards/image2.webp';
import image3 from '../../../assets/images/whypage/awards/image3.webp';
import image4 from '../../../assets/images/whypage/awards/image4.webp';
import image5 from '../../../assets/images/whypage/awards/image5.webp';
import image6 from '../../../assets/images/whypage/awards/image6.webp';

const Awards = () => {
  const { t } = useTranslation();
  const icons = [image0, image1, image2, image3, image4, image5, image6, image0, image1, image2, image3, image4, image5, image6];
  const [swiper, setSwiper] = useState({});
  const [active, setActive] = useState(0);
  
  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.title} font-64-36`}>{t('why.awards')}</div>
        <div className={styles.mart}>
          <Swiper
            modules={[Navigation]}
            loop={true}
            onSwiper={setSwiper}
            onSlideChange={(e) => setActive(e.realIndex)}
            breakpoints={{
              0: { 
                slidesPerView: 1,
                centeredSlides: true,
              },
              768: { 
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: true,
              },
              992: { 
                slidesPerView: 5,
                spaceBetween: 30,
                centeredSlides: true,
              },
              1200: { 
                slidesPerView: 7, 
                spaceBetween: 0, 
                centeredSlides: true,
              },
            }}
            className={styles.slider}
          >
            {icons.map((item, index) => (
              <SwiperSlide key={`awards-${index}`} className={`${styles.sliderItem} ${active === index ? styles.active : ""}`}>
                <img src={item} alt='' loading="lazy" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.sliderBtns}>
            <button 
              className={`${styles.sliderBtn} ${styles.sliderBtnPrev} ${active === 0 ? styles.inactive : ''}`}
              onClick={() => swiper.slidePrev()}
            >
              <img src={icon} alt="Prev" />
            </button>
            <button 
              className={`${styles.sliderBtn} ${styles.sliderBtnNext} ${active === swiper.snapGrid?.length - 1 ? styles.inactive : ''}`}
              onClick={() => swiper.slideNext()}
            >
              <img src={icon} alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
