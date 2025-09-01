import { useTranslation, Trans } from "react-i18next";
// import logo from '../../../assets/images/logo.svg';
import Marquee from 'react-fast-marquee';
import icontel from '../../../assets/images/icon-tel.svg';
import iconmail from '../../../assets/images/icon-email.svg';
import styles from './Footer.module.scss';

import egroup from '../../../assets/images/pays/egroup.svg';
import maestro from '../../../assets/images/pays/maestro.svg';
import mc from '../../../assets/images/pays/mc.svg';
import net from '../../../assets/images/pays/net.svg';
import scrill from '../../../assets/images/pays/scrill.svg';
import stick from '../../../assets/images/pays/stick.svg';
import swift from '../../../assets/images/pays/swift.svg';
import visa from '../../../assets/images/pays/visa.svg';
import webm from '../../../assets/images/pays/webm.svg';
import wire from '../../../assets/images/pays/wire.svg';
import wise from '../../../assets/images/pays/wise.svg';

const Footer = () => {
  const { t } = useTranslation();
  const { hostname } = document.location;
  const images = [egroup, maestro,mc,net,scrill,stick,swift,visa,webm,wire,wise]
  
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContent} container`}>
        <div className={styles.top}>
          <div className={`${styles.title} font-32-20`}>{t('footer.title')}</div>
          <Marquee autoFill className={`${styles.marq}`}>
            {images.map((item, index) => (
              <img src={item} alt="" key={`pay-${index}`} />
            ))}
          </Marquee>
        </div>
        <div className={styles.bot}>
          <div className={`${styles.navTitleBolder}`}>{t('footer.disclaimer.title0')}</div>
          <div className={styles.grid}>
            <div className={styles.botLeft}>
              <div>
                <Trans><p className={styles.navTitle}>{t('footer.disclaimer.text0')}</p></Trans>
                <Trans><p className={styles.navTitle}>{t('footer.disclaimer.text1')}</p></Trans>
              </div>
              <div className={styles.padt}>
                <Trans><p className={styles.navTitle}>{t('footer.disclaimer.text2')}</p></Trans>
                <Trans><p className={styles.navTitle}>{t('footer.disclaimer.text3')}</p></Trans>
                <Trans><p className={styles.navTitle}>{t('footer.disclaimer.text4')}</p></Trans>
              </div>
            </div>
            <div className={styles.botRight}>
              <div className={styles.docsgrid}>
                <a href="" className={`${styles.navTitle}`}>{t('footer.docs.terms')}</a>
                <a href="" className={`${styles.navTitle}`}>{t('footer.docs.policy')}</a>
                <a href="" className={`${styles.navTitle}`}>{t('footer.docs.kyc')}</a>
                <a href="" className={`${styles.navTitle}`}>{t('footer.docs.aml')}</a>
              </div>
              <div className={styles.footerNav}>
                {/* <div className={`${styles.itemBlock} ${styles.contacts}`}> */}
                  {/* <div className={styles.navTitleBolder}>{t('footer.contacts')}</div> */}
                  {/* <img src={icontel} alt="" className={styles.contactIcon} loading="lazy" />
                  <a href="tel:+11111111" className={styles.navTitle}>+1111111</a>
                </div> */}
                <div className={`${styles.itemBlock} ${styles.contacts}`}>
                  {/* <div className={styles.navTitleBolder}>{t('footer.address')}</div> */}
                  <img src={icontel} alt="" className={styles.contactIcon} loading="lazy" />
                  <div className={styles.navTitle}>
                    address
                  </div>
                </div>
                <div className={`${styles.itemBlock} ${styles.contacts}`}>
                  {/* <div className={styles.navTitleBolder}>{t('footer.email')}</div> */}
                  <img src={iconmail} alt="" className={styles.contactIcon} />
                  <a href={`mailto:support@${hostname}`} className={styles.navTitle}>
                    support@{hostname}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;