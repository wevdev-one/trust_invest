import { Trans, useTranslation } from "react-i18next";
import styles from "./Banner.module.scss";

import image from '../../../assets/images/whypage/image0.webp';

const Banner = () => {
  const { t } = useTranslation();
  const list = [
    'why.banner.list0', 'why.banner.list1', 'why.banner.list2', 'why.banner.list3', 'why.banner.list4', 'why.banner.list5', 'why.banner.list6', 'why.banner.list7', 'why.banner.list8'
  ];

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <img src={image} alt="" className={`${styles.image}`} loading="lazy" />
        <div className={`${styles.title} font-48-28`}><Trans>{t('why.banner')}</Trans></div>
        <div className={styles.list}>
          {list.map((item, index) => (
            <div className={`${styles.text} font-14-12`} key={`listban-${index}`}>{t(`${item}`)}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;