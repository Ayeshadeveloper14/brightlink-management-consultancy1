import React from 'react';
import { HeroSection } from '../components/home/HeroSection.jsx';
import { AboutSection } from '../components/home/AboutSection.jsx';
import { ServicesSection } from '../components/home/ServicesSection.jsx';
import { ProcessSection } from '../components/home/ProcessSection.jsx';
import { TestimonialSection } from '../components/home/TestimonialSection.jsx';
import { FaqSection } from '../components/home/FaqSection.jsx';
import { ContactSection } from '../components/home/ContactSection.jsx';

export const HomePage = ({
  onOpenConsultation,
  onOpenCalculator,
  onSelectService
}) => {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        onOpenConsultation={() => onOpenConsultation('General Visa Inquiry')}
        onOpenCalculator={onOpenCalculator}
      />

      {/* About Section with Stats */}
      <AboutSection
        onOpenConsultation={() => onOpenConsultation('Comprehensive Assessment')}
        onExploreServices={scrollToServices}
      />

      {/* Services Section */}
      <ServicesSection
        onSelectService={onSelectService}
      />

      {/* Process Section with 3-Step Timeline */}
      <ProcessSection
        onOpenConsultation={() => onOpenConsultation('Step 1 Consultation')}
      />

      {/* Testimonials Review Section */}
      <TestimonialSection />

      {/* FAQ Accordion Section */}
      <FaqSection />

      {/* Direct Contact & Visit Section */}
      <ContactSection />
    </>
  );
};

export const Home = HomePage;
export default HomePage;
