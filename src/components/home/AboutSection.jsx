import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.jsx';

export const AboutSection = ({ onOpenConsultation, onExploreServices }) => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      title: t('about_point_1', 'Senior Typing Specialists'),
      desc: t('about_point_1', 'Official GDRFA & Amer authorized typing portal')
    },
    {
      title: t('about_point_2', 'VIP Express Medical Fitness'),
      desc: t('about_point_2', 'VIP express medical fitness & Emirates ID typing')
    },
    {
      title: t('about_point_3', 'Fast-Track Corporate Licensing'),
      desc: t('about_point_3', 'Direct DED & Free Zone corporate licensing division')
    },
    {
      title: t('about_point_4', 'Certified Legal Attestation'),
      desc: t('about_point_4', 'Certified MOJ legal translation & document attestation')
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Grid: Photo Left, Content Right with compact gap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Photo Left with Reveal Effect */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-neutral-100 aspect-[4/3] group">
              <img
                src="https://website-imges.vercel.app/about_visa_consultant_1790842347102.jpg"
                alt="Brightlink senior consultant assisting client in Dubai"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Verified Credential Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="hidden sm:flex absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-neutral-200/80 items-center gap-3 max-w-[240px]"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C5985B] to-[#976A36] text-white flex items-center justify-center shrink-0 shadow-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#222222]">Direct Liaison</p>
                <p className="text-[11px] text-[#666666]">GDRFA • ICP • BLS • MOHRE</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Right with balanced y-axis spacing */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-4"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F1EB] border border-[#B8864B]/20">
              <span className="w-2 h-2 rounded-full bg-[#B8864B]" />
              <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
                {t('about_badge', 'About Brightlink Consulting')}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] tracking-tight leading-snug">
              {t('about_title', "Dubai's Premier Government Typing & Visa Processing Center")}
            </h2>

            {/* Introduction paragraph */}
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
              {t('about_desc_1', 'With over two decades of dedicated service in the UAE, Brightlink provides seamless, compliant, and expedited typing services for individuals, families, and multinational corporations.')}
            </p>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
              {t('about_desc_2', 'Our direct integration with GDRFA, ICP, Dubai Courts, and MOHRE ensures your applications are typed with zero errors and processed with priority government approvals.')}
            </p>

            {/* 4 Feature Cards with concise medium word count */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {features.map((feat, idx) => (
                <div 
                  key={idx} 
                  className="p-3.5 rounded-xl bg-[#FCFAF8] border border-neutral-200/80 hover:border-[#B8864B]/40 transition-colors shadow-2xs space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0" />
                    <h4 className="text-xs sm:text-sm font-bold text-[#222222]">{feat.title}</h4>
                  </div>
                  <p className="text-xs text-[#666666] leading-normal pl-6">{feat.desc}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenConsultation('About Us Consultation')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white font-semibold text-xs sm:text-sm shadow-md shadow-[#B8864B]/20 transition-all cursor-pointer"
              >
                <span>{t('about_btn_consultation', 'Request Case Evaluation')}</span>
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </motion.button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#F5F1EB] hover:bg-neutral-200 text-[#222222] font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <span>{t('about_btn_services', 'Explore All Services')}</span>
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
