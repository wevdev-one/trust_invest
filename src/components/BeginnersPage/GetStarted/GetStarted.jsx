import { Trans, useTranslation } from "react-i18next";
import styles from "./GetStarted.module.scss";
import Button from "../../GlobalComponents/Button/Button";

import icon1 from '../../../assets/images/beginnerspage/started/icon1.svg';
import icon2 from '../../../assets/images/beginnerspage/started/icon2.svg';
import icon3 from '../../../assets/images/beginnerspage/started/icon3.svg';
import icon4 from '../../../assets/images/beginnerspage/started/icon4.svg';

const GetStarted = () => {
  const { t } = useTranslation();
  const list = [
    {
      title: 'begin.started.listtitle0',
      text: 'begin.started.listtext0',
      icon: icon1,
    },
    {
      title: 'begin.started.listtitle1',
      text: 'begin.started.listtext1',
      icon: icon2,
    },
    {
      title: 'begin.started.listtitle2',
      text: 'begin.started.listtext2',
      icon: icon3,
    },
    {
      title: 'begin.started.listtitle3',
      text: 'begin.started.listtext3',
      icon: icon4,
    },
  ];

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={styles.left}>
          <div className={`${styles.title} font-64-32`}><Trans>{t('begin.started.title')}</Trans></div>
          <div className={`${styles.text} font-16-14`}><Trans>{t('begin.started.text')}</Trans></div>
          <div className={`${styles.btn} mt-btn`}><Button black>{t('btn.start')}</Button></div>
        </div>

        <div className={styles.list}>
          {list.map((item, index) => (
            <div className={`${styles.listItem}`} key={`inst-${index}`}>
              <img src={item.icon} alt="" className={styles.icon} />
              <div className={styles.itemTitle}><Trans>{t(`${item.title}`)}</Trans></div>
              <div className={styles.itemText}><Trans>{t(`${item.text}`)}</Trans></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;