import { Link } from 'react-router-dom';
import { m, useReducedMotion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import styles from './ContactHero.module.css';

/**
 * ContactHero
 * Streamlined, cinematic hero for the Contact page featuring:
 * - High-resolution engineering consultation image with optical blur
 * - Layered 3-tier gradient overlay (matching homepage, about & services hero)
 * - Minimalist electrical circuit traces, communication bus glyphs, and solder nodes
 * - Centralized "Contact Us" title, subtitle, and breadcrumb
 * - Left-slanted amber dividing line transitioning into the contact form section
 */
export const ContactHero = () => {
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
    <section className={styles.hero} aria-labelledby="contact-hero-heading">
      {/* Background Engineering Consultation Image with Optical Blur */}
      <div className={styles.imageWrapper}>
        <img
          src="/images/contact/contact-hero.jpg"
          alt="LP Power & Automation electrical engineers reviewing schematics and technical project plans"
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
            <linearGradient id="contactAmberTrace" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5A623" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#F5A623" stopOpacity="0.2" />
            </linearGradient>
            <filter id="contactGlowPulse" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Minimalist Circuit Traces */}
          <path
            d="M 80 0 L 80 90 L 220 90 L 220 170 L 400 170 L 400 240 L 580 240"
            fill="none"
            stroke="rgba(245, 166, 35, 0.28)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M 300 0 L 300 60 L 450 60 L 450 130 L 570 130"
            fill="none"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M 0 160 L 140 160 L 140 220 L 320 220"
            fill="none"
            stroke="rgba(245, 166, 35, 0.2)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />

          {/* Solder Connection Nodes */}
          <circle cx="80" cy="90" r="3" fill="var(--color-amber)" opacity="0.9" />
          <circle cx="220" cy="170" r="3.5" fill="#FFFFFF" filter="url(#contactGlowPulse)" />
          <circle cx="400" cy="170" r="2.5" fill="var(--color-amber)" opacity="0.8" />
          <circle cx="450" cy="60" r="2.5" fill="var(--color-amber)" opacity="0.7" />
          <circle cx="140" cy="160" r="3" fill="var(--color-amber)" opacity="0.8" />

          {/* Live Current Pulse */}
          {!prefersReducedMotion && (
            <path
              d="M 80 0 L 80 90 L 220 90 L 220 170 L 400 170 L 400 240 L 580 240"
              fill="none"
              stroke="url(#contactAmberTrace)"
              strokeWidth="2"
              strokeLinecap="round"
              className={styles.pulseTrace}
            />
          )}

          {/* Technical Telemetry Markings */}
          <g opacity="0.35" fill="var(--color-amber)" fontSize="9" fontFamily="var(--font-heading)">
            <text x="230" y="165">+ COMM_LINK // 24/7 SUPPORT</text>
            <text x="410" y="165">+ RF_GATEWAY</text>
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
            <span className={styles.breadcrumbCurrent}>Contact Us</span>
          </m.nav>

          {/* Centralized Title */}
          <m.h1 id="contact-hero-heading" className={styles.title} variants={fadeUp}>
            Contact Us
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
