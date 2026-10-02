import { m, useReducedMotion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { siteData } from '../../data/site';

export const WhatsAppButton = () => {
  const prefersReducedMotion = useReducedMotion();
  let phone = siteData.phone.replace(/[^0-9]/g, '');
  if (phone.startsWith('0')) {
    phone = '234' + phone.slice(1);
  }
  const message = encodeURIComponent(siteData.whatsappMessage);
  
  const pulseVariant = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <m.a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        backgroundColor: '#25D366',
        color: 'white',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
        zIndex: 50
      }}
      variants={prefersReducedMotion ? {} : pulseVariant}
      animate="animate"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp />
    </m.a>
  );
};
