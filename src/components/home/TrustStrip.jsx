import { m, useReducedMotion } from "framer-motion";
import { ClipboardCheck, Headphones, ShieldCheck, Wrench } from "lucide-react";
import { content } from "../../data/content";
import styles from "./TrustStrip.module.css";

const ICONS = {
  shield: ShieldCheck,
  survey: ClipboardCheck,
  support: Headphones,
  quality: Wrench,
};

/**
 * Signature frosted-glass prism panel positioned immediately after the hero.
 * Features an icy glass refraction gradient, rainbow rim mask, and light sweep reflection.
 */
export const TrustStrip = ({ items = content.trustStrip }) => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.2 : 0.7,
        ease: "easeOut",
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.2 : 0.5 },
    },
  };

  return (
    <section className={styles.trustSection} aria-label="Key Commitments">
      <div className={styles.container}>
        <m.ul
          className={`${styles.prismStrip} ${styles.prismShown}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          role="list"
        >
          {items.map(({ icon, title, text }) => {
            const Icon = ICONS[icon] ?? ShieldCheck;
            return (
              <m.li key={title} className={styles.prismItem} variants={itemVariants}>
                <span className={styles.prismIcon} aria-hidden="true">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <div className={styles.prismBody}>
                  <h3 className={styles.prismTitle}>{title}</h3>
                  <p className={styles.prismText}>{text}</p>
                </div>
              </m.li>
            );
          })}
        </m.ul>
      </div>
    </section>
  );
};