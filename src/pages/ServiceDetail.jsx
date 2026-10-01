import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import * as Icons from 'react-icons/md';
import { servicesData } from '../data/services';
import { faqsData } from '../data/faqs';
import { siteData } from '../data/site';
import { PageHeader } from '../components/ui/PageHeader';
import { FAQAccordion } from '../components/ui/FAQAccordion';
import { CTABanner } from '../components/ui/CTABanner';
import NotFound from './NotFound';
import styles from './ServiceDetail.module.css';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);

  if (!service) return <NotFound />;

  const serviceFaqs = faqsData[service.id] || [];

  return (
    <>
      <Helmet>
        <title>{service.title} | {siteData.name}</title>
        <meta name="description" content={service.summary} />
      </Helmet>

      <PageHeader 
        title={service.title} 
        breadcrumbText="Services" 
        breadcrumbLink="/services" 
      />

      <section className={styles.detailSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            
            <div className={styles.mainContent}>
              <div className={styles.heroImage}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className={styles.heroImg}
                />
              </div>
              
              <h2 className={styles.sectionTitle}>Overview</h2>
              <p className={styles.overview}>{service.overview}</p>

              <div className={styles.featuresBenefitsGrid}>
                <div className={styles.listBox}>
                  <h3 className={styles.listTitle}>What We Offer</h3>
                  <ul className={styles.list}>
                    {service.features.map((feature, i) => (
                      <li key={i}>
                        <Icons.MdCheckCircle className={styles.iconAmber} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.listBox}>
                  <h3 className={styles.listTitle}>Key Benefits</h3>
                  <ul className={styles.list}>
                    {service.benefits.map((benefit, i) => (
                      <li key={i}>
                        <Icons.MdStars className={styles.iconNavy} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <h2 className={styles.sectionTitle}>Our Process</h2>
              <div className={styles.processSteps}>
                {service.process.map((step, i) => (
                  <div key={i} className={styles.processStep}>
                    <div className={styles.stepNum}>0{i + 1}</div>
                    <div>
                      <h4 className={styles.stepTitle}>{step.title}</h4>
                      <p className={styles.stepDesc}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {serviceFaqs.length > 0 && (
                <>
                  <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                  <div className={styles.faqWrapper}>
                    <FAQAccordion faqs={serviceFaqs} />
                  </div>
                </>
              )}
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.contactWidget}>
                <h3>Need {service.title}?</h3>
                <p>Contact our engineering team today for a free consultation and customized quote.</p>
                <Link to="/contact" className={styles.widgetBtn}>Get a Free Quote</Link>
                <a href={`tel:${siteData.phone.replace(/[^0-9+]/g, '')}`} className={styles.widgetPhone}>
                  <Icons.MdPhone /> {siteData.phone}
                </a>
              </div>

              <div className={styles.navWidget}>
                <h3>Other Services</h3>
                <ul className={styles.serviceNav}>
                  {servicesData.filter(s => s.id !== service.id).map(s => (
                    <li key={s.id}>
                      <Link to={`/services/${s.slug}`} className={styles.navLink}>
                        <Icons.MdArrowRight /> {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
