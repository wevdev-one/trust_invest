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
          <div>
            <div className={`${styles.title} titleColor font-64-32`}><Trans>{t('markets.conditions.title')}</Trans></div>
            <div className={`${styles.text} font-14-12`}>{t('markets.conditions.text0')}</div>
          </div>
          <img src={image1} alt="" className={`${styles.image}`} loading="lazy" />

        </div>
        <div>
          <img src={image2} alt="" className={`${styles.image}`} loading="lazy" />
          <div>
            <div className={`${styles.subtitle} font-16-14`}>{t('markets.conditions.text1')}</div>
            <div className={`${styles.text} font-16-14`}>{t('markets.conditions.text1')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conditions;