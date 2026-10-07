import React from 'react';
import { PageHero } from '../components/shared/PageHero.jsx';
import { OurStory } from '../components/about/OurStory.jsx';
import { CoreValues } from '../components/about/CoreValues.jsx';
import { Milestones } from '../components/about/Milestones.jsx';

export const AboutPage = ({ onOpenConsultation }) => {
  const heroStats = [
    { value: '20+ Years', label: 'Established in Dubai' },
    { value: '10,000+', label: 'Successful Visas' },
    { value: '98%+', label: 'First-Attempt Approval' },
    { value: '15+ Govt', label: 'Accredited Portals' }
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <PageHero
        badge="20+ Years Dubai Immigration Heritage"
        title="About"
        titleHighlight="BrightLink Typing"
        description="Headquartered in Crystal Tower, Business Bay, BrightLink is Dubai’s premier authorized government typing and visa consulting center, helping thousands of families, investors, and corporations secure UAE residency."
        breadcrumbs={[
          { label: 'About Us' }
        ]}
        image="/images/about_visa_consultant_1790842347102.jpg"
        stats={heroStats}
        onOpenConsultation={() => onOpenConsultation('About Us Inquiry')}
        showConsultationBtn={true}
        showWhatsAppBtn={true}
      />

      <OurStory />

      <section className="py-20 bg-[#FCFAF8] border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <CoreValues />
          <Milestones />
        </div>
      </section>
    </div>
  );
};

export const About = AboutPage;
export default AboutPage;
