import { useState } from 'react';
import styles from './CircuitPhotoFrame.module.css';

/**
 * CircuitPhotoFrame
 * An engineered electrical circuit-board frame for showcasing industrial photography.
 * Features 45-degree chamfered PCB geometry, conductive golden traces, glowing current
 * flow pulses, solder via pads, edge-connector bus fingers, and CAD silkscreen markings.
 */
export const CircuitPhotoFrame = ({
  src,
  alt = "Electrical engineering installation",
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${styles.frameWrapper} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient electrical backglow */}
      <div className={`${styles.ambientGlow} ${isHovered ? styles.ambientGlowActive : ''}`} aria-hidden="true" />

      {/* Chamfered PCB Image Viewport */}
      <div className={styles.imageViewport}>
        <img
          src={src}
          alt={alt}
          className={`${styles.image} ${isHovered ? styles.imageHovered : ''}`}
          loading="lazy"
        />
        {/* Subtle inner shadow and circuit grid shimmer */}
        <div className={styles.vignetteOverlay} aria-hidden="true" />
      </div>

      {/* SVG Electrical Circuit Schematic & Traces Overlay */}
      <svg
        viewBox="0 0 600 450"
        className={styles.circuitSvg}
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Metallic Gold Copper Trace Gradient */}
          <linearGradient id="circuitGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD480" />
            <stop offset="50%" stopColor="#F5A623" />
            <stop offset="100%" stopColor="#C97A05" />
          </linearGradient>

          {/* Electric Power Flow Pulse Gradient */}
          <linearGradient id="electricPulse" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(245, 166, 35, 0)" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#FFD480" />
            <stop offset="100%" stopColor="rgba(245, 166, 35, 0)" />
          </linearGradient>

          {/* Gold Connector Contact Finger Gradient */}
          <linearGradient id="goldFinger" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFE4A0" />
            <stop offset="40%" stopColor="#F5A623" />
            <stop offset="100%" stopColor="#9C5C00" />
          </linearGradient>

          {/* Soft Glow Filter */}
          <filter id="circuitGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- Trace 1: Top & Right Conductive Rail --- */}
        {/* Base circuit copper track */}
        <path
          d="M 12,130 L 26,130 L 26,38 L 48,16 L 270,16 L 284,6 L 390,6 L 404,16 L 536,16 L 576,56 L 576,240 L 590,240"
          fill="none"
          stroke="rgba(245, 166, 35, 0.45)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Active glowing electric current pulse */}
        <path
          d="M 12,130 L 26,130 L 26,38 L 48,16 L 270,16 L 284,6 L 390,6 L 404,16 L 536,16 L 576,56 L 576,240 L 590,240"
          fill="none"
          stroke="url(#electricPulse)"
          strokeWidth={isHovered ? "3.5" : "2.5"}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${styles.flowingTrace} ${isHovered ? styles.flowingFast : ''}`}
          filter="url(#circuitGlowFilter)"
        />

        {/* --- Trace 2: Bottom & Left Conductive Rail --- */}
        {/* Base circuit copper track */}
        <path
          d="M 12,290 L 26,290 L 26,396 L 66,436 L 230,436 L 244,444 L 350,444 L 364,436 L 542,436 L 568,410 L 568,320 L 588,320"
          fill="none"
          stroke="rgba(245, 166, 35, 0.45)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Active glowing electric current pulse */}
        <path
          d="M 12,290 L 26,290 L 26,396 L 66,436 L 230,436 L 244,444 L 350,444 L 364,436 L 542,436 L 568,410 L 568,320 L 588,320"
          fill="none"
          stroke="url(#electricPulse)"
          strokeWidth={isHovered ? "3.5" : "2.5"}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${styles.flowingTraceReverse} ${isHovered ? styles.flowingFast : ''}`}
          filter="url(#circuitGlowFilter)"
        />

        {/* --- Secondary Delicate Circuit Offshoots --- */}
        <path
          d="M 48,16 L 70,38 L 160,38"
          fill="none"
          stroke="rgba(245, 166, 35, 0.3)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        <path
          d="M 576,140 L 554,162 L 480,162"
          fill="none"
          stroke="rgba(245, 166, 35, 0.3)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        <path
          d="M 26,340 L 48,362 L 130,362"
          fill="none"
          stroke="rgba(245, 166, 35, 0.3)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />

        {/* --- Precision PCB Solder Eyelet Via Pads --- */}
        {/* Terminals at branch starts and ends */}
        {[
          [12, 130],
          [590, 240],
          [12, 290],
          [588, 320],
          [160, 38],
          [480, 162],
          [130, 362],
          [48, 16],
          [536, 16],
          [576, 56],
          [66, 436],
          [542, 436]
        ].map(([cx, cy], i) => (
          <g key={i}>
            {/* Outer copper pad ring */}
            <circle cx={cx} cy={cy} r="4.5" fill="#0F1C29" stroke="url(#circuitGold)" strokeWidth="1.5" />
            {/* Inner solder eyelet hole */}
            <circle cx={cx} cy={cy} r="1.8" fill={isHovered ? "#FFD480" : "var(--color-amber)"} />
          </g>
        ))}

        {/* --- PCB Edge Connector Gold Fingers (Bottom Bus) --- */}
        <g className={styles.goldBusFingers}>
          {[260, 276, 292, 308, 324, 340].map((x, i) => (
            <rect
              key={i}
              x={x}
              y="435"
              width="8"
              height="11"
              rx="1.5"
              fill="url(#goldFinger)"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="0.5"
            />
          ))}
        </g>

        {/* --- Circuit Silkscreen Engineering Labels --- */}
        <text x="76" y="32" className={styles.silkscreenText}>PWR_NODE // 415V</text>
        <text x="430" y="32" className={styles.silkscreenText}>BUS_A [SECURE]</text>
        <text x="76" y="426" className={styles.silkscreenText}>GND ⏚ IEEE-1584</text>
        <text x="440" y="426" className={styles.silkscreenText}>SIGNAL_IN [OK]</text>

        {/* CAD Alignment Crosshairs in corners */}
        <g className={styles.cadCrosses} opacity="0.6">
          <path d="M 6,6 L 16,6 M 11,1 L 11,11" stroke="var(--color-amber)" strokeWidth="1" />
          <path d="M 584,6 L 594,6 M 589,1 L 589,11" stroke="var(--color-amber)" strokeWidth="1" />
          <path d="M 6,439 L 16,439 M 11,434 L 11,444" stroke="var(--color-amber)" strokeWidth="1" />
          <path d="M 584,439 L 594,439 M 589,434 L 589,444" stroke="var(--color-amber)" strokeWidth="1" />
        </g>
      </svg>

      {/* Technical Spec Tag in corner */}
      <div className={styles.techTag}>
        <span>LV-HV COMPLIANT</span>
      </div>
    </div>
  );
};
