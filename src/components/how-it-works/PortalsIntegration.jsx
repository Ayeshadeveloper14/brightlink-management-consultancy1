import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export const PortalsIntegration = () => {
  const portalIntegrations = [
    { name: 'GDRFA Dubai', role: 'Direct Entry Permits & Visa Stamping', speed: 'Same Day' },
    { name: 'Federal ICP', role: 'Emirates ID & Federal Golden Visas', speed: '24 - 48 Hours' },
    { name: 'DHA Smart Salem', role: 'VIP Medical Fitness Fast-Track', speed: '30 Mins - 4 Hours' },
    { name: 'MOHRE Portal', role: 'Labor Contracts & Work Permits', speed: '1 - 2 Days' },
    { name: 'BLS International', role: 'Indian Passport & Consular Services', speed: '3 - 7 Days' },
    { name: 'MOFA Electronic', role: 'Document Legalization & Attestation', speed: '24 Hours' }
  ];

  return (
    <section className="py-20 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
            Direct System Integration
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight">
            Official Government Portals We Access
          </h2>
          <p className="text-sm text-[#666666]">
            As an accredited typing and consulting center, our team submits your applications directly into UAE federal and emirate immigration infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portalIntegrations.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#FCFAF8] rounded-2xl p-6 border border-neutral-200/80 hover:border-[#B8864B]/40 shadow-xs hover:shadow-md transition-all space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-white border border-neutral-200/60 text-[#8C6230]">
                  {p.speed}
                </span>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>
              <h3 className="text-base font-bold text-[#222222]">
                {p.name}
              </h3>
              <p className="text-xs text-[#555555]">
                {p.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortalsIntegration;
