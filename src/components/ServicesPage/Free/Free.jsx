import { Trans, useTranslation } from "react-i18next";
import styles from "./Free.module.scss";

import list1 from '../../../assets/images/servicespage/free/icon1.svg';
import list2 from '../../../assets/images/servicespage/free/icon2.svg';
import list3 from '../../../assets/images/servicespage/image1.webp';
import list4 from '../../../assets/images/servicespage/free/icon3.svg';

const Free = () => {
  const { t } = useTranslation();

  const list = [
    {
      title: t('services.free.listtitle0'),
      text: t('services.free.listtext0'),
      icon: list1,
    },
    {
      title: t('services.free.listtitle1'),
      text: t('services.free.listtext1'),
      icon: list2,
    },
    {
      icon: list3,
    },
    {
      title: t('services.free.listtitle2'),
      text: t('services.free.listtext2'),
      icon: list4,
    },
  ];

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.title} ${styles.titleSpan} font-48-24`}><Trans>{t('services.free.title')}</Trans></div>
        <div className={styles.grid}>
          {list.map((item, index) => (
            <div className={styles.gridItem} key={`free-${index}`}>
              {item.icon && <img src={item.icon} alt="" className={`${styles.icon}`} />}
              {item.title && <div className={`${styles.itemTitle} font-20-16`}><Trans>{item.title}</Trans></div>}
              {item.text && <div className={`${styles.itemText} font-14-12`}><Trans>{item.text}</Trans></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Free;