import { Trans, useTranslation } from "react-i18next";
import styles from "./Trust.module.scss";

import arrow from '../../../assets/images/whypage/grid/arrow.svg';
import icon from '../../../assets/images/whypage/grid/icon.svg';

const Trust = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={styles.left}>
          <div className={`${styles.title} font-64-36`}><Trans>{t('why.banner')}</Trans></div>
          <img src={arrow} alt="" className={`${styles.arrow} desk_only`} loading="lazy" />
        </div>
        <div className={styles.grid}>
            <div className={`${styles.item} ${styles.item1}`}>
              <img src={arrow} alt="" className={`${styles.arrow} desk_only`} loading="lazy" />
              <div className={`${styles.text} font-14-12`} >{t('')}</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;