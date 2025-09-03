import { Trans, useTranslation } from "react-i18next";
import styles from "./Cash.module.scss";
import Button from '../../GlobalComponents/Button/Button';

import image from '../../../assets/images/servicespage/image2.webp';

const Cash = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <img src={image} alt="" className={`${styles.image}`} loading="lazy" />
        <div className={`${styles.title} font-64-36`}><Trans>{t('services.cash.title')}</Trans></div>
        <div className={`${styles.subtitle} font-20-16`}><Trans>{t('services.cash.title1')}</Trans></div>
        <div className={`${styles.text} font-14-12`}><Trans>{t('services.cash.text')}</Trans></div>
        <div className={`${styles.btn} mt-btn`}><Button>{t('btn.start')}</Button></div>
      </div>
    </div>
  );
};

export default Cash;