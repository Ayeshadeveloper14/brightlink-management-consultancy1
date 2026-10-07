import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext.jsx';
import { Header } from './components/shared/Header.jsx';
import { Footer } from './components/shared/Footer.jsx';
import { FloatingWhatsApp } from './components/shared/FloatingWhatsApp.jsx';
import { ServiceDetailModal } from './components/shared/ServiceDetailModal.jsx';
import { ConsultationModal } from './components/shared/ConsultationModal.jsx';
import { VisaCalculatorModal } from './components/shared/VisaCalculatorModal.jsx';
import { MedicalFinderModal } from './components/shared/MedicalFinderModal.jsx';
import { ScrollToTop } from './components/shared/ScrollToTop.jsx';

import { HomePage } from './pages/HomePage.jsx';
import { ServicesPage } from './pages/ServicesPage.jsx';
import { AboutPage } from './pages/AboutPage.jsx';
import { HowItWorksPage } from './pages/HowItWorksPage.jsx';
import { ReviewsPage } from './pages/ReviewsPage.jsx';
import { FaqPage } from './pages/FaqPage.jsx';
import { FamilyVisaPage } from './pages/FamilyVisaPage.jsx';
import { GoldenVisaPage } from './pages/GoldenVisaPage.jsx';
import { VisaCalculatorPage } from './pages/VisaCalculatorPage.jsx';
import { MedicalFinderPage } from './pages/MedicalFinderPage.jsx';
import { PassportServicesPage } from './pages/PassportServicesPage.jsx';
import { ContactPage } from './pages/ContactPage.jsx';
import { BusinessSetupPage } from './pages/BusinessSetupPage.jsx';
import { ProfessionalLicensePage } from './pages/ProfessionalLicensePage.jsx';
import { LlcCompanyPage } from './pages/LlcCompanyPage.jsx';
import { BranchRepOfficePage } from './pages/BranchRepOfficePage.jsx';
import { RakOffshorePage } from './pages/RakOffshorePage.jsx';
import { JafzaOffshorePage } from './pages/JafzaOffshorePage.jsx';
import { AjmanOffshorePage } from './pages/AjmanOffshorePage.jsx';
import { VisaPage } from './pages/VisaPage.jsx';
import { VisaCheckPage } from './pages/VisaCheckPage.jsx';
import { VisaValidityCheckerPage } from './pages/VisaValidityCheckerPage.jsx';
import { IloeInsurancePage } from './pages/IloeInsurancePage.jsx';
import { ProductRegistrationPage } from './pages/ProductRegistrationPage.jsx';
import { BlogPage } from './pages/BlogPage.jsx';
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
  const { dir, isRTL } = useLanguage();
  const [selectedService, setSelectedService] = useState(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isMedicalFinderOpen, setIsMedicalFinderOpen] = useState(false);
  const [consultationDefaultService, setConsultationDefaultService] = useState('Golden Visa');

  const handleOpenConsultation = (serviceName = 'Golden Visa') => {
    setConsultationDefaultService(serviceName);
    setIsConsultationOpen(true);
  };

  const handleOpenServiceById = (serviceId) => {
    const found = SERVICES_DATA.find(s => s.id === serviceId);
    if (found) {
      setSelectedService(found);
    }
  };

  return (
    <div dir={dir} className={`min-h-screen flex flex-col bg-[#FFFFFF] text-[#222222] font-sans antialiased selection:bg-[#B8864B] selection:text-white ${isRTL ? 'text-right' : 'text-left'}`}>
      <ScrollToTop />
      {/* Sticky Header with all navbar page links */}
      <Header
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Dynamic Route Pages */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenConsultation={handleOpenConsultation}
                onOpenCalculator={() => setIsCalculatorOpen(true)}
                onSelectService={(service) => setSelectedService(service)}
              />
            }
          />

          <Route
            path="/services"
            element={
              <ServicesPage
                onSelectService={(service) => setSelectedService(service)}
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/about"
            element={
              <AboutPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/how-it-works"
            element={
              <HowItWorksPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/reviews"
            element={
              <ReviewsPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/faq"
            element={
              <FaqPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/family-visa"
            element={
              <FamilyVisaPage
                onOpenConsultation={handleOpenConsultation}
                onOpenCalculator={() => setIsCalculatorOpen(true)}
              />
            }
          />

          <Route
            path="/services/family-visa"
            element={
              <FamilyVisaPage
                onOpenConsultation={handleOpenConsultation}
                onOpenCalculator={() => setIsCalculatorOpen(true)}
              />
            }
          />

          <Route
            path="/golden-visa"
            element={
              <GoldenVisaPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/golden-visa"
            element={
              <GoldenVisaPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/visa/golden-visa"
            element={
              <GoldenVisaPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/visa-calculator"
            element={
              <VisaCalculatorPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/medical-finder"
            element={
              <MedicalFinderPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/medical-aur-eid-visa"
            element={
              <MedicalFinderPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/medical-aur-eid-visa"
            element={
              <MedicalFinderPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/visa-medical-emirates-id"
            element={
              <MedicalFinderPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/medical-eid"
            element={
              <MedicalFinderPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/passport-services"
            element={
              <PassportServicesPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/business-setup"
            element={
              <BusinessSetupPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/business-setup/mainland/professional-license"
            element={
              <ProfessionalLicensePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/professional-license"
            element={
              <ProfessionalLicensePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/business-setup/professional-license"
            element={
              <ProfessionalLicensePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/mainland/professional-license"
            element={
              <ProfessionalLicensePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/business-setup/mainland/llc-company"
            element={
              <LlcCompanyPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/llc-company"
            element={
              <LlcCompanyPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/business-setup/llc-company"
            element={
              <LlcCompanyPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/mainland/llc-company"
            element={
              <LlcCompanyPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/business-setup/mainland/branch-rep-office"
            element={
              <BranchRepOfficePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/branch-rep-office"
            element={
              <BranchRepOfficePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/business-setup/branch-rep-office"
            element={
              <BranchRepOfficePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/mainland/branch-rep-office"
            element={
              <BranchRepOfficePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/branch-rep-office"
            element={
              <BranchRepOfficePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/business-setup/offshore/rak-offshore"
            element={
              <RakOffshorePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/rak-offshore"
            element={
              <RakOffshorePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/business-setup/rak-offshore"
            element={
              <RakOffshorePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/offshore/rak-offshore"
            element={
              <RakOffshorePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/business-setup/offshore/jafza-offshore"
            element={
              <JafzaOffshorePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/jafza-offshore"
            element={
              <JafzaOffshorePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/business-setup/jafza-offshore"
            element={
              <JafzaOffshorePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/offshore/jafza-offshore"
            element={
              <JafzaOffshorePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/business-setup/offshore/ajman-offshore"
            element={
              <AjmanOffshorePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/ajman-offshore"
            element={
              <AjmanOffshorePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/business-setup/ajman-offshore"
            element={
              <AjmanOffshorePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/offshore/ajman-offshore"
            element={
              <AjmanOffshorePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/visa"
            element={
              <VisaPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/tourist-visa"
            element={
              <TouristVisa
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/tourist-visa"
            element={
              <TouristVisa
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/visa/tourist-visa"
            element={
              <TouristVisa
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/visa/tourist-visa"
            element={
              <TouristVisa
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/virtual-work-visa"
            element={
              <VirtualWorkVisa
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/virtual-work-visa"
            element={
              <VirtualWorkVisa
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/visa/virtual-work-visa"
            element={
              <VirtualWorkVisa
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/property-visa"
            element={
              <PropertyVisa
                onOpenConsultation={handleOpenConsultation}
                onOpenCalculator={() => setIsCalculatorOpen(true)}
              />
            }
          />

          <Route
            path="/services/property-visa"
            element={
              <PropertyVisa
                onOpenConsultation={handleOpenConsultation}
                onOpenCalculator={() => setIsCalculatorOpen(true)}
              />
            }
          />

          <Route
            path="/investor-visa"
            element={
              <InvestorVisa
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/investor-visa"
            element={
              <InvestorVisa
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/newborn-visa"
            element={
              <NewbornVisa
                onOpenConsultation={handleOpenConsultation}
                onOpenCalculator={() => setIsCalculatorOpen(true)}
              />
            }
          />

          <Route
            path="/services/newborn-visa"
            element={
              <NewbornVisa
                onOpenConsultation={handleOpenConsultation}
                onOpenCalculator={() => setIsCalculatorOpen(true)}
              />
            }
          />

          <Route
            path="/maid-visa"
            element={
              <MaidVisa
                onOpenConsultation={handleOpenConsultation}
                onOpenCalculator={() => setIsCalculatorOpen(true)}
              />
            }
          />

          <Route
            path="/services/maid-visa"
            element={
              <MaidVisa
                onOpenConsultation={handleOpenConsultation}
                onOpenCalculator={() => setIsCalculatorOpen(true)}
              />
            }
          />

          <Route
            path="/services/visa-validity-checker"
            element={
              <VisaValidityCheckerPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/visa-validity-checker"
            element={
              <VisaValidityCheckerPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/visa-check"
            element={
              <VisaValidityCheckerPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/iloe-insurance"
            element={
              <IloeInsurancePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/iloe-insurance"
            element={
              <IloeInsurancePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/iloe-insurance-check"
            element={
              <IloeInsurancePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/iloe-insurance-check"
            element={
              <IloeInsurancePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/product-registration"
            element={
              <ProductRegistrationPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/product-registration"
            element={
              <ProductRegistrationPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/product-registration-dubai"
            element={
              <ProductRegistrationPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/product-registration-dubai"
            element={
              <ProductRegistrationPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/blog"
            element={
              <BlogPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />

          <Route
            path="/services/pro-services"
            element={
              <ProServicesPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/pro-services"
            element={
              <ProServicesPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/emirates-id"
            element={
              <EmiratesIdPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/emirates-id"
            element={
              <EmiratesIdPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/amer-center"
            element={
              <AmerCenterPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/amer-center"
            element={
              <AmerCenterPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/tasheel-services"
            element={
              <TasheelPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/tasheel-services"
            element={
              <TasheelPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/tawjeeh-services"
            element={
              <TawjeehPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/tawjeeh-services"
            element={
              <TawjeehPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/tawjeeh"
            element={
              <TawjeehPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/tawjeeh"
            element={
              <TawjeehPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/document-attestation"
            element={
              <DocumentAttestationPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/document-attestation"
            element={
              <DocumentAttestationPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/attestation"
            element={
              <DocumentAttestationPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/attestation"
            element={
              <DocumentAttestationPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/legal-translation"
            element={
              <LegalTranslationPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/legal-translation"
            element={
              <LegalTranslationPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/translation"
            element={
              <LegalTranslationPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/translation"
            element={
              <LegalTranslationPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/notary-services"
            element={
              <NotaryServicesPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/notary-services"
            element={
              <NotaryServicesPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/notary"
            element={
              <NotaryServicesPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/notary"
            element={
              <NotaryServicesPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/poa"
            element={
              <NotaryServicesPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/poa"
            element={
              <NotaryServicesPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/wills-testament"
            element={
              <WillsTestamentPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/wills-testament"
            element={
              <WillsTestamentPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/wills"
            element={
              <WillsTestamentPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/wills"
            element={
              <WillsTestamentPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/dld-trustee"
            element={
              <DldTrusteePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/dld-trustee"
            element={
              <DldTrusteePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/dld-trustee-service"
            element={
              <DldTrusteePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/rera-license"
            element={
              <ReraLicensePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/rera-license-dubai"
            element={
              <ReraLicensePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/rera-license"
            element={
              <ReraLicensePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/rera-license-dubai"
            element={
              <ReraLicensePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/property-revaluation"
            element={
              <PropertyRevaluationPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/property-revaluation"
            element={
              <PropertyRevaluationPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/drivers-license"
            element={
              <DriverLicensePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/services/drivers-license-in-the-uae"
            element={
              <DriverLicensePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/drivers-license"
            element={
              <DriverLicensePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          <Route
            path="/drivers-license-uae"
            element={
              <DriverLicensePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />

          {/* Fallback to Home */}
          <Route
            path="*"
            element={
              <HomePage
                onOpenConsultation={handleOpenConsultation}
                onOpenCalculator={() => setIsCalculatorOpen(true)}
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

      <VisaCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onSelectServiceConsultation={(serviceName) => {
          handleOpenConsultation(serviceName);
        }}
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
    <LanguageProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </LanguageProvider>
  );
}
