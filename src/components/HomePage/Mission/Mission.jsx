import { Trans, useTranslation } from "react-i18next";
import styles from "./Mission.module.scss";

import icon from '../../../assets/images/homepage/mission/mission.svg';
import list1 from '../../../assets/images/homepage/mission/list1.svg';
import list2 from '../../../assets/images/homepage/mission/list2.svg';

const Mission = () => {
  const { t } = useTranslation();

  const list = [
    {
      title: t('main.mission.listtitle0'),
      text: t('main.mission.listtext0'),
      index: '01',
      icon: list1,
    },
    {
      title: t('main.mission.listtitle1'),
      text: t('main.mission.listtext1'),
      index: '02',
    },
    {
      title: t('main.mission.listtitle2'),
      text: t('main.mission.listtext2'),
      index: '03',
    },
    {
      title: t('main.mission.listtitle3'),
      text: t('main.mission.listtext3'),
      index: '04',
      icon: list2,
    },
  ];

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={styles.top}>
          <div className={styles.titles}>
            <div className={`${styles.title} ${styles.titleSpan} font-48-24`}><Trans>{t('main.mission.title0')}</Trans></div>
            <div className={`${styles.title} ${styles.titleRight} titleColor font-48-24`}>
              <img src={icon} alt="" className={`${styles.titleIcon}`} loading="lazy" />
              <Trans>{t('main.mission.title1')}</Trans>
            </div>
          </div>
          <div className={`${styles.text} font-14-12`}>{t('main.mission.text')}</div>
        </div>
        <div className={styles.grid}>
          {list.map((item, index) => (
            <div className={styles.gridItem} key={`mis-${index}`}>
              <div className={`${styles.itemIndex} font-48-24`}>
                {item.icon && <img src={item.icon} alt="" className={`${styles.icon}`} />}
                {item.index}
              </div>
              <div className={`${styles.itemTitle} font-20-16`}><Trans>{item.title}</Trans></div>
              <div className={`${styles.itemText} font-14-12`}><Trans>{item.text}</Trans></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;