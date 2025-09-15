import { Trans, useTranslation } from "react-i18next";
import styles from "./Broker.module.scss";

import image from '../../../assets/images/whypage/image1.webp';
import border from '../../../assets/images/whypage/border.svg';

const Broker = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={styles.item}>
          <div className={`${styles.title} font-64-36`}>
            <Trans>{t('why.broker.title')}</Trans>
            <img src={border} alt="" loading="lazy" />
          </div>
          <div className={`${styles.text} font-14-12`}><Trans>{t('why.broker.text')}</Trans></div>
        </div>
        <img src={image} alt="" className={`${styles.image}`} />
      </div>
    </div>
  );
};

export default Broker;