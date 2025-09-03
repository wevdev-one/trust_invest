import { Trans, useTranslation } from "react-i18next";
import styles from "./Guide.module.scss";

import list1 from '../../../assets/images/servicespage/icon1.svg';
import list2 from '../../../assets/images/servicespage/icon2.svg';

const Guide = () => {
  const { t } = useTranslation();

  const list = [
    {
      title: t('services.guide.title0'),
      text: t('services.guide.text0'),
      icon: list1,
    },
    {
      title: t('services.guide.title1'),
      text: t('services.guide.text1'),
      icon: list2,
    },
  ];

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        {list.map((item, index) => (
          <div className={styles.item} key={`guide-${index}`}>
            {item.icon && <img src={item.icon} alt="" className={`${styles.icon} desk_only`} />}
            {item.title && <div className={`${styles.title} font-32-20`}><Trans>{item.title}</Trans></div>}
            {item.text && <div className={`${styles.text} font-14-12`}><Trans>{item.text}</Trans></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guide;