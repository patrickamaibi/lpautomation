import { m, useReducedMotion } from 'framer-motion';
import { MdCheckCircleOutline } from 'react-icons/md';
import { SectionHeading } from '../ui/SectionHeading';
import styles from './WhyChooseUs.module.css';

const reasons = [
  "Licensed & Certified Engineers",
  "Safety-First Workmanship",
  "High-Quality Materials",
  "Transparent Pricing",
  "On-Time Project Delivery",
  "Reliable After-Sales Support"
];

export const WhyChooseUs = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageCol}>
            <img 
              src="/images/about/why-choose-us.jpg" 
              alt="Engineers testing electrical connections on a commercial project"
              className={styles.whyImage}
              loading="lazy"
            />
          </div>
          
          <div className={styles.contentCol}>
            <SectionHeading 
              eyebrow="Why Choose Us"
              title="Committed to Excellence and Safety"
              description="We don't just build systems; we build trust. Our engineering approach is rooted in safety, precision, and long-term reliability."
              align="left"
            />

            <m.div 
              className={styles.reasonsList}
              variants={prefersReducedMotion ? { visible: { opacity: 1 } } : containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {reasons.map((reason, i) => (
                <m.div key={i} className={styles.reasonItem} variants={prefersReducedMotion ? {} : itemVariants}>
                  <MdCheckCircleOutline className={styles.icon} size={24} />
                  <span>{reason}</span>
                </m.div>
              ))}
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
};
