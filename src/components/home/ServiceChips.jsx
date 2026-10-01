import { m } from "framer-motion";
import styles from "./Hero.module.css";
import { Zap, Sun, ShieldCheck, Home } from "lucide-react";
import { useReducedMotion } from "framer-motion";

const icons = {
  "Automation": ShieldCheck,
  "Electrical Wiring": Zap,
  "Solar": Sun,
  "Smart Homes": Home
};

export const ServiceChips = ({ services, delay = 0 }) => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay
      }
    }
  };

  const chipVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <m.div 
      className={styles.serviceChips}
      variants={prefersReducedMotion ? { visible: { opacity: 1 } } : containerVariants}
      initial="hidden"
      animate="visible"
    >
      {services.map((service, i) => {
        const Icon = icons[service] || Zap;
        return (
          <m.div 
            key={i} 
            className={styles.chip}
            variants={prefersReducedMotion ? { visible: { opacity: 1 } } : chipVariants}
          >
            <Icon size={14} className={styles.chipIcon} />
            <span>{service}</span>
          </m.div>
        );
      })}
    </m.div>
  );
};
