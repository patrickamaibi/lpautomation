import { Link } from 'react-router-dom';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import { siteData } from '../../data/site';
import { servicesData } from '../../data/services';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.col}>
          <img src="/logo.png" alt="LP Power & Automation" className={styles.logo} />
          <p className={styles.blurb}>{siteData.description}</p>
        </div>
        
        <div className={styles.col}>
          <h4 className={styles.heading}>Quick Links</h4>
          <ul className={styles.list}>
            {siteData.quickLinks.map(link => (
              <li key={link.path}><Link to={link.path} className={styles.link}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.heading}>Our Services</h4>
          <ul className={styles.list}>
            {servicesData.map(service => (
              <li key={service.id}><Link to={`/services/${service.slug}`} className={styles.link}>{service.title}</Link></li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.heading}>Contact Us</h4>
          <ul className={styles.contactList}>
            <li><MdPhone className={styles.icon} /> <span>{siteData.phone}</span></li>
            <li><MdEmail className={styles.icon} /> <span>{siteData.email}</span></li>
            <li><MdLocationOn className={styles.icon} /> <span>{siteData.address}</span></li>
          </ul>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <p>&copy; {new Date().getFullYear()} {siteData.name}. All rights reserved.</p>
          <Link to="/privacy" className={styles.privacyLink}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};
