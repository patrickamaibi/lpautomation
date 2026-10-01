import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { siteData } from '../data/site';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | {siteData.name}</title>
      </Helmet>
      <div style={{ padding: '150px 2rem 5rem', minHeight: '80vh', backgroundColor: 'var(--color-navy)', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1>404 - Page Not Found</h1>
        <p style={{ margin: '1rem 0 2rem' }}>Sorry, the page you are looking for doesn't exist.</p>
        <Link to="/" style={{ color: 'var(--color-amber)', textDecoration: 'underline' }}>Return to Home</Link>
      </div>
    </>
  );
}
