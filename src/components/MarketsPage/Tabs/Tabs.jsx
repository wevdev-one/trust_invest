import React, { useState } from 'react';
import { Trans, useTranslation } from "react-i18next";
import styles from './Tabs.module.scss';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useTranslation();

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const tabContent = [t('markets.tabs0'), t('markets.tabs1'), t('markets.tabs2'), t('markets.tabs3'), t('markets.tabs4')];

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={styles.tabsWrap}>
          <div className={styles.tabButtons}>
              {tabContent.map((tab, index) => (
                <button
                  key={index}
                  className={`${index === activeTab ? styles.tabActive : ''} font-16-14`}
                  onClick={() => handleTabClick(index)}
                >
                  <Trans>{tab}</Trans>
                </button>
              ))}
            </div>

            <div className={styles.tabsContent}>
              <div className={`${styles.tabItem} ${0 === activeTab ? styles.tabItemActive : ''}`}>
                <div className={styles.tabInner}>
                  <div>
                    <div className={`${styles.title} font-40-32`}>{t('markets.forex')}</div>
                    <div className={`${styles.text} font-14-12`}>
                      <Trans>{t('markets.forex.text0')}</Trans>
                    </div>
                    <div className={`${styles.title} font-20-16`}>{t('markets.forex.title0')}</div>
                    <div className={`${styles.text} font-14-12`}>
                      <Trans>{t('markets.forex.text1')}</Trans>
                    </div>
                    <div className={`${styles.title} font-20-16`}>{t('markets.forex.title1')}</div>
                    <ul className={`${styles.list} font-14-12`}>
                      <li><Trans>{t('markets.forex.list0')}</Trans></li>
                      <li><Trans>{t('markets.forex.list1')}</Trans></li>
                      <li><Trans>{t('markets.forex.list2')}</Trans></li>
                      <li><Trans>{t('markets.forex.list3')}</Trans></li>
                    </ul>
                    <div className={`${styles.title} font-20-16`}>{t('markets.forex.title2')}</div>
                    <div className={`${styles.text} font-14-12`}>
                      <Trans>{t('markets.forex.text2')}</Trans>
                    </div>
                  </div>
                  <div>
                    <div className={`${styles.title} font-20-16`}>{t('markets.forex.title3')}</div>
                    <div className={`${styles.text} font-14-12`}>
                      <Trans>{t('markets.forex.text3')}</Trans>
                    </div>
                    <div className={`${styles.title} font-20-16`}>{t('markets.forex.title4')}</div>
                    <div className={`${styles.text} font-14-12`}>
                      <Trans>{t('markets.forex.text4')}</Trans>
                    </div>
                    <div className={`${styles.title} font-20-16`}>{t('markets.forex.title5')}</div>
                    <div className={`${styles.index} font-14-12`}>
                      <div className={styles.indexItem}>
                        <div className={`${styles.indexNumber} font-16-14`}>1</div>
                        <span><Trans>{t('markets.forex.index0')}</Trans></span>
                      </div>
                      <div className={styles.indexItem}>
                        <div className={`${styles.indexNumber} font-16-14`}>2</div>
                        <span><Trans>{t('markets.forex.index1')}</Trans></span>
                      </div>
                      <div className={styles.indexItem}>
                        <div className={`${styles.indexNumber} font-16-14`}>3</div>
                        <span><Trans>{t('markets.forex.index2')}</Trans></span>
                      </div>
                      <div className={styles.indexItem}>
                        <div className={`${styles.indexNumber} font-16-14`}>4</div>
                        <span><Trans>{t('markets.forex.index3')}</Trans></span>
                      </div>
                    </div>
                    <div className={`${styles.text} font-14-12`}>
                      <Trans>{t('markets.forex.text5')}</Trans>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.tabItem} ${1 === activeTab ? styles.tabItemActive : ''}`}>
                <div className={styles.tabInner}>
                  <div>
                    <div className={`${styles.title} font-40-32`}>{t('markets.indices')}</div>
                    <div className={`${styles.text} font-14-12`}>
                      <Trans>{t('markets.indices.text0')}</Trans>
                    </div>
                    <div className={`${styles.title} font-20-16`}>{t('markets.indices.title0')}</div>
                    <div className={`${styles.text} font-14-12`}>
                      <Trans>{t('markets.indices.text1')}</Trans>
                    </div>
                    <div className={`${styles.title} font-20-16`}>{t('markets.indices.title1')}</div>
                    <ul className={`${styles.list} font-14-12`}>
                      <li><Trans>{t('markets.indices.list0')}</Trans></li>
                      <li><Trans>{t('markets.indices.list1')}</Trans></li>
                      <li><Trans>{t('markets.indices.list2')}</Trans></li>
                      <li><Trans>{t('markets.indices.list3')}</Trans></li>
                    </ul>
                    <div className={`${styles.title} font-20-16`}>{t('markets.indices.title2')}</div>
                    <div className={`${styles.text} font-14-12`}>
                      <Trans>{t('markets.indices.text2')}</Trans>
                    </div>
                  </div>
                  <div>
                    <div className={`${styles.text} font-14-12`}>
                      <Trans>{t('markets.indices.text21')}</Trans>
                    </div>
                    <div className={`${styles.title} font-20-16`}>{t('markets.indices.title3')}</div>
                    <div className={`${styles.text} font-14-12`}>
                      <Trans>{t('markets.indices.text3')}</Trans>
                    </div>
                    <div className={`${styles.title} font-20-16`}>{t('markets.indices.title4')}</div>
                    <div className={`${styles.text} font-14-12`}>
                      <Trans>{t('markets.indices.text4')}</Trans>
                    </div>
                    <div className={`${styles.title} font-20-16`}>{t('markets.indices.title5')}</div>
                    <div className={`${styles.index} font-14-12`}>
                      <div className={styles.indexItem}>
                        <div className={`${styles.indexNumber} font-16-14`}>1</div>
                        <span><Trans>{t('markets.indices.index0')}</Trans></span>
                      </div>
                      <div className={styles.indexItem}>
                        <div className={`${styles.indexNumber} font-16-14`}>2</div>
                        <span><Trans>{t('markets.indices.index1')}</Trans></span>
                      </div>
                      <div className={styles.indexItem}>
                        <div className={`${styles.indexNumber} font-16-14`}>3</div>
                        <span><Trans>{t('markets.indices.index2')}</Trans></span>
                      </div>
                      <div className={styles.indexItem}>
                        <div className={`${styles.indexNumber} font-16-14`}>4</div>
                        <span><Trans>{t('markets.indices.index3')}</Trans></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.tabItem} ${2 === activeTab ? styles.tabItemActive : ''}`}>
                <div className={styles.tabInner}>
                  <div>
                    <div className={`${styles.title} font-40-32`}>{t('markets.shares')}</div>
                    <div className={`${styles.text} font-14-12`}>
                      <Trans>{t('markets.shares.text0')}</Trans>
                    </div>
                    <div className={`${styles.title} font-20-16`}>{t('markets.shares.title0')}</div>
                    <div className={`${styles.text} font-14-12`}>
                      <Trans>{t('markets.shares.text1')}</Trans>
                    </div>
                    <div className={`${styles.title} font-20-16`}>{t('markets.shares.title1')}</div>
                    <ul className={`${styles.list} font-14-12`}>
                      <li><Trans>{t('markets.shares.list0')}</Trans></li>
                      <li><Trans>{t('markets.shares.list1')}</Trans></li>
                      <li><Trans>{t('markets.shares.list2')}</Trans></li>
                      <li><Trans>{t('markets.shares.list3')}</Trans></li>
                    </ul>
                  </div>
                  <div>
                    <div className={`${styles.title} font-20-16`}>{t('markets.shares.title2')}</div>
                    <div className={`${styles.title} font-16-14`}>{t('markets.shares.title21')}</div>
                    <div className={`${styles.text} font-14-12`}>
                      <Trans>{t('markets.shares.text2')}</Trans>
                    </div>
                    <div className={`${styles.text} font-14-12`}>
                      <Trans>{t('markets.shares.text21')}</Trans>
                    </div>
                    <div className={`${styles.title} font-16-14`}>{t('markets.shares.title3')}</div>
                    <div className={`${styles.text} font-14-12`}>
                      <Trans>{t('markets.shares.text3')}</Trans>
                    </div>
                    <div className={`${styles.title} font-20-16`}>{t('markets.shares.title4')}</div>
                    <div className={`${styles.index} font-14-12`}>
                      <div className={styles.indexItem}>
                        <div className={`${styles.indexNumber} font-16-14`}>1</div>
                        <span><Trans>{t('markets.shares.index0')}</Trans></span>
                      </div>
                      <div className={styles.indexItem}>
                        <div className={`${styles.indexNumber} font-16-14`}>2</div>
                        <span><Trans>{t('markets.shares.index1')}</Trans></span>
                      </div>
                      <div className={styles.indexItem}>
                        <div className={`${styles.indexNumber} font-16-14`}>3</div>
                        <span><Trans>{t('markets.shares.index2')}</Trans></span>
                      </div>
                      <div className={styles.indexItem}>
                        <div className={`${styles.indexNumber} font-16-14`}>4</div>
                        <span><Trans>{t('markets.shares.index3')}</Trans></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.tabItem} ${3 === activeTab ? styles.tabItemActive : ''}`}>
                <div className={styles.tabInner}>
                  <div>
                    <div className={`${styles.title} font-40-32`}>{t('markets.сrypto')}</div>
                    <div className={`${styles.text} font-14-12`}>
                      <Trans>{t('markets.сrypto.text0')}</Trans>
                    </div>
                    <div className={`${styles.title} font-20-16`}>{t('markets.сrypto.title0')}</div>
                    <div className={`${styles.text} font-14-12`}>
                      <Trans>{t('markets.сrypto.text1')}</Trans>
                    </div>
                    <div className={`${styles.title} font-20-16`}>{t('markets.сrypto.title1')}</div>
                    <ul className={`${styles.list} font-14-12`}>
                      <li><Trans>{t('markets.сrypto.list0')}</Trans></li>
                      <li><Trans>{t('markets.сrypto.list1')}</Trans></li>
                    </ul>
                    <div className={`${styles.title} font-20-16`}>{t('markets.сrypto.title2')}</div>
                    <ul className={`${styles.list} font-14-12`}>
                      <li><Trans>{t('markets.сrypto.list2')}</Trans></li>
                      <li><Trans>{t('markets.сrypto.list3')}</Trans></li>
                      <li><Trans>{t('markets.сrypto.list4')}</Trans></li>
                      <li><Trans>{t('markets.сrypto.list5')}</Trans></li>
                    </ul>
                  </div>
                  <div>
                    <div className={`${styles.title} font-20-16`}>{t('markets.сrypto.title3')}</div>
                    <div className={`${styles.text} font-14-12`}>
                      <Trans>{t('markets.сrypto.text3')}</Trans>
                    </div>
                    <div className={`${styles.title} font-20-16`}>{t('markets.сrypto.title4')}</div>
                    <div className={`${styles.text} font-14-12`}>
                      <Trans>{t('markets.сrypto.text4')}</Trans>
                    </div>
                    <div className={`${styles.title} font-20-16`}>{t('markets.сrypto.title5')}</div>
                    <div className={`${styles.index} font-14-12`}>
                      <div className={styles.indexItem}>
                        <div className={`${styles.indexNumber} font-16-14`}>1</div>
                        <span><Trans>{t('markets.сrypto.index0')}</Trans></span>
                      </div>
                      <div className={styles.indexItem}>
                        <div className={`${styles.indexNumber} font-16-14`}>2</div>
                        <span><Trans>{t('markets.сrypto.index1')}</Trans></span>
                      </div>
                      <div className={styles.indexItem}>
                        <div className={`${styles.indexNumber} font-16-14`}>3</div>
                        <span><Trans>{t('markets.сrypto.index2')}</Trans></span>
                      </div>
                      <div className={styles.indexItem}>
                        <div className={`${styles.indexNumber} font-16-14`}>4</div>
                        <span><Trans>{t('markets.сrypto.index3')}</Trans></span>
                      </div>
                    </div>
                    <div className={`${styles.text} font-14-12`}>
                      <Trans>{t('markets.сrypto.text5')}</Trans>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.tabItem} ${4 === activeTab ? styles.tabItemActive : ''}`}>
                <div className={styles.tabInner}>
                  <div>
                    <div className={`${styles.title} font-40-32`}>{t('markets.com')}</div>
                    <div className={`${styles.text} font-14-12`}>
                      <Trans>{t('markets.com.text0')}</Trans>
                    </div>
                    <div className={`${styles.title} font-20-16`}>{t('markets.com.title0')}</div>
                    <div className={`${styles.text} font-14-12`}>
                      <Trans>{t('markets.com.text1')}</Trans>
                    </div>
                    <div className={`${styles.title} font-20-16`}>{t('markets.com.title1')}</div>
                    <ul className={`${styles.list} font-14-12`}>
                      <li><Trans>{t('markets.com.list0')}</Trans></li>
                      <li><Trans>{t('markets.com.list1')}</Trans></li>
                    </ul>
                    <div className={`${styles.title} font-20-16`}>{t('markets.com.title2')}</div>
                    <ul className={`${styles.list} font-14-12`}>
                      <li><Trans>{t('markets.com.list2')}</Trans></li>
                      <li><Trans>{t('markets.com.list3')}</Trans></li>
                      <li><Trans>{t('markets.com.list4')}</Trans></li>
                      <li><Trans>{t('markets.com.list5')}</Trans></li>
                    </ul>
                  </div>
                  <div>
                    <div className={`${styles.title} font-20-16`}>{t('markets.com.title3')}</div>
                    <div className={`${styles.text} font-14-12`}>
                      <Trans>{t('markets.com.text3')}</Trans>
                    </div>
                    <div className={`${styles.title} font-20-16`}>{t('markets.com.title4')}</div>
                    <div className={`${styles.text} font-14-12`}>
                      <Trans>{t('markets.com.text4')}</Trans>
                    </div>
                    <div className={`${styles.title} font-20-16`}>{t('markets.com.title5')}</div>
                    <div className={`${styles.index} font-14-12`}>
                      <div className={styles.indexItem}>
                        <div className={`${styles.indexNumber} font-16-14`}>1</div>
                        <span><Trans>{t('markets.com.index0')}</Trans></span>
                      </div>
                      <div className={styles.indexItem}>
                        <div className={`${styles.indexNumber} font-16-14`}>2</div>
                        <span><Trans>{t('markets.com.index1')}</Trans></span>
                      </div>
                      <div className={styles.indexItem}>
                        <div className={`${styles.indexNumber} font-16-14`}>3</div>
                        <span><Trans>{t('markets.com.index2')}</Trans></span>
                      </div>
                      <div className={styles.indexItem}>
                        <div className={`${styles.indexNumber} font-16-14`}>4</div>
                        <span><Trans>{t('markets.com.index3')}</Trans></span>
                      </div>
                    </div>
                    <div className={`${styles.text} font-14-12`}>
                      <Trans>{t('markets.com.text5')}</Trans>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;