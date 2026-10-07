import React from 'react';
import { ContactHero } from '../components/contact/ContactHero.jsx';
import { OfficeInfo } from '../components/contact/OfficeInfo.jsx';
import { ContactForm } from '../components/contact/ContactForm.jsx';

export const ContactPage = () => {
  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <ContactHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6">
            <OfficeInfo />
          </div>

          <div className="lg:col-span-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Contact = ContactPage;
export default ContactPage;
