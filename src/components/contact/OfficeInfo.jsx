import React from 'react';
import { MapPin, Navigation, Phone, MessageSquare, Mail, Clock } from 'lucide-react';

export const OfficeInfo = () => {
  const openGoogleMaps = () => {
    window.open('https://maps.google.com/?q=Crystal+Tower+Business+Bay+Dubai', '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Map Container */}
      <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-sm bg-white">
        <div className="relative h-64 sm:h-72 w-full bg-slate-100 overflow-hidden">
          <svg className="w-full h-full object-cover" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="500" fill="#E8EDF2" />
            <path d="M0 0H800V150C620 160 520 130 380 180C260 220 120 190 0 210V0Z" fill="#C5DCEB" />
            <path d="M0 210C120 190 260 220 380 180C520 130 620 160 800 150V165C620 175 520 145 380 195C260 235 120 205 0 225V210Z" fill="#F4E9D8" />
            <path d="M0 320L800 240" stroke="#FFFFFF" strokeWidth="18" />
            <path d="M0 320L800 240" stroke="#CBD5E1" strokeWidth="8" />
            <path d="M150 500L550 0" stroke="#FFFFFF" strokeWidth="12" />
            <path d="M150 500L550 0" stroke="#E2E8F0" strokeWidth="6" />
            <path d="M360 180C390 250 430 330 470 420" stroke="#93C5FD" strokeWidth="22" strokeLinecap="round" />
            <circle cx="430" cy="270" r="5" fill="#B8864B" />
            <rect x="420" y="300" width="130" height="70" rx="8" fill="#B8864B" fillOpacity="0.12" stroke="#B8864B" strokeWidth="1.5" strokeDasharray="4 4" />
            <g transform="translate(460, 325)">
              <circle cx="0" cy="0" r="14" fill="#B8864B" fillOpacity="0.25" />
              <circle cx="0" cy="0" r="8" fill="#B8864B" />
              <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
            </g>
          </svg>
        </div>

        <div className="p-4 bg-white border-t border-neutral-100 flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
            <div className="text-xs text-[#444444]">
              <p className="font-bold text-[#222222] text-sm">
                Office M08-27, M1 Floor, Crystal Tower
              </p>
              <p className="mt-0.5 text-neutral-600">Millennium Central Same Building, Al Asayel St, Business Bay, Dubai</p>
              <p className="text-neutral-400 mt-0.5">Free visitor parking · 5 mins from Business Bay Metro Station</p>
            </div>
          </div>

          <button
            onClick={openGoogleMaps}
            className="px-3.5 py-2 rounded-xl bg-[#222222] hover:bg-[#B8864B] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Google Maps</span>
          </button>
        </div>
      </div>

      {/* Direct Channels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          href="tel:+971566556645"
          className="p-4 rounded-xl border border-neutral-200/90 bg-white hover:border-[#B8864B] transition-all flex items-center gap-3 shadow-xs"
        >
          <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] text-[#B8864B] flex items-center justify-center shrink-0">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-neutral-500 uppercase">Direct Helpline</p>
            <p className="text-sm font-bold text-[#222222] tabular-nums mt-0.5">+971 56 655 6645</p>
          </div>
        </a>

        <a
          href="https://wa.me/971566556645"
          target="_blank"
          rel="noreferrer"
          className="p-4 rounded-xl border border-neutral-200/90 bg-white hover:border-[#25D366] transition-all flex items-center gap-3 shadow-xs"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#25D366] flex items-center justify-center shrink-0">
            <MessageSquare className="w-5 h-5 fill-current" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-neutral-500 uppercase">WhatsApp Desk</p>
            <p className="text-sm font-bold text-[#222222] tabular-nums mt-0.5">+971 56 655 6645</p>
          </div>
        </a>

        <a
          href="mailto:info@brightlinkconsulting.ae"
          className="p-4 rounded-xl border border-neutral-200/90 bg-white hover:border-[#B8864B] transition-all flex items-center gap-3 shadow-xs"
        >
          <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] text-[#B8864B] flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div className="truncate">
            <p className="text-[11px] font-bold text-neutral-500 uppercase">Official Email</p>
            <p className="text-xs font-bold text-[#222222] truncate mt-0.5">info@brightlinkconsulting.ae</p>
          </div>
        </a>

        <div className="p-4 rounded-xl border border-neutral-200/90 bg-white flex items-center gap-3 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] text-[#B8864B] flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-neutral-500 uppercase">Working Hours</p>
            <p className="text-xs font-bold text-[#222222] mt-0.5">Mon – Sat: 9 AM – 6 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeInfo;
