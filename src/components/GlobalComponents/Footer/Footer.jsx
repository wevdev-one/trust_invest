import { useTranslation, Trans } from "react-i18next";
import logo from '../../../assets/images/logo.svg';
import styles from './Footer.module.scss';

const Footer = () => {
  const { t } = useTranslation();
  const { hostname } = document.location;
  
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContent} container`}>
        <div className={styles.left}>
          <div>
            <div className={`${styles.navTitleBolder}`}>{t('footer.disclaimer.title0')}</div>
            <Trans><p className={styles.navTitle}>{t('footer.disclaimer.text0')}</p></Trans>
            <Trans><p className={styles.navTitle}>{t('footer.disclaimer.text1')}</p></Trans>
          </div>
          <div className={styles.padt}>
            <Trans><p className={styles.navTitle}>{t('footer.disclaimer.text2')}</p></Trans>
            <Trans><p className={styles.navTitle}>{t('footer.disclaimer.text3')}</p></Trans>
            <Trans><p className={styles.navTitle}>{t('footer.disclaimer.text4')}</p></Trans>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <a href="" className={`${styles.navTitle} ${styles.navTitleBolder}`}>{t('footer.docs.terms')}</a>
            <a href="" className={`${styles.navTitle} ${styles.navTitleBolder}`}>{t('footer.docs.policy')}</a>
            <a href="" className={`${styles.navTitle} ${styles.navTitleBolder}`}>{t('footer.docs.kyc')}</a>
            <a href="" className={`${styles.navTitle} ${styles.navTitleBolder}`}>{t('footer.docs.aml')}</a>
          </div>
          <div className={styles.footerNav}>
            <div className={`${styles.itemBlock} ${styles.contacts}`}>
              <div className={styles.navTitleBolder}>{t('footer.contacts')}</div>
              <a href="tel:+11111111" className={styles.navTitle}>+1111111</a>
            </div>
            <div className={`${styles.itemBlock} ${styles.contacts}`}>
              <div className={styles.navTitleBolder}>{t('footer.address')}</div>
              <div className={styles.navTitle}>
                address
              </div>
            </div>
            <div className={`${styles.itemBlock} ${styles.contacts}`}>
              <div className={styles.navTitleBolder}>{t('footer.email')}</div>
              <a href={`mailto:support@${hostname}`} className={styles.navTitle}>
                support@{hostname}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;