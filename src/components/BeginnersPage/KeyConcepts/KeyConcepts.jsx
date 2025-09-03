import { Trans, useTranslation } from "react-i18next";
import styles from "./KeyConcepts.module.scss";

import border from '../../../assets/images/beginnerspage/border.svg';
import check from '../../../assets/images/check-color.svg';

const KeyConcepts = () => {
  const { t } = useTranslation();
  const list = [
    {
      title: t('begin.key.listtitle0'),
      text: t('begin.key.listtext0'),
      index: 1,
    },
    {
      title: t('begin.key.listtitle1'),
      text: t('begin.key.listtext1'),
      index: 2,
    },
    {
      title: t('begin.key.listtitle2'),
      text: t('begin.key.listtext2'),
      index: 3,
    },
  ];

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={styles.item}>
          <div className={`${styles.title} font-32-24`}><Trans>{t('begin.key.title')}</Trans></div>
          <div className={styles.checkWrap}>
            <img src={check} alt="" className={`${styles.check}`} />
            <div className={`${styles.text} font-12`}><Trans>{t('begin.key.text')}</Trans></div>
          </div>
        </div>
        <div className={styles.list}>
          {list.map((item, index) => (
            <div className={styles.listItem} key={`key-${index}`}>
              <div className={`${styles.index} font-20-14`}>
                <img src={border} alt="" className={`${styles.icon}`} />
                {item.index}
              </div>
              <div>
                <div className={`${styles.itemTitle} font-14-12`}><Trans>{item.title}</Trans></div>
                <div className={`${styles.itemText} font-14-12`}><Trans>{item.text}</Trans></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyConcepts;