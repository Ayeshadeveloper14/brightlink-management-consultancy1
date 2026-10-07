import React from 'react';
import { MessageSquare } from 'lucide-react';

export const FaqContactCTA = ({ onOpenConsultation }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-14">
      <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF7F0] border border-[#B8864B]/30 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xs">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-base font-bold text-[#222222]">Still have questions?</h4>
          <p className="text-xs text-[#666666]">Our legal typing team in Crystal Tower is available for direct inquiries.</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/971566556645"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold transition-all shadow-sm cursor-pointer whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>Ask on WhatsApp</span>
          </a>
          <button
            onClick={() => onOpenConsultation('General FAQ Inquiry')}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white text-xs font-bold transition-all shadow-sm cursor-pointer whitespace-nowrap"
          >
            <span>Book Consultation</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqContactCTA;
