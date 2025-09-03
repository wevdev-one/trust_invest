import { Trans, useTranslation } from "react-i18next";
import styles from "./Assets.module.scss";

import image from '../../../assets/images/beginnerspage/image2.webp';

const Assets = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.row} ${styles.center}`}>
          <img src={image} alt="" className={`${styles.image}`} />
          <div className={styles.item}>
            <div className={`${styles.title} font-32-24`}><Trans>{t('begin.assets.title0')}</Trans></div>
            <div className={`${styles.text} font-14-12`}><Trans>{t('begin.assets.text0')}</Trans></div>
            <div className={`${styles.text} font-14-12`}><Trans>{t('begin.assets.text1')}</Trans></div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.item}>
            <div className={`${styles.title} font-32-24`}><Trans>{t('begin.assets.title1')}</Trans></div>
            <div className={`${styles.text} font-14-12`}><Trans>{t('begin.assets.text2')}</Trans></div>
            <div className={`${styles.text} font-14-12`}><Trans>{t('begin.assets.text3')}</Trans></div>
          </div>
          <div className={styles.item}>
            <div className={`${styles.title} font-32-24`}><Trans>{t('begin.assets.title2')}</Trans></div>
            <div className={`${styles.text} font-14-12`}><Trans>{t('begin.assets.text4')}</Trans></div>
            <div className={`${styles.text} font-14-12`}><Trans>{t('begin.assets.text5')}</Trans></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assets;