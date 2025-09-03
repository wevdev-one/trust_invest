import { Trans, useTranslation } from "react-i18next";
import styles from "./MustDo.module.scss";

import image from '../../../assets/images/beginnerspage/image3.webp';

const MustDo = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={styles.item}>
          <div className={`${styles.title} font-32-24`}><Trans>{t('begin.mustdo.title')}</Trans></div>
          <div className={`${styles.text} font-14-12`}><Trans>{t('begin.mustdo.text')}</Trans></div>
        </div>
        <img src={image} alt="" className={`${styles.image}`} />
      </div>
    </div>
  );
};

export default MustDo;