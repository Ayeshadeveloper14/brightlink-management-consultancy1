import React from 'react';
import { ExternalLink, HelpCircle, MessageSquare } from 'lucide-react';

export const StatusGuide = ({ onOpenConsultation }) => {
  const portalLinks = [
    {
      title: 'GDRFA Dubai Portal',
      subtitle: 'Dubai Visas & Residency Status',
      desc: 'Check General Directorate of Residency and Foreigners Affairs (Dubai) application & visa validity directly.',
      url: 'https://smart.gdrfad.gov.ae',
      badge: 'Official Dubai System'
    },
    {
      title: 'Federal ICP Smart Services',
      subtitle: 'Abu Dhabi, Sharjah & Northern Emirates',
      desc: 'Federal Authority for Identity, Citizenship, Customs & Port Security (ICP) visa & fine verification portal.',
      url: 'https://smartservices.icp.gov.ae',
      badge: 'Official Federal Portal'
    },
    {
      title: 'Overstay Fine Inquiry',
      subtitle: 'ICP & GDRFA Fine Breakdown',
      desc: 'Verify exact overstay violation fees (AED 50/day after expiration) and judicial clearance requirements.',
      url: 'https://smartservices.icp.gov.ae',
      badge: 'Violations & Fines'
    }
  ];

  const commonQuestions = [
    {
      q: 'How long is the UAE visa grace period after expiry or cancellation?',
      a: 'Following recent UAE immigration reforms, the standard grace period ranges from 30 to 180 days depending on the visa category (Golden/Green visa holders receive 180 days; skilled employees receive 60-90 days; normal employment/residence receives 30 days) to either renew or exit without overstay penalties.'
    },
    {
      q: 'What is the penalty for overstaying a UAE visa?',
      a: 'The official UAE government fine for overstaying is unified at AED 50 per day for all categories. In addition to daily fines, service fees and exit clearance charges apply.'
    },
    {
      q: 'Can BrightLink help reduce overstay fines or clear absconding cases?',
      a: 'Yes. BrightLink types official fine reduction petitions before the GDRFA and ICP legal committees for humanitarian, health, or procedural causes, often securing substantial discounts or waivers.'
    }
  ];

  return (
    <>
      {/* Official Portal Direct Links */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#222222]">
            Official UAE Government Portals
          </h2>
          <p className="text-xs sm:text-sm text-[#666666]">
            Direct links to Federal ICP and Dubai GDRFA systems for official government records.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portalLinks.map((p, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#FCFAF8] border border-neutral-200/80 hover:border-[#B8864B]/60 transition-all shadow-xs flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#F5F1EB] text-[#8C6230] text-[10px] font-bold uppercase tracking-wider">
                  {p.badge}
                </span>
                <h3 className="text-lg font-bold text-[#222222] mt-3">{p.title}</h3>
                <div className="text-xs text-[#B8864B] font-semibold mb-2">{p.subtitle}</div>
                <p className="text-xs text-[#666666] leading-relaxed mb-6">{p.desc}</p>
              </div>

              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-4 rounded-xl bg-white border border-neutral-300 hover:border-[#B8864B] text-[#222222] text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Visit Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#B8864B]" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Overstay Fines & Questions */}
      <div className="bg-[#FCFAF8] p-8 sm:p-12 rounded-3xl border border-neutral-200/70">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2 mb-8">
            <h3 className="text-2xl font-bold text-[#222222]">
              UAE Visa Rules & Overstay Fines FAQ
            </h3>
            <p className="text-xs sm:text-sm text-[#666666]">
              Key guidelines on grace periods, exit permits, and status correction.
            </p>
          </div>

          {commonQuestions.map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-neutral-200/60 shadow-xs space-y-2">
              <h4 className="font-bold text-xs sm:text-sm text-[#222222] flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                <span>{item.q}</span>
              </h4>
              <p className="text-xs text-[#666666] leading-relaxed pl-6">
                {item.a}
              </p>
            </div>
          ))}

          <div className="pt-4 text-center">
            <button
              onClick={() => onOpenConsultation('Overstay & Fine Inquiry')}
              className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-[#222222] hover:bg-[#B8864B] text-white text-xs font-bold transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Need Help with Overstay Fines or Status Correction? Consult Us</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusGuide;
