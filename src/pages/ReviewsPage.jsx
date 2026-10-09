import React from 'react';
import { PageHero } from '../components/shared/PageHero.jsx';
import { ReviewsList } from '../components/reviews/ReviewsList.jsx';
import { ReviewSubmitForm } from '../components/reviews/ReviewSubmitForm.jsx';

export const ReviewsPage = ({ onOpenConsultation }) => {
  const heroStats = [
    { value: '4.9 / 5.0', label: 'Average Client Rating' },
    { value: '800+', label: 'Verified Google Reviews' },
    { value: '98%', label: 'First-Time Approval' },
    { value: '100%', label: 'Dedicated Case Care' }
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <PageHero
        badge="Verified UAE Client Feedback"
        title="What Our Clients Say About"
        titleHighlight="Brightlink Typing"
        description="Read authentic experiences from expatriates, family sponsors, real estate investors, and corporate founders who trusted Brightlink with their UAE residency and consular needs."
        breadcrumbs={[
          { label: 'Client Reviews' }
        ]}
        image="/images/about_visa_consultant_1790842347102.jpg"
        stats={heroStats}
        onOpenConsultation={() => onOpenConsultation('Client Reviews Inquiry')}
        showConsultationBtn={true}
        showWhatsAppBtn={true}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <ReviewsList />
          <ReviewSubmitForm />
        </div>
      </section>
    </div>
  );
};

export const Reviews = ReviewsPage;
export default ReviewsPage;
