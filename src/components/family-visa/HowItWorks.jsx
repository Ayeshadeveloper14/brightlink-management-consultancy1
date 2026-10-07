import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Camera, 
  UserCheck, 
  ShieldCheck, 
  FileCheck,
  Calendar
} from 'lucide-react';

export const HowItWorks = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const companyResponsibilities = [
    'Eligibility check against the current GDRFA / ICP rules',
    'Attestation and Arabic translation of certificates, if not done yet',
    'Entry permit, or change of status if the family member is already here',
    'Medical and biometrics bookings, insurance arranged where required',
    'Residence application, Emirates ID application and visa stamping',
    'Courier pickup and return of originals in Dubai',
    'Reminders before the visa and Emirates ID expire'
  ];

  const timelineDays = [
    {
      day: 'Day 0',
      title: 'Quote & checklist',
      desc: 'Itemized fees on WhatsApp within the hour.'
    },
    {
      day: 'Day 1–2',
      title: 'Entry permit',
      desc: 'Filed with GDRFA (Dubai) or ICP (other emirates).'
    },
    {
      day: 'Day 3–5',
      title: 'Medical & ID',
      desc: 'Your one appointment, booked nearby.'
    },
    {
      day: 'Day 5–10',
      title: 'Stamping',
      desc: 'Residence issued, passport returned to you.'
    },
    {
      day: 'Later',
      title: 'Renewal',
      desc: '3–5 working days, no entry permit needed.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FCFAF8] border-t border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            02 — How it works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-4">
            Two things from you. Everything else from us.
          </h2>
        </motion.div>

        {/* Split Layout: Customer Responsibilities vs 800 DOCS Responsibilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* You (5 cols) */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-white border border-[#DECBB5] shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E8DFC8]">
                <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider font-heading">
                  You
                </span>
                <span className="text-xs font-bold text-[#0F172A] bg-[#FAF5EC] px-3 py-1 rounded-full border border-[#DECBB5]">
                  Send and show up
                </span>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0 mt-0.5">
                    <Camera className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Photograph your documents and send them on WhatsApp — passports, certificates, salary letter, tenancy contract. We tell you within the hour what's missing and what it will cost.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0 mt-0.5">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Attend one appointment for the medical test and Emirates ID biometrics. We book the centre nearest to you and the earliest slot available.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F1EBE1] text-xs font-semibold text-[#8C6230]">
              That's literally all you do.
            </div>
          </motion.div>

          {/* 800 DOCS (7 cols) */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-7 sm:p-8 rounded-3xl bg-[#0F172A] text-white shadow-xl shadow-slate-900/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <span className="text-xs font-bold text-[#F5D7A1] uppercase tracking-wider font-heading">
                  800 DOCS
                </span>
                <span className="text-xs font-bold text-white bg-white/10 px-3 py-1 rounded-full border border-white/20">
                  The rest of the file
                </span>
              </div>

              <ul className="space-y-3.5">
                {companyResponsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#F5D7A1] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-xs text-slate-400">
              Handled door-to-door by senior government clearing specialists in Dubai.
            </div>
          </motion.div>

        </div>

        {/* Process Timeline: Horizontal on Desktop, Vertical on Mobile */}
        <div className="pt-6">
          <div className="flex items-center gap-2 mb-8">
            <Clock className="w-4 h-4 text-[#B8864B]" />
            <h3 className="text-xl font-bold text-[#0F172A] font-heading">
              Estimated Application Schedule
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {timelineDays.map((step, idx) => (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-white border border-[#DECBB5] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading block mb-1">
                    {step.day}
                  </span>
                  <h4 className="font-bold text-sm text-[#0F172A] font-heading mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
