import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  UserCheck, 
  MapPin, 
  Compass, 
  FileSignature, 
  Building2, 
  Zap, 
  KeyRound, 
  Info 
} from 'lucide-react';

export const RevaluationRequiredDocsSection = () => {
  const documents = [
    {
      title: 'Title Deed or Oqood Copy',
      description: 'Official proof of ownership registered with the Dubai Land Department (electronic or physical certificate).',
      icon: FileText
    },
    {
      title: 'Owner Identification Documents',
      description: 'Clear color passport copy, Emirates ID (for UAE residents), and current visa copy of all registered title owners.',
      icon: UserCheck
    },
    {
      title: 'Unit & Building Coordinates',
      description: 'Exact unit number, tower name, master community name, and Makani number or official plot number.',
      icon: MapPin
    },
    {
      title: 'Architectural Floor Plans',
      description: 'Approved developer floor plan or unit layout drawing demonstrating net internal area and balcony size.',
      icon: Compass
    },
    {
      title: 'Ejari Tenancy Contract (If Rented)',
      description: 'Active lease contract and current rental yield proof if the property is tenanted at the time of valuation.',
      icon: FileSignature
    },
    {
      title: 'Bank NOC Letter (If Mortgaged)',
      description: 'No Objection Certificate or liability letter from your financing bank authorizing the DLD inspection.',
      icon: Building2
    },
    {
      title: 'DEWA Premise Number',
      description: 'Recent electricity and water bill confirming active utility connection and physical readiness.',
      icon: Zap
    },
    {
      title: 'Property Access Coordination',
      description: 'Contact details of the tenant, building security, or building management to grant entry to the DLD surveyor.',
      icon: KeyRound
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] border-b border-[#EFEAE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-3">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B8864B]">
              Requirements Checklist
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] tracking-tight mb-4">
            What We Need to Open Your Case
          </h2>

          <p className="text-lg sm:text-xl font-semibold text-[#B8864B] mb-3">
            Simple, streamlined document checklist for filing.
          </p>

          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            Send high-resolution digital scans or PDF copies directly on WhatsApp or email. Our team performs a preliminary check before submitting to the Dubai Land Department.
          </p>
        </div>

        {/* 8-Item Document Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {documents.map((doc, idx) => {
            const Icon = doc.icon;
            return (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#EFEAE2] hover:border-[#B8864B]/60 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#E6D7C3] text-[#B8864B] flex items-center justify-center mb-4 group-hover:bg-[#B8864B] group-hover:text-white transition-all shadow-2xs">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  <h3 className="text-base font-bold text-[#222222] mb-2 group-hover:text-[#B8864B] transition-colors leading-snug">
                    {doc.title}
                  </h3>

                  <p className="text-xs text-[#555555] leading-relaxed">
                    {doc.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Informational Guidance Box & DLD Fee Summary */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-[#E6D7C3] p-5 sm:p-6 flex items-start gap-4 shadow-xs">
            <Info className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
              <strong className="text-[#222222] font-semibold">Important Filing Note: </strong>
              If your property is co-owned between spouses or business partners, identification documents for all registered owners must be included in the valuation application.
            </p>
          </div>

          <div className="bg-[#FAF5EC]/80 rounded-2xl border border-[#B8864B]/40 p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
            <div className="space-y-1">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#B8864B] block">
                Official DLD Statutory Tariffs
              </span>
              <h4 className="text-sm sm:text-base font-bold text-[#222222]">
                Transparent Government Fees with Official DLD Receipts
              </h4>
              <p className="text-xs text-[#555555] leading-relaxed">
                Ready Residential: <strong className="text-[#222222]">AED 4,000 + 5% VAT</strong> · Off-Plan (Oqood): <strong className="text-[#222222]">AED 2,000 + 5% VAT</strong> · Commercial & Land: <strong className="text-[#222222]">from AED 4,000 + 5% VAT</strong> (plus standard AED 580 DLD Knowledge & Innovation fees).
              </p>
            </div>
            <a
              href="https://wa.me/971566556645?text=Hello%20Brightlink%2C%20I%20would%20like%20to%20verify%20the%20exact%20DLD%20valuation%20fees%20for%20my%20property."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#B8864B] hover:bg-[#976A36] text-white text-xs font-bold whitespace-nowrap transition-colors shadow-xs self-start md:self-auto"
            >
              Verify My Unit Fee
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
