import { m, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import "@fontsource/chakra-petch/600.css";
import "@fontsource/chakra-petch/700.css";

import { content } from "../../data/content";
import { useHeroTypewriter } from "../../hooks/useTypewriter";
import { HeroSlider } from "./HeroSlider";
import { HeroVisual } from "./HeroVisual";
import { ServiceChips } from "./ServiceChips";
import styles from "./Hero.module.css";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Renders typed text while reserving the space of the full text (invisible
 * "ghost"), so the layout never shifts and lines never re-wrap while typing.
 * Screen readers get the complete text immediately.
 */
const TypedText = ({ full, typed, showCursor }) => (
  <>
    <span className={styles.srOnly}>{full}</span>
    <span aria-hidden="true">
      {typed}
      {showCursor && <span className={styles.cursor} />}
      <span className={styles.ghost}>{full.slice(typed.length)}</span>
    </span>
  </>
);

export const Hero = () => {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [hasScrolled, setHasScrolled] = useState(false);

  const { eyebrow, headline, ctas, serviceChips, slides } = content;

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Coordinated typewriter effect that loops every ~5 seconds for the entire text
  const {
    eyebrowTyped,
    headlineTyped,
    showEyebrowCursor,
    showHeadlineCursor,
    isReady,
  } = useHeroTypewriter(eyebrow, headline, {
    instant: prefersReducedMotion,
    loopDelay: 5000,
  });

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 } },
  };

  const fadeUp = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
      };

  const hoverProps = prefersReducedMotion
    ? {}
    : { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } };

  return (
    <section className={styles.hero} id="home" aria-labelledby="hero-heading">
      {/* Background slide photography */}
      <HeroSlider slides={slides} />

      {/* Layered cinematic overlay */}
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.leftCol}>
          <p className={styles.eyebrow}>
            <TypedText
              full={eyebrow}
              typed={eyebrowTyped}
              showCursor={showEyebrowCursor}
            />
          </p>

          <h1 id="hero-heading" className={styles.h1}>
            <TypedText
              full={headline}
              typed={headlineTyped}
              showCursor={showHeadlineCursor}
            />
          </h1>

          {/* Reserved slot so the layout does not jump when chips mount */}
          <div className={styles.chipsSlot}>
            {isReady && <ServiceChips services={serviceChips} delay={0.1} />}
          </div>

          <m.div
            className={styles.ctaGroup}
            variants={stagger}
            initial="hidden"
            animate={isReady ? "visible" : "hidden"}
          >
            <m.a
              href={ctas.primary.href}
              className={styles.primaryCta}
              variants={fadeUp}
              {...hoverProps}
            >
              <span className={styles.ctaText}>{ctas.primary.label}</span>
              <div className={styles.shine} />
            </m.a>
            <m.a
              href={ctas.secondary.href}
              className={styles.secondaryCta}
              variants={fadeUp}
              {...hoverProps}
            >
              {ctas.secondary.label}
            </m.a>
          </m.div>
        </div>

        <div className={styles.rightCol}>
          <HeroVisual />
        </div>
      </div>

      <m.div
        className={styles.scrollIndicator}
        animate={{ opacity: hasScrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <m.div
          animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} color="var(--color-white)" opacity={0.5} />
        </m.div>
      </m.div>

      {/* Slanted bottom divide transitioning into the next section (slanted to the left) */}
      <div className={styles.heroDivider} aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className={styles.dividerSvg}
          style={{ overflow: 'visible' }}
        >
          <path
            d="M0,4 L1440,80 L0,80 Z"
            fill="#F3F5F7"
            className={styles.dividerFill}
            style={{ fill: 'var(--color-light-gray)' }}
          />
          <path
            d="M0,4 L1440,80"
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