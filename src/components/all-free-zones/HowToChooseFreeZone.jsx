import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Compass, 
  Layers, 
  Coins, 
  Building, 
  Users, 
  Globe2, 
  Landmark, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const HowToChooseFreeZone = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const selectionCriteria = [
    {
      title: '1. Exact Business Activity & Licensing',
      desc: 'Your proposed commercial, technical, or advisory operations must be permitted by the selected authority’s official activity schedule. Certain specialized activities (e.g., crypto, financial advisory, legal practice, medical clinics) can only be registered in designated free zones.',
      icon: Layers
    },
    {
      title: '2. Industry Cluster & Sector Synergy',
      desc: 'Certain jurisdictions are tailored around specialized industrial clusters—such as DMCC for commodities and precious metals, DIFC and ADGM for common-law finance, DIC for software engineering, DSP for life sciences, and KEZAD or JAFZA for heavy maritime industry.',
      icon: Compass
    },
    {
      title: '3. Total Budget & Ongoing Renewal Expenses',
      desc: 'Beyond initial setup promotions, evaluate total multi-year recurring expenses including annual licence renewal fees, mandatory facility lease extensions, establishment card renewals, and annual financial audit filings.',
      icon: Coins
    },
    {
      title: '4. Physical Facility & Storage Needs',
      desc: 'Determine whether your operations require a basic shared flexi-desk, a permanently allocated dedicated workstation, an executive private suite, or heavy industrial warehousing with specific electrical loads and loading docks.',
      icon: Building
    },
    {
      title: '5. Residence Visa Allocations',
      desc: 'Visa quotas are strictly tied to facility square footage and package tier. Ensure your shortlisted free zone can accommodate your planned headcount for investors, partners, and operational staff without requiring expensive mid-term office upgrades.',
      icon: Users
    },
    {
      title: '6. Target Markets & Client Locations',
      desc: 'Consider whether your customers are global, situated across other UAE free zones, or located on the UAE mainland. If physical merchandise must be delivered to mainland retailers, factoring in customs clearance and distributor arrangements is essential.',
      icon: Globe2
    },
    {
      title: '7. Corporate Banking & Compliance Profile',
      desc: 'UAE banks evaluate jurisdiction reputation, physical substance, and shareholder backgrounds during KYC due diligence. Selecting a jurisdiction with recognized commercial credibility strengthens your corporate banking dossier.',
      icon: Landmark
    },
    {
      title: '8. Long-Term Scalability & Future Growth',
      desc: 'Verify whether the authority permits subsequent activity additions, share capital restructuring, adding corporate partners, or transitioning seamlessly into larger commercial spaces as your business scales.',
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-20 bg-[#FAF7F0]/40 border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Compass className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>DECISION-MAKING FRAMEWORK</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Which UAE Free Zone Is Right for Your Business?
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            With dozens of competing free trade zones, selecting the optimal jurisdiction requires evaluating eight essential commercial, operational, and financial dimensions:
          </p>
        </div>

        {/* 8 Criteria Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {selectionCriteria.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="bg-white rounded-2xl border border-[#E6D7C3] p-6 shadow-2xs hover:shadow-sm hover:border-[#DECBB5] transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#EFEAE2] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-sm font-bold text-[#0F172A] font-heading">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F1EAE0] text-[11px] text-[#8C5E28] font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Strategic Factor</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Consultation Callout Banner */}
        <div className="p-8 rounded-3xl bg-white border border-[#DECBB5] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-lg font-bold text-[#0F172A] font-heading">
              Need an objective, multi-jurisdiction comparison tailored to your venture?
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] max-w-2xl leading-relaxed">
              Brightlink’s corporate setup advisors analyze your exact commercial model to identify the most cost-effective, operationally sound free zone without institutional bias.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              if (onOpenConsultation) {
                onOpenConsultation('Comprehensive Multi-Free-Zone Shortlist');
              } else {
                window.open('https://wa.me/971566556645?text=Hello%2C%20I%20would%20like%20guidance%20on%20choosing%20the%20right%20UAE%20free%20zone.', '_blank');
              }
            }}
            className="px-6 py-3.5 rounded-xl bg-[#B8864B] hover:bg-[#976A36] text-white text-xs font-bold transition-all shadow-md shrink-0 cursor-pointer inline-flex items-center gap-2"
          >
            <span>Request Jurisdiction Shortlist</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
