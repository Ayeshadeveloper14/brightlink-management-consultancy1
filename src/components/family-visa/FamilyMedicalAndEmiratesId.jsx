import React from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  CreditCard, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  Sparkles,
  Zap,
  Building,
  HeartPulse
} from 'lucide-react';

export const FamilyMedicalAndEmiratesId = ({ onOpenConsultation }) => {
  const medicalTiers = [
    {
      title: 'Standard Medical Screening',
      time: '24 – 48 Hours',
      desc: 'Routine DHA medical fitness examination across standard centers including Al Muhaisnah & Al Nahda.',
      badge: 'Economical',
      features: ['Blood test (HIV & Hepatitis)', 'Chest X-ray (TB)', 'Electronic result to GDRFA']
    },
    {
      title: 'Express 24-Hour Screening',
      time: '12 – 24 Hours',
      desc: 'Expedited processing for families on tight visa deadlines or upcoming travel commitments.',
      badge: 'Fast-Track',
      features: ['Priority laboratory queue', 'Direct SMS notification', 'Expedited GDRFA clearance']
    },
    {
      title: 'VIP Smart Salem (4 Hours)',
      time: '4 – 6 Hours',
      desc: 'AI-assisted luxury screening at City Walk, Dubai Mall, or Knowledge Park with no needle pain & instant results.',
      badge: 'VIP Executive',
      popular: true,
      features: ['Automated blood collection', 'Instant AI chest X-ray', 'Luxury private lounge & refreshments', 'Zero queue time']
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#EFEAE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#B8864B]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8C6230]">
              Mandatory UAE Health & Identity
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight font-heading">
            DHA Medical Fitness & Emirates ID Biometrics
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#4B5563] leading-relaxed">
            Prior to electronic residence visa approval, every adult dependent (18+) must undergo a mandatory government medical screening and biometric capture. BrightLink books priority appointments and provides chauffeur coordination if needed.
          </p>
        </div>

        {/* Two Primary Pillars: Medical Screening & Emirates ID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Pillar 1: Medical Fitness Examination (6 Cols) */}
          <div className="lg:col-span-6 bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-[#E6D7C3] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E6D7C3] text-[#B8864B] flex items-center justify-center shadow-xs">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-[#8C6230] bg-white px-3 py-1 rounded-full border border-[#DECBB5]">
                  Ages 18 & Older Only
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#111827] font-heading">
                  DHA Medical Fitness Examination
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed mt-1">
                  Required by Dubai Health Authority (DHA) for all adult family members (spouse, adult children 18+, and parents). Children under 18 years old are completely exempt.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 text-xs text-[#374151]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111827]">Blood Screening:</span> Tests for communicable diseases including HIV 1 & 2 and Hepatitis B/C (vaccination provided if non-immune).
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111827]">Chest X-Ray:</span> Screened for active pulmonary tuberculosis (TB). Old scar tissue will be evaluated for preventive treatment.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111827]">Digital Sync:</span> Certificate is transmitted automatically to the GDRFA Dubai immigration portal within hours.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E8DFC8]">
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-500">Service Locations:</span>
                <span className="font-bold text-[#111827]">Smart Salem, Al Nahda, City Walk</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: Emirates ID Biometrics (6 Cols) */}
          <div className="lg:col-span-6 bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-[#E6D7C3] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E6D7C3] text-[#B8864B] flex items-center justify-center shadow-xs">
                  <CreditCard className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-[#8C6230] bg-white px-3 py-1 rounded-full border border-[#DECBB5]">
                  Federal ICP Authority
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#111827] font-heading">
                  Emirates ID Biometrics & Typing
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed mt-1">
                  The Emirates ID serves as your official national identity card. It contains biometric cryptographic security chips and replaces physical passport visa stickers in the UAE.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 text-xs text-[#374151]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111827]">Biometric Appointment:</span> 10-finger fingerprint scanning, facial recognition, and iris capture at accredited ICP centers.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111827]">Who Must Attend:</span> First-time applicants aged 15 and above. Children under 15 have IDs issued without physical biometrics.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111827]">Express Delivery:</span> Physical smart cards printed and dispatched via Empost to your home or office within 48 hours of approval.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E8DFC8]">
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-500">Validity:</span>
                <span className="font-bold text-[#111827]">Matches 2-Year Residency Visa</span>
              </div>
            </div>
          </div>

        </div>

        {/* Speed Comparison Tiers: Standard vs Express vs VIP */}
        <div className="mb-12">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
              Service Speeds
            </span>
            <h3 className="text-xl font-bold text-[#111827] mt-1">
              Choose Your Medical Fitness Speed
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {medicalTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                  tier.popular
                    ? 'bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EC] border-[#B8864B] shadow-md relative'
                    : 'bg-white border-neutral-200/80 hover:border-[#B8864B]/40 shadow-xs'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#B8864B] text-white text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-full shadow-xs">
                    Recommended for Families
                  </div>
                )}

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#8C6230]">
                      {tier.badge}
                    </span>
                    <span className="text-xs font-extrabold text-[#111827] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#B8864B]" />
                      {tier.time}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#111827]">
                    {tier.title}
                  </h4>

                  <p className="text-xs text-[#555555] leading-relaxed">
                    {tier.desc}
                  </p>

                  <div className="space-y-2 pt-2 text-xs text-[#374151]">
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-neutral-100">
                  <button
                    type="button"
                    onClick={() => onOpenConsultation(`Medical Typing: ${tier.title}`)}
                    className={`w-full py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      tier.popular
                        ? 'bg-[#B8864B] hover:bg-[#A07038] text-white shadow-xs'
                        : 'bg-neutral-100 hover:bg-[#FAF5EC] hover:text-[#8C6230] text-[#374151]'
                    }`}
                  >
                    Select {tier.title.split(' ')[0]} Option
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mandatory Health Insurance Notice */}
        <div className="bg-[#FAF5EC] rounded-2xl p-6 border border-[#DECBB5] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#E6D7C3] text-[#B8864B] flex items-center justify-center shrink-0">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#111827]">
                Mandatory Health Insurance for Family Members
              </h4>
              <p className="text-xs text-[#555555] leading-relaxed mt-0.5">
                Under Dubai Health Insurance Law No. 11 of 2013, the sponsor must provide basic DHA-compliant health insurance (Essential Benefits Plan - EBP) or comprehensive medical insurance for every sponsored dependent before visa issuance.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation('Family Health Insurance Assistance')}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-[#8C6230] bg-white border border-[#DECBB5] hover:bg-[#B8864B] hover:text-white transition-all shadow-xs shrink-0 cursor-pointer"
          >
            Get Insurance Quotes
          </button>
        </div>

      </div>
    </section>
  );
};

export default FamilyMedicalAndEmiratesId;
