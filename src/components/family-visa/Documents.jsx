import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  CheckSquare, 
  Square, 
  MessageSquare, 
  ArrowRight, 
  Info,
  CheckCircle2
} from 'lucide-react';

export const Documents = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState('spouse'); // 'spouse' | 'child' | 'parents' | 'newborn' | 'renewal'

  const tabDocuments = {
    spouse: [
      {
        title: "Sponsor’s Emirates ID and UAE Residence Visa",
        note: "Copies are enough to open the file"
      },
      {
        title: "Attested Marriage Certificate",
        note: "Attested by your home country, the UAE embassy there and MOFA; Arabic translation if not already bilingual"
      },
      {
        title: "Salary certificate or labour contract",
        note: "Issued within the last month; shows the basic salary and allowances"
      },
      {
        title: "Tenancy contract (Ejari) in the sponsor’s name",
        note: "A shared flat or company housing letter can work in some cases"
      },
      {
        title: "Health insurance for the spouse",
        note: "We can arrange a compliant policy if you don’t have one"
      },
      {
        title: "Spouse’s current UAE visa, if already in the UAE",
        note: "Visit or cancelled residence — needed for a change of status"
      }
    ],
    child: [
      {
        title: "Sponsor’s Emirates ID and UAE Residence Visa",
        note: "Copies are enough to open the file"
      },
      {
        title: "Attested Birth Certificate of the Child",
        note: "Showing both parents’ names clearly; attested by home country, UAE embassy & MOFA"
      },
      {
        title: "Salary certificate or labour contract",
        note: "Issued within the last month; shows minimum required salary"
      },
      {
        title: "Tenancy contract (Ejari) in sponsor’s name",
        note: "Registered Ejari tenancy contract"
      },
      {
        title: "Health insurance policy for the child",
        note: "Mandatory compliant health coverage"
      },
      {
        title: "Child’s current visa, if already inside the UAE",
        note: "Visit visa or cancelled residence file"
      }
    ],
    parents: [
      {
        title: "Sponsor’s Emirates ID and UAE Residence Visa",
        note: "Copies are enough to open the file"
      },
      {
        title: "Attested Proof of Relationship (Sponsor’s Birth Certificate)",
        note: "Proving biological relation to both parents"
      },
      {
        title: "Consular Dependency Certificate",
        note: "Stating you are the sole caregiver and parents have no other supporters in home country"
      },
      {
        title: "Registered 2-Bedroom Tenancy Contract (Ejari)",
        note: "Mandatory minimum 2-bedroom accommodation for sponsoring parents"
      },
      {
        title: "Salary Certificate (AED 20,000+ monthly)",
        note: "Shows required humanitarian salary threshold"
      },
      {
        title: "Comprehensive Health Insurance Policy for Both Parents",
        note: "Mandatory comprehensive private health insurance"
      }
    ],
    newborn: [
      {
        title: "Attested UAE Birth Certificate",
        note: "Issued by DHA / MOHAP with official MOFA attestation"
      },
      {
        title: "Both Parents’ Emirates IDs and UAE Residence Visas",
        note: "Valid active residency files of mother and father"
      },
      {
        title: "Attested Marriage Certificate",
        note: "Legal marriage certificate with MOFA attestation"
      },
      {
        title: "Registered Tenancy Contract (Ejari)",
        note: "In sponsor’s name"
      },
      {
        title: "Newborn Health Insurance Policy",
        note: "Compliant infant health policy"
      }
    ],
    renewal: [
      {
        title: "Sponsor’s Valid Emirates ID and UAE Residence Visa",
        note: "Active sponsor file for residency renewal"
      },
      {
        title: "Family Member’s Current Emirates ID and Residence Visa",
        note: "Original cards for biometric & stamping renewal"
      },
      {
        title: "Updated Tenancy Contract (Ejari)",
        note: "Valid registered tenancy contract in sponsor’s name"
      },
      {
        title: "Latest Salary Certificate or Labour Contract",
        note: "Current proof of monthly income"
      },
      {
        title: "Valid UAE Health Insurance Certificate",
        note: "Active insurance card or certificate"
      }
    ]
  };

  const documentList = tabDocuments[activeTab] || tabDocuments.spouse;

  // Track checked document items
  const [checkedItems, setCheckedItems] = useState({
    0: true,
    1: true
  });

  const totalCount = documentList.length;
  const readyCount = Object.values(checkedItems).filter(Boolean).length;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCheckedItems({ 0: true, 1: true });
  };

  const toggleCheck = (idx) => {
    setCheckedItems(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleSendList = () => {
    const readyNames = documentList
      .filter((_, idx) => checkedItems[idx])
      .map(item => `✅ ${item.title}`);
    const missingNames = documentList
      .filter((_, idx) => !checkedItems[idx])
      .map(item => `⏳ Need assistance: ${item.title}`);

    const message = encodeURIComponent(
      `Hello Brightlink! Here is my Family Visa document status for ${activeTab.toUpperCase()}:\n\n` +
      `Ready (${readyCount}/${totalCount}):\n` +
      readyNames.join('\n') +
      `\n\nPending / Need help:\n` +
      missingNames.join('\n') +
      `\n\nPlease let me know the next steps to file.`
    );
    window.open(`https://wa.me/971566556645?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            03 — Documents
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-4">
            Tick what you have. We'll chase the rest.
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed font-sans">
            Pick the application, tick what you have, and send us the list — the message writes itself.
          </p>
        </motion.div>

        {/* Application Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E8DFC8]">
          <div className="flex flex-wrap gap-2">
            {['spouse', 'child', 'parents', 'newborn', 'renewal'].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => handleTabChange(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold capitalize transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#0F172A] text-white shadow-xs'
                    : 'bg-[#FCFAF8] text-[#475569] border border-[#DECBB5] hover:border-[#B8864B] hover:text-[#0F172A]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Dynamic Counter: X of Y ready */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-xs font-bold text-[#8C6230]">
            <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />
            <span>{readyCount} of {totalCount} ready</span>
          </div>
        </div>

        {/* Interactive Checklist Items */}
        <div className="divide-y divide-[#EBE4D8] border-y border-[#EBE4D8] mb-8 bg-[#FCFAF8] rounded-2xl overflow-hidden shadow-xs">
          {documentList.map((doc, idx) => {
            const isChecked = !!checkedItems[idx];
            return (
              <div
                key={idx}
                onClick={() => toggleCheck(idx)}
                className={`p-4 sm:p-5 flex items-start gap-4 transition-colors cursor-pointer select-none ${
                  isChecked ? 'bg-white' : 'hover:bg-white/80'
                }`}
              >
                <button
                  type="button"
                  aria-label="Toggle document item"
                  className="mt-0.5 text-[#B8864B] shrink-0"
                >
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-[#B8864B]" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-300 hover:text-slate-400" />
                  )}
                </button>

                <div className="space-y-0.5 flex-1">
                  <h4 className={`text-xs sm:text-sm font-bold transition-colors ${
                    isChecked ? 'text-[#0F172A]' : 'text-slate-600'
                  }`}>
                    {doc.title}
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {doc.note}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA & Supporting Note */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-[#FAF7F2] border border-[#DECBB5]">
          <div className="flex items-start gap-2.5 max-w-xl text-xs text-[#475569]">
            <Info className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
            <p>
              Originals are needed only for attestation and stamping — our rider collects and returns them.
            </p>
          </div>

          <div className="shrink-0">
            <motion.button
              type="button"
              whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              onClick={handleSendList}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs text-white bg-[#0F172A] hover:bg-[#B8864B] transition-all cursor-pointer shadow-sm font-sans"
            >
              <MessageSquare className="w-4 h-4 text-[#F5D7A1]" />
              <span>Send my list to Brightlink Typing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Documents;
