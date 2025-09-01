import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from './Button.module.scss';

const Button = ({ children, login, href, event, header, customLink, white, black }) => {
  const { t } = useTranslation();
  const { lang } = useParams();

  if (customLink) {
    return (
      <a href={customLink} className={`${styles.button}`} target="_blank" without rel="noreferrer">
        <span>{children}</span>
      </a>
    );
  }

  if (event) {
    return (
      <div
        onClick={event}
        className={`${styles.button} ${header ? styles.header : ''} ${white ? styles.white : ''} ${black ? styles.black : ''} no-select`}
      >
        {children}
      </div>
    );
  }

  return (
    <Link
      className={`${styles.button} ${header ? styles.header : ''} ${white ? styles.white : ''} ${black ? styles.black : ''} no-select`}
      to={!href
        ? `${process.env.REACT_APP_CABINET_URL}/${lang}/${login ? 'login' : 'register'}`
        : `/${lang}/${href}`
      }
    >
      {children
        ? children
        : t('btn.start')
      }
      {!header && <div className={styles.icon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
          <path d="M12.353 21H29.6471" stroke="#F8F963" stroke-width="1.10526" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21 12.353L29.6471 21.0001L21 29.6471" stroke="#F8F963" stroke-width="1.10526" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>}
    </Link>
  );
};

export default Button;