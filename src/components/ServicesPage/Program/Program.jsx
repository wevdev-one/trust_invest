import { Trans, useTranslation } from "react-i18next";
import styles from "./Program.module.scss";

import list1 from '../../../assets/images/servicespage/program/icon1.svg';
import list2 from '../../../assets/images/servicespage/program/icon2.svg';

const Program = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={styles.left}>
          <div className={`${styles.title} font-40-24`}><Trans>{t('services.program.title')}</Trans></div>
          <div className={`${styles.title} font-16-14`}><Trans>{t('services.program.text')}</Trans></div>
        </div>
        <div className={styles.list}>
          <div className={styles.item}>
            <img src={list1} alt="" className={`${styles.icon}`} />
            <div className={styles.content}>
              <div className={`${styles.itemTitle} font-20-16`}><Trans>{t('services.program.listtitle0')}</Trans></div>
              <div className={`${styles.itemText} font-14-12`}><Trans>{t('services.program.listtext0')}</Trans></div>
            </div>
          </div>
          <div className={styles.item}>
            <img src={list2} alt="" className={`${styles.icon}`} />
            <div className={styles.content}>
              <div className={`${styles.itemTitle} font-20-16`}><Trans>{t('services.program.listtitle1')}</Trans></div>
              <div className={`${styles.itemText} font-14-12`}><Trans>{t('services.program.listtext1')}</Trans></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;