import { Trans, useTranslation } from "react-i18next";
import styles from "./Leverage.module.scss";

import arrow from '../../../assets/images/beginnerspage/arrow2.svg';
import line from '../../../assets/images/beginnerspage/line.svg';

const Leverage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={styles.item}>
          <div className={`${styles.title} font-32-24`}><Trans>{t('begin.strategy.title1')}</Trans></div>
          <div className={`${styles.text} font-14-12`}><Trans>{t('begin.strategy.text2')}</Trans></div>
          <div className={`${styles.text} font-14-12`}><Trans>{t('begin.strategy.text3')}</Trans></div>
        </div>
        <div className={styles.right}>
          <img src={line} alt="" className={styles.line} loading="lazy" />
          <div className={`${styles.title} font-32-24`}><Trans>{t('begin.strategy.list4')}</Trans></div>
          <img src={arrow} alt="" className={`${styles.arrow} ${styles.arrow1}`} loading="lazy" />
          <img src={arrow} alt="" className={`${styles.arrow} ${styles.arrow2}`} loading="lazy" />
          <div className={`${styles.text} ${styles.list} font-16-14`}>
            <Trans>{t('begin.strategy.list5')}</Trans>
          </div>
          <div className={`${styles.text} ${styles.list} font-16-14`}>
            <Trans>{t('begin.strategy.list6')}</Trans>
          </div>
          <div className={`${styles.text} ${styles.list} font-16-14`}>
            <Trans>{t('begin.strategy.list7')}</Trans>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leverage;