import { useState } from 'react';
import { m, AnimatePresence, useReducedMotion } from 'framer-motion';
import { MdAdd, MdRemove } from 'react-icons/md';
import styles from './FAQAccordion.module.css';

export const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className={styles.accordion}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        
        return (
          <div key={index} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
            <button 
              className={styles.header} 
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span className={styles.question}>{faq.question}</span>
              <span className={styles.icon}>
                {isOpen ? <MdRemove /> : <MdAdd />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <m.div
                  initial={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={prefersReducedMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className={styles.content}>
                    <p>{faq.answer}</p>
                  </div>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
