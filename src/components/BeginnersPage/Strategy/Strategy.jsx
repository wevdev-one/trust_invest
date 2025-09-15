import { Trans, useTranslation } from "react-i18next";
import styles from "./Strategy.module.scss";

import arrow from '../../../assets/images/beginnerspage/arrow1.svg';
import check from '../../../assets/images/check3.svg';

const Strategy = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={styles.item}>
          <div className={`${styles.title} font-32-24`}><Trans>{t('begin.strategy.title')}</Trans></div>
          <div className={`${styles.text} font-14-12`}><Trans>{t('begin.strategy.text0')}</Trans></div>
          <div className={`${styles.text} font-14-12`}><Trans>{t('begin.strategy.text1')}</Trans></div>
        </div>
        <div className={styles.right}>
          <img src={arrow} alt="" className={styles.arrow} loading="lazy" />
          <div className={`${styles.title} font-32-24`}><Trans>{t('begin.strategy.list0')}</Trans></div>
          <div className={`${styles.subtitle} font-20-14`}><Trans>{t('begin.strategy.list01')}</Trans></div>
          <div className={`${styles.text} ${styles.list} font-16-14`}>
            <img src={check} alt="" className={styles.check} loading="lazy" />
            <Trans>{t('begin.strategy.list1')}</Trans>
          </div>
          <div className={`${styles.text} ${styles.list} font-16-14`}>
            <img src={check} alt="" className={styles.check} loading="lazy" />
            <Trans>{t('begin.strategy.list2')}</Trans>
          </div>
          <div className={`${styles.text} ${styles.list} font-16-14`}>
            <img src={check} alt="" className={styles.check} loading="lazy" />
            <Trans>{t('begin.strategy.list3')}</Trans>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;