import { Link } from 'react-router-dom';
import { m, useReducedMotion } from 'framer-motion';
import styles from './CTABanner.module.css';

export const CTABanner = ({ 
  title = "Ready to power your next project?", 
  description = "Get in touch today for a free consultation and customized engineering solutions.",
  primaryLabel = "Get a Quote",
  primaryLink = "/contact",
  secondaryLabel = "Call Us Now",
  secondaryLink = "tel:+2348000000000"
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={styles.section}>
      <m.div 
        className={styles.container}
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
        whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.actions}>
          <Link to={primaryLink} className={styles.primaryBtn}>{primaryLabel}</Link>
          <a href={secondaryLink} className={styles.secondaryBtn}>{secondaryLabel}</a>
        </div>
      </m.div>
    </section>
  );
};
