import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  ArrowUpRight,
  ExternalLink,
  Navigation
} from 'lucide-react';

export const ContactInfoCards = () => {
  const shouldReduceMotion = useReducedMotion();

  const channels = [
    {
      id: 'phone',
      title: 'Direct Phone Helpline',
      subtitle: 'Immediate voice assistance',
      value: '+971 56 655 6645',
      note: 'Speak directly with our Business Bay front desk typists for urgent inquiries and active file follow-ups.',
      actionLabel: 'Call Now',
      actionUrl: 'tel:+971566556645',
      icon: <Phone className="w-5 h-5" />,
      accentBg: 'bg-[#F5F1EB] text-[#B8864B]',
      borderHover: 'hover:border-[#B8864B]'
    },
    {
      id: 'whatsapp',
      title: 'Official WhatsApp Desk',
      subtitle: 'Fastest digital channel',
      value: '+971 56 655 6645',
      note: 'Send passport copies, entry permits, and document scans for complimentary preliminary eligibility review.',
      actionLabel: 'Open WhatsApp',
      actionUrl: 'https://wa.me/971566556645?text=Hello%20Brightlink%2C%20I%20need%20assistance%20with%20UAE%20visa%20and%20typing%20services.',
      icon: <MessageSquare className="w-5 h-5 fill-current" />,
      accentBg: 'bg-emerald-50 text-[#25D366]',
      borderHover: 'hover:border-[#25D366]'
    },
    {
      id: 'email',
      title: 'Official Email Desk',
      subtitle: 'Written & corporate inquiries',
      value: 'info@brightlinkconsulting.ae',
      note: 'For corporate contracts, bulk employee sponsorship portfolios, and formal document attestation requests.',
      actionLabel: 'Send Email',
      actionUrl: 'mailto:info@brightlinkconsulting.ae',
      icon: <Mail className="w-5 h-5" />,
      accentBg: 'bg-[#F5F1EB] text-[#B8864B]',
      borderHover: 'hover:border-[#B8864B]'
    },
    {
      id: 'location',
      title: 'Business Bay Headquarters',
      subtitle: 'Walk-ins & appointments',
      value: 'Crystal Tower, Business Bay, Dubai',
      note: 'Office M08-27, M1 Floor (Millennium Central building), Al Asayel St. Free visitor parking on premise.',
      actionLabel: 'Google Maps Directions',
      actionUrl: 'https://maps.google.com/?q=Crystal+Tower+Business+Bay+Dubai',
      icon: <MapPin className="w-5 h-5" />,
      accentBg: 'bg-[#F5F1EB] text-[#B8864B]',
      borderHover: 'hover:border-[#B8864B]'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[#8C5E28] font-heading">
          CONNECT WITH BRIGHTLINK
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-heading tracking-tight">
          Direct Contact Channels
        </h2>
        <p className="text-sm text-[#475569] max-w-2xl leading-relaxed">
          Choose your preferred method to contact our certified government typing specialists. We provide instant digital replies as well as personalized in-person consultations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {channels.map((ch, idx) => (
          <motion.a
            key={ch.id}
            href={ch.actionUrl}
            target={ch.id === 'phone' || ch.id === 'email' ? undefined : '_blank'}
            rel={ch.id === 'phone' || ch.id === 'email' ? undefined : 'noopener noreferrer'}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            whileHover={{ y: -4 }}
            className={`group h-full bg-white rounded-2xl border border-neutral-200/90 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all ${ch.borderHover} cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8864B]`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className={`w-11 h-11 rounded-xl ${ch.accentBg} flex items-center justify-center shrink-0`}>
                  {ch.icon}
                </div>
                <div className="text-neutral-400 group-hover:text-[#B8864B] transition-colors">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              <div>
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">
                  {ch.subtitle}
                </span>
                <h3 className="text-base font-bold text-[#0F172A] font-heading mt-0.5">
                  {ch.title}
                </h3>
              </div>

              <p className="text-sm font-bold text-[#0F172A] tabular-nums break-words font-sans">
                {ch.value}
              </p>

              <p className="text-xs text-[#64748B] leading-relaxed pt-1 border-t border-neutral-100">
                {ch.note}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center gap-1.5 text-xs font-bold text-[#8C5E28] group-hover:text-[#B8864B] transition-colors">
              <span>{ch.actionLabel}</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfoCards;
