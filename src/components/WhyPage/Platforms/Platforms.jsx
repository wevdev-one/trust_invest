import { Trans, useTranslation } from "react-i18next";
import styles from "./Platforms.module.scss";

import icon from '../../../assets/images/check3.svg';

const Platforms = () => {
  const { t } = useTranslation();
  const list = [
    {
      title: 'why.platforms.list.title0',
      text: 'why.platforms.list.text0',
    },
    {
      title: 'why.platforms.list.title1',
      text: 'why.platforms.list.text1',
    },
    {
      title: 'why.platforms.list.title2',
      text: 'why.platforms.list.text2',
    },
    {
      title: 'why.platforms.list.title3',
      text: 'why.platforms.list.text3',
    },
    {
      title: 'why.platforms.list.title4',
      text: 'why.platforms.list.text4',
    },
  ];

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={styles.titles}>
          <div className={`${styles.title} font-64-36`}><Trans>{t('why.platforms.title0')}</Trans></div>
          <div className={`${styles.title} ${styles.title2} font-36-24`}><Trans>{t('why.platforms.title1')}</Trans></div>
        </div>
        <div className={styles.list}>
          {list.map((item, index) => (
            <div className={styles.item} key={`platforms-${index}`}>
              <div className={`${styles.itemTitle} font-16-14`}>
                <img src={icon} alt="" className={`${styles.icon}`} loading="lazy" />
                {t(`${item.title}`)}
              </div>
              <div className={`${styles.text} font-14-12`}>
                {t(`${item.text}`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platforms;