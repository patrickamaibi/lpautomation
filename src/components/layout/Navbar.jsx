import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { m, AnimatePresence } from 'framer-motion';
import { MdMenu, MdClose, MdPhone, MdEmail, MdAccessTime } from 'react-icons/md';
import { siteData } from '../../data/site';
import { servicesData } from '../../data/services';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navClass = `${styles.navbar} ${scrolled ? styles.scrolled : ''}`;

  return (
    <>
      <div className={styles.utilityBar}>
        <div className={styles.utilityContainer}>
          <div className={styles.utilityItem}>
            <MdPhone /> <span>{siteData.phone}</span>
          </div>
          <div className={styles.utilityItem}>
            <MdEmail /> <span>{siteData.email}</span>
          </div>
          <div className={styles.utilityItem}>
            <MdAccessTime /> <span>{siteData.workingHours}</span>
          </div>
        </div>
      </div>

      <header className={navClass}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>
            <img src="/logo.png" alt="LP Power & Automation" className={styles.logoImage} />
          </Link>

          <nav className={styles.desktopNav}>
            <NavLink to="/" className={({isActive}) => isActive ? styles.activeLink : styles.link}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? styles.activeLink : styles.link}>About</NavLink>
            <div className={styles.dropdown}>
              <NavLink to="/services" className={({isActive}) => isActive ? styles.activeLink : styles.link}>Services</NavLink>
              <div className={styles.dropdownMenu}>
                {servicesData.map(service => (
                  <Link key={service.id} to={`/services/${service.slug}`} className={styles.dropdownItem}>
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            <NavLink to="/projects" className={({isActive}) => isActive ? styles.activeLink : styles.link}>Projects</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? styles.activeLink : styles.link}>Contact</NavLink>
          </nav>

          <div className={styles.actions}>
            <Link to="/contact" className={styles.quoteBtn}>Get a Quote</Link>
            <button 
              className={styles.hamburger} 
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <MdMenu size={28} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div 
            className={styles.mobileMenu}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className={styles.mobileHeader}>
              <img src="/logo.png" alt="Logo" className={styles.logoImage} />
              <button 
                className={styles.closeBtn} 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <MdClose size={28} />
              </button>
            </div>
            <nav className={styles.mobileNav}>
              <Link to="/" className={styles.mobileLink}>Home</Link>
              <Link to="/about" className={styles.mobileLink}>About</Link>
              <div className={styles.mobileDropdown}>
                <Link to="/services" className={styles.mobileLink}>Services</Link>
                <div className={styles.mobileSublinks}>
                  {servicesData.map(service => (
                    <Link key={service.id} to={`/services/${service.slug}`} className={styles.mobileSublink}>
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/projects" className={styles.mobileLink}>Projects</Link>
              <Link to="/contact" className={styles.mobileLink}>Contact</Link>
            </nav>
            <div className={styles.mobileFooter}>
              <Link to="/contact" className={styles.mobileQuoteBtn}>Get a Quote</Link>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};
