import React, { useEffect } from 'react';
import { ContactHero } from '../components/contact/ContactHero.jsx';
import { ContactInfoCards } from '../components/contact/ContactInfoCards.jsx';
import { BusinessHours } from '../components/contact/BusinessHours.jsx';
import { ContactForm } from '../components/contact/ContactForm.jsx';
import { OfficeMap } from '../components/contact/OfficeMap.jsx';

export const ContactPage = ({ onOpenConsultation }) => {
  useEffect(() => {
    // 1. Set Document Title
    document.title = 'Contact Brightlink Typing & Consulting | Crystal Tower Business Bay Dubai';

    // 2. Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Contact Brightlink Typing & Legal Consulting in Business Bay, Dubai. Direct helpline +971 56 655 6645, WhatsApp assistance, opening hours, and official government typing services.';

    // 3. Set Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/contact`;

    // 4. Inject Schema.org LocalBusiness Structured Data
    const schemaScriptId = 'brightlink-contact-schema';
    let scriptTag = document.getElementById(schemaScriptId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaScriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'Brightlink Typing & Consulting',
      'telephone': '+971566556645',
      'email': 'info@brightlinkconsulting.ae',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Office M08-27, M1 Floor, Crystal Tower, Al Asayel St, Business Bay',
        'addressLocality': 'Dubai',
        'addressCountry': 'AE',
        'postalCode': '554552'
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '09:00',
          'closes': '18:00'
        }
      ],
      'url': window.location.origin
    };

    scriptTag.text = JSON.stringify(structuredData);

    // Scroll to top on mount
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    return () => {
      const el = document.getElementById(schemaScriptId);
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="bg-[#FFFFFF] min-h-screen w-full max-w-full overflow-x-clip">
      {/* 1. Attractive Modern Hero Section */}
      <ContactHero onOpenConsultation={onOpenConsultation} />

      {/* 2. Main Content Container */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FCFAF8] border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
          
          {/* Contact Information Channels (4 Cards) */}
          <ContactInfoCards />

          {/* Form & Operating Hours Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Business Hours & Interactive Map (6 Cols) */}
            <div className="lg:col-span-6 space-y-8">
              <BusinessHours />
              <OfficeMap />
            </div>

            {/* Right Column: Redesigned Functional Contact Form (6 Cols) */}
            <div className="lg:col-span-6 sticky top-28">
              <ContactForm />
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export const Contact = ContactPage;
export default ContactPage;
