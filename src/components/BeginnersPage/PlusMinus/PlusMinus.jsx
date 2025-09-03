import { Trans, useTranslation } from "react-i18next";
import styles from "./PlusMinus.module.scss";

import check from '../../../assets/images/check3.svg';
import risk from '../../../assets/images/risk.svg';

const PlusMinus = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={styles.item}>
          <div className={`${styles.title} font-64-32`}><Trans>{t('begin.plus.title0')}</Trans></div>
          <div className={`${styles.title} font-48-32`}><Trans>{t('begin.plus.title1')}</Trans></div>
          <div className={styles.list}>
            <div className={`${styles.listItem} font-16-14`}>
              <img src={check} alt="" className={styles.check} />
              {t('begin.plus.list0')}
            </div>
            <div className={`${styles.listItem} font-16-14`}>
              <img src={check} alt="" className={styles.check} />
              {t('begin.plus.list1')}
            </div>
            <div className={`${styles.listItem} font-16-14`}>
              <img src={check} alt="" className={styles.check} />
              {t('begin.plus.list2')}
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={`${styles.title} font-64-32`}><Trans>{t('begin.plus.title2')}</Trans></div>
          <div className={styles.list}>
            <div className={`${styles.listItem} font-16-14`}>
              <img src={risk} alt="" className={styles.risk} />
              {t('begin.plus.list0')}
            </div>
            <div className={`${styles.listItem} font-16-14`}>
              <img src={risk} alt="" className={styles.risk} />
              {t('begin.plus.list1')}
            </div>
            <div className={`${styles.listItem} font-16-14`}>
              <img src={risk} alt="" className={styles.risk} />
              {t('begin.plus.list2')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlusMinus;