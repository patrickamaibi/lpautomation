import { Helmet } from 'react-helmet-async';
import { siteData } from '../data/site';

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | {siteData.name}</title>
      </Helmet>
      <div style={{ padding: '150px 2rem 5rem', minHeight: '80vh', backgroundColor: 'var(--color-navy)', color: 'white' }}>
        <h1>Privacy Policy</h1>
        <p>Standard text covering form data collected and analytics.</p>
      </div>
    </>
  );
}
