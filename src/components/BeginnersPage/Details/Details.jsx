import { Trans, useTranslation } from "react-i18next";
import styles from "./Details.module.scss";
import Accordion from '../../GlobalComponents/Accordion/Accordion';

const Details = () => {
  const { t } = useTranslation();
  const items = [
    {
      title: t('begin.details.list1.title'),
      text: t('begin.details.list1.text'),
    },
    {
      title: t('begin.details.list2.title'),
      text: t('begin.details.list2.text'),
    },
    {
      title: t('begin.details.list3.title'),
      text: t('begin.details.list3.text'),
    },
    {
      title: t('begin.details.list4.title'),
      text: t('begin.details.list4.text'),
    },
    {
      title: t('begin.details.list5.title'),
      text: t('begin.details.list5.text'),
    },
    {
      title: t('begin.details.list6.title'),
      text: t('begin.details.list6.text'),
    },
  ];

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={styles.item}>
          <div className={`${styles.title} font-32-24`}><Trans>{t('begin.details.title')}</Trans></div>
          <div className={`${styles.text} font-14-12`}><Trans>{t('begin.details.text0')}</Trans></div>
          <div className={`${styles.text} font-14-12`}><Trans>{t('begin.details.text1')}</Trans></div>
        </div>
        <Accordion items={items} />
      </div>
    </div>
  );
};

export default Details;