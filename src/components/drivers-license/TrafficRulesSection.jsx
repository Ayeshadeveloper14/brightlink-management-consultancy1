import React from 'react';
import { 
  ShieldAlert, 
  AlertTriangle, 
  CheckCircle2, 
  Compass, 
  PhoneOff, 
  Baby, 
  Gauge, 
  WineOff 
} from 'lucide-react';

export const TrafficRulesSection = () => {
  const rules = [
    {
      title: 'Drive on the Right Side of the Road',
      description: 'Vehicles in the UAE drive on the right side of the road with the driver seated on the left. Overtaking is strictly executed on the left lane.',
      icon: Compass
    },
    {
      title: 'Zero Alcohol Tolerance (0.0% BAC)',
      description: 'The UAE enforces a strict zero-tolerance policy regarding driving under the influence of alcohol or drugs. Any detected blood alcohol level results in immediate arrest, heavy fines up to AED 20,000, vehicle impoundment, and potential deportation.',
      icon: WineOff,
      urgent: true
    },
    {
      title: 'Seatbelts Mandatory for All Occupants',
      description: 'Under Federal Traffic Law, the driver and every passenger in the vehicle (front and rear) must wear a fastened seatbelt at all times. Failure incurs an AED 400 fine and 4 black points per unbelted passenger.',
      icon: ShieldAlert
    },
    {
      title: 'Hands-Free Mobile Phone Usage Only',
      description: 'Holding or glancing at a mobile phone while driving (even when stationary at red traffic signals) is strictly prohibited. Offending drivers face an AED 800 fine and 4 black points.',
      icon: PhoneOff
    },
    {
      title: 'Child Safety Seats up to Age 4',
      description: 'Children under 4 years of age must be seated in an authorized child safety seat. Children under 10 years or shorter than 145 cm are legally barred from occupying the front passenger seat.',
      icon: Baby
    },
    {
      title: 'Strict Speed Limits & Smart Radars',
      description: 'Dubai highways and city streets are comprehensively monitored by smart AI radars. Urban roads range from 40 to 80 km/h, while major motorways (Sheikh Zayed Road, E11, E311) permit 100 to 120 km/h with a strict speed buffer rule.',
      icon: Gauge
    }
  ];

  return (
    <section className="space-y-6">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#B8864B]">
            Section 01
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#222222] tracking-tight">
          Traffic Rules in the UAE
        </h2>
        <p className="text-sm text-[#555555] mt-1 leading-relaxed">
          The UAE maintains world-class highway infrastructure regulated by strict federal traffic laws. Familiarizing yourself with these core rules is essential before getting behind the wheel.
        </p>
      </div>

      {/* Rules Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {rules.map((rule, idx) => {
          const Icon = rule.icon;
          return (
            <div
              key={idx}
              className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                rule.urgent
                  ? 'bg-[#FAF5EC]/80 border-[#B8864B] shadow-xs'
                  : 'bg-white border-[#EFEAE2] hover:border-[#DECBB5]'
              }`}
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    rule.urgent
                      ? 'bg-[#B8864B] text-white'
                      : 'bg-[#FAF5EC] text-[#B8864B]'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#222222]">
                    {rule.title}
                  </h3>
                </div>

                <p className="text-xs text-[#555555] leading-relaxed">
                  {rule.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Highlight Information Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#FCFAF8] border-l-4 border-[#B8864B] border-y border-r border-[#EFEAE2] flex items-start gap-3.5">
        <AlertTriangle className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="text-xs font-bold text-[#222222] uppercase tracking-wider">
            Smart AI Radar Enforcement Alert
          </h4>
          <p className="text-xs text-[#555555] leading-relaxed">
            Dubai’s smart traffic camera network continuously tracks tailgating, improper lane discipline, stopping in yellow junction boxes, and sudden swerving without indicators. Always maintain a safe following distance of at least 3 seconds.
          </p>
        </div>
      </div>
    </section>
  );
};
