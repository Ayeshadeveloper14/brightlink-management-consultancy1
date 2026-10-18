import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Globe2, 
  Truck, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight,
  HelpCircle,
  Layers
} from 'lucide-react';

export const AjmanMainlandOperations = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const operationalChannels = [
    {
      title: 'Operating via Mainland Commercial Distributor / Agent',
      desc: 'Free zone trading entities selling physical commodities can legally distribute goods into the UAE mainland market by appointing an authorized local mainland distributor or commercial logistics partner holding the appropriate mainland trading licences.',
      icon: Truck
    },
    {
      title: 'Establishing a Registered Mainland Branch',
      desc: 'An established Ajman Free Zone entity can register a formal branch through the Department of Economic Development (DED) in Ajman, Dubai, or any other emirate, enabling direct commercial contracting and opening retail branches onshore.',
      icon: Building2
    },
    {
      title: 'B2B Professional & Consulting Services',
      desc: 'Companies holding service and consultancy licences are permitted to deliver advisory, technical, and digital services to corporate mainland clients across the UAE, subject to standard VAT invoicing and corporate tax rules.',
      icon: Globe2
    },
    {
      title: 'Customs Duty Clearance & Inward Declarations',
      desc: 'Transporting physical merchandise from Ajman Free Zone warehouses across the customs border into mainland UAE requires standard customs clearance and payment of the applicable 5% UAE customs duty tariff.',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="ajman-mainland-operations" className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Layers className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>COMMERCIAL PERIMETER & JURISDICTION BOUNDARIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Operating in Mainland UAE with an Ajman Free Zone Licence
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Understanding the legal framework governing transactions between free zone entities and the onshore mainland market ensures compliant commercial execution.
          </p>
        </div>

        {/* Narrative Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          <div className="bg-[#FAF7F0] rounded-3xl p-8 border border-[#E6D7C3] space-y-4">
            <span className="text-xs font-bold text-[#8C5E28] uppercase tracking-wider font-heading block">
              Within Free Zone & Global Markets
            </span>
            <h3 className="text-xl font-bold text-[#0F172A] font-heading">
              Unrestricted International Trade & Free Zone B2B
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Ajman Free Zone licences confer unrestricted rights to import, export, manufacture, warehouse, and conduct business with other companies located inside UAE free zones or anywhere internationally across global markets with 0% customs duties on re-exports.
            </p>
            <div className="space-y-2 pt-2 text-xs text-[#0F172A] font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0" />
                <span>Global import, export, and international trade finance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0" />
                <span>Inter-free zone commerce and logistics transfers</span>
              </div>
            </div>
          </div>

          <div className="bg-[#FAF7F0] rounded-3xl p-8 border border-[#E6D7C3] space-y-4">
            <span className="text-xs font-bold text-[#8C5E28] uppercase tracking-wider font-heading block">
              Mainland UAE Onshore Market
            </span>
            <h3 className="text-xl font-bold text-[#0F172A] font-heading">
              Compliant Onshore Commercial Mechanisms
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              An AFZ licence does not grant automatic authorization to set up physical retail stores or perform physical consumer distribution in mainland malls without additional mainland approvals. However, companies can legally access mainland markets through designated compliant routes.
            </p>
            <div className="space-y-2 pt-2 text-xs text-[#0F172A] font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0" />
                <span>Selling through local mainland distributors or logistics agents</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0" />
                <span>Establishing an onshore branch with DED for retail expansion</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Commercial Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {operationalChannels.map((ch, idx) => {
            const Icon = ch.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-[#DECBB5] space-y-3 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[#0F172A] font-heading mb-1.5">
                    {ch.title}
                  </h4>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {ch.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F1E8DC] text-[11px] font-semibold text-[#8C5E28] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Compliant Route</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Card */}
        <div className="rounded-2xl bg-[#0F172A] p-6 sm:p-8 text-white relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold font-heading text-white">
              Planning to expand into UAE Mainland retail or public tenders?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Brightlink helps you evaluate whether an Ajman Free Zone licence with a mainland distributor, a dual-licence, or a direct mainland LLC is the optimal structure.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation('Mainland vs Free Zone Strategy Inquiry')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#B8864B] hover:bg-[#8C5E28] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm whitespace-nowrap cursor-pointer shrink-0"
          >
            Explore Market Entry Strategy
          </button>
        </div>

      </div>
    </section>
  );
};
