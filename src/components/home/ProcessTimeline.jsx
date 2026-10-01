import { m, useReducedMotion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import styles from './ProcessTimeline.module.css';

const steps = [
  { num: '01', title: 'Consultation', desc: 'We assess your needs, inspect the site, and discuss project goals.' },
  { num: '02', title: 'Design & Quote', desc: 'Our engineers create a tailored plan and provide a transparent estimate.' },
  { num: '03', title: 'Installation', desc: 'Professional, safety-first execution by our certified technical team.' },
  { num: '04', title: 'Support', desc: 'Ongoing maintenance, monitoring, and 24/7 technical support.' }
];

export const ProcessTimeline = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading 
          eyebrow="Our Process"
          title="How We Work"
          description="A streamlined approach from initial concept to final handover and beyond."
        />

        <div className={styles.timeline}>
          {/* Animated line background */}
          {!prefersReducedMotion && (
            <m.div 
              className={styles.lineBg}
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          )}

          <div className={styles.steps}>
            {steps.map((step, i) => (
              <m.div 
                key={i} 
                className={styles.step}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div className={styles.marker}>{step.num}</div>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.desc}>{step.desc}</p>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
