import { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet, useRouteError } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

const ErrorBoundary = () => {
  const error = useRouteError();
  return (
    <div style={{ padding: '2rem', color: 'red', backgroundColor: 'white' }}>
      <h1>Application Error</h1>
      <pre>{error?.message || error?.statusText || JSON.stringify(error)}</pre>
      <pre style={{ fontSize: '0.8rem', marginTop: '1rem' }}>{error?.stack}</pre>
    </div>
  );
};

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const NotFound = lazy(() => import('./pages/NotFound'));

// A simple fallback loader
const PageLoader = () => (
  <div style={{ minHeight: '100svh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-navy)', color: 'var(--color-amber)' }}>
    Loading...
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Suspense fallback={<PageLoader />}><Outlet /></Suspense></Layout>,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'services/:slug', element: <ServiceDetail /> },
      { path: 'projects', element: <Projects /> },
      { path: 'projects/:slug', element: <ProjectDetail /> },
      { path: 'contact', element: <Contact /> },
      { path: 'privacy', element: <Privacy /> },
      { path: '*', element: <NotFound /> },
    ]
  }
]);
