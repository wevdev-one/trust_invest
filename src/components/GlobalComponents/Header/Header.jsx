import _ from 'lodash';
import React, {useState, useEffect} from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { useParams } from "react-router-dom";
import { headerRoutes } from "../../../router";
import Button from '../Button/Button';
import { useTranslation } from "react-i18next";
import Dropdown from 'react-dropdown';
import Cookies from "js-cookie";
import logo from '../../../assets/images/logo.svg';
// import lock from '../../../assets/images/lock.svg';
import styles from './Header.module.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {pathname} = useLocation();
  const { lang } = useParams();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 0
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const setLocale = (lang) => {
    i18n.changeLanguage(lang);
    navigate(`/${lang}/${_.last(pathname.split('/'))}`);
  };

  const { t, i18n } = useTranslation();

  const languages = [
      { value: 'en', label: 'EN' },
      { value: 'de', label: 'DE' },
      { value: 'pl', label: 'PL' },
      { value: 'ro', label: 'RO' },
      { value: 'ar', label: 'AR' },
      { value: 'ru', label: 'RU' },
  ]

  const storedLang = Cookies.get("i18next");

  const [currentLang, setCurrentLang] = useState(storedLang || 'en');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (storedLang && storedLang !== currentLang) {
        setCurrentLang(storedLang);
        i18n.changeLanguage(storedLang);
    }
    // eslint-disable-next-line
    document.body.setAttribute('dir', storedLang === 'ar' ? 'rtl' : 'ltr');
    document.body.setAttribute('class', `${storedLang}`);
  }, [storedLang]);  

  const handleChangeLang = (selectedLang) => {
      setCurrentLang(selectedLang.value);
      i18n.changeLanguage(selectedLang.value);
      Cookies.set("i18next", selectedLang.value);
      navigate(`/${selectedLang.value}/${_.last(pathname.split('/'))}`);
  };

  useEffect(() => {
    const langs = _.dropRight(i18n.options.supportedLngs);
    if (lang === undefined || !langs.includes(lang)) {
      setLocale("en");
    } else {
      setLocale(lang);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <header className={`header ${styles.header} ${isScrolled ? `${styles.scrolled}` : ''}`}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <Link to={`/${storedLang}/`}>
            <img loading="lazy" src={logo} alt="Logo" className={`${styles.headerLogo}`} />
          </Link>
          <nav className={styles.headerMenu}>
            <ul>
              {headerRoutes.map((route, index) => (
                <li key={index}>
                    <Link to={`/${storedLang}/${route.path}`} 
                    className={`${styles.navItem} ${route.path === _.last(pathname.split('/')) ? styles.linkActive : ''}`}
                    >
                      {t(route.text)}
                      {/* {route.path === 'education' &&
                        <img src={lock} alt=''/>
                      } */}
                    </Link>
                </li>
              ))}
            </ul>

            <div className={styles.flex}>
                <Dropdown
                  options={languages}
                  placeholder="EN"
                  onChange={handleChangeLang}
                  value={languages.find(lang => lang.value === currentLang)}
                />
                <div className={styles.mrl}><Button login header>{t('btn.start')}</Button></div>
            </div>
          </nav>
        </div>
        <div className={styles.mobileContent}>
          <a href={`/${storedLang}/`} className={styles.headerLink}>
            <img loading="lazy" src={logo} alt="Logo" className={styles.headerLogo} />
          </a>
          <Dropdown
            options={languages}
            placeholder="EN"
            onChange={handleChangeLang}
            value={languages.find(lang => lang.value === currentLang)}
          />
          <div className={`${menuOpen ? styles.burderOpen : ''} ${styles.burger}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;