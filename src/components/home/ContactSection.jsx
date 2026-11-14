import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  APIProvider,
  Map as GoogleMap,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Navigation,
  AlertCircle,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { getWhatsAppUrl, openWhatsApp } from '../../utils/whatsapp.js';
import { WhatsAppIcon } from '../shared/WhatsAppIcon.jsx';

const COMPANY_LOCATION = { lat: 25.193811, lng: 55.289310 };
const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/9hinPBszhuTKqb3b7';

const CompanyLocationPin = ({ title, viewLabel }) => {
  const [infoOpen, setInfoOpen] = useState(false);
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={COMPANY_LOCATION}
        title={title}
        onClick={() => setInfoOpen((prev) => !prev)}
      >
        <Pin
          background="#B8864B"
          borderColor="#8C6230"
          glyphColor="#FFFFFF"
        />
      </AdvancedMarker>
      {infoOpen && marker && (
        <InfoWindow
          anchor={marker}
          maxWidth={250}
          onCloseClick={() => setInfoOpen(false)}
        >
          <div className="p-1 text-left space-y-1.5">
            <p className="text-xs font-bold text-[#222222] leading-snug">
              {title}
            </p>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#8C6230] hover:text-[#B8864B] underline"
            >
              <span>{viewLabel}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </InfoWindow>
      )}
    </>
  );
};

export const ContactSection = () => {
  const { currentLanguage, t, tItem, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Golden Visa',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const mapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#FCFAF8] relative border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5F1EB] border border-[#B8864B]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
              {t('contact_badge', 'Get In Touch')}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight">
            {t('contact_title', 'Visit Our Business Bay Office')}
          </h2>

          <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
            {t('contact_subtitle', 'Have questions about UAE visas, passport renewal, or company setup? Consult with our senior immigration typists directly or submit an inquiry.')}
          </p>
        </div>

        {/* Two-Column Layout with Fade-Up Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT: Interactive Map & Contact Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-5"
          >
            {/* Company Location Live Interactive Google Map */}
            <div className="w-full rounded-2xl overflow-hidden border border-neutral-200/90 shadow-md bg-white lg:flex-1 flex flex-col">
              <div className="relative w-full h-[340px] sm:h-[400px] lg:h-auto lg:flex-1 lg:min-h-[440px] bg-neutral-100">
                <div className="absolute inset-0 w-full h-full">
                  {mapsApiKey ? (
                    <APIProvider apiKey={mapsApiKey} libraries={['marker']} language={currentLanguage}>
                      <GoogleMap
                        mapId="DEMO_MAP_ID"
                        defaultCenter={COMPANY_LOCATION}
                        defaultZoom={16}
                        gestureHandling="cooperative"
                        disableDefaultUI={false}
                        internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                        style={{ width: '100%', height: '100%' }}
                      >
                        <CompanyLocationPin
                          title="Brightlink Management Consultancy LLC"
                          viewLabel={t('map_view_google_maps', 'View on Google Maps')}
                        />
                      </GoogleMap>
                    </APIProvider>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#F7F4EF] gap-3">
                      <MapPin className="w-8 h-8 text-[#B8864B]" />
                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#222222] hover:bg-[#B8864B] text-white text-xs font-semibold transition-colors shadow-sm"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>{t('map_view_google_maps', 'View on Google Maps')}</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <a
                href="tel:+971566556645"
                className="p-4 rounded-xl border border-neutral-200/90 bg-white hover:border-[#B8864B] transition-all flex items-center gap-3 shadow-xs group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] group-hover:bg-[#B8864B] group-hover:text-white text-[#B8864B] flex items-center justify-center shrink-0 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-neutral-500 uppercase">{t('contact_direct_helpline', 'Direct Helpline')}</p>
                  <p className="text-xs sm:text-sm font-bold text-[#222222] tabular-nums mt-0.5">+971 56 655 6645</p>
                </div>
              </a>

              <a
                href={getWhatsAppUrl(null, currentLanguage)}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl border border-neutral-200/90 bg-white hover:border-[#25D366] transition-all flex items-center gap-3 shadow-xs group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 group-hover:bg-[#25D366] group-hover:text-white text-[#25D366] flex items-center justify-center shrink-0 transition-colors">
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-neutral-500 uppercase">{t('contact_whatsapp_desk', 'WhatsApp Desk')}</p>
                  <p className="text-xs sm:text-sm font-bold text-[#222222] tabular-nums mt-0.5">+971 56 655 6645</p>
                </div>
              </a>

              <a
                href="mailto:info@brightlinkconsulting.ae"
                className="p-4 rounded-xl border border-neutral-200/90 bg-white hover:border-[#B8864B] transition-all flex items-center gap-3 shadow-xs group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] group-hover:bg-[#B8864B] group-hover:text-white text-[#B8864B] flex items-center justify-center shrink-0 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <p className="text-[11px] font-bold text-neutral-500 uppercase">{t('contact_official_email', 'Official Email')}</p>
                  <p className="text-xs font-bold text-[#222222] truncate mt-0.5">info@brightlinkconsulting.ae</p>
                </div>
              </a>

              <div className="p-4 rounded-xl border border-neutral-200/90 bg-white flex items-center gap-3 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] text-[#B8864B] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-neutral-500 uppercase">{t('contact_working_hours', 'Working Hours')}</p>
                  <p className="text-xs font-bold text-[#222222] mt-0.5">{t('contact_working_hours_val', 'Mon – Sat: 9 AM – 6 PM')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Modern Consultation Form */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/90 shadow-xl"
          >
            {!submitted ? (
              <>
                <div className="mb-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B]">
                    {t('contact_badge', 'Get In Touch')}
                  </span>
                  <h3 className="text-2xl font-bold text-[#222222] mt-1">
                    {t('contact_title', 'Send Us a Message')}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] mt-1">
                    {t('contact_subtitle', 'Fill out the form and our UAE certified consulting team will get back to you shortly.')}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#333333] mb-1">
                      {t('contact_form_name', 'Full Name')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t('contact_form_name_ph', 'e.g. Alexander Wright')}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:ring-1 focus:ring-[#B8864B] focus:outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-[#333333] mb-1">
                        {t('contact_form_email', 'Email Address')} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t('contact_form_email_ph', 'e.g. alex@company.com')}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:ring-1 focus:ring-[#B8864B] focus:outline-none transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-[#333333] mb-1">
                        {t('contact_form_phone', 'Phone Number')} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t('contact_form_phone_ph', '+971 50 123 4567')}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:ring-1 focus:ring-[#B8864B] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-xs font-semibold text-[#333333] mb-1">
                      {t('contact_form_service', 'Service Required')} *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:ring-1 focus:ring-[#B8864B] focus:outline-none transition-all"
                    >
                      <option value="Golden Visa">{t('service_golden_visa', 'UAE Golden Visa (10-Yr)')}</option>
                      <option value="Family Visa">{t('service_family_visa', 'Family Visa Sponsorship')}</option>
                      <option value="Business Visa">{t('service_business_visa', 'Business & Partner Visa')}</option>
                      <option value="Residence Visa">{t('service_residence_visa', 'Employment Residence Visa')}</option>
                      <option value="Tourist Visa">{t('service_tourist_visa', 'Tourist & Visit Visa')}</option>
                      <option value="Medical Visa">{t('service_medical_visa', 'Medical Visa & VIP Fitness')}</option>
                      <option value="Visa Assistance">{t('service_visa_assistance', 'Visa Assistance & Fine Waivers')}</option>
                      <option value="Passport Services">{t('service_passport_services', 'Passport Services (BLS/Indian/Global)')}</option>
                      <option value="Visa Renewal">{t('service_visa_renewal', 'Visa Renewal & Emirates ID')}</option>
                      <option value="Document Attestation">{t('service_doc_attest', 'MOFA Document Attestation')}</option>
                      <option value="Emirates ID">{t('service_emirates_id', 'Emirates ID Registration')}</option>
                      <option value="Business Setup">{t('service_business_setup', 'Business Setup & Trade License')}</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[#333333] mb-1">
                      {t('contact_form_message', 'Message / Case Details')}
                    </label>
                    <textarea
                      rows={3.5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t('contact_form_message_ph', 'Please describe your visa status, family members, or business setup goals...')}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:ring-1 focus:ring-[#B8864B] focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Button */}
                  <div className="pt-1">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C5985B] to-[#976A36] hover:from-[#D4A76A] hover:to-[#A77945] text-white font-semibold text-xs sm:text-sm shadow-md shadow-[#B8864B]/20 hover:shadow-lg transition-all cursor-pointer whitespace-nowrap disabled:opacity-70"
                    >
                      {loading ? (
                        <span>{t('contact_form_submitting', 'Submitting Request...')}</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{t('contact_form_submit', 'Send Consultation Request')}</span>
                        </>
                      )}
                    </motion.button>
                  </div>

                  <p className="text-center text-xs text-neutral-500 pt-1">
                    {t('contact_trust_badge', 'Direct government accredited typing. No agency spam.')}
                  </p>
                </form>
              </>
            ) : (
              <div className="py-10 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#222222]">
                  {t('contact_form_success_title', 'Consultation Request Sent!')}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] max-w-sm mx-auto leading-relaxed">
                  {t('contact_form_success', 'Thank you! Your request has been received. Our senior legal consultant will contact you within 15 minutes.')}
                </p>
                <div className="pt-3 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      openWhatsApp(formData.service, currentLanguage, { extraDetails: formData.name ? `Client: ${formData.name}` : '' });
                    }}
                    className="px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#1EBE5D] transition-colors cursor-pointer"
                  >
                    WhatsApp
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-neutral-100 text-neutral-700 text-xs font-bold hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    {t('btn_ok', 'OK')}
                  </button>
                </div>
              </div>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
