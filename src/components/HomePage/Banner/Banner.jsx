import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Banner.module.scss";
import Button from '../../GlobalComponents/Button/Button';

import image from '../../../assets/images/homepage/image0.webp';

const Banner = () => {
  const { t } = useTranslation();

  const list = [
    {
      title: t('main.first.listtitle0'),
      text: t('main.first.listtext0'),
    },
    {
      title: t('main.first.listtitle1'),
      text: t('main.first.listtext1'),
    },
    {
      title: t('main.first.listtitle2'),
      text: t('main.first.listtext2'),
    },
    {
      title: t('main.first.listtitle3'),
      text: t('main.first.listtext3'),
    },
  ];

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <img src={image} alt="" className={`${styles.image}`} loading="lazy" />
        <div className={`${styles.title} font-25-20`}>{t('main.first.title')}</div>
        <div className={`${styles.text} font-16-14`}>{t('main.first.text0')}</div>
        <div className={`${styles.bot}`}>
          <div className={styles.grid}>

          </div>
          <div className={styles.content}>
            <div className={`${styles.text} font-16-14`}>{t('main.first.text1')}</div>
            <div className={`${styles.btn} mt-btn`}><Button>{t('btn.trading')}</Button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;