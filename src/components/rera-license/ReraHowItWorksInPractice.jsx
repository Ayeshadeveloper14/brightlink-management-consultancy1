import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  GraduationCap, 
  CheckCircle, 
  ShieldCheck, 
  FileSignature, 
  QrCode, 
  Clock, 
  AlertCircle 
} from 'lucide-react';

export const ReraHowItWorksInPractice = () => {
  const practicalStages = [
    {
      step: '01',
      title: 'Initial Commercial Approval & Name Reservation',
      duration: '1 - 2 Business Days',
      icon: Building,
      summary: 'Before RERA issues authorization, your company or employment foundation must be recognized by the licensing authority.',
      details: [
        'Reserve trade name with Dubai Department of Economy and Tourism (DED) or chosen Freezone (e.g. IFZA, Meydan).',
        'Receive initial commercial approval with certified real estate activities.',
        'For individual agents: confirm job offer or sponsorship with an existing registered brokerage firm.'
      ]
    },
    {
      step: '02',
      title: 'DREI Certified Training Course Enrollment',
      duration: '4 Days (Online or In-Person)',
      icon: GraduationCap,
      summary: 'Every prospective real estate broker must attend the mandatory certified training module delivered by the Dubai Real Estate Institute.',
      details: [
        'Register for the "Certified Real Estate Broker Course".',
        'Modules cover UAE real estate history, DLD legal framework, code of ethics, contracts (Form A, B, F), and anti-money laundering (AML).',
        'Obtain the official DREI Course Completion Certificate required to sit the exam.'
      ]
    },
    {
      step: '03',
      title: 'Taking & Passing the Official RERA Examination',
      duration: '60 Minutes (Computer Exam)',
      icon: CheckCircle,
      summary: 'A computer-based multiple-choice test administered by RERA at designated examination facilities or accredited online testing centers.',
      details: [
        'Exam consists of multiple-choice questions on Dubai real estate laws, calculations, and sales procedures.',
        'Passing mark: 70% for standard candidates; 80% for real estate managers.',
        'Exam results are uploaded instantaneously to the Dubai Land Department electronic system.'
      ]
    },
    {
      step: '04',
      title: 'Dubai Police Good Conduct Clearance & Attestation',
      duration: '24 - 48 Hours',
      icon: ShieldCheck,
      summary: 'Dubai Land Department requires all licensed real estate professionals to prove clean criminal records and legal standing.',
      details: [
        'Apply for the Good Conduct Certificate via the Dubai Police smart app or MOI portal.',
        'Submit attested academic credentials (high school diploma or higher degree verified by MOFA if issued abroad).',
        'Undergo security and residency compliance checks.'
      ]
    },
    {
      step: '05',
      title: 'Commercial Office Space (Ejari) & RERA NOC',
      duration: '2 - 3 Days',
      icon: FileSignature,
      summary: 'Real estate brokerage firms must maintain a compliant physical or serviced business center office in Dubai.',
      details: [
        'Sign commercial lease agreement and register official Ejari tenancy certificate.',
        'RERA inspectors verify compliance of office signage and physical space.',
        'RERA issues the electronic NOC, allowing DED to issue the final commercial trade license.'
      ]
    },
    {
      step: '06',
      title: 'Trakheesi System Enrolment & Broker Card Issuance',
      duration: 'Instant / Same Day',
      icon: QrCode,
      summary: 'The final milestone: integration into the government Trakheesi system and digital badge activation.',
      details: [
        'Brokerage registers on DLD Trakheesi portal and links certified agents under its license.',
        'Digital RERA Broker Card is generated with an official QR code and unique Broker ID number.',
        'Activate Trakheesi advertising permits to legally market properties on PropertyFinder, Bayut, and Dubizzle.'
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] border-b border-[#EFEAE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-3">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B8864B]">
              Real-World Process
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] tracking-tight mb-4">
            How It Works in Practice
          </h2>

          <p className="text-lg sm:text-xl font-semibold text-[#B8864B] mb-3">
            The end-to-end journey from registration to your active RERA Broker ID.
          </p>

          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            Navigating RERA licensing involves synchronizing with four separate UAE government portals: DED, DREI, Dubai Police, and Dubai Land Department (Trakheesi). Here is the actual sequence handled by BrightLink on your behalf.
          </p>
        </div>

        {/* 6-Stage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {practicalStages.map((stage, index) => {
            const StageIcon = stage.icon;
            return (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="bg-white rounded-3xl p-7 border border-[#EFEAE2] hover:border-[#B8864B]/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl sm:text-4xl font-extrabold font-heading text-[#B8864B]/35 group-hover:text-[#B8864B] transition-colors">
                      {stage.step}
                    </span>

                    <div className="w-11 h-11 rounded-xl bg-[#FAF5EC] border border-[#E6D7C3] text-[#B8864B] flex items-center justify-center group-hover:bg-[#B8864B] group-hover:text-white transition-all shadow-2xs">
                      <StageIcon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#976A36] font-semibold mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Timeline: {stage.duration}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#222222] mb-3 leading-snug group-hover:text-[#B8864B] transition-colors">
                    {stage.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-4 font-normal">
                    {stage.summary}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-neutral-100">
                    {stage.details.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8864B] shrink-0 mt-1.5" />
                        <span className="text-[12px] text-[#444444] leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Practical Insight Callout */}
        <div className="mt-12 bg-white rounded-2xl border-l-4 border-[#B8864B] p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 border border-[#E6D7C3]">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#222222] mb-1">
                Important Compliance Note on Advertising
              </h4>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed max-w-2xl">
                As per DLD circulars, any real estate advertisement published online or on social media without a valid <strong>Trakheesi QR Code Permit</strong> is subject to an immediate AED 50,000 penalty. BrightLink ensures your Trakheesi integration is active on day one.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/971566556645?text=Hello%20Brightlink%2C%20I%20need%20assistance%20with%20my%20RERA%20License%20and%20Trakheesi%20permit."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#B8864B] hover:bg-[#976A36] text-white text-xs font-bold transition-all shrink-0 cursor-pointer whitespace-nowrap shadow-sm shadow-[#B8864B]/30"
          >
            <span>Ask a RERA Consultant</span>
          </a>
        </div>

      </div>
    </section>
  );
};
