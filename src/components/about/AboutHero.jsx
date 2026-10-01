import { Link } from 'react-router-dom';
import { m, useReducedMotion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import styles from './AboutHero.module.css';

/**
 * AboutHero
 * Streamlined, centered hero for the About page featuring:
 * - Single high-resolution engineering background image with 50% optical blur
 * - Layered 3-tier gradient overlay (matching homepage hero opacity and warm amber lighting)
 * - Minimalist electrical circuit traces and PCB solder nodes in the background
 * - Centralized "About Us" title and breadcrumb
 * - Left-slanted amber dividing line transitioning into the story section
 */
export const AboutHero = () => {
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
    <section className={styles.hero} aria-labelledby="about-hero-heading">
      {/* Single Background Engineering Photograph with 50% Blur */}
      <div className={styles.imageWrapper}>
        <img
          src="/images/about/about-hero.jpg"
          alt="LP Power & Automation electrical engineers inspecting control switchgear panels"
          className={styles.bgImage}
          loading="eager"
        />
      </div>

      {/* Layered Cinematic Overlay (Matching Homepage Hero Opacity & Gradient) */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* Minimalist Electrical Circuit Elements (Delicate, technical, non-distracting) */}
      <div className={styles.circuitContainer} aria-hidden="true">
        <svg
          viewBox="0 0 600 300"
          preserveAspectRatio="xMidYMid slice"
          className={styles.circuitSvg}
        >
          <defs>
            <linearGradient id="amberTrace" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5A623" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#F5A623" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glowPulse" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Minimalist PCB Circuit Traces */}
          <path
            d="M 120 0 L 120 80 L 260 80 L 260 160 L 440 160 L 440 240 L 580 240"
            fill="none"
            stroke="rgba(245, 166, 35, 0.28)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M 320 0 L 320 50 L 460 50 L 460 120 L 560 120"
            fill="none"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M 0 140 L 160 140 L 160 210 L 340 210"
            fill="none"
            stroke="rgba(245, 166, 35, 0.2)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />

          {/* Solder Terminal Connection Nodes */}
          <circle cx="120" cy="80" r="3" fill="var(--color-amber)" opacity="0.9" />
          <circle cx="260" cy="160" r="3.5" fill="#FFFFFF" filter="url(#glowPulse)" />
          <circle cx="440" cy="160" r="2.5" fill="var(--color-amber)" opacity="0.8" />
          <circle cx="460" cy="50" r="2.5" fill="var(--color-amber)" opacity="0.7" />
          <circle cx="160" cy="140" r="3" fill="var(--color-amber)" opacity="0.8" />

          {/* Subtle Live Current Pulse traveling along main trace */}
          {!prefersReducedMotion && (
            <path
              d="M 120 0 L 120 80 L 260 80 L 260 160 L 440 160 L 440 240 L 580 240"
              fill="none"
              stroke="url(#amberTrace)"
              strokeWidth="2"
              strokeLinecap="round"
              className={styles.pulseTrace}
            />
          )}

          {/* Minimalist Grid Coordinate Markings */}
          <g opacity="0.35" fill="var(--color-amber)" fontSize="9" fontFamily="var(--font-heading)">
            <text x="270" y="155">+ NODE 01 // 415V</text>
            <text x="450" y="155">+ BUS_A</text>
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
          {/* Breadcrumb Navigation (Centered) */}
          <m.nav className={styles.breadcrumb} variants={fadeUp} aria-label="Breadcrumb">
            <Link to="/" className={styles.breadcrumbLink}>Home</Link>
            <ChevronRight size={14} className={styles.breadcrumbSeparator} />
            <span className={styles.breadcrumbCurrent}>About Us</span>
          </m.nav>

          {/* Centralized Title */}
          <m.h1 id="about-hero-heading" className={styles.title} variants={fadeUp}>
            About Us
          </m.h1>
        </m.div>
      </div>

      {/* Slanted Bottom Divider (Slanted to the left) */}
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
