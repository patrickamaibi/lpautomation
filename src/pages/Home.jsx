import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/home/Hero';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { CTABanner } from '../components/ui/CTABanner';
import { siteData } from '../data/site';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{siteData.name} | Electrical, Automation, Solar and Smart Home Engineering</title>
        <meta name="description" content={siteData.description} />
      </Helmet>
      
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <ProcessTimeline />
      
      {/* Featured Projects and Testimonials placeholders for now */}
      
      <CTABanner />
    </>
  );
}
