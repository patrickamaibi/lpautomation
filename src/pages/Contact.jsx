import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import { siteData } from '../data/site';
import { SectionHeading } from '../components/ui/SectionHeading';
import styles from './Contact.module.css';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for actual form submission logic (Web3Forms/Formspree)
    setStatus('Sending...');
    setTimeout(() => setStatus('Message sent successfully! We will contact you soon.'), 1000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | {siteData.name}</title>
      </Helmet>

      <div className={styles.pageHeader}>
        <div className={styles.container}>
          <SectionHeading 
            eyebrow="Get In Touch"
            title="Contact Us"
            description="Request a free quote or schedule a consultation with our engineering team."
          />
        </div>
      </div>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            
            <div className={styles.formCol}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" required />
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number *</label>
                    <input type="tel" id="phone" pattern="[0-9\+\-\s]+" required />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="service">Service Needed</label>
                  <select id="service">
                    <option value="">Select a service...</option>
                    <option value="automation">Automation & Control</option>
                    <option value="electrical">Electrical Wiring</option>
                    <option value="solar">Solar Installation</option>
                    <option value="smart-home">Smart Homes</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Project Description *</label>
                  <textarea id="message" rows="5" required></textarea>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Send Message
                </button>
                {status && <p className={styles.statusMsg}>{status}</p>}
              </form>
            </div>

            <div className={styles.infoCol}>
              <div className={styles.infoCard}>
                <h3>Contact Information</h3>
                <ul className={styles.infoList}>
                  <li>
                    <MdPhone className={styles.icon} />
                    <div>
                      <strong>Phone</strong>
                      <span>{siteData.phone}</span>
                    </div>
                  </li>
                  <li>
                    <MdEmail className={styles.icon} />
                    <div>
                      <strong>Email</strong>
                      <span>{siteData.email}</span>
                    </div>
                  </li>
                  <li>
                    <MdLocationOn className={styles.icon} />
                    <div>
                      <strong>Address</strong>
                      <span>{siteData.address}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
