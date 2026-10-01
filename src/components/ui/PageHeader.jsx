import { Link } from 'react-router-dom';
import { m, useReducedMotion } from 'framer-motion';
import styles from './PageHeader.module.css';

export const PageHeader = ({ title, breadcrumbText, breadcrumbLink = "/" }) => {
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className={styles.pageHeader}>
      <div className={styles.container}>
        <m.div
          variants={prefersReducedMotion ? { visible: { opacity: 1 } } : variants}
          initial="hidden"
          animate="visible"
        >
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.breadcrumb}>
            <Link to={breadcrumbLink} className={styles.link}>{breadcrumbText}</Link>
            <span className={styles.separator}>/</span>
            <span className={styles.current}>{title}</span>
          </div>
        </m.div>
      </div>
    </div>
  );
};
