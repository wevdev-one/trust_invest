import React, { useState } from 'react';
import { Trans, useTranslation } from "react-i18next";
import { Fade } from "react-reveal";
import styles from './Tabs.module.scss';
import Accordion from '../../GlobalComponents/Accordion/Accordion';

// import icon from '../../../assets/images/ic-arr-r.svg';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useTranslation();

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const tabContent = [t('faqs.tabs.title1'), t('faqs.tabs.title2'), t('faqs.tabs.title3'), t('faqs.tabs.title4'), t('faqs.tabs.title5')];
  const list = [
    [
      {
        title: t('faqs.tab1.title0'),
        text: t('faqs.tab1.text0'),
      },
      {
        title: t('faqs.tab1.title1'),
        text: t('faqs.tab1.text1'),
      },
      {
        title: t('faqs.tab1.title1'),
        text: t('faqs.tab1.text1'),
      },
      {
        title: t('faqs.tab1.title2'),
        text: t('faqs.tab1.text2'),
      },
      {
        title: t('faqs.tab1.title3'),
        text: t('faqs.tab1.text3'),
      },
      {
        title: t('faqs.tab1.title4'),
        text: t('faqs.tab1.text4'),
      },
      {
        title: t('faqs.tab1.title5'),
        text: t('faqs.tab1.text5'),
      },
      {
        title: t('faqs.tab1.title6'),
        text: t('faqs.tab1.text6'),
      },
      {
        title: t('faqs.tab1.title7'),
        text: t('faqs.tab1.text7'),
      },
      {
        title: t('faqs.tab1.title8'),
        text: t('faqs.tab1.text8'),
      },
    ],    [
      {
        title: t('faqs.tab2.title0'),
        text: t('faqs.tab2.text0'),
      },
      {
        title: t('faqs.tab2.title1'),
        text: t('faqs.tab2.text1'),
      },
      {
        title: t('faqs.tab2.title1'),
        text: t('faqs.tab2.text1'),
      },
      {
        title: t('faqs.tab2.title2'),
        text: t('faqs.tab2.text2'),
      },
      {
        title: t('faqs.tab2.title3'),
        text: t('faqs.tab2.text3'),
      },
      {
        title: t('faqs.tab2.title4'),
        text: t('faqs.tab2.text4'),
      },
      {
        title: t('faqs.tab2.title5'),
        text: t('faqs.tab2.text5'),
      },
      {
        title: t('faqs.tab2.title6'),
        text: t('faqs.tab2.text6'),
      }
    ],    [
      {
        title: t('faqs.tab3.title0'),
        text: t('faqs.tab3.text0'),
      },
      {
        title: t('faqs.tab3.title1'),
        text: t('faqs.tab3.text1'),
      },
      {
        title: t('faqs.tab3.title1'),
        text: t('faqs.tab3.text1'),
      },
      {
        title: t('faqs.tab3.title2'),
        text: t('faqs.tab3.text2'),
      },
      {
        title: t('faqs.tab3.title3'),
        text: t('faqs.tab3.text3'),
      },
      {
        title: t('faqs.tab3.title4'),
        text: t('faqs.tab3.text4'),
      },
      {
        title: t('faqs.tab3.title5'),
        text: t('faqs.tab3.text5'),
      },
      {
        title: t('faqs.tab3.title6'),
        text: t('faqs.tab3.text6'),
      },
      {
        title: t('faqs.tab3.title7'),
        text: t('faqs.tab3.text7'),
      },
    ],    [
      {
        title: t('faqs.tab4.title0'),
        text: t('faqs.tab4.text0'),
      },
      {
        title: t('faqs.tab4.title1'),
        text: t('faqs.tab4.text1'),
      },
      {
        title: t('faqs.tab4.title1'),
        text: t('faqs.tab4.text1'),
      },
      {
        title: t('faqs.tab4.title2'),
        text: t('faqs.tab4.text2'),
      },
      {
        title: t('faqs.tab4.title3'),
        text: t('faqs.tab4.text3'),
      },
      {
        title: t('faqs.tab4.title4'),
        text: t('faqs.tab4.text4'),
      },
      {
        title: t('faqs.tab4.title5'),
        text: t('faqs.tab4.text5'),
      },
      {
        title: t('faqs.tab4.title6'),
        text: t('faqs.tab4.text6'),
      },
      {
        title: t('faqs.tab4.title7'),
        text: t('faqs.tab4.text7'),
      },
      {
        title: t('faqs.tab4.title8'),
        text: t('faqs.tab4.text8'),
      },
      {
        title: t('faqs.tab4.title9'),
        text: t('faqs.tab4.text9'),
      },
      {
        title: t('faqs.tab4.title10'),
        text: t('faqs.tab4.text10'),
      },
      {
        title: t('faqs.tab4.title11'),
        text: t('faqs.tab4.text11'),
      },
      {
        title: t('faqs.tab4.title12'),
        text: t('faqs.tab4.text12'),
      },
      {
        title: t('faqs.tab4.title13'),
        text: t('faqs.tab4.text13'),
      },
      {
        title: t('faqs.tab4.title14'),
        text: t('faqs.tab4.text14'),
      },
    ],    [
      {
        title: t('faqs.tab5.title0'),
        text: t('faqs.tab5.text0'),
      },
      {
        title: t('faqs.tab5.title1'),
        text: t('faqs.tab5.text1'),
      },
      {
        title: t('faqs.tab5.title1'),
        text: t('faqs.tab5.text1'),
      },
      {
        title: t('faqs.tab5.title2'),
        text: t('faqs.tab5.text2'),
      },
      {
        title: t('faqs.tab5.title3'),
        text: t('faqs.tab5.text3'),
      },
      {
        title: t('faqs.tab5.title4'),
        text: t('faqs.tab5.text4'),
      },
      {
        title: t('faqs.tab5.title5'),
        text: t('faqs.tab5.text5'),
      },
      {
        title: t('faqs.tab5.title6'),
        text: t('faqs.tab5.text6'),
      },
      {
        title: t('faqs.tab5.title7'),
        text: t('faqs.tab5.text7'),
      },
      {
        title: t('faqs.tab5.title8'),
        text: t('faqs.tab5.text8'),
      },
      {
        title: t('faqs.tab5.title9'),
        text: t('faqs.tab5.text9'),
      },
      {
        title: t('faqs.tab5.title10'),
        text: t('faqs.tab5.text10'),
      },
      {
        title: t('faqs.tab5.title11'),
        text: t('faqs.tab5.text11'),
      },
      {
        title: t('faqs.tab5.title12'),
        text: t('faqs.tab5.text12'),
      },
      {
        title: t('faqs.tab5.title13'),
        text: t('faqs.tab5.text13'),
      },
    ],
  ];

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.title} font-64-36`}><Trans>{t('brand')}</Trans></div>
        <div className={`${styles.title} font-36-24`}><Trans>{t('faqs.title')}</Trans></div>
        <div className={styles.tabsWrap}>
          <div className={styles.tabButtons}>
            {tabContent.map((tab, index) => (
              <Fade bottom delay={index * 100 + 1} key={index} className={styles.btnwrap}>
                <div className={`${styles.btnWrap} ${index === activeTab ? styles.tabActive : ''}`}>
                  <button
                    key={index}
                    className={index === activeTab ? styles.tabActive : ''}
                    onClick={() => handleTabClick(index)}
                  >
                    {tab}
                  </button>
                </div>
              </Fade>
            ))}
          </div>

          <div className={styles.tabsContent}>
            {list.map((item, index) => (
              <div className={`${styles.tabItem} ${index === activeTab ? styles.tabItemActive : ''}`} key={index}>
                <Accordion items={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;