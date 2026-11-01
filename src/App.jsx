import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext.jsx';
import { Header } from './components/shared/Header.jsx';
import { Footer } from './components/shared/Footer.jsx';
import { FloatingWhatsApp } from './components/shared/FloatingWhatsApp.jsx';
import { BackToTop } from './components/shared/BackToTop.jsx';
import { ServiceDetailModal } from './components/shared/ServiceDetailModal.jsx';
import { ConsultationModal } from './components/shared/ConsultationModal.jsx';
import { MedicalFinderModal } from './components/shared/MedicalFinderModal.jsx';
import { ScrollToTop } from './components/shared/ScrollToTop.jsx';
import { openWhatsApp } from './utils/whatsapp.js';

import { HomePage } from './pages/HomePage.jsx';
import { ServicesPage } from './pages/ServicesPage.jsx';
import { AboutPage } from './pages/AboutPage.jsx';
import { HowItWorksPage } from './pages/HowItWorksPage.jsx';
import { ReviewsPage } from './pages/ReviewsPage.jsx';
import { FaqPage } from './pages/FaqPage.jsx';
import { FamilyVisaPage } from './pages/FamilyVisaPage.jsx';
import { GoldenVisaPage } from './pages/GoldenVisaPage.jsx';
import { CalculatorPage } from './pages/CalculatorPage.jsx';
import { CalculatorResultsPage } from './pages/CalculatorResultsPage.jsx';
import { VisaCalculatorPage } from './pages/VisaCalculatorPage.jsx';
import { MedicalFinderPage } from './pages/MedicalFinderPage.jsx';
import { PassportServicesPage } from './pages/PassportServicesPage.jsx';
import { ContactPage } from './pages/ContactPage.jsx';
import { BusinessSetupPage } from './pages/BusinessSetupPage.jsx';
import { ProfessionalLicensePage } from './pages/ProfessionalLicensePage.jsx';
import { LlcCompanyPage } from './pages/LlcCompanyPage.jsx';
import { BranchRepOfficePage } from './pages/BranchRepOfficePage.jsx';
import { DubaiFreeZonePage } from './pages/DubaiFreeZonePage.jsx';
import { AbuDhabiFreeZonePage } from './pages/AbuDhabiFreeZonePage.jsx';
import { SharjahFreeZonePage } from './pages/SharjahFreeZonePage.jsx';
import { AjmanFreeZonePage } from './pages/AjmanFreeZonePage.jsx';
import { FujairahFreeZonePage } from './pages/FujairahFreeZonePage.jsx';
import { RakFreeZonePage } from './pages/RakFreeZonePage.jsx';
import { UaqFreeZonePage } from './pages/UaqFreeZonePage.jsx';
import { AllFreeZonesPage } from './pages/AllFreeZonesPage.jsx';
import { RakOffshorePage } from './pages/RakOffshorePage.jsx';
import { JafzaOffshorePage } from './pages/JafzaOffshorePage.jsx';
import { AjmanOffshorePage } from './pages/AjmanOffshorePage.jsx';
import { VisaPage } from './pages/VisaPage.jsx';
import { VisaCheckPage } from './pages/VisaCheckPage.jsx';
import { VisaValidityCheckerPage } from './pages/VisaValidityCheckerPage.jsx';
import { IloeInsurancePage } from './pages/IloeInsurancePage.jsx';
import { ProductRegistrationPage } from './pages/ProductRegistrationPage.jsx';
import { BlogPage } from './pages/BlogPage.jsx';
import { BlogArticlePage } from './pages/BlogArticlePage.jsx';
import { DldTrusteePage } from './pages/DldTrusteePage.jsx';
import { ReraLicensePage } from './pages/ReraLicensePage.jsx';
import { PropertyRevaluationPage } from './pages/PropertyRevaluationPage.jsx';
import { DriverLicensePage } from './pages/DriverLicensePage.jsx';
import { PropertyVisa } from './pages/PropertyVisa.jsx';
import { InvestorVisa } from './pages/InvestorVisa.jsx';
import { NewbornVisa } from './pages/NewbornVisa.jsx';
import { MaidVisa } from './pages/MaidVisa.jsx';
import { TouristVisa } from './pages/TouristVisa.jsx';
import { VirtualWorkVisa } from './pages/VirtualWorkVisa.jsx';
import { ProServicesPage } from './pages/ProServicesPage.jsx';
import { EmiratesIdPage } from './pages/EmiratesIdPage.jsx';
import { AmerCenterPage } from './pages/AmerCenterPage.jsx';
import { TasheelPage } from './pages/TasheelPage.jsx';
import { TawjeehPage } from './pages/TawjeehPage.jsx';
import { DocumentAttestationPage } from './pages/DocumentAttestationPage.jsx';
import { LegalTranslationPage } from './pages/LegalTranslationPage.jsx';
import { NotaryServicesPage } from './pages/NotaryServicesPage.jsx';
import { WillsTestamentPage } from './pages/WillsTestamentPage.jsx';

