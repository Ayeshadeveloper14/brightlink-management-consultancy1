import React, { useLayoutEffect } from 'react';
import { DriverLicenseHero } from '../components/drivers-license/DriverLicenseHero.jsx';
import { TrafficRulesSection } from '../components/drivers-license/TrafficRulesSection.jsx';
import { BlackPointsSystemSection } from '../components/drivers-license/BlackPointsSystemSection.jsx';
import { UaeDriverLicenseOverviewSection } from '../components/drivers-license/UaeDriverLicenseOverviewSection.jsx';
import { ForeignLicenseDrivingSection } from '../components/drivers-license/ForeignLicenseDrivingSection.jsx';
import { LicenseExchangeSection } from '../components/drivers-license/LicenseExchangeSection.jsx';
import { HowToGetLicenseSection } from '../components/drivers-license/HowToGetLicenseSection.jsx';
import { DriverConsultationSidebar } from '../components/drivers-license/DriverConsultationSidebar.jsx';
import { DriverTrustStatsSection } from '../components/drivers-license/DriverTrustStatsSection.jsx';
import { DriverLicenseFinalCtaSection } from '../components/drivers-license/DriverLicenseFinalCtaSection.jsx';

export const DriverLicensePage = ({ onOpenConsultation }) => {
  useLayoutEffect(() => {
    document.title = "Driver's License in the UAE: Exchange, Eye Test & Road Rules | Brightlink";
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }, []);

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#222222]">
      {/* 1. Page Hero with Road Visual & Key Facts */}
      <DriverLicenseHero onOpenConsultation={onOpenConsultation} />

      {/* 2. Main Content Area with Right-Side Consultation Sidebar */}
      <section id="driver-content" className="py-16 lg:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Main Content Area (8 Columns on Desktop) */}
            <div className="lg:col-span-8 space-y-12">
              {/* 1. Traffic Rules in the UAE */}
              <TrafficRulesSection />

              {/* 2. The System of "Black Marks" (Black Points) */}
              <BlackPointsSystemSection />

              {/* 3. UAE Driver's License Overview */}
              <UaeDriverLicenseOverviewSection />

              {/* 4. Driving in the UAE with a Foreign Driver's License (Tourists vs Residents) */}
              <ForeignLicenseDrivingSection />

              {/* 5. Exchange of Foreign Driving Licenses (Direct Swap & Golden Visa Exemption) */}
              <LicenseExchangeSection />

              {/* 6. How to Get a Driver's License in the UAE? (Numbered Process 01 - 06) */}
              <HowToGetLicenseSection />
            </div>

            {/* Right-Side Consultation Sidebar (4 Columns on Desktop, Stacks on Mobile) */}
            <div className="lg:col-span-4 w-full">
              <DriverConsultationSidebar />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Why Choose Us / Trust Statistics (4 Key Credibility Badges) */}
      <DriverTrustStatsSection />

      {/* 4. Final Consultation / Contact CTA */}
      <DriverLicenseFinalCtaSection />
    </div>
  );
};

export const DriverLicense = DriverLicensePage;
export default DriverLicensePage;
