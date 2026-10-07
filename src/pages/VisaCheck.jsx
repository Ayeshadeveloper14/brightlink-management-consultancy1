import React, { useState, useEffect } from 'react';
import { PageHero } from '../components/shared/PageHero.jsx';
import { StatusCheckForm } from '../components/visa-check/StatusCheckForm.jsx';
import { StatusGuide } from '../components/visa-check/StatusGuide.jsx';

export const VisaCheckPage = ({ onOpenConsultation }) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerEl = document.querySelector('header');
      if (headerEl) {
        const height = headerEl.getBoundingClientRect().height;
        if (height > 0) {
          setHeaderHeight(height);
        }
      }
    };

    updateHeaderHeight();

    const headerEl = document.querySelector('header');
    let resizeObserver;
    if (headerEl && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        updateHeaderHeight();
      });
      resizeObserver.observe(headerEl);
    }

    window.addEventListener('resize', updateHeaderHeight);
    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  return (
    <div
      className="bg-[#FFFFFF] min-h-screen pt-[45px] sm:pt-[50px] lg:pt-[60px]"
      style={headerHeight > 0 ? { paddingTop: ${headerHeight}px } : undefined}
    >
      <PageHero
        badge="Official UAE Immigration Verification Guide"
        title="UAE Visa Check"
        titleHighlight="& Status Verification Tool"
        description="Verify your UAE visa validity, application progress, and overstay fines through authorized GDRFA Dubai and ICP Federal systems with expert typing assistance."
        breadcrumbs={[{ label: 'Visa Check' }]}
        image="/images/why_fast_process_1790842377870.jpg"
        stats={[
          { value: 'Instant', label: 'Status Verification' },
          { value: 'GDRFA & ICP', label: 'Official Government Data' },
          { value: 'AED 0 Fee', label: 'Online Status Inquiry' },
          { value: '24/7 Aid', label: 'Fine Reduction Support' }
        ]}
        onOpenConsultation={() => onOpenConsultation('Visa Check / Status Verification')}
        showConsultationBtn={true}
        showWhatsAppBtn={true}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          <StatusCheckForm onOpenConsultation={onOpenConsultation} />
          <StatusGuide onOpenConsultation={onOpenConsultation} />
        </div>
      </section>
    </div>
  );
};

export const VisaCheck = VisaCheckPage;
export default VisaCheckPage;