import { SERVICES_DATA } from './data/servicesData.js';

function AppContent() {
  const navigate = useNavigate();
  const { currentLanguage, dir, isRTL, getLocalizedPath } = useLanguage();
  const [selectedService, setSelectedService] = useState(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isMedicalFinderOpen, setIsMedicalFinderOpen] = useState(false);
  const [consultationDefaultService, setConsultationDefaultService] = useState('Golden Visa');

  const handleOpenCalculator = () => {
    navigate(getLocalizedPath('/calculator'));
  };

  const handleOpenConsultation = (serviceName) => {
    openWhatsApp(serviceName || null, currentLanguage, { type: 'consultation' });
  };

  const handleOpenServiceById = (serviceId) => {
    const found = SERVICES_DATA.find(s => s.id === serviceId);
    if (found) {
      setSelectedService(found);
    }
  };

  // Route definitions with support for bare, /en, and /ar URL prefixes
  const routeConfigs = [
    {
      paths: ['/'],
      element: (
        <HomePage
          onOpenConsultation={handleOpenConsultation}
          onOpenCalculator={handleOpenCalculator}
          onSelectService={(service) => setSelectedService(service)}
        />
      )
    },
    {
      paths: ['/services'],
      element: (
        <ServicesPage
          onSelectService={(service) => setSelectedService(service)}
          onOpenConsultation={handleOpenConsultation}
        />
      )
    },
    {
      paths: ['/about'],
      element: <AboutPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: ['/how-it-works'],
      element: <HowItWorksPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: ['/reviews'],
      element: <ReviewsPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: ['/faq'],
      element: <FaqPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: ['/family-visa', '/services/family-visa'],
      element: (
        <FamilyVisaPage
          onOpenConsultation={handleOpenConsultation}
          onOpenCalculator={handleOpenCalculator}
        />
      )
    },
    {
      paths: ['/golden-visa', '/services/golden-visa', '/visa/golden-visa'],
      element: <GoldenVisaPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: ['/calculator', '/service-calculator'],
      element: <CalculatorPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: ['/calculator/results', '/calculator-results'],
      element: <CalculatorResultsPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: ['/visa-calculator'],
      element: <VisaCalculatorPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/medical-finder',
        '/services/medical-aur-eid-visa',
        '/medical-aur-eid-visa',
        '/services/visa-medical-emirates-id',
        '/services/medical-eid'
      ],
      element: <MedicalFinderPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: ['/passport-services'],
      element: <PassportServicesPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: ['/business-setup'],
      element: <BusinessSetupPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/business-setup/mainland/professional-license',
        '/professional-license',
        '/business-setup/professional-license',
        '/mainland/professional-license'
      ],
      element: <ProfessionalLicensePage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/business-setup/mainland/llc-company',
        '/llc-company',
        '/business-setup/llc-company',
        '/mainland/llc-company'
      ],
      element: <LlcCompanyPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/business-setup/mainland/branch-rep-office',
        '/branch-rep-office',
        '/business-setup/branch-rep-office',
        '/mainland/branch-rep-office',
        '/services/branch-rep-office'
      ],
      element: <BranchRepOfficePage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/business-setup/free-zone/dubai-free-zone',
        '/business-setup/dubai-free-zone',
        '/services/business-setup/dubai-free-zone',
        '/dubai-free-zone'
      ],
      element: <DubaiFreeZonePage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/business-setup/free-zone/abu-dhabi-free-zone',
        '/business-setup/abu-dhabi-free-zone',
        '/services/business-setup/abu-dhabi-free-zone',
        '/abu-dhabi-free-zone'
      ],
      element: <AbuDhabiFreeZonePage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/business-setup/free-zone/sharjah-free-zone',
        '/business-setup/sharjah-free-zone',
        '/services/business-setup/sharjah-free-zone',
        '/sharjah-free-zone'
      ],
      element: <SharjahFreeZonePage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/business-setup/free-zone/ajman-free-zone',
        '/business-setup/ajman-free-zone',
        '/services/business-setup/ajman-free-zone',
        '/ajman-free-zone'
      ],
      element: <AjmanFreeZonePage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/business-setup/free-zone/fujairah-free-zone',
        '/business-setup/fujairah-free-zone',
        '/services/business-setup/fujairah-free-zone',
        '/fujairah-free-zone'
      ],
      element: <FujairahFreeZonePage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/business-setup/free-zone/rak-free-zone',
        '/business-setup/free-zone/rak-free-zone/',
        '/business-setup/rak-free-zone',
        '/services/business-setup/rak-free-zone',
        '/rak-free-zone'
      ],
      element: <RakFreeZonePage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/business-setup/free-zone/uaq-free-zone',
        '/business-setup/free-zone/uaq-free-zone/',
        '/business-setup/uaq-free-zone',
        '/services/business-setup/uaq-free-zone',
        '/uaq-free-zone'
      ],
      element: <UaqFreeZonePage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/business-setup/free-zone/all-free-zones/',
        '/business-setup/free-zone/all-free-zones',
        '/business-setup/all-free-zones',
        '/services/business-setup/all-free-zones',
        '/all-free-zones'
      ],
      element: <AllFreeZonesPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/business-setup/offshore/rak-offshore',
        '/rak-offshore',
        '/business-setup/rak-offshore',
        '/offshore/rak-offshore'
      ],
      element: <RakOffshorePage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/business-setup/offshore/jafza-offshore',
        '/jafza-offshore',
        '/business-setup/jafza-offshore',
        '/offshore/jafza-offshore'
      ],
      element: <JafzaOffshorePage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/business-setup/offshore/ajman-offshore',
        '/ajman-offshore',
        '/business-setup/ajman-offshore',
        '/offshore/ajman-offshore'
      ],
      element: <AjmanOffshorePage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: ['/visa'],
      element: <VisaPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/tourist-visa',
        '/services/tourist-visa',
        '/visa/tourist-visa',
        '/services/visa/tourist-visa'
      ],
      element: <TouristVisa onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/virtual-work-visa',
        '/services/virtual-work-visa',
        '/visa/virtual-work-visa'
      ],
      element: <VirtualWorkVisa onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: ['/property-visa', '/services/property-visa'],
      element: <PropertyVisa onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: ['/investor-visa', '/services/investor-visa'],
      element: <InvestorVisa onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: ['/newborn-visa', '/services/newborn-visa'],
      element: <NewbornVisa onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: ['/maid-visa', '/services/maid-visa'],
      element: <MaidVisa onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/services/visa-validity-checker',
        '/visa-validity-checker',
        '/visa-check'
      ],
      element: <VisaValidityCheckerPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/services/iloe-insurance',
        '/iloe-insurance',
        '/services/iloe-insurance-check',
        '/iloe-insurance-check'
      ],
      element: <IloeInsurancePage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/services/product-registration',
        '/product-registration',
        '/services/product-registration-dubai',
        '/product-registration-dubai'
      ],
      element: <ProductRegistrationPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: ['/blog'],
      element: <BlogPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: ['/blog/:slug', '/blog/article/:slug'],
      element: <BlogArticlePage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: ['/contact'],
      element: <ContactPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: ['/services/pro-services', '/pro-services'],
      element: <ProServicesPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: ['/services/emirates-id', '/emirates-id'],
      element: <EmiratesIdPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: ['/services/amer-center', '/amer-center'],
      element: <AmerCenterPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: ['/services/tasheel-services', '/tasheel-services'],
      element: <TasheelPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/services/tawjeeh-services',
        '/tawjeeh-services',
        '/services/tawjeeh',
        '/tawjeeh'
      ],
      element: <TawjeehPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/services/document-attestation',
        '/document-attestation',
        '/services/attestation',
        '/attestation'
      ],
      element: <DocumentAttestationPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/services/legal-translation',
        '/legal-translation',
        '/services/translation',
        '/translation'
      ],
      element: <LegalTranslationPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/services/notary-services',
        '/notary-services',
        '/services/notary',
        '/notary',
        '/services/poa',
        '/poa'
      ],
      element: <NotaryServicesPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/services/wills-testament',
        '/wills-testament',
        '/services/wills',
        '/wills'
      ],
      element: <WillsTestamentPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/services/dld-trustee',
        '/dld-trustee',
        '/dld-trustee-service'
      ],
      element: <DldTrusteePage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/services/rera-license',
        '/services/rera-license-dubai',
        '/rera-license',
        '/rera-license-dubai'
      ],
      element: <ReraLicensePage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: ['/services/property-revaluation', '/property-revaluation'],
      element: <PropertyRevaluationPage onOpenConsultation={handleOpenConsultation} />
    },
    {
      paths: [
        '/services/drivers-license',
        '/services/drivers-license-in-the-uae',
        '/drivers-license',
        '/drivers-license-uae'
      ],
      element: <DriverLicensePage onOpenConsultation={handleOpenConsultation} />
    }
  ];

  return (
    <div dir={dir} className={`min-h-screen flex flex-col bg-[#FFFFFF] text-[#222222] font-sans antialiased selection:bg-[#B8864B] selection:text-white ${isRTL ? 'text-right' : 'text-left'}`}>
      <ScrollToTop />
      {/* Sticky Header with all navbar page links */}
      <Header onOpenConsultation={handleOpenConsultation} />

      {/* Dynamic Route Pages */}
      <main className="flex-1">
        <Routes>
          {routeConfigs.flatMap((config, cfgIdx) =>
            config.paths.flatMap((rawPath) => {
              const langCodes = ['en', 'ar', 'zh', 'fr', 'de'];
              if (rawPath === '/') {
                return [
                  <Route key={`root-${cfgIdx}`} path="/" element={config.element} />,
                  ...langCodes.flatMap((code) => [
                    <Route key={`${code}-root-${cfgIdx}`} path={`/${code}`} element={config.element} />,
                    <Route key={`${code}-root-slash-${cfgIdx}`} path={`/${code}/`} element={config.element} />
                  ])
                ];
              }
              const clean = rawPath.endsWith('/') && rawPath.length > 1 ? rawPath.slice(0, -1) : rawPath;
              const hasTrailingSlash = rawPath.endsWith('/');
              const routes = [
                <Route key={`bare-${rawPath}`} path={rawPath} element={config.element} />
              ];
              if (!hasTrailingSlash) {
                routes.push(
                  <Route key={`bare-${rawPath}-slash`} path={`${rawPath}/`} element={config.element} />
                );
              }
              langCodes.forEach((code) => {
                routes.push(
                  <Route key={`${code}-${clean}`} path={`/${code}${clean}`} element={config.element} />,
                  <Route key={`${code}-${clean}-slash`} path={`/${code}${clean}/`} element={config.element} />
                );
              });
              return routes;
            })
          )}

          {/* Fallback to Home for unknown routes */}
          <Route
            path="*"
            element={
              <HomePage
                onOpenConsultation={handleOpenConsultation}
                onOpenCalculator={handleOpenCalculator}
                onSelectService={(service) => setSelectedService(service)}
              />
            }
          />
        </Routes>
      </main>

      {/* Multi-Column Footer */}
      <Footer
        onOpenConsultation={handleOpenConsultation}
        onOpenService={handleOpenServiceById}
      />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Modals & Interactive Tools */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenConsultation={(serviceName) => {
          setSelectedService(null);
          handleOpenConsultation(serviceName);
        }}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={consultationDefaultService}
      />

      <MedicalFinderModal
        isOpen={isMedicalFinderOpen}
        onClose={() => setIsMedicalFinderOpen(false)}
        onBookMedical={(serviceName) => {
          handleOpenConsultation(serviceName);
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </BrowserRouter>
  );
}
