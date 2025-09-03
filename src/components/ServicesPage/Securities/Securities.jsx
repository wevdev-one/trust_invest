import { Trans, useTranslation } from "react-i18next";
import styles from "./Securities.module.scss";

import image from '../../../assets/images/servicespage/image3.webp';
import title from '../../../assets/images/servicespage/securities.svg';
import check from '../../../assets/images/check2.svg';

const Securities = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={styles.bg}>
          <img src={image} alt="" className={`${styles.image} desk_only`} loading="lazy" />
          <div className={`${styles.title} font-40-24`}>
            <Trans>{t('services.sec.title')}</Trans>
            <span>
              <Trans>{t('services.sec.title1')}</Trans> 
              <img src={title} alt="" className={`${styles.icon}`} loading="lazy" />
            </span>
          </div>
          <div className={`${styles.text} font-14-12`}><Trans>{t('services.sec.text')}</Trans></div>
        </div>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={`${styles.title} font-32-20`}>
              <img src={check} className={styles.check} alt="" />
              {t('services.sec.listtitle0')}
            </div>
            <div className={`${styles.text} font-14-12`}>{t('services.sec.listtext0')}</div>
            <ul>
              <li className="font-14-12">{t('services.sec.list0')}</li>
              <li className="font-14-12">{t('services.sec.list1')}</li>
            </ul>
          </div>
          <div className={styles.item}>
            <div className={`${styles.title} font-32-20`}>
              <img src={check} className={styles.check} alt="" />
              {t('services.sec.listtitle1')}
            </div>
            <div className={`${styles.text} font-14-12`}>{t('services.sec.listtext1')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Securities;