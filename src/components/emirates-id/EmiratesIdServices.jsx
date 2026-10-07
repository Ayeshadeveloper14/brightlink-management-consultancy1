import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  CreditCard, 
  RefreshCw, 
  Search, 
  ShieldAlert, 
  FileEdit, 
  Users, 
  MapPin, 
  Crown,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const EmiratesIdServices = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      id: 'new-application',
      title: 'New Emirates ID Application',
      subtitle: 'First-Time UAE Residents',
      description: 'Complete assistance for new expatriates entering on work permits, investor visas, or family status. Includes typing, biometrics scheduling, and tracking.',
      icon: CreditCard,
      tag: 'New Residents',
      popular: true
    },
    {
      id: 'renewal',
      title: 'Emirates ID Renewal',
      subtitle: 'Periodic Validity Extension',
      description: 'Fast renewal typing for expiring cards (1, 2, 3, or 5-year terms). We ensure your application is submitted within the 30-day grace window to avoid daily fines.',
      icon: RefreshCw,
      tag: 'Most Common',
      popular: true
    },
    {
      id: 'lost-replacement',
      title: 'Lost Emirates ID Replacement',
      subtitle: 'Lost or Stolen Cards',
      description: 'Immediate card deactivation reporting, replacement request submission through ICP, and expedited card reprint with courier delivery to your doorstep.',
      icon: Search,
      tag: 'Urgent Service',
      popular: false
    },
    {
      id: 'damaged-replacement',
      title: 'Damaged Card Replacement',
      subtitle: 'Faulty Chip or Physical Wear',
      description: 'Replacement typing for unreadable smart chips, cracked cards, or faded biometric photos to restore instant bank and airport smart gate validation.',
      icon: ShieldAlert,
      tag: 'Card Reprint',
      popular: false
    },
    {
      id: 'data-update',
      title: 'Emirates ID Data Update',
      subtitle: 'Information Modification',
      description: 'Official modification of passport number, legal name spelling, nationality amendment, marital status, or registered mobile phone number in ICP records.',
      icon: FileEdit,
      tag: 'Data Amendment',
      popular: false
    },
    {
      id: 'family-application',
      title: 'Family Emirates ID Applications',
      subtitle: 'Spouse, Children & Parents',
      description: 'Batch family typing and synchronized biometric center appointments for dependents, children under 15 (exempt from biometrics), and domestic staff.',
      icon: Users,
      tag: 'Family Package',
      popular: true
    },
    {
      id: 'tracking-assistance',
      title: 'Emirates ID Tracking Assistance',
      subtitle: 'Real-Time Status Auditing',
      description: 'Trace stalled PRAN application numbers, resolve biometric rejection notices, fix photo dimension flags, and expedite post office courier dispatch.',
      icon: MapPin,
      tag: 'Status Audit',
      popular: false
    },
    {
      id: 'golden-visa-id',
      title: 'Golden Visa Emirates ID Processing',
      subtitle: '10-Year Long-Term Residency',
      description: 'Specialized 10-year card issuance for property investors, senior executives, doctors, and scientists under the UAE Golden Visa residency program.',
      icon: Crown,
      tag: '10-Year Prestige',
      popular: true
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FCFAF8] relative border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              End-to-End Solutions
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Emirates ID Services We Provide
          </h2>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            From first-time applicant biometrics to express replacements and 10-year Golden Visa issuance, our accredited specialists handle every step with precision.
          </p>
        </motion.div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className={`group relative p-6 rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 ${
                  service.popular 
                    ? 'border-[#DECBB5] shadow-xs' 
                    : 'border-[#EFEAE2]'
                }`}
              >
                {/* Popular Pill */}
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#FAF5EC] text-[#B8864B] border border-[#E6D7C3]">
                      {service.tag}
                    </span>
                  </div>
                )}

                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] border border-[#E6D7C3] flex items-center justify-center text-[#B8864B] group-hover:bg-[#B8864B] group-hover:text-white transition-colors duration-300 mb-5">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#222222] mb-1 group-hover:text-[#976A36] transition-colors">
                    {service.title}
                  </h3>

                  <div className="text-xs font-semibold text-[#B8864B] mb-2.5">
                    {service.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F5EFE6]">
                  <button
                    type="button"
                    onClick={() => onOpenConsultation && onOpenConsultation(`Emirates ID - ${service.title}`)}
                    className="w-full inline-flex items-center justify-between text-xs font-bold text-[#B8864B] group-hover:text-[#976A36] cursor-pointer"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default EmiratesIdServices;
