import { Trans, useTranslation } from "react-i18next";
import styles from "./Open.module.scss";
import Button from "../../GlobalComponents/Button/Button";

import image from '../../../assets/images/homepage/open.webp';
import arrow from '../../../assets/images/homepage/trust.svg';

const Open = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <img src={image} alt="" className={styles.image} />
        <div className={styles.content}>
          <img src={arrow} alt="" className={styles.arrow} />
          <div className={`${styles.title} font-48-24`}><Trans>{t('main.open.title')}</Trans></div>
          <div className={`${styles.text} font-14-12`}><Trans>{t('main.open.text')}</Trans></div>
          <div className={`${styles.btn} mt-btn`}><Button black>{t('btn.seemore')}</Button></div>
        </div>
      </div>      
    </div>
  );
};

export default Open;