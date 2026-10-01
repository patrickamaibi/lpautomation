import { m, useReducedMotion } from 'framer-motion';

export const SectionHeading = ({ eyebrow, title, description, align = 'center' }) => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <m.div 
      style={{ textAlign: align, marginBottom: '3rem', maxWidth: '800px', margin: align === 'center' ? '0 auto 3rem' : '0 0 3rem' }}
      variants={prefersReducedMotion ? { visible: { opacity: 1 } } : containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {eyebrow && (
        <span style={{ display: 'block', color: 'var(--color-amber)', fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
          {eyebrow}
        </span>
      )}
      <h2 style={{ color: 'var(--color-navy)', fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>
        {title}
      </h2>
      {description && (
        <p style={{ color: 'var(--color-text-gray, #5B6772)', fontSize: '1.125rem', lineHeight: 1.6 }}>
          {description}
        </p>
      )}
    </m.div>
  );
};
