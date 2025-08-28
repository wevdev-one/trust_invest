import { useState } from 'react';
import AccordionItem from './AccordionItem';
import styles from './Accordion.module.scss';

const Accordion = ({ items, indexes }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={`${styles.accordion} ${indexes ? styles.indexes : ''}`}
    >
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          type={item.type}
          subtitle={item.account}
          content={item.text}
          withIndex={indexes}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;