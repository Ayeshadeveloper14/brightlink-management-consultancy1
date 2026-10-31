import React from 'react';
import { X, Stethoscope, MapPin, Clock, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { MEDICAL_CENTERS } from '../../data/servicesData.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

export const MedicalFinderModal = ({
  isOpen,
  onClose,
  onBookMedical
}) => {
  const { currentLanguage, t, tItem, isRTL } = useLanguage();
  if (!isOpen) return null;

  const handleWhatsAppBooking = (centerName) => {
    const text = (() => {
      switch (currentLanguage) {
        case 'ar': return `مرحباً برايت لينك، أود حجز موعد فحص طبي VIP للإقامة في مركز ${centerName}. يرجى المساعدة في الطباعة والحجز السريع.`;
        case 'zh': return `您好 Brightlink，我想预约在${centerName}的VIP居留快捷体检服务。请协助我办理打字与加急预约名额。`;
        case 'fr': return `Bonjour Brightlink, je souhaite prendre rendez-vous pour une visite médicale VIP de résidence au centre ${centerName}. Merci de m'assister pour la frappe et le créneau express.`;
        case 'de': return `Hallo Brightlink, ich möchte einen Termin für die VIP Medical Fitness Untersuchung im Zentrum ${centerName} buchen. Bitte unterstützen Sie mich bei der Beantragung.`;
        default: return `Hello Brightlink, I would like to book a VIP Medical Fitness appointment at ${centerName}. Please assist with typing and express slot.`;
      }
    })();
    window.open(`https://wa.me/971566556645?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-[#B8864B]/30 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-neutral-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#222222]">{t('medical_modal_title', 'Dubai Medical Fitness Centers & Finder')}</h2>
              <p className="text-xs text-[#666666]">{t('medical_modal_sub', 'DHA & ICP Authorized Medical Testing Typing with 4-Hour Express Results')}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label={t('btn_close', 'Close')}
            className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Explanation Alert */}
          <div className="p-4 bg-[#F5F1EB] rounded-2xl border border-[#B8864B]/20 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
            <div className="text-xs text-[#444444] leading-relaxed">
              <p className="font-bold text-[#222222] text-sm">{t('medical_modal_alert_title', 'Need VIP Medical Typing with Zero Waiting Queues?')}</p>
              <p className="mt-1">
                {t('medical_modal_alert_desc', 'Brightlink pre-types your DHA application, arranges express blood test and chest X-ray appointments at premier smart centers in Dubai, and pushes certificates directly to the GDRFA residency system.')}
              </p>
            </div>
          </div>

          {/* Centers List */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-[#222222] uppercase tracking-wider">
              {t('medical_modal_rec_title', 'Recommended DHA Certified Centers')}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MEDICAL_CENTERS.map((center) => (
                <div
                  key={center.id}
                  className="p-5 rounded-2xl border border-neutral-200 hover:border-[#B8864B] bg-white transition-all shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                        {tItem(center.type)}
                      </span>
                      <span className="text-xs font-bold text-[#B8864B]">{tItem(center.fee)}</span>
                    </div>

                    <h4 className="text-sm font-bold text-[#222222]">{tItem(center.name)}</h4>

                    <p className="text-xs text-[#666666] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#B8864B] shrink-0" />
                      <span>{tItem(center.location)}</span>
                    </p>

                    <p className="text-xs text-[#666666] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{t('medical_modal_turnaround', 'Turnaround:')} <strong className="text-[#222222]">{tItem(center.resultTime)}</strong></span>
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {center.features.map((feat, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-sm bg-neutral-100 text-[#555555] text-[10px] font-medium">
                          {tItem(feat)}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-neutral-100 flex gap-2">
                    <button
                      onClick={() => {
                        onClose();
                        onBookMedical('Medical Visa');
                      }}
                      className="flex-1 py-2 text-center text-xs font-bold rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white transition-colors cursor-pointer"
                    >
                      {t('medical_modal_book_btn', 'Book Center Slot')}
                    </button>
                    <button
                      onClick={() => handleWhatsAppBooking(center.name)}
                      className="px-3 py-2 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold transition-colors cursor-pointer"
                      title="Quick WhatsApp Booking"
                    >
                      WhatsApp
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documents Checklist for Medical */}
          <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200 text-xs text-[#555555] space-y-2">
            <p className="font-bold text-[#222222] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#B8864B]" /> {t('medical_modal_req_title', 'Required for Medical Fitness Examination:')}
            </p>
            <ul className="space-y-1 list-disc list-inside">
              <li>{t('medical_modal_req_1', 'Original valid passport & copy of UAE entry permit or visa cancellation')}</li>
              <li>{t('medical_modal_req_2', '2 passport-sized photographs on white background')}</li>
              <li>{t('medical_modal_req_3', 'Brightlink pre-typed DHA medical fitness application with barcode')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
