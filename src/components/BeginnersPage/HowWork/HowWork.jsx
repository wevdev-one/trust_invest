import { Trans, useTranslation } from "react-i18next";
import styles from "./HowWork.module.scss";

import image from '../../../assets/images/beginnerspage/image1.webp';

const HowWork = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={styles.row}>
          <div className={styles.item}>
            <div className={`${styles.title} font-32-24`}><Trans>{t('begin.how.title0')}</Trans></div>
            <div className={`${styles.text} font-14-12`}><Trans>{t('begin.how.text0')}</Trans></div>
            <div className={`${styles.text} font-14-12`}><Trans>{t('begin.how.text1')}</Trans></div>
          </div>
          <img src={image} alt="" className={`${styles.image}`} />
        </div>
        <div className={styles.row}>
          <div className={styles.item}>
            <div className={`${styles.title} font-64-32`}><Trans>{t('begin.how.title1')}</Trans></div>
            <div className={`${styles.text} font-14-12`}><Trans>{t('begin.how.text2')}</Trans></div>
          </div>
          <div className={styles.item}>
            <div className={`${styles.text} font-14-12`}><Trans>{t('begin.how.text3')}</Trans></div>
            <div className={`${styles.text} font-14-12`}><Trans>{t('begin.how.text4')}</Trans></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWork;