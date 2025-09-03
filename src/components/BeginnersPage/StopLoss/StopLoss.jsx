import { Trans, useTranslation } from "react-i18next";
import styles from "./StopLoss.module.scss";

import icon from '../../../assets/images/beginnerspage/cursor.svg';

const StopLoss = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={styles.item}>
          <div className={`${styles.title} font-32-24`}><Trans>{t('begin.stoploss.title0')}</Trans></div>
          <div className={`${styles.text} font-14-12`}><Trans>{t('begin.stoploss.text0')}</Trans></div>
          <div className={`${styles.text} font-14-12`}><Trans>{t('begin.stoploss.text1')}</Trans></div>
        </div>
        <div className={styles.item}>
          <div className={`${styles.title} font-48-32`}>
            <Trans>{t('begin.stoploss.title1')}</Trans>
            <img src={icon} alt="" className={`${styles.icon} desk_only`} />
          </div>
          <div className={`${styles.text} font-14-12`}><Trans>{t('begin.stoploss.text2')}</Trans></div>
          <div className={`${styles.text} font-14-12`}><Trans>{t('begin.stoploss.text3')}</Trans></div>
        </div>
      </div>
    </div>
  );
};

export default StopLoss;