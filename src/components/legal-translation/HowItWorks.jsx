import React from 'react';
import { motion } from 'framer-motion';
import { FileUp, SearchCheck, Languages, CheckCircle2 } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      num: '01',
      title: 'Send Your Document',
      desc: 'Share a clear digital scan or photograph of your document via WhatsApp or email.',
      icon: FileUp
    },
    {
      num: '02',
      title: 'Document Review',
      desc: 'Our team evaluates the language pair, page length, and the intended authority.',
      icon: SearchCheck
    },
    {
      num: '03',
      title: 'Legal Translation',
      desc: 'The document is translated with legal precision following official terminology.',
      icon: Languages
    },
    {
      num: '04',
      title: 'Certification & Delivery',
      desc: 'Receive the certified translation with official seals in digital PDF and printed formats.',
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-t border-[#F0E8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Step-By-Step Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3 font-heading">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            A seamless, stress-free four-stage process designed to deliver certified translations promptly.
          </p>
        </div>

        {/* Process Timeline: Horizontal connected line on lg+, vertical on mobile */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div 
            aria-hidden="true" 
            className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#DECBB5] via-[#B8864B] to-[#DECBB5] z-0" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center sm:items-start sm:text-left lg:items-center lg:text-center relative group"
                >
                  {/* Step Bubble & Icon */}
                  <div className="relative mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[#D8C7B0] group-hover:border-[#B8864B] text-[#976A36] group-hover:text-[#B8864B] flex items-center justify-center shadow-sm transition-all duration-300">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="absolute -top-2.5 -right-2 bg-gradient-to-br from-[#C5985B] to-[#976A36] text-white text-[11px] font-extrabold px-2 py-0.5 rounded-full shadow-xs">
                      {item.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#222222] mb-1.5 leading-snug font-heading group-hover:text-[#976A36] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed max-w-xs">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
