import { Trans, useTranslation } from "react-i18next";
import styles from "./Reach.module.scss";
import Button from "../../GlobalComponents/Button/Button";

import image from '../../../assets/images/servicespage/global.svg';

const Reach = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <img src={image} alt="" className={styles.image} />
        <div className={`${styles.title} font-48-24`}><Trans>{t('services.reach.title')}</Trans></div>
        <div className={`${styles.text} font-14-12`}><Trans>{t('services.reach.text')}</Trans></div>
        <div className={`${styles.btn} mt-btn`}><Button black>{t('btn.seemore')}</Button></div>
      </div>      
    </div>
  );
};

export default Reach;