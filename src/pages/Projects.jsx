import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/md';
import { MdLocationOn, MdArrowForward, MdCheck } from 'react-icons/md';
import { siteData } from '../data/site';
import { projectsData } from '../data/projects';
import { ProjectsHero } from '../components/projects/ProjectsHero';
import { GearPhotoFrame } from '../components/ui/GearPhotoFrame';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CTABanner } from '../components/ui/CTABanner';
import styles from './Projects.module.css';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Solar Installation',
    'Smart Home Setup',
    'Industrial LV Panel Setup',
    'Automation & Control'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Engineering Projects & Case Studies | {siteData.name}</title>
        <meta
          name="description"
          content="Explore our proven electrical installation, commercial solar microgrids, luxury smart home automation, and industrial LV panel engineering projects."
        />
      </Helmet>

      {/* Cinematic Projects Hero */}
      <ProjectsHero />

      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Portfolio & Case Studies"
            title="Featured Engineering Projects"
            description="Explore our proven track record delivering turnkey electrical infrastructure, commercial solar microgrids, luxury smart home automation, and industrial control panels."
          />

          {/* Interactive Category Filter Bar */}
          <div className={styles.filterBar} role="tablist" aria-label="Project categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`${styles.filterBtn} ${selectedCategory === category ? styles.filterActive : ''}`}
                onClick={() => setSelectedCategory(category)}
                role="tab"
                aria-selected={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Card Grid */}
          <div className={styles.grid}>
            {filteredProjects.map((project) => {
              const IconComponent = Icons[project.icon];

              return (
                <article key={project.id} className={styles.card}>
                  {/* Gear Shaped Photo Frame for Project Image */}
                  <div className={styles.gearWrapper}>
                    <GearPhotoFrame
                      image={project.image}
                      title={project.title}
                      icon={IconComponent}
                      serviceId={project.id}
                      size="project"
                      linkTo={`/projects/${project.slug}`}
                    />
                  </div>

                  <div className={styles.cardMeta}>
                    <span className={styles.categoryBadge}>{project.badge}</span>
                    <span className={styles.year}>{project.year}</span>
                  </div>

                  <h3 className={styles.cardTitle}>
                    <Link to={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>

                  <div className={styles.location}>
                    <MdLocationOn className={styles.locIcon} />
                    <span>{project.location}</span>
                  </div>

                  <p className={styles.summary}>{project.summary}</p>

                  <ul className={styles.scopeList}>
                    {project.scope.slice(0, 3).map((item, idx) => (
                      <li key={idx} className={styles.scopeItem}>
                        <MdCheck className={styles.checkIcon} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link to={`/projects/${project.slug}`} className={styles.viewBtn}>
                    View Case Study <MdArrowForward />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <CTABanner
        title="Have a specialized electrical or automation project?"
        description="Our team of certified engineers is ready to assess your requirements and deliver a compliant, high-performance solution."
      />
    </>
  );
}
