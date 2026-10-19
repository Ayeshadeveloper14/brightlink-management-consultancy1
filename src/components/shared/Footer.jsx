import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Linkedin,
  ExternalLink,
  Building2,
  FileText
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.jsx';

export const Footer = () => {
  const { t, tItem } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Verified Official UAE Government Portals
  const governmentPortals = [
    { name: 'ICP', fullName: 'Federal Authority for Identity & Citizenship', url: 'https://icp.gov.ae' },
    { name: 'GDRFA Dubai', fullName: 'Residency & Foreigners Affairs Dubai', url: 'https://gdrfad.gov.ae' },
    { name: 'DET', fullName: 'Department of Economy & Tourism', url: 'https://www.dubaidet.gov.ae' },
    { name: 'MOFA', fullName: 'Ministry of Foreign Affairs', url: 'https://www.mofa.gov.ae' },
    { name: 'MOHRE', fullName: 'Ministry of Human Resources & Emiratisation', url: 'https://www.mohre.gov.ae' },
    { name: 'UAE Government Portal', fullName: 'Official UAE Portal (u.ae)', url: 'https://u.ae' }
  ];

  // Quick navigation links
  const quickLinks = [
    { label: t('nav_home', 'Home'), path: '/' },
    { label: t('nav_about', 'About Us'), path: '/about' },
    { label: t('nav_services', 'All Services'), path: '/services' },
    { label: 'Visa Check', path: '/visa-check' },
    { label: t('hero_cta_calculator', 'Calculator'), path: '/calculator' },
    { label: 'Blog', path: '/blog' },
    { label: t('nav_contact', 'Contact Us'), path: '/contact' }
  ];

  // Primary service pages
  const serviceLinks = [
    { label: tItem('10-Year Golden Visa'), path: '/golden-visa' },
    { label: tItem('Family Visa Sponsorship'), path: '/family-visa' },
    { label: tItem('Partner & Investor Visa'), path: '/investor-visa' },
    { label: tItem('Dubai & UAE Tourist Visa'), path: '/tourist-visa' },
    { label: tItem('Virtual Work Visa'), path: '/virtual-work-visa' },
    { label: 'Business Setup & Free Zones', path: '/business-setup' },
    { label: 'Document Attestation (MOFA)', path: '/attestation' },
    { label: tItem('Medical & Emirates ID'), path: '/medical-finder' }
  ];

  return (
    <footer className="bg-[#14171F] text-neutral-300 pt-16 pb-10 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* ============================================================ */}
        {/* 1. Main Footer 4-Column Grid                                  */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-neutral-800/80">
          
          {/* Column 1: Brand and Introduction (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C5985B] to-[#976A36] text-white flex items-center justify-center font-bold text-lg shadow-sm transition-transform group-hover:scale-105">
                BT
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">
                  Bright<span className="text-[#B8864B]">link</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400 mt-0.5">
                  Typing & Consulting
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-[13px] text-neutral-300/90 leading-relaxed max-w-sm">
              Brightlink Management Consultancy L.L.C. provides professional business setup, visa typing, document preparation, and application assistance services in the UAE.
            </p>

            {/* Accreditation Badge */}
            <div className="pt-1 flex items-center gap-2 text-xs text-neutral-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#B8864B] shrink-0" />
              <span>DET Licensed · GDRFA & ICP Portal Assistance</span>
            </div>

            {/* Direct Channel Action Icons */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://wa.me/971566556645"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp (+971 56 655 6645)"
                className="w-9 h-9 rounded-xl bg-neutral-800/90 hover:bg-[#25D366] text-neutral-300 hover:text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
              </a>

              <a
                href="tel:+971566556645"
                aria-label="Call +971 56 655 6645"
                className="w-9 h-9 rounded-xl bg-neutral-800/90 hover:bg-[#B8864B] text-neutral-300 hover:text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href="mailto:info@brightlinkconsulting.ae"
                aria-label="Email info@brightlinkconsulting.ae"
                className="w-9 h-9 rounded-xl bg-neutral-800/90 hover:bg-[#B8864B] text-neutral-300 hover:text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-xl bg-neutral-800/90 hover:bg-[#0077B5] text-neutral-300 hover:text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-neutral-400 hover:text-[#B8864B] transition-colors inline-block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              {serviceLinks.map((srv) => (
                <li key={srv.path}>
                  <Link
                    to={srv.path}
                    className="text-neutral-400 hover:text-[#B8864B] transition-colors flex items-center gap-1.5 py-0.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-[#B8864B]/80 group-hover:translate-x-0.5 transition-transform shrink-0" />
                    <span>{srv.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              Contact Information
            </h4>
            <div className="space-y-3 text-xs text-neutral-400">
              
              {/* Phone */}
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] uppercase font-bold text-neutral-500">Phone Helpline</span>
                  <a 
                    href="tel:+971566556645" 
                    className="text-neutral-200 hover:text-[#B8864B] font-medium tabular-nums transition-colors"
                  >
                    +971 56 655 6645
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] uppercase font-bold text-neutral-500">WhatsApp Desk</span>
                  <a 
                    href="https://wa.me/971566556645" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-200 hover:text-[#25D366] font-medium tabular-nums transition-colors"
                  >
                    +971 56 655 6645
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="block text-[10px] uppercase font-bold text-neutral-500">Official Email</span>
                  <a 
                    href="mailto:info@brightlinkconsulting.ae" 
                    className="text-neutral-200 hover:text-[#B8864B] transition-colors break-all"
                  >
                    info@brightlinkconsulting.ae
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] uppercase font-bold text-neutral-500">Working Hours</span>
                  <p className="text-neutral-200">Mon – Sat: 9:00 AM – 6:00 PM GST</p>
                  <p className="text-neutral-500">Sunday: Closed</p>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] uppercase font-bold text-neutral-500">Headquarters</span>
                  <a
                    href="https://maps.google.com/?q=Crystal+Tower+Business+Bay+Dubai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-white leading-relaxed block transition-colors"
                  >
                    Office M08-27, M1 Floor, Crystal Tower, Millennium Central Same Building, Al Asayel St, Business Bay, Dubai, UAE — PO Box: 554552
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* 2. Official Government Portals Section                        */}
        {/* ============================================================ */}
        <div className="pt-2 pb-6 border-b border-neutral-800/80 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h5 className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 font-heading flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#B8864B]" />
              <span>Official Government Portals (Direct Applicant Access)</span>
            </h5>
            <span className="text-[11px] text-neutral-500">
              Verified UAE Government Immigration & Business Gateways
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {governmentPortals.map((portal) => (
              <a
                key={portal.name}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                title={portal.fullName}
                className="px-3 py-1.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-[#B8864B] border border-neutral-800 hover:border-[#B8864B]/40 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
              >
                <span>{portal.name}</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. Important Legal and Business Disclosure                    */}
        {/* ============================================================ */}
        <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-3.5 text-xs text-neutral-300/90 leading-relaxed">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#B8864B] shrink-0" />
            <h5 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Business & Service Disclaimer
            </h5>
          </div>

          <div className="space-y-2.5 text-neutral-300 text-xs sm:text-[13px] leading-relaxed max-w-5xl">
            <p>
              Brightlinktyping.com is operated by <strong>Brightlink Management Consultancy L.L.C.</strong>, an independent private consultancy and third-party professional services provider, licensed by Dubai’s Department of Economy and Tourism (DET) under <strong>Licence No. 1053387</strong>.
            </p>

            <p>
              With customer authorisation, we assist with business setup, visa typing, document preparation, application completion, and submission through relevant official channels. Government fees are determined by the relevant authorities and paid directly to them, while our professional service fees are charged separately and disclosed before service confirmation.
            </p>

            <p>
              Brightlink Typing is an independent private service provider and is not a government authority. Applicants may also apply directly through the relevant official government portals. All prices, timelines, and eligibility information published on this website are estimates for general guidance only. They do not constitute legal advice or guarantee approval by any government authority.
            </p>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 4. Bottom Copyright Bar                                       */}
        {/* ============================================================ */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p className="text-center sm:text-left">
            © {currentYear} Brightlink Management Consultancy L.L.C. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-neutral-400 text-center sm:text-right">
            <span>Dubai DET Licence No. 1053387</span>
            <span className="hidden sm:inline">·</span>
            <span>Crystal Tower, Business Bay, Dubai</span>
            <span className="hidden sm:inline">·</span>
            <span className="text-[#B8864B]">Independent Private Consultancy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
