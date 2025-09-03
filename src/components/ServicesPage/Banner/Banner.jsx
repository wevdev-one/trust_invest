import { Trans, useTranslation } from "react-i18next";
import styles from "./Banner.module.scss";
import Button from '../../GlobalComponents/Button/Button';

import image from '../../../assets/images/servicespage/image0.webp';

const Banner = () => {
  const { t } = useTranslation();
  const list = ['services.banner.list0', 'services.banner.list1', 'services.banner.list2', 'services.banner.list3', 'services.banner.list4', 'services.banner.list5', 'services.banner.list6'];

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <img src={image} alt="" className={`${styles.image}`} loading="lazy" />
        <div className={`${styles.title} titleColor font-64-32`}><Trans>{t('services.banner.title0')}</Trans></div>
        <div className={`${styles.subtitle} font-20-16`}>{t('services.banner.title1')}</div>
        <div className={`${styles.text} font-14-12`}>{t('services.banner.text')}</div>
        <div className={styles.bot}>
          <div className={styles.list}>
            {list.map((item, index) => (
              <div className={`${styles.listItem} font-16-14`} key={`ban-${index}`}>{t(`${item}`)}</div>
            ))}
          </div>
          <div className={`${styles.btn} mt-btn`}><Button>{t('btn.start')}</Button></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;