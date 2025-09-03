import { Trans, useTranslation } from "react-i18next";
import styles from "./Banner.module.scss";
import Button from '../../GlobalComponents/Button/Button';

import image from '../../../assets/images/beginnerspage/image0.webp';

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <img src={image} alt="" className={`${styles.image}`} loading="lazy" />
        <div className={`${styles.title} titleColor font-64-32`}><Trans>{t('begin.baner.title')}</Trans></div>
        <div className={`${styles.text} font-14-12`}>{t('begin.baner.text')}</div>
        <div className={`${styles.btn} mt-btn`}><Button>{t('btn.start')}</Button></div>
      </div>
    </div>
  );
};

export default Banner;