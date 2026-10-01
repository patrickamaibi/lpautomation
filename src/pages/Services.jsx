import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/md';
import { MdArrowForward } from 'react-icons/md';
import { siteData } from '../data/site';
import { servicesData } from '../data/services';
import { faqsData } from '../data/faqs';
import { ServicesHero } from '../components/services/ServicesHero';
import { GearPhotoFrame } from '../components/ui/GearPhotoFrame';
import { SectionHeading } from '../components/ui/SectionHeading';
import { FAQAccordion } from '../components/ui/FAQAccordion';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { CTABanner } from '../components/ui/CTABanner';
import styles from './Services.module.css';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | {siteData.name}</title>
        <meta name="description" content="Explore our electrical, automation, solar, and smart home engineering services." />
      </Helmet>

      <ServicesHero />

      <section className={styles.introSection}>
        <div className={styles.container}>
          <SectionHeading 
            eyebrow="What We Do"
            title="Comprehensive Engineering Solutions"
            description="We deliver full-lifecycle engineering services, from initial design and load calculations to installation, commissioning, and long-term maintenance."
          />
        </div>
      </section>

      <div className={styles.servicesList}>
        {servicesData.map((service, index) => {
          const IconComponent = Icons[service.icon];
          const isEven = index % 2 !== 0;

          return (
            <section key={service.id} className={`${styles.serviceBlock} ${isEven ? styles.even : ''}`}>
              <div className={styles.container}>
                <div className={styles.grid}>
                  
                  <div className={styles.contentCol}>
                    <div className={styles.iconWrapper}>
                      {IconComponent && <IconComponent size={32} />}
                    </div>
                    <h2 className={styles.title}>{service.title}</h2>
                    <p className={styles.summary}>{service.summary}</p>
                    <p className={styles.overview}>{service.overview}</p>
                    
                    <ul className={styles.featuresList}>
                      {service.features.slice(0, 4).map((feature, i) => (
                        <li key={i}>
                          <Icons.MdCheck className={styles.checkIcon} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link to={`/services/${service.slug}`} className={styles.btn}>
                      View Full Details <MdArrowForward />
                    </Link>
                  </div>

                  <div className={styles.imageCol}>
                    <GearPhotoFrame
                      image={service.image}
                      title={service.title}
                      icon={IconComponent}
                      serviceId={service.id}
                      size="large"
                      linkTo={`/services/${service.slug}`}
                    />
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      <ProcessTimeline />

      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <SectionHeading 
            eyebrow="FAQs"
            title="Frequently Asked Questions"
          />
          <FAQAccordion faqs={faqsData.general} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
