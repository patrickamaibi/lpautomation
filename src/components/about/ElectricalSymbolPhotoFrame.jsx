import { useState } from 'react';
import styles from './ElectricalSymbolPhotoFrame.module.css';

/**
 * ElectricalSymbolPhotoFrame
 * An authentic electrical automation symbol shaped frame for engineering photography.
 * Based on the IEC 60617 / IEEE 315 industrial contactor relay & 3-phase power node symbol.
 * Features a hexagonal power cell aperture, 3-phase AC input terminals (L1, L2, L3),
 * load terminals (T1, T2, T3), control coil leads (A1/A2), ladder logic contact glyphs,
 * earth ground (⏚), terminal screws, and animated electric current flow.
 */
export const ElectricalSymbolPhotoFrame = ({
  src,
  alt = "LP Power & Automation engineering team",
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${styles.frameWrapper} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient magnetic / electric flux glow */}
      <div className={`${styles.ambientFlux} ${isHovered ? styles.ambientFluxActive : ''}`} aria-hidden="true" />

      {/* Hexagonal Electrical Symbol Viewport */}
      <div className={styles.symbolViewport}>
        <img
          src={src}
          alt={alt}
          className={`${styles.photo} ${isHovered ? styles.photoHovered : ''}`}
          loading="lazy"
        />
        {/* Inner vignette & metallic bezel accent */}
        <div className={styles.innerBezel} aria-hidden="true" />
      </div>

      {/* SVG Electrical Automation Schematic Framework */}
      <svg
        viewBox="0 0 600 450"
        className={styles.schematicSvg}
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Metallic Conductive Copper Bus Gradient */}
          <linearGradient id="busCopper" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE099" />
            <stop offset="50%" stopColor="#F5A623" />
            <stop offset="100%" stopColor="#A86200" />
          </linearGradient>

          {/* Electric Power Flow Current Pulse */}
          <linearGradient id="currentFlowPulse" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(245, 166, 35, 0)" />
            <stop offset="45%" stopColor="#FFFFFF" />
            <stop offset="65%" stopColor="#FFD480" />
            <stop offset="100%" stopColor="rgba(245, 166, 35, 0)" />
          </linearGradient>

          {/* Metallic Terminal Screw Gradient */}
          <linearGradient id="screwHead" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="50%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          {/* Glow Filter for Active Current */}
          <filter id="electricArcGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- Primary Hexagonal Power Bus Perimeter --- */}
        {/* Static Base Copper Track */}
        <polygon
          points="105,24 495,24 576,225 495,426 105,426 24,225"
          fill="none"
          stroke="rgba(245, 166, 35, 0.45)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Dynamic Electric Current Flow along Hexagonal Node */}
        <polygon
          points="105,24 495,24 576,225 495,426 105,426 24,225"
          fill="none"
          stroke="url(#currentFlowPulse)"
          strokeWidth={isHovered ? "4" : "3"}
          strokeLinejoin="round"
          className={`${styles.hexFlow} ${isHovered ? styles.hexFlowFast : ''}`}
          filter="url(#electricArcGlow)"
        />

        {/* --- Top Supply Terminals (3-Phase AC: L1, L2, L3) --- */}
        {/* L1 Input Lead */}
        <line x1="200" y1="8" x2="200" y2="24" stroke="url(#busCopper)" strokeWidth="2.5" strokeLinecap="round" />
        {/* L2 Input Lead */}
        <line x1="300" y1="8" x2="300" y2="24" stroke="url(#busCopper)" strokeWidth="2.5" strokeLinecap="round" />
        {/* L3 Input Lead */}
        <line x1="400" y1="8" x2="400" y2="24" stroke="url(#busCopper)" strokeWidth="2.5" strokeLinecap="round" />

        {/* --- Bottom Load Terminals (To Automated Motor Feeder: T1, T2, T3) --- */}
        {/* T1 Output Lead */}
        <line x1="200" y1="426" x2="200" y2="442" stroke="url(#busCopper)" strokeWidth="2.5" strokeLinecap="round" />
        {/* T2 Output Lead */}
        <line x1="300" y1="426" x2="300" y2="442" stroke="url(#busCopper)" strokeWidth="2.5" strokeLinecap="round" />
        {/* T3 Output Lead */}
        <line x1="400" y1="426" x2="400" y2="442" stroke="url(#busCopper)" strokeWidth="2.5" strokeLinecap="round" />

        {/* --- Left Apex: Automation Relay Control Coil (A1 +) --- */}
        <line x1="6" y1="225" x2="24" y2="225" stroke="url(#busCopper)" strokeWidth="2.5" strokeLinecap="round" />
        {/* IEC Coil Symbol Graphic at A1 */}
        <g transform="translate(15, 205)">
          <circle cx="0" cy="0" r="5" fill="#0F1C29" stroke="var(--color-amber)" strokeWidth="1.5" />
          <path d="M -3,-10 L 3,-10 L 3,-4 L -3,-4 Z" fill="none" stroke="var(--color-amber)" strokeWidth="1.2" />
        </g>

        {/* --- Right Apex: Automation Control Return (A2 -) & Earth Ground ⏚ --- */}
        <line x1="576" y1="225" x2="594" y2="225" stroke="url(#busCopper)" strokeWidth="2.5" strokeLinecap="round" />
        {/* Earth Ground (PE/GND) Schematic Symbol */}
        <g transform="translate(585, 245)" stroke="var(--color-amber)" strokeWidth="1.4">
          <line x1="0" y1="-8" x2="0" y2="0" />
          <line x1="-8" y1="0" x2="8" y2="0" />
          <line x1="-5" y1="4" x2="5" y2="4" />
          <line x1="-2" y1="8" x2="2" y2="8" />
        </g>

        {/* --- Ladder Logic Normally-Open (NO) Auxiliary Contact Symbol --- */}
        <g transform="translate(60, 110)" stroke="var(--color-amber)" strokeWidth="1.5">
          <line x1="0" y1="0" x2="16" y2="0" />
          <line x1="16" y1="-12" x2="32" y2="0" />
          <line x1="32" y1="0" x2="48" y2="0" />
          <circle cx="16" cy="0" r="2" fill="#0F1C29" />
          <circle cx="32" cy="0" r="2" fill="#0F1C29" />
        </g>

        {/* --- Ladder Logic Normally-Closed (NC) Auxiliary Contact Symbol --- */}
        <g transform="translate(485, 340)" stroke="var(--color-amber)" strokeWidth="1.5">
          <line x1="0" y1="0" x2="16" y2="0" />
          <line x1="16" y1="0" x2="32" y2="0" />
          <line x1="14" y1="-8" x2="34" y2="8" />
          <line x1="32" y1="0" x2="48" y2="0" />
        </g>

        {/* --- Precision Industrial Terminal Screws --- */}
        {[
          // Top Supply Screws [L1, L2, L3]
          [200, 8, 45],
          [300, 8, -30],
          [400, 8, 60],
          // Bottom Load Screws [T1, T2, T3]
          [200, 442, -45],
          [300, 442, 15],
          [400, 442, -60],
          // Side Coil Screws [A1, A2]
          [6, 225, 0],
          [594, 225, 90]
        ].map(([cx, cy, deg], i) => (
          <g key={i}>
            {/* Outer washer rim */}
            <circle cx={cx} cy={cy} r="6" fill="url(#screwHead)" stroke="#0F1C29" strokeWidth="1" />
            {/* Slotted screw driver slot */}
            <line
              x1={cx - 4}
              y1={cy}
              x2={cx + 4}
              y2={cy}
              stroke="#0F1C29"
              strokeWidth="1.5"
              strokeLinecap="round"
              transform={`rotate(${deg}, ${cx}, ${cy})`}
            />
          </g>
        ))}

        {/* --- Schematic Silkscreen Typography --- */}
        {/* Top 3-Phase Supply Labels */}
        <text x="186" y="2" className={styles.terminalLabel}>1/L1</text>
        <text x="286" y="2" className={styles.terminalLabel}>3/L2</text>
        <text x="386" y="2" className={styles.terminalLabel}>5/L3</text>
        <text x="260" y="-8" className={styles.headerLabel}>3~ 415V AC 50Hz</text>

        {/* Bottom Load Feeder Labels */}
        <text x="186" y="449" className={styles.terminalLabel}>2/T1</text>
        <text x="286" y="449" className={styles.terminalLabel}>4/T2</text>
        <text x="386" y="449" className={styles.terminalLabel}>6/T3</text>

        {/* Coil Terminals & Status Labels */}
        <text x="4" y="215" className={styles.coilLabel}>A1 (+)</text>
        <text x="568" y="215" className={styles.coilLabel}>A2 (-)</text>
        <text x="50" y="132" className={styles.circuitSubLabel}>13 NO - 14 NO</text>
        <text x="475" y="362" className={styles.circuitSubLabel}>21 NC - 22 NC</text>

        {/* High Voltage Lightning Arc Emblem */}
        <g transform="translate(300, 24)" filter="url(#electricArcGlow)">
          <path
            d="M -1,-12 L 4,-3 L 0,-3 L 3,10 L -4,1 L -1,1 Z"
            fill="var(--color-amber)"
            stroke="#FFFFFF"
            strokeWidth="0.5"
          />
        </g>
      </svg>
    </div>
  );
};
