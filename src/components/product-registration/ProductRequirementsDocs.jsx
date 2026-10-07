import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileText, 
  CheckCircle2, 
  Barcode, 
  Languages, 
  ShieldCheck, 
  AlertCircle, 
  Download, 
  CheckSquare,
  Building2,
  FileCheck
} from 'lucide-react';

export const ProductRequirementsDocs = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const corePrerequisites = [
    {
      title: 'Valid UAE Commercial Trade License',
      description: 'Your company must hold an active mainland (DED) or Free Zone trade license with the relevant commercial activity (e.g. Cosmetics Trading, Food Trading, General Trading). Foreign firms without a local license can utilize our Local Distributor Agency service.',
      icon: Building2
    },
    {
      title: 'GS1 Registered Product Barcodes',
      description: 'Each individual SKU, flavor, fragrance variant, and packaging size must carry a registered GS1-standard international barcode (EAN-13 or UPC). Internal or unofficial store barcodes are not accepted by Dubai Municipality.',
      icon: Barcode
    },
    {
      title: 'Bilingual Label Artwork (English & Arabic)',
      description: 'Packaging design files must contain clear bilingual labeling compliant with UAE GSO standards, including product name, usage directions, ingredient list (INCI), country of origin, net contents, and storage conditions.',
      icon: Languages
    }
  ];

  const requiredDocuments = [
    {
      doc: 'Certificate of Free Sale (CFS)',
      purpose: 'Official certificate from the health/commerce authority in the manufacturing country certifying that the product is legally marketed in the country of origin.',
      attestation: 'Must be attested by the UAE Embassy in the country of manufacture.'
    },
    {
      doc: 'Good Manufacturing Practice (GMP) / ISO 22716',
      purpose: 'Certifies that the manufacturing plant adheres to international hygiene, quality control, and safety production standards.',
      attestation: 'ISO 22716 (Cosmetics) or ISO 22000 (Food Safety).'
    },
    {
      doc: 'Certificate of Analysis (COA) & Lab Test Report',
      purpose: 'Detailed chemical breakdown, microbiological test report, heavy metal screening (lead, arsenic, mercury), and product stability data.',
      attestation: 'Issued by an accredited ISO 17025 laboratory.'
    },
    {
      doc: 'Complete Quantitative Ingredient Breakdown',
      purpose: 'Full formula breakdown with precise percentages (totaling 100%) and international INCI / CAS chemical identification names.',
      attestation: 'Certified by the manufacturer or head chemist.'
    },
    {
      doc: 'Material Safety Data Sheet (MSDS)',
      purpose: '16-section chemical safety document outlining physical properties, toxicity, handling precautions, and flammability parameters.',
      attestation: 'Mandatory for perfumes, aerosols, and detergents.'
    },
    {
      doc: 'High-Resolution Packaging Artwork & Label Proof',
      purpose: 'Clear, un-rendered 2D/3D flat artwork showing all primary and secondary carton sides with batch code and shelf-life indications.',
      attestation: 'PDF / AI format with visible barcode placement.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="border-b border-[#E8DFC8] pb-6 mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            Document Checklist
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Requirements & Required Documents
          </h2>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed font-sans">
            To ensure zero rejection rates before Dubai Municipality, documents must be audited for chemical compliance, international attestation, and correct bilingual formatting.
          </p>
        </motion.div>

        {/* Part 1: Core Prerequisites (3 Highlighted Information Blocks) */}
        <div className="space-y-6 mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading">
            Core Prerequisites Before Applying
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {corePrerequisites.map((req, i) => {
              const Icon = req.icon;
              return (
                <motion.div 
                  key={i}
                  whileHover={shouldReduceMotion ? {} : { y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-2xl bg-[#FCFAF8] border border-[#DECBB5] shadow-xs hover:border-[#B8864B] transition-all space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-[#0F172A] font-heading">
                    {req.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {req.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Part 2: Required Documents Checklist (Clean Editorial List) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55 }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading">
              Official Document Checklist
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Required for upload into the Dubai Municipality Montaji portal.
            </p>
          </div>

          <div className="divide-y divide-[#EBE4D8] border-y border-[#EBE4D8]">
            {requiredDocuments.map((doc, idx) => (
              <motion.div 
                key={idx}
                whileHover={shouldReduceMotion ? {} : { x: 3 }}
                transition={{ duration: 0.18 }}
                className="py-4.5 flex flex-col sm:flex-row sm:items-start justify-between gap-4 transition-colors"
              >
                <div className="sm:w-1/3">
                  <span className="font-bold text-sm text-[#0F172A] block font-heading">{doc.doc}</span>
                  <span className="text-[11px] text-[#B8864B] font-semibold block mt-0.5">{doc.attestation}</span>
                </div>
                <div className="sm:w-2/3 text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {doc.purpose}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Foreign Brand Assistance Advisory */}
          <div className="mt-8 p-6 rounded-2xl bg-[#FAF7F2] border border-[#DECBB5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <strong className="text-sm text-[#0F172A] block font-heading">Missing a Certificate of Free Sale (CFS) or Lab Test?</strong>
              <p className="text-xs text-[#475569]">
                Our PRO team assists international manufacturers in obtaining accredited UAE laboratory analysis and embassy attestations.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenConsultation('Document Attestation & Lab Testing Support')}
              className="shrink-0 px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#B8864B] text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Get Document Support
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ProductRequirementsDocs;
