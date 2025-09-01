import { Trans, useTranslation } from "react-i18next";
import styles from "./Broker.module.scss";
import Button from '../../GlobalComponents/Button/Button';

import icon from '../../../assets/images/check.svg';
import cnmv from '../../../assets/images/homepage/broker/cnmv.svg';
import fca from '../../../assets/images/homepage/broker/fca.svg';
import great from '../../../assets/images/homepage/broker/great.svg';
import like from '../../../assets/images/homepage/broker/like.svg';
import success from '../../../assets/images/homepage/broker/success.svg';
import trust from '../../../assets/images/homepage/broker/trust.svg';

const Broker = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <img src={cnmv} alt="" className={`${styles.image} ${styles.cnmv}`} loading="lazy" />
        <img src={fca} alt="" className={`${styles.image} ${styles.fca}`} loading="lazy" />
        <img src={great} alt="" className={`${styles.image} ${styles.great} desk_only`} loading="lazy" />
        <img src={like} alt="" className={`${styles.image} ${styles.like}`} loading="lazy" />
        <img src={success} alt="" className={`${styles.image} ${styles.success}`} loading="lazy" />
        <img src={trust} alt="" className={`${styles.image} ${styles.trust}`} loading="lazy" />
        <div className={`${styles.title} font-48-24`}><Trans>{t('main.brok.title')}</Trans></div>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <img src={icon} alt="" className={`${styles.icon}`} loading="lazy" />
            <div className={`${styles.itemTitle} font-20-14`}>{t('main.brok.title0')}</div>
          </div>
          <div className={styles.gridItem}>
            <img src={icon} alt="" className={`${styles.icon}`} loading="lazy" />
            <div className={`${styles.itemTitle} font-20-14`}>{t('main.brok.title1')}</div>
          </div>
        </div>
        <div className={`${styles.btn} mt-btn`}><Button black>{t('btn.seemore')}</Button></div>
      </div>      
    </div>
  );
};

export default Broker;