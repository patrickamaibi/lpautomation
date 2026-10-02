import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import * as Icons from 'react-icons/md';
import {
  MdLocationOn,
  MdCalendarToday,
  MdBusiness,
  MdCheck,
  MdArrowForward,
  MdArrowBack
} from 'react-icons/md';
import { ChevronRight } from 'lucide-react';
import { siteData } from '../data/site';
import { projectsData } from '../data/projects';
import { GearPhotoFrame } from '../components/ui/GearPhotoFrame';
import { CTABanner } from '../components/ui/CTABanner';
import styles from './ProjectDetail.module.css';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h1>Project Not Found</h1>
        <p>The requested engineering case study could not be located.</p>
        <Link to="/projects" className={styles.backBtn}>
          <MdArrowBack /> Back to All Projects
        </Link>
      </div>
    );
  }

  const IconComponent = Icons[project.icon];

  return (
    <>
      <Helmet>
        <title>{project.title} | {siteData.name}</title>
        <meta name="description" content={project.summary} />
      </Helmet>

      {/* Case Study Header */}
      <section className={styles.hero} aria-labelledby="project-title">
        <div className={styles.container}>
          {/* Breadcrumb Navigation */}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/" className={styles.breadcrumbLink}>Home</Link>
            <ChevronRight size={14} className={styles.breadcrumbSeparator} />
            <Link to="/projects" className={styles.breadcrumbLink}>Projects</Link>
            <ChevronRight size={14} className={styles.breadcrumbSeparator} />
            <span className={styles.breadcrumbCurrent}>{project.title}</span>
          </nav>

          <span className={styles.categoryBadge}>{project.badge}</span>
          <h1 id="project-title" className={styles.title}>{project.title}</h1>
          <p className={styles.summary}>{project.summary}</p>

          <div className={styles.metaBar}>
            <div className={styles.metaItem}>
              <MdBusiness className={styles.metaIcon} />
              <span><strong>Client:</strong> {project.client}</span>
            </div>
            <div className={styles.metaItem}>
              <MdLocationOn className={styles.metaIcon} />
              <span><strong>Location:</strong> {project.location}</span>
            </div>
            <div className={styles.metaItem}>
              <MdCalendarToday className={styles.metaIcon} />
              <span><strong>Completed:</strong> {project.year}</span>
            </div>
          </div>
        </div>
      </section>

      {/* In-depth Project Details */}
      <section className={styles.detailSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            
            {/* Visual & Technical Specifications Column */}
            <div className={styles.visualCol}>
              {/* Gear Shaped Photo Frame for Project Image */}
              <div className={styles.gearContainer}>
                <GearPhotoFrame
                  image={project.image}
                  title={project.title}
                  icon={IconComponent}
                  serviceId={project.id}
                  size="large"
                />
              </div>

              {/* Technical Specifications Table */}
              {project.specifications && (
                <div className={styles.specsCard}>
                  <h3 className={styles.specsTitle}>Technical Specifications</h3>
                  <table className={styles.specsTable}>
                    <tbody>
                      {Object.entries(project.specifications).map(([key, value]) => (
                        <tr key={key}>
                          <td className={styles.specKey}>{key}</td>
                          <td className={styles.specVal}>{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Narrative Case Study Body Column */}
            <div className={styles.bodyCol}>
              <div className={styles.sectionBlock}>
                <h2>Project Overview</h2>
                <p>{project.overview}</p>
              </div>

              {project.challenge && (
                <div className={styles.sectionBlock}>
                  <h2>The Engineering Challenge</h2>
                  <p>{project.challenge}</p>
                </div>
              )}

              {project.solution && (
                <div className={styles.sectionBlock}>
                  <h2>Our Technical Solution</h2>
                  <p>{project.solution}</p>
                </div>
              )}

              {project.results && project.results.length > 0 && (
                <div className={styles.sectionBlock}>
                  <h2>Measurable Results & Impact</h2>
                  <ul className={styles.checkList}>
                    {project.results.map((result, idx) => (
                      <li key={idx}>
                        <MdCheck className={styles.checkIcon} />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.scope && project.scope.length > 0 && (
                <div className={styles.sectionBlock}>
                  <h2>Scope of Work & Deliverables</h2>
                  <ul className={styles.checkList}>
                    {project.scope.map((item, idx) => (
                      <li key={idx}>
                        <MdCheck className={styles.checkIcon} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Direct Consultation Action Card */}
              <div className={styles.actionCard}>
                <h3>Need a Similar Engineering Solution?</h3>
                <p>
                  Contact LP Power & Automation today to discuss your site specifications, request a load audit, or get an engineering estimate.
                </p>
                <Link to="/contact" className={styles.actionBtn}>
                  Request a Free Consultation <MdArrowForward />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <CTABanner
        title="Ready to commission your power or automation project?"
        description="Our licensed engineers deliver safe, code-compliant, and turnkey solutions from design through execution."
      />
    </>
  );
}
