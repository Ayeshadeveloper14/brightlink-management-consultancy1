import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, HeartHandshake, Building, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const DocumentTypes = ({ onOpenConsultation }) => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-20 bg-[#FAF7F2] border-t border-[#EFE5D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Accepted Categories
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3">
            Documents We Can Assist With
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            Every document category is subject to tailored authentication standards depending on its legal jurisdiction, issuing country, and intended usage inside the UAE.
          </p>
        </div>

        {/* 3 Larger Category Blocks with an Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* 01 - Educational Documents (Wider Left Block: 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DEC9] shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#FAF3E8] border border-[#EAE0D1] text-[#976A36] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 stroke-[1.8]" />
                </div>
                <span className="text-xs font-bold text-[#B8864B] tracking-wider uppercase">
                  Category 01
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2 font-heading">
                Educational Documents
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-5">
                Educational papers verify academic qualifications for MOHRE skilled labour permits, professional board licences, and university equivalency. Because standards vary, educational certificates commonly require multiple home-country verification tiers (university verification, state education departments, and foreign ministries) prior to consular and UAE MOFA attestation.
              </p>

              <div className="bg-[#FCFAF8] rounded-xl p-4 border border-[#EFEAE2] mb-6">
                <span className="text-xs font-bold text-[#8B6B3E] uppercase tracking-wider block mb-2">
                  Common Certificates Handled:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#444444]">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8864B]" />
                    Bachelor’s & Master’s Degrees
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8864B]" />
                    Diplomas & Higher Diplomas
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8864B]" />
                    School Transfer & Leaving Certificates
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8864B]" />
                    Official Academic Transcripts
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8864B]" />
                    Medical & Nursing Licences
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8864B]" />
                    Professional Board Accreditations
                  </li>
                </ul>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenConsultation ? onOpenConsultation('Educational Document Attestation') : navigate('/contact')}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#976A36] hover:text-[#B8864B] transition-colors cursor-pointer self-start"
            >
              <span>Attest Educational Documents</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* Right Column (5 cols) Stack for Personal & Commercial */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* 02 - Personal & Civil Documents */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DEC9] shadow-xs flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF3E8] border border-[#EAE0D1] text-[#976A36] flex items-center justify-center">
                    <HeartHandshake className="w-4 h-4 stroke-[1.8]" />
                  </div>
                  <span className="text-xs font-bold text-[#B8864B] tracking-wider uppercase">
                    Category 02
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1A1A1A] mb-1.5 font-heading">
                  Personal & Civil Documents
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-4">
                  Civil documents are essential for UAE family sponsorship, newborn registration, marriage recording, and court formalities.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {['Marriage Certificates', 'Birth Certificates', 'Police Clearances (PCC)', 'Death Certificates', 'Affidavits & Single Status'].map((tag, i) => (
                    <span key={i} className="text-[11px] font-medium bg-[#FCFAF8] border border-[#EFEAE2] text-[#666666] px-2.5 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenConsultation ? onOpenConsultation('Personal Document Attestation') : navigate('/contact')}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#976A36] hover:text-[#B8864B] transition-colors cursor-pointer self-start"
              >
                <span>Attest Personal Documents</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>

            {/* 03 - Commercial Documents */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DEC9] shadow-xs flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF3E8] border border-[#EAE0D1] text-[#976A36] flex items-center justify-center">
                    <Building className="w-4 h-4 stroke-[1.8]" />
                  </div>
                  <span className="text-xs font-bold text-[#B8864B] tracking-wider uppercase">
                    Category 03
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1A1A1A] mb-1.5 font-heading">
                  Commercial Documents
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-4">
                  Legalized corporate filings required for branch openings, company registration, commercial bank accounts, and legal representation.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {['Trade Licences & Certificates of Inc.', 'Memorandum of Association (MOA)', 'Powers of Attorney (POA)', 'Board Resolutions', 'Share Certificates'].map((tag, i) => (
                    <span key={i} className="text-[11px] font-medium bg-[#FCFAF8] border border-[#EFEAE2] text-[#666666] px-2.5 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenConsultation ? onOpenConsultation('Commercial Document Attestation') : navigate('/contact')}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#976A36] hover:text-[#B8864B] transition-colors cursor-pointer self-start"
              >
                <span>Attest Commercial Documents</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>

          </div>

        </div>

        {/* Disclaimer Note */}
        <div className="mt-8 text-center text-xs text-[#777777]">
          Notice: The exact authentication pipeline and requirements vary depending on whether the issuing country is a member of the Hague Apostille Convention and specific ministerial requirements.
        </div>

      </div>
    </section>
  );
};
