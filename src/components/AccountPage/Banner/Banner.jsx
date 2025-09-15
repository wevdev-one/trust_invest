import { Trans, useTranslation } from "react-i18next";
import styles from "./Banner.module.scss";

import image from '../../../assets/images/accountpage/image.webp';
import mob from '../../../assets/images/accountpage/mob.webp';

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <picture>
          <source srcSet={mob} media="(max-width: 768px)" />
          <img src={image} alt="" className={`${styles.image}`} loading="lazy" />
        </picture>
        <div className={`${styles.title} font-48-28`}><Trans>{t('account.banner.title0')}</Trans></div>
        <div className={`${styles.title} titleColor font-48-28`}><Trans><span>{t('account.banner.title1')}</span></Trans></div>
        <div className={`${styles.text} font-14-12`}>{t('begin.baner.text')}</div>
        <div className={`${styles.text} ${styles.bolder} font-14-12`}>{t('begin.baner.text')}</div>
      </div>
    </div>
  );
};

export default Banner;