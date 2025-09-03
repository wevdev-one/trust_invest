import { Trans, useTranslation } from "react-i18next";
import styles from "./Instruments.module.scss";

import icon1 from '../../../assets/images/beginnerspage/instruments/icon1.svg';
import icon2 from '../../../assets/images/beginnerspage/instruments/icon2.svg';
import icon3 from '../../../assets/images/beginnerspage/instruments/icon3.svg';
import icon4 from '../../../assets/images/beginnerspage/instruments/icon4.svg';
import wave from '../../../assets/images/beginnerspage/instruments/wave.svg';

const Instruments = () => {
  const { t } = useTranslation();
  const list = [
    {
      title: 'begin.instruments.list0',
      icon: icon1,
    },
    {
      title: 'begin.instruments.list1',
      icon: icon2,
    },
    {
      title: 'begin.instruments.list2',
      icon: icon3,
    },
    {
      title: 'begin.instruments.list3',
      icon: icon4,
    },
  ];

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={styles.left}>
          <div className={`${styles.title} font-64-32`}><Trans>{t('begin.instruments.title')}</Trans></div>
          <img src={wave} alt="" className={`${styles.wave}`} />
          <div className={`${styles.text} font-20-16`}><Trans>{t('begin.instruments.text')}</Trans></div>
        </div>

        <div className={styles.list}>
          {list.map((item, index) => (
            <div className={`${styles.listItem}`} key={`inst-${index}`}>
              <img src={item.icon} alt="" className={styles.icon} />
              <div className={styles.itemTitle}><Trans>{t(`${item.title}`)}</Trans></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instruments;