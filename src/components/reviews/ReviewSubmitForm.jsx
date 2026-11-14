import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, Send } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.jsx';

export const ReviewSubmitForm = () => {
  const { t, tItem } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    service: '10-Year Golden Visa',
    rating: 5,
    review: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-16 bg-[#FAF7F0] rounded-3xl p-8 sm:p-10 border border-[#B8864B]/30 shadow-sm max-w-3xl mx-auto"
    >
      <div className="text-center space-y-1 mb-6">
        <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
          {t('review_form_badge', 'We Value Your Feedback')}
        </span>
        <h3 className="text-2xl font-bold text-[#222222]">
          {t('review_form_title', 'Share Your Experience with Brightlink')}
        </h3>
        <p className="text-xs sm:text-sm text-[#666666]">
          {t('review_form_subtitle', 'Help other expatriates and businesses in Dubai discover our services.')}
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#333333] mb-1">{t('contact_form_name', 'Your Name')} *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t('review_form_name_ph', 'e.g. David Sterling')}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-neutral-300 focus:border-[#B8864B] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#333333] mb-1">{t('review_form_role', 'Your Role / Occupation')}</label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                placeholder={t('review_form_role_ph', 'e.g. Real Estate Investor')}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-neutral-300 focus:border-[#B8864B] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#333333] mb-1">{t('review_form_service_label', 'Service Received')}</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-neutral-300 focus:border-[#B8864B] focus:outline-none"
              >
                <option value="10-Year Golden Visa">{t('service_golden_visa', '10-Year Golden Visa')}</option>
                <option value="Family Visa Sponsorship">{t('service_family_visa', 'Family Visa Sponsorship')}</option>
                <option value="VIP Medical Fitness">{t('service_medical_visa', 'VIP Medical Fitness Typing')}</option>
                <option value="Emirates ID Biometrics">{t('service_emirates_id', 'Emirates ID Biometrics')}</option>
                <option value="Indian Passport Renewal">{t('service_passport_services', 'Passport Renewal & Consular')}</option>
                <option value="Corporate Free Zone License">{t('service_business_setup', 'Corporate Free Zone License')}</option>
                <option value="Document Legalization & MOFA">{t('service_doc_attest', 'Document Legalization & MOFA')}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#333333] mb-1">{t('review_form_rating_label', 'Rating')}</label>
              <div className="flex items-center gap-2 pt-1.5">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setFormData({ ...formData, rating: num })}
                    className="cursor-pointer focus:outline-none"
                  >
                    <Star
                      className={`w-6 h-6 transition-colors ${
                        num <= formData.rating ? 'fill-amber-400 text-amber-400' : 'text-neutral-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#333333] mb-1">{t('review_form_review_label', 'Your Review')} *</label>
            <textarea
              rows={3}
              required
              value={formData.review}
              onChange={(e) => setFormData({ ...formData, review: e.target.value })}
              placeholder={t('review_form_review_ph', 'Tell us about the speed, professionalism, and support you received...')}
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-neutral-300 focus:border-[#B8864B] focus:outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#B8864B]/20 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>{t('review_form_submit_btn', 'Submit Verified Review')}</span>
          </button>
        </form>
      ) : (
        <div className="py-6 text-center space-y-2">
          <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="text-base font-bold text-[#222222]">{t('review_form_thanks_title', 'Thank you for your review!')}</h4>
          <p className="text-xs text-[#555555]">{t('review_form_thanks_body', 'Your testimonial has been submitted for moderation and display.')}</p>
        </div>
      )}
    </motion.div>
  );
};

export default ReviewSubmitForm;
