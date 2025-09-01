import { Trans, useTranslation } from "react-i18next";
import styles from "./Verify.module.scss";

import image from '../../../assets/images/homepage/verify.webp';

const Verify = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <img src={image} alt="" className={styles.image} />
        <div>
          <div className={`${styles.title} font-32-20`}><Trans>{t('main.verify.title')}</Trans></div>
          <div className={`${styles.text} font-14-12`}><Trans>{t('main.verify.text0')}</Trans></div>
          <div className={`${styles.text} font-14-12`}><Trans>{t('main.verify.text1')}</Trans></div>
        </div>
      </div>      
    </div>
  );
};

export default Verify;