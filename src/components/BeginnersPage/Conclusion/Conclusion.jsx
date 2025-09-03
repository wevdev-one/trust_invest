import { Trans, useTranslation } from "react-i18next";
import styles from "./Conclusion.module.scss";

import image from '../../../assets/images/beginnerspage/icon-dots.svg';

const Conclusion = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={styles.item}>
          <img src={image} alt="" className={`${styles.image}`} />
          <div className={`${styles.title} font-64-32`}><Trans>{t('begin.conclusion.title')}</Trans></div>
        </div>
        <div className={`${styles.text} font-14-12`}><Trans>{t('begin.conclusion.text')}</Trans></div>
      </div>
    </div>
  );
};

export default Conclusion;