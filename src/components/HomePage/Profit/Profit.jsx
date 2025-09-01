import { useTranslation } from "react-i18next";
import styles from "./Profit.module.scss";

import icon1 from '../../../assets/images/homepage/profit/profit.svg';
import icon2 from '../../../assets/images/homepage/profit/profit1.svg';

const Profit = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={styles.item}>
          <div className={`${styles.title} font-48-24`}>{t('main.profit.title0')}</div>
          <div className={styles.titleIcon}>
            <img src={icon1} alt="" className={`${styles.icon} ${styles.icon1}`} />
            <div className={`${styles.title} ${styles.titleRight} ${styles.title1} font-48-24`}>{t('main.profit.title1')}</div>
          </div>
          <div className={`${styles.text} font-14-12`}>{t('main.profit.text0')}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.titleIcon}>
            <div className={`${styles.title} font-48-24`}>{t('main.profit.title2')}</div>
            <img src={icon2} alt="" className={`${styles.icon} ${styles.icon2}`} />
          </div>
          <div className={`${styles.subtitle} ${styles.titleRight} font-24-16`}>{t('main.profit.title3')}</div>
          <div className={`${styles.text} font-14-12`}>{t('main.profit.text0')}</div>
        </div>
      </div>
    </div>
  );
};

export default Profit;