import { Trans, useTranslation } from "react-i18next";
import styles from "./Assets.module.scss";
import Button from '../../GlobalComponents/Button/Button';

import image from '../../../assets/images/homepage/assets/image.webp';
import icon1 from '../../../assets/images/homepage/assets/icon1.svg';
import icon2 from '../../../assets/images/homepage/assets/icon2.svg';

const Assets = () => {
  const { t } = useTranslation();

  const list = [
    {
      title: t('main.assets.listtitle0'),
      subtitle: t('main.assets.listsubtitle0'),
      text: t('main.assets.listtext0'),
      icon: icon1,
    },
    {
      title: t('main.assets.listtitle1'),
      subtitle: t('main.assets.listsubtitle1'),
      text: t('main.assets.listtext1'),
      icon: icon2,
    },
  ];

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <img src={image} alt="" className={`${styles.image} desk_only`} loading="lazy" />
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={`${styles.title} font-36-20`}><Trans>{t('main.assets.title')}</Trans></div>
            <div className={`${styles.btn} mt-btn`}><Button>{t('btn.seemore')}</Button></div>
          </div>
          <div className={styles.grid}>
            {list.map((item, index) => (
              <div className={styles.gridItem} key={`assets-${index}`}>
                <div className={styles.flex}>
                  {item.icon && <img src={item.icon} alt="" className={`${styles.icon}`} />}
                  <div className={`${styles.itemTitle} font-20-14`}>{item.title}</div>
                </div>
                <div className={`${styles.subtitle} font-14-12`}>{item.subtitle}</div>
                <div className={`${styles.itemText} font-14-12`}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assets;