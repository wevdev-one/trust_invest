import React, { useState } from 'react';
import { Trans, useTranslation } from "react-i18next";
import styles from './Accounts.module.scss';

const Accounts = () => {
  const [activeColumn, setActiveColumn] = useState(1);
  const { t } = useTranslation();

  const titles = ['account.tabs.title0', 'account.tabs.title1', 'account.tabs.title2', 'account.tabs.title3', 'account.tabs.title4'];
  const columns = ['title0', 'title1', 'title2', 'title3', 'title4'];
  const dataWitoutTitles = [
    {
      title0: t('account.tabs.row1.title0'),
      title1: t('account.tabs.row1.title1'),
      title2: t('account.tabs.row1.title2'),
      title3: t('account.tabs.row1.title3'),
      title4: t('account.tabs.row1.title4'),
    },
    {
      title0: t('account.tabs.row2.title0'),
      title1: t('account.tabs.row2.title1'),
      title2: t('account.tabs.row2.title2'),
      title3: t('account.tabs.row2.title3'),
      title4: t('account.tabs.row2.title4'),
    },
    {
      title0: t('account.tabs.row3.title0'),
      title1: t('account.tabs.row3.title1'),
      title2: t('account.tabs.row3.title2'),
      title3: t('account.tabs.row3.title3'),
      title4: t('account.tabs.row3.title4'),
    },
    {
      title0: t('account.tabs.row4.title0'),
      title1: t('account.tabs.row4.title1'),
      title2: t('account.tabs.row4.title2'),
      title3: t('account.tabs.row4.title3'),
      title4: t('account.tabs.row4.title4'),
    },
    {
      title0: t('account.tabs.row5.title0'),
      title1: t('account.tabs.row5.title1'),
      title2: t('account.tabs.row5.title2'),
      title3: t('account.tabs.row5.title3'),
      title4: t('account.tabs.row5.title4'),
    },
    {
      title0: t('account.tabs.row6.title0'),
      title1: t('account.tabs.row6.title1'),
      title2: t('account.tabs.row6.title2'),
      title3: t('account.tabs.row6.title3'),
      title4: t('account.tabs.row6.title4'),
    },
    {
      title0: t('account.tabs.row7.title0'),
      title1: t('account.tabs.row7.title1'),
      title2: t('account.tabs.row7.title2'),
      title3: t('account.tabs.row7.title3'),
      title4: t('account.tabs.row7.title4'),
    },
    {
      title0: t('account.tabs.row8.title0'),
      title1: t('account.tabs.row8.title1'),
      title2: t('account.tabs.row8.title2'),
      title3: t('account.tabs.row8.title3'),
      title4: t('account.tabs.row8.title4'),
    },
  ];

  return (
    <section className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={styles.responsiveTable}>
          <div className={styles.tabs}>
            {titles.map((item, index) => (
              <button
                key={index}
                className={`${styles.tab} ${activeColumn === index ? styles.active : ''}`}
                onClick={() => setActiveColumn(index)}
              >
                <Trans>{t(`${item}`)}</Trans>
              </button>
            ))}
          </div>

          <div className={styles.table}>
            <div className={`${styles.head} ${styles.flex}`}>
              {titles.map((item, index) => (
                <div 
                  key={index} 
                  className={`${styles.row} ${styles[`row-${index}`]} ${index === activeColumn ? styles.activeColumn : ''}`}
                >
                  <Trans>{item}</Trans>
                </div>
              ))}
            </div>
            <div className={styles.body}>
              {dataWitoutTitles.map((row, rowIndex) => (
                <div key={rowIndex} className={`${styles.flex} row-item`}>
                  {columns.map((column, index) => (
                    <div 
                      key={index} 
                      className={`${styles.row} ${index === activeColumn ? styles.activeColumn : ''}`}
                    >
                      <Trans>{row[column]}</Trans>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accounts;