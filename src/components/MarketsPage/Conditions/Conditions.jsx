import { Trans, useTranslation } from "react-i18next";
import styles from "./Conditions.module.scss";

import image1 from '../../../assets/images/marketspage/image1.webp';
import image2 from '../../../assets/images/marketspage/image2.webp';

const Conditions = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={styles.item}>
          <div className={styles.inner}>
            <div className={`${styles.title} font-40-24`}><Trans>{t('markets.conditions.title0')}</Trans></div>
            <div className={`${styles.text} font-14-12`}>{t('markets.conditions.text0')}</div>
          </div>
          <img src={image1} alt="" className={`${styles.image}`} loading="lazy" />

        </div>
        <div className={styles.item}>
          <img src={image2} alt="" className={`${styles.image}`} loading="lazy" />
          <div className={styles.inner}>
            <div className={`${styles.title} font-40-24`}>{t('markets.conditions.title1')}</div>
            <div className={`${styles.text} font-16-14`}>{t('markets.conditions.text1')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conditions;