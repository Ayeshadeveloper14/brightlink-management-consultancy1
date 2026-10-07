import React, { useState } from 'react';
import { PageHero } from '../components/shared/PageHero.jsx';
import { ArticleCatalog } from '../components/blog/ArticleCatalog.jsx';
import { ArticleModal } from '../components/blog/ArticleModal.jsx';

export const BlogPage = ({ onOpenConsultation }) => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <PageHero
        badge="Official UAE Immigration & Business Insights"
        title="UAE Visa & Business"
        titleHighlight="Knowledge Center & Guides"
        description="Expert guidance, policy updates, and practical instructions on UAE Golden Visas, family sponsorship, company formation, and consular procedures."
        breadcrumbs={[{ label: 'Blog & Guides' }]}
        image="/images/hero_dubai_skyline_1790842330436.jpg"
        stats={[
          { value: 'Verified', label: 'Immigration Legal Advice' },
          { value: 'Weekly', label: 'Policy Updates' },
          { value: '2026 Rules', label: 'Up-to-Date Guidelines' },
          { value: 'Free Read', label: 'Open Knowledge Base' }
        ]}
        onOpenConsultation={() => onOpenConsultation('Knowledge Center Advisory')}
        showConsultationBtn={true}
        showWhatsAppBtn={true}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <ArticleCatalog onSelectArticle={(article) => setSelectedArticle(article)} />

          {/* Expert Consultation Callout */}
          <div className="mt-16 p-8 rounded-3xl bg-neutral-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-xl font-bold">Have Questions About Recent UAE Immigration Changes?</h3>
              <p className="text-neutral-400 text-xs sm:text-sm">Speak directly with an authorized GDRFA and ICP typing consultant in Dubai.</p>
            </div>
            <button
              onClick={() => onOpenConsultation('Knowledge Center Advisory')}
              className="py-3 px-6 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white text-xs font-bold whitespace-nowrap cursor-pointer shadow-md"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenConsultation={onOpenConsultation}
      />
    </div>
  );
};

export const Blog = BlogPage;
export default BlogPage;
