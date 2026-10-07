import React from 'react';
import { 
  AlertOctagon, 
  ShieldAlert, 
  FileCheck2, 
  Info, 
  CheckCircle2, 
  XCircle 
} from 'lucide-react';

export const BlackPointsSystemSection = () => {
  const violations = [
    {
      violation: 'Reckless driving endangering lives',
      points: '23 Points',
      fine: 'AED 2,000 + 60 Days Impound'
    },
    {
      violation: 'Jumping a red traffic light',
      points: '12 Points',
      fine: 'AED 1,000 + 30 Days Impound (AED 50k release)'
    },
    {
      violation: 'Exceeding speed limit by > 60 km/h',
      points: '12 Points',
      fine: 'AED 2,000 + 30 Days Impound'
    },
    {
      violation: 'Driving without a valid license / expired license',
      points: '4 Points',
      fine: 'AED 500 + vehicle confiscation risk'
    },
    {
      violation: 'Using handheld mobile phone while driving',
      points: '4 Points',
      fine: 'AED 800'
    },
    {
      violation: 'Failure to leave safe distance (tailgating)',
      points: '4 Points',
      fine: 'AED 400'
    }
  ];

  return (
    <section className="space-y-6 pt-6 border-t border-[#EFEAE2]">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#B8864B]">
            Section 02
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#222222] tracking-tight">
          The System of "Black Marks" (Black Points)
        </h2>
        <p className="text-sm text-[#555555] mt-1 leading-relaxed">
          The UAE operates a cumulative Black Points penalty system. Accumulating <strong>24 black points</strong> within a 12-month period results in immediate suspension of your driving license and confiscation of your driving privileges.
        </p>
      </div>

      {/* Suspension Tiers */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-2xl bg-white border border-[#EFEAE2]">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#976A36] block">
            1st Strike (24 Points)
          </span>
          <h4 className="text-sm font-bold text-[#222222] mt-0.5">
            3-Month License Suspension
          </h4>
          <p className="text-[11px] text-[#666666] mt-1">
            License confiscated by Dubai Police; reinstated after course completion.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-[#EFEAE2]">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#976A36] block">
            2nd Strike (24 Points)
          </span>
          <h4 className="text-sm font-bold text-[#222222] mt-0.5">
            6-Month License Suspension
          </h4>
          <p className="text-[11px] text-[#666666] mt-1">
            Second violation cycle doubles suspension period with mandatory tests.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#FAF5EC]/80 border border-[#B8864B]">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#B8864B] block">
            3rd Strike (24 Points)
          </span>
          <h4 className="text-sm font-bold text-[#222222] mt-0.5">
            1-Year Revocation
          </h4>
          <p className="text-[11px] text-[#666666] mt-1">
            Driver's license completely canceled; must re-register as a beginner.
          </p>
        </div>
      </div>

      {/* Common Violations Table Card */}
      <div className="bg-white rounded-2xl border border-[#EFEAE2] overflow-hidden shadow-xs">
        <div className="p-4 bg-[#FCFAF8] border-b border-[#EFEAE2]">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#222222]">
            Common Traffic Violations & Point Tariffs
          </h4>
        </div>
        <div className="divide-y divide-neutral-100">
          {violations.map((item, i) => (
            <div key={i} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <span className="font-semibold text-[#333333] flex-1">
                {item.violation}
              </span>
              <div className="flex items-center gap-4 shrink-0">
                <span className="font-bold text-[#B8864B] bg-[#FAF5EC] px-2.5 py-1 rounded-md border border-[#E6D7C3]/60">
                  {item.points}
                </span>
                <span className="text-[#666666] font-medium text-right min-w-[140px]">
                  {item.fine}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How to Check & Clear Points */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#FCFAF8] border border-[#EFEAE2] space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#976A36] flex items-center gap-1.5">
          <Info className="w-4 h-4 text-[#B8864B]" />
          <span>How to Monitor and Reduce Black Points in Dubai</span>
        </h4>
        <p className="text-xs text-[#555555] leading-relaxed">
          Drivers can query their traffic file through the <strong>Dubai Police Smart App</strong> or the <strong>RTA Portal</strong>. Dubai Police periodically offers awareness courses and safe-driving campaigns that can deduct up to 8 black points from your record upon successful completion.
        </p>
      </div>
    </section>
  );
};
