import { Link } from 'react-router-dom';
import { m, useReducedMotion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import styles from './ProjectsHero.module.css';

/**
 * ProjectsHero
 * Streamlined cinematic hero for the Projects portfolio page featuring:
 * - High-resolution engineering & automation installation background image with optical blur
 * - Layered 3-tier gradient overlay (matching homepage, about, services & contact heroes)
 * - Minimalist electrical circuit traces, technical telemetry nodes, and live pulse animation
 * - Centralized "Our Projects" title and breadcrumb
 * - Left-slanted amber dividing line transitioning into the project gallery section
 */
export const ProjectsHero = () => {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
      };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 } }
  };

  return (
    <section className={styles.hero} aria-labelledby="projects-hero-heading">
      {/* Background Engineering Projects Photograph with Optical Blur */}
      <div className={styles.imageWrapper}>
        <img
          src="/images/projects/projects-hero.jpg"
          alt="LP Power & Automation certified engineering team inspecting commissioned industrial control panels and solar installations"
          className={styles.bgImage}
          loading="eager"
        />
      </div>

      {/* Layered Cinematic Overlay */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* Minimalist Electrical Circuit Elements */}
      <div className={styles.circuitContainer} aria-hidden="true">
        <svg
          viewBox="0 0 600 300"
          preserveAspectRatio="xMidYMid slice"
          className={styles.circuitSvg}
        >
          <defs>
            <linearGradient id="projectsAmberTrace" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5A623" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#F5A623" stopOpacity="0.2" />
            </linearGradient>
            <filter id="projectsGlowPulse" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Minimalist Circuit Traces */}
          <path
            d="M 100 0 L 100 85 L 240 85 L 240 165 L 420 165 L 420 235 L 580 235"
            fill="none"
            stroke="rgba(245, 166, 35, 0.28)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M 310 0 L 310 55 L 450 55 L 450 125 L 560 125"
            fill="none"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M 0 150 L 150 150 L 150 215 L 330 215"
            fill="none"
            stroke="rgba(245, 166, 35, 0.2)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />

          {/* Solder Connection Nodes */}
          <circle cx="100" cy="85" r="3" fill="var(--color-amber)" opacity="0.9" />
          <circle cx="240" cy="165" r="3.5" fill="#FFFFFF" filter="url(#projectsGlowPulse)" />
          <circle cx="420" cy="165" r="2.5" fill="var(--color-amber)" opacity="0.8" />
          <circle cx="450" cy="55" r="2.5" fill="var(--color-amber)" opacity="0.7" />
          <circle cx="150" cy="150" r="3" fill="var(--color-amber)" opacity="0.8" />

          {/* Live Current Pulse */}
          {!prefersReducedMotion && (
            <path
              d="M 100 0 L 100 85 L 240 85 L 240 165 L 420 165 L 420 235 L 580 235"
              fill="none"
              stroke="url(#projectsAmberTrace)"
              strokeWidth="2"
              strokeLinecap="round"
              className={styles.pulseTrace}
            />
          )}

          {/* Technical Telemetry Markings */}
          <g opacity="0.35" fill="var(--color-amber)" fontSize="9" fontFamily="var(--font-heading)">
            <text x="250" y="160">+ COMMISSIONED // QA-PASS</text>
            <text x="430" y="160">+ FIELD_TESTED</text>
          </g>
        </svg>
      </div>

      <div className={styles.container}>
        <m.div
          className={styles.content}
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Breadcrumb Navigation */}
          <m.nav className={styles.breadcrumb} variants={fadeUp} aria-label="Breadcrumb">
            <Link to="/" className={styles.breadcrumbLink}>Home</Link>
            <ChevronRight size={14} className={styles.breadcrumbSeparator} />
            <span className={styles.breadcrumbCurrent}>Projects</span>
          </m.nav>

          {/* Centralized Title */}
          <m.h1 id="projects-hero-heading" className={styles.title} variants={fadeUp}>
            Our Projects
          </m.h1>
        </m.div>
      </div>

      {/* Slanted Bottom Divider */}
      <div className={styles.heroDivider} aria-hidden="true">
        <svg
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          className={styles.dividerSvg}
          style={{ overflow: 'visible' }}
        >
          <path
            d="M0,48 L1440,0 L1440,48 Z"
            fill="#FFFFFF"
            className={styles.dividerFill}
            style={{ fill: 'var(--color-white)' }}
          />
          <path
            d="M0,48 L1440,0"
            stroke="var(--color-amber)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            opacity="0.9"
          />
        </svg>
      </div>
    </section>
  );
};
