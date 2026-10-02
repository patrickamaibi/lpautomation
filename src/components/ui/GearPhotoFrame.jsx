import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './GearPhotoFrame.module.css';

/**
 * GearPhotoFrame
 * An engineered industrial gear mechanism with a precision circular photo frame inside.
 * Features 12 rotating gear teeth, concentric instrument caliper ticks, an amber power
 * track, a centered circular photograph with zoom on hover, and an anchored service icon badge.
 * 
 * Supported sizes:
 * - 'compact': 180px fixed width, ideal for cards (Home page)
 * - 'large': Responsive fluid sizing up to 420px, ideal for service split rows
 */
export const GearPhotoFrame = ({
  image,
  title,
  icon: IconComponent,
  serviceId = 'default',
  size = 'compact',
  linkTo,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cleanId = String(serviceId).replace(/[^a-zA-Z0-9_-]/g, '-');
  const isLarge = size === 'large' || size === 'project' || size === 'medium';

  const frameBody = (
    <div
      className={`${styles.frameContainer} ${styles[size] || styles.compact} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer ambient glow behind the gear */}
      <div className={styles.gearGlow} aria-hidden="true" />

      {/* Blueprint technical CAD markers for large layout */}
      {isLarge && (
        <div className={styles.cadMarkers} aria-hidden="true">
          <span className={`${styles.cornerMark} ${styles.tl}`}>+</span>
          <span className={`${styles.cornerMark} ${styles.tr}`}>+</span>
          <span className={`${styles.cornerMark} ${styles.bl}`}>+</span>
          <span className={`${styles.cornerMark} ${styles.br}`}>+</span>
          <div className={styles.cadRing} />
        </div>
      )}

      {/* SVG Outer Gear Teeth Ring (Rotates on hover) */}
      <svg
        viewBox="-100 -100 200 200"
        className={`${styles.gearSvg} ${isHovered ? styles.gearRotating : ''}`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`gearRim-${cleanId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A4057" />
            <stop offset="50%" stopColor="#1B2D3E" />
            <stop offset="100%" stopColor="#0F1C29" />
          </linearGradient>
          <linearGradient id={`gearTooth-${cleanId}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#35526C" />
            <stop offset="60%" stopColor="#1E3245" />
            <stop offset="100%" stopColor="#13212E" />
          </linearGradient>
        </defs>

        {/* 12 Industrial Gear Teeth (Pitch: 30 deg) */}
        <g className={styles.cogsGroup}>
          {[...Array(12)].map((_, i) => (
            <rect
              key={i}
              x="-8"
              y="-95"
              width="16"
              height="18"
              rx="2.5"
              fill={`url(#gearTooth-${cleanId})`}
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="0.8"
              transform={`rotate(${i * 30})`}
            />
          ))}

          {/* Outer gear rim band */}
          <circle
            cx="0"
            cy="0"
            r="78"
            fill="none"
            stroke={`url(#gearRim-${cleanId})`}
            strokeWidth="16"
          />

          {/* Subtle metallic edge highlight on outer rim */}
          <circle
            cx="0"
            cy="0"
            r="86"
            fill="none"
            stroke="rgba(255, 255, 255, 0.28)"
            strokeWidth="0.9"
          />

          {/* Inner rim bevel line */}
          <circle
            cx="0"
            cy="0"
            r="70.5"
            fill="none"
            stroke="rgba(0, 0, 0, 0.45)"
            strokeWidth="1"
          />

          {/* Precision Amber Caliper Track */}
          <circle
            cx="0"
            cy="0"
            r="70"
            fill="none"
            stroke="var(--color-amber)"
            strokeWidth="1.6"
            strokeDasharray="3 5"
            opacity="0.9"
          />

          {/* Cardinal Caliper Index Ticks */}
          {[0, 90, 180, 270].map((deg) => (
            <line
              key={deg}
              x1="0"
              y1="-85"
              x2="0"
              y2="-71"
              stroke="var(--color-amber)"
              strokeWidth="1.8"
              strokeLinecap="round"
              transform={`rotate(${deg})`}
            />
          ))}
        </g>
      </svg>

      {/* Circular Photo Frame (Kept upright; scales gently on hover) */}
      <div className={styles.photoViewport}>
        <img
          src={image}
          alt={title}
          className={`${styles.photo} ${isHovered ? styles.photoZoomed : ''}`}
          loading="lazy"
        />
        {/* Subtle vignette shadow & metallic amber rim accent */}
        <div className={styles.photoBezel} />
      </div>

      {/* Service Icon floating badge anchored at the bottom-right of the gear */}
      {IconComponent && (
        <div className={`${styles.iconBadge} ${isHovered ? styles.iconBadgeActive : ''}`}>
          <IconComponent size={isLarge ? 28 : 20} />
        </div>
      )}
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className={styles.frameLink} aria-label={`View ${title}`}>
        {frameBody}
      </Link>
    );
  }

  return frameBody;
};
