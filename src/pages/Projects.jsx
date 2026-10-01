import { Helmet } from 'react-helmet-async';
import { siteData } from '../data/site';

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects | {siteData.name}</title>
      </Helmet>
      <div style={{ padding: '150px 2rem 5rem', minHeight: '80vh', backgroundColor: 'var(--color-navy)', color: 'white' }}>
        <h1>Projects</h1>
        <p>Filterable gallery of projects.</p>
      </div>
    </>
  );
}
