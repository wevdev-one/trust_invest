import { Trans, useTranslation } from "react-i18next";
import styles from "./Banner.module.scss";
import Button from '../../GlobalComponents/Button/Button';

import image from '../../../assets/images/homepage/image0.webp';
import icon from '../../../assets/images/homepage/icon1.svg';

const Banner = () => {
  const { t } = useTranslation();

  const list = [
    {
      title: t('main.first.listtitle0'),
      text: t('main.first.listtext0'),
      icon: icon,
    },
    {
      title: t('main.first.listtitle1'),
      text: t('main.first.listtext1'),
    },
    {
      title: t('main.first.listtitle2'),
      text: t('main.first.listtext2'),
    },
    {
      title: t('main.first.listtitle3'),
      text: t('main.first.listtext3'),
    },
  ];

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={styles.top}>
          <img src={image} alt="" className={`${styles.image}`} loading="lazy" />
          <div className={`${styles.title} titleColor font-64-32`}><Trans>{t('main.first.title')}</Trans></div>
          <div className={`${styles.text} font-14-12`}>{t('main.first.text0')}</div>
          <div className={`${styles.textbold} font-16-14 mob_only`}>{t('main.first.text1')}</div>
          <div className={`${styles.btn} mt-btn mob_only`}><Button>{t('btn.start')}</Button></div>
        </div>
        <div className={`${styles.bot}`}>
          <div className={styles.grid}>
            {list.map((item, index) => (
              <div className={styles.gridItem} key={`ban-${index}`}>
                {item.icon && <img src={item.icon} alt="" className={`${styles.icon} desk_only`} />}
                <div className={`${styles.itemTitle} font-48-32`}>{item.title}</div>
                <div className={`${styles.itemText} font-14-12`}>{item.text}</div>
              </div>
            ))}
          </div>
          <div className={`${styles.content} desk_only`}>
            <div className={`${styles.textbold} font-16-14`}>{t('main.first.text1')}</div>
            <div className={`${styles.btn} mt-btn`}><Button>{t('btn.start')}</Button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;