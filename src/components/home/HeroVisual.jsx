import {
  m,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";
import styles from "./Hero.module.css";

export const HeroVisual = () => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Background parallax on scroll
  const yBg = useTransform(scrollY, [0, 500], [0, 40]);

  // Subtle 3D mouse tilt via motion values (no React state re-renders)
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const spring = { stiffness: 70, damping: 20 };
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-6, 6]), spring);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [6, -6]), spring);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return;

    const handleMouseMove = (e) => {
      pointerX.set(e.clientX / window.innerWidth - 0.5);
      pointerY.set(e.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [prefersReducedMotion, pointerX, pointerY]);

  // Sun ray angles (top right quadrant)
  const rayAngles = [-70, -45, -20, 5, 30];

  return (
    <m.div
      className={styles.visualContainer}
      style={
        prefersReducedMotion
          ? undefined
          : { rotateX, rotateY, transformPerspective: 1000 }
      }
    >
      {/* Soft atmospheric halo that blends the visual directly into the hero */}
      <div className={styles.visualHalo} aria-hidden="true" />
      <div className={styles.energyRipple} aria-hidden="true" />

      {!prefersReducedMotion && (
        <m.div className={styles.particles} style={{ y: yBg }} aria-hidden="true">
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.particleSvg}
          >
            <pattern
              id="circuit"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M10 10 h 20 v 20 h 20"
                stroke="rgba(245, 166, 35, 0.12)"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="50" cy="30" r="2" fill="rgba(245, 166, 35, 0.2)" />
              <path
                d="M80 80 v -20 h -20"
                stroke="rgba(255, 255, 255, 0.06)"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="60" cy="60" r="2" fill="rgba(255, 255, 255, 0.1)" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </m.div>
      )}

      <div className={styles.brandSvgWrapper}>
        {/* viewBox centered at (0, 0) so all concentric circles and rotations are mathematically locked */}
        <svg
          viewBox="-100 -100 200 200"
          width="100%"
          height="100%"
          aria-hidden="true"
        >
          <defs>
            {/* Metallic steel finish for gear */}
            <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#CBD5E1" stopOpacity="0.9" />
              <stop offset="80%" stopColor="#64748B" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.9" />
            </linearGradient>

            {/* Glowing amber gradient */}
            <linearGradient id="amberRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD166" />
              <stop offset="50%" stopColor="#F5A623" />
              <stop offset="100%" stopColor="#E8961A" />
            </linearGradient>

            {/* Radiant core glow */}
            <radialGradient id="coreGlow" cx="0" cy="0" r="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F5A623" stopOpacity="0.25" />
              <stop offset="45%" stopColor="#F5A623" stopOpacity="0.08" />
              <stop offset="80%" stopColor="#0F1C29" stopOpacity="0.02" />
              <stop offset="100%" stopColor="#0F1C29" stopOpacity="0" />
            </radialGradient>

            {/* Lightning bolt golden energy gradient */}
            <linearGradient id="boltGradient" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#FFFBEB" />
              <stop offset="35%" stopColor="#F5A623" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>

            {/* Soft bloom filter */}
            <filter id="boltGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Luminous core backdrop */}
          <circle cx="0" cy="0" r="75" fill="url(#coreGlow)" />

          {/* Precision outer tick mark circle (stationary guide) */}
          <circle
            cx="0"
            cy="0"
            r="88"
            fill="none"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="1"
            strokeDasharray="2 6"
          />

          {/* ==============================================================
              GEAR GROUP
              Centered at (0, 0) and rotated strictly via CSS @keyframes
              with transform-origin: 0 0. Never drifts or wobbles.
              ============================================================== */}
          <g className={styles.gearRotatingGroup}>
            {/* 12 Gear Teeth symmetrically distributed around (0, 0) */}
            {[...Array(12)].map((_, i) => (
              <rect
                key={i}
                x="-7"
                y="-90"
                width="14"
                height="16"
                rx="2"
                fill="url(#gearGradient)"
                transform={`rotate(${i * 30})`}
              />
            ))}

            {/* Outer gear body */}
            <circle
              cx="0"
              cy="0"
              r="74"
              fill="none"
              stroke="url(#gearGradient)"
              strokeWidth="16"
            />

            {/* Inner chamfer highlight */}
            <circle
              cx="0"
              cy="0"
              r="66"
              fill="none"
              stroke="rgba(255, 255, 255, 0.45)"
              strokeWidth="1"
            />
          </g>

          {/* ==============================================================
              AMBER CONCENTRIC CIRCLE & TECH DIAL
              Centered at (0, 0). Always concentric with the gear.
              ============================================================== */}
          {/* Inner counter-rotating dial track */}
          <circle
            cx="0"
            cy="0"
            r="44"
            fill="none"
            stroke="rgba(245, 166, 35, 0.35)"
            strokeWidth="1.2"
            strokeDasharray="4 8"
            className={styles.amberTechTrack}
          />

          {/* Main Amber Power Circle */}
          <circle
            cx="0"
            cy="0"
            r="52"
            fill="none"
            stroke="url(#amberRingGradient)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="240 86"
            className={styles.amberRingTrack}
          />

          {/* ==============================================================
              SUN RAYS (Top-Right Quadrant - Solar Power)
              ============================================================== */}
          <g className={styles.sunRaysGroup}>
            {rayAngles.map((angle, i) => (
              <line
                key={i}
                x1="0"
                y1="-55"
                x2="0"
                y2="-68"
                stroke="var(--color-amber)"
                strokeWidth="3.5"
                strokeLinecap="round"
                transform={`rotate(${angle})`}
              />
            ))}
          </g>

          {/* ==============================================================
              LIGHTNING BOLT (Electrical Power)
              Mathematically balanced at (0, 0).
              ============================================================== */}
          <path
            d="M 7.5 -62 L -30 10 L -6 10 L -16 62 L 30 -10 L 7.5 -10 Z"
            fill="url(#boltGradient)"
            filter="url(#boltGlow)"
            className={styles.boltElement}
          />
        </svg>
      </div>
    </m.div>
  );
};