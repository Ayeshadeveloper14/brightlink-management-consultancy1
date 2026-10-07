import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus, HelpCircle } from 'lucide-react';

export const MedicalFaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const primaryFaqs = [
    {
      q: 'What documents are required for the UAE visa medical fitness test?',
      a: 'You must bring: (1) Original Passport with at least 6 months validity, (2) A clear printed copy of your electronic UAE Entry Permit, current residence visa, or status change confirmation, and (3) Two passport-sized photographs with a white background. If you have already received your ICP Emirates ID application form, bringing it along enables simultaneous biometrics processing.'
    },
    {
      q: 'Do I need to fast before the residency medical blood test?',
      a: 'No, fasting is not required for routine UAE visa medical fitness examinations. Standard residency screening tests for HIV, Hepatitis B/C, and Pulmonary Tuberculosis via Chest X-ray. You can eat and drink normally before your screening appointment.'
    },
    {
      q: 'Can pregnant women be exempt from the mandatory Chest X-Ray?',
      a: 'Yes, pregnant applicants are strictly exempt from the chest X-ray to prevent radiation risk to the fetus. You must present an authorized obstetrician ultrasound report or medical certificate from an accredited UAE clinic. In lieu of the X-ray, the authority may conduct sputum testing or issue a conditional clearance.'
    },
    {
      q: 'What is the difference between Smart Salem VIP and regular DHA centers?',
      a: 'Smart Salem centers are high-tech executive facilities featuring autonomous AI blood drawing robots and instant digital radiology. Results are delivered via SMS within 30 minutes to 4 hours in a luxury private lounge setting with zero waiting time. Regular DHA public centers (such as Muhaisnah or Al Yulayis) process higher patient volumes with standard 24 to 48-hour turnarounds.'
    },
    {
      q: 'Can I complete my Emirates ID fingerprint biometrics at the medical center?',
      a: 'Yes, premium Smart Salem facilities (City Walk, DIFC Index Tower, and Knowledge Park) house integrated Federal ICP (Federal Authority for Identity, Citizenship, Customs and Port Security) biometrics stations. This allows you to complete both your medical screening and your physical fingerprinting in a single combined visit.'
    }
  ];

  const secondaryFaqs = [
    {
      q: 'What happens if a past lung scar is detected on the chest radiograph?',
      a: 'Under UAE Federal Health Law updates, individuals with old or healed tuberculosis scars are not automatically deemed unfit. Instead, they are placed on a monitored preventative protocol and issued a 1-year conditional residency fitness certificate with ongoing wellness check-ups, rather than facing automatic deportation.'
    },
    {
      q: 'How does BrightLink assist with VIP medical appointments and Emirates ID?',
      a: 'BrightLink pre-clears your visa files on the official government portals, types the medical application and Emirates ID forms, books your preferred Smart Salem VIP lounge slot, escorts you through the zero-wait priority lane, and monitors the digital health certificate until your physical Emirates ID is dispatched.'
    }
  ];

  const visibleFaqs = showMore ? [...primaryFaqs, ...secondaryFaqs] : primaryFaqs;

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B8864B]">
              FAQ
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] tracking-tight mb-2">
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base font-semibold text-[#B8864B]">
            Clear answers regarding medical fitness screening & Emirates ID biometrics.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {visibleFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FCFAF8] border-[#B8864B]/60 shadow-xs'
                    : 'bg-white border-[#EFEAE2] hover:border-[#DECBB5]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#222222]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#B8864B] text-white'
                        : 'bg-[#FAF5EC] text-[#B8864B]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-[#EFEAE2]/60">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Load More Button */}
        {!showMore && (
          <div className="text-center mt-8">
            <button
              type="button"
              onClick={() => setShowMore(true)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#B8864B] text-xs font-bold text-[#B8864B] hover:bg-[#B8864B] hover:text-white transition-all cursor-pointer shadow-2xs"
            >
              <span>Load more questions</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MedicalFaqSection;
