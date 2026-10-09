import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const OurStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider block">
              Our Story & Vision
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight leading-tight">
              Two Decades of Excellence in UAE Government Documentation
            </h2>
            <p className="text-sm text-[#555555] leading-relaxed">
              Navigating government residency requirements, document attestations, and corporate trade licenses can be complex. Since 2006, Brightlink has operated with a single mission: to provide absolute clarity, legal security, and expedited execution for individuals and enterprises making the UAE their home.
            </p>
            <p className="text-sm text-[#555555] leading-relaxed">
              Our authorized status across GDRFA Dubai, Federal ICP, Ministry of Foreign Affairs (MOFA), and BLS International gives our clients priority submission tracks, cutting processing times from weeks to days.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#222222]">
                <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />
                <span>Licensed by Dubai DED</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#222222]">
                <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />
                <span>GDRFA & ICP Direct Access</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#222222]">
                <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />
                <span>Confidential Data Encryption</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/80 relative"
            >
              <img
                src="/images/why_experienced_team_1790842362837.jpg"
                alt="Brightlink Experienced Consultant Team"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <h4 className="text-lg font-bold">Crystal Tower Consulting Lounge</h4>
                  <p className="text-xs text-neutral-300">Dedicated private consultation suites for VIP clients and corporate founders.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;
