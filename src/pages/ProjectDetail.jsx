import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { siteData } from '../data/site';

export default function ProjectDetail() {
  const { slug } = useParams();

  return (
    <>
      <Helmet>
        <title>Project Details | {siteData.name}</title>
      </Helmet>
      <div style={{ padding: '150px 2rem 5rem', minHeight: '80vh', backgroundColor: 'var(--color-navy)', color: 'white' }}>
        <h1>Project Details: {slug}</h1>
        <p>Case study information.</p>
      </div>
    </>
  );
}
