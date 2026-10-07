import React from 'react';
import { 
  FileText, 
  Eye, 
  BookOpen, 
  Laptop, 
  Car, 
  Award, 
  CheckCircle2 
} from 'lucide-react';

export const HowToGetLicenseSection = () => {
  const steps = [
    {
      step: '01',
      title: 'Eligibility & Opening RTA Traffic File',
      description: 'Applicants must be at least 18 years of age for light motor vehicles. BrightLink opens your electronic traffic file directly through the RTA portal with your passport, residency visa, and Emirates ID.',
      icon: FileText
    },
    {
      step: '02',
      title: 'RTA Approved Eye Test',
      description: 'Undergo a certified eye test at any RTA-authorized optical center (e.g. Barakat, Yateem, Grand Optics) or accredited driving institute. The medical result syncs automatically to your traffic file.',
      icon: Eye
    },
    {
      step: '03',
      title: 'Theory Classes & Hazard Perception',
      description: 'Attend mandatory theory modules covering UAE traffic signs, lane discipline, smart radar awareness, driving emergencies, and hazard perception video simulations.',
      icon: BookOpen
    },
    {
      step: '04',
      title: 'RTA Knowledge / Theory Examination',
      description: 'Sit the 30-minute computer-based multiple choice theory examination at the driving institute. The test is available in English, Arabic, Urdu, Hindi, Malayalam, and Chinese.',
      icon: Laptop
    },
    {
      step: '05',
      title: 'Practical Yard & Highway Training',
      description: 'Master mandatory yard parking maneuvers (parallel, garage, 60-degree, slope start) followed by city street and high-speed highway navigation with an authorized driving instructor.',
      icon: Car
    },
    {
      step: '06',
      title: 'Final RTA Road Test & License Issuance',
      description: 'Complete the official driving assessment with an RTA examiner. Upon passing, your digital UAE Driver’s License is generated instantly in the Dubai Drive app, and your physical card is printed on the spot.',
      icon: Award
    }
  ];

  return (
    <section className="space-y-6 pt-6 border-t border-[#EFEAE2]">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#B8864B]">
            Section 06
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#222222] tracking-tight">
          How to Get a Driver's License in the UAE
        </h2>
        <p className="text-sm text-[#555555] mt-1 leading-relaxed">
          For candidates who do not qualify for direct foreign license conversion, here is the official 6-step roadmap to earning your UAE driving license.
        </p>
      </div>

      {/* Numbered Steps Timeline */}
      <div className="space-y-4">
        {steps.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.step}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EFEAE2] hover:border-[#B8864B]/60 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group"
            >
              <div className="flex items-center justify-between w-full sm:w-auto gap-4">
                <span className="text-3xl sm:text-4xl font-extrabold font-heading text-[#B8864B]/35 group-hover:text-[#B8864B] transition-colors shrink-0">
                  {item.step}
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#E6D7C3] text-[#B8864B] flex items-center justify-center shrink-0 sm:hidden">
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-2.5">
                  <div className="hidden sm:flex w-8 h-8 rounded-lg bg-[#FAF5EC] text-[#B8864B] items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-[#222222] group-hover:text-[#B8864B] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
