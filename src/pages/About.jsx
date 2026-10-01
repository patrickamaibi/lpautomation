import { Helmet } from 'react-helmet-async';
import { m, useReducedMotion } from 'framer-motion';
import { siteData } from '../data/site';
import { AboutHero } from '../components/about/AboutHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CTABanner } from '../components/ui/CTABanner';
import styles from './About.module.css';

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  const values = [
    { title: "Safety First", desc: "Uncompromising commitment to global safety standards in every installation." },
    { title: "Engineering Excellence", desc: "Precision and deep technical knowledge form the foundation of our work." },
    { title: "Integrity", desc: "Transparent pricing, honest advice, and delivering on our promises." },
    { title: "Innovation", desc: "Continuously adopting the latest technologies in solar and automation." }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | {siteData.name}</title>
        <meta name="description" content={`Learn about ${siteData.name}, our mission, values, and engineering expertise.`} />
      </Helmet>

      <AboutHero />

      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.imageCol}>
              <img 
                src="/images/about/team.jpg" 
                alt="LP Power & Automation engineering team reviewing blueprints on site"
                className={styles.storyImage}
                loading="lazy"
              />
            </div>
            <div className={styles.contentCol}>
              <SectionHeading 
                eyebrow="Our Story"
                title="Powering the Future with Precision"
                align="left"
              />
              <p className={styles.text}>
                Founded on the principles of engineering excellence and unwavering safety, {siteData.name} has grown into a trusted partner for residential, commercial, and industrial clients across Nigeria.
              </p>
              <p className={styles.text}>
                We believe that reliable power and intelligent automation are the driving forces behind a modern, productive society. Whether we are wiring a new commercial high-rise, designing a complex industrial control panel, or transitioning a home to off-grid solar, our approach remains the same: do it right, do it safely, and build it to last.
              </p>
              
              <div className={styles.missionBox}>
                <h3 className={styles.missionTitle}>Our Mission</h3>
                <p>To provide robust, safe, and innovative electrical and automation solutions that empower businesses and individuals to thrive.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <SectionHeading 
            eyebrow="Core Values"
            title="What Drives Us"
            description="Our company culture and engineering methodology are built on four pillars."
          />
          
          <div className={styles.valuesGrid}>
            {values.map((val, idx) => (
              <m.div 
                key={idx} 
                className={styles.valueCard}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className={styles.valNum}>0{idx + 1}</div>
                <h3 className={styles.valTitle}>{val.title}</h3>
                <p className={styles.valDesc}>{val.desc}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner 
        title="Looking for a reliable engineering partner?"
        description="Our team is ready to discuss your next project."
      />
    </>
  );
}
