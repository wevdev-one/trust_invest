import React, { useRef, useEffect, useState } from "react";
import { Trans } from "react-i18next";
import icon from '../../../assets/images/icon-arr.svg';
import iconArr from '../../../assets/images/acc-arrow.svg';

import styles from './Accordion.module.scss';

const AccordionItem = ({ title, index, content, isOpen, onClick, withIndex }) => {
  const contentHeight = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentHeight.current) {
      setHeight(isOpen ? contentHeight.current.scrollHeight : 0);
    }
  }, [isOpen]);
  const formatIndex = (i) => (i + 1 < 10 ? `0${i + 1}` : i + 1);

  return (
    <div className={`${styles.item} ${isOpen ? `${styles.itemActive}` : ""}`} key={index}>
      <button
        className={styles.titleWrap}
        onClick={onClick}
      > 
        {withIndex && <div className={`${styles.index} font-32-28`}>{formatIndex(index)}</div>}
        <p className={`${styles.title} font-16-14`}>{title}</p>
        <div className={styles.icon}>
          <img loading="lazy" src={withIndex ? iconArr : icon} alt="Icon" />
        </div>
      </button>

      <div
        ref={contentHeight}
        className={styles.content}
        style={
          isOpen
            ? { height: height }
            : { height: "0px" }
        }
      >
        <div className='font-14-12'>
          <Trans>{content}</Trans>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;