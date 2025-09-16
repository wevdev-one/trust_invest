import { Trans, useTranslation } from "react-i18next";
import styles from "./Trust.module.scss";

import arrow from '../../../assets/images/whypage/grid/arrow.svg';
import icon from '../../../assets/images/whypage/grid/icon.svg';
import image from '../../../assets/images/whypage/image.webp';

const Trust = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={styles.left}>
          <div className={`${styles.title} font-64-36`}><Trans>{t('brand')}</Trans></div>
          <img src={arrow} alt="" className={`${styles.arrow} desk_only`} loading="lazy" />
        </div>
        <div className={styles.grid}>
          <div className={styles.gridLeft}>
            <div className={`${styles.item} ${styles.item1}`}>
              <img src={icon} alt="" className={`${styles.icon}`} loading="lazy" />
              <div className={`${styles.itemTitle} font-48-32`} >{t('why.grid.item1.title')}</div>
              <div className={`${styles.text} font-14-12`} >{t('why.grid.item1.text')}</div>
            </div>
            <div className={`${styles.item} ${styles.item2}`}>
              <div className={`${styles.itemTitle} font-48-32`} >{t('why.grid.item2.title')}</div>
              <div className={`${styles.text} font-14-12`} >{t('why.grid.item2.text')}</div>
            </div>
            <div className={`${styles.item} ${styles.item3}`}>
              <div className={`${styles.itemTitle} font-48-32`} >{t('why.grid.item3.title')}</div>
              <div className={`${styles.text} font-14-12`} >{t('why.grid.item3.text')}</div>
            </div>
            <div className={`${styles.item} ${styles.item4}`}>
              <div className={`${styles.itemTitle} font-48-32`} >{t('why.grid.item4.title')}</div>
              <div className={`${styles.text} font-14-12`} >{t('why.grid.item4.text')}</div>
            </div>
          </div>
          <div className={`${styles.item} ${styles.item5}`}>
            <img src={image} alt="" className={`${styles.image}`} loading="lazy" />
            <div>
              <div className={`${styles.itemTitle} font-48-32`} >{t('why.grid.item5.title')}</div>
              <div className={`${styles.text} font-14-12`} >{t('why.grid.item5.text')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;