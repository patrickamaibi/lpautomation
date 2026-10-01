import { Link } from 'react-router-dom';
import { m, useReducedMotion } from 'framer-motion';
import { MdArrowForward } from 'react-icons/md';
import * as Icons from 'react-icons/md';
import { servicesData } from '../../data/services';
import { SectionHeading } from '../ui/SectionHeading';
import { GearPhotoFrame } from './GearPhotoFrame';
import styles from './ServicesOverview.module.css';

export const ServicesOverview = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35, rotateX: 8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading 
          eyebrow="Our Expertise"
          title="Engineering Solutions for Every Need"
          description="We deliver end-to-end electrical and automation services for residential, commercial and industrial sectors."
        />

        <m.div 
          className={styles.grid}
          variants={prefersReducedMotion ? { visible: { opacity: 1 } } : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {servicesData.map(service => {
            const IconComponent = Icons[service.icon];
            
            return (
              <m.div key={service.id} className={styles.card} variants={prefersReducedMotion ? {} : cardVariants}>
                <GearPhotoFrame
                  image={service.image}
                  title={service.title}
                  icon={IconComponent}
                  serviceId={service.id}
                />
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.summary}>{service.summary}</p>
                <Link to={`/services/${service.slug}`} className={styles.link}>
                  Explore Service <MdArrowForward />
                </Link>
              </m.div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
};
