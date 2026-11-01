import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { BLOG_ARTICLES, BLOG_CATEGORIES, getArticleInLanguage } from '../../translations/blogData.js';

export const ArticleCatalog = () => {
  const { currentLanguage, isRTL, getLocalizedPath } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const localizedArticles = BLOG_ARTICLES.map(art => getArticleInLanguage(art, currentLanguage));

  const filteredArticles = localizedArticles.filter(art => {
    const rawArticle = BLOG_ARTICLES.find(a => a.id === art.id);
    const matchesCategory = activeCategory === 'All' || 
                            rawArticle?.category?.en === activeCategory || 
                            art.category === activeCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          art.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getReadMoreText = () => {
    switch (currentLanguage) {
      case 'ar': return 'قراءة المقال';
      case 'zh': return '阅读全文';
      case 'fr': return 'Lire l’article';
      case 'de': return 'Artikel lesen';
      default: return 'Read Article';
    }
  };

  const getByAuthorText = (author) => {
    switch (currentLanguage) {
      case 'ar': return `بقلم: ${author}`;
      case 'zh': return `作者: ${author}`;
      case 'fr': return `Par ${author}`;
      case 'de': return `Von ${author}`;
      default: return `By ${author}`;
    }
  };

  const getSearchPlaceholder = () => {
    switch (currentLanguage) {
      case 'ar': return 'ابحث في أدلة التأشيرات والقوانين...';
      case 'zh': return '搜索签证指南与居留政策...';
      case 'fr': return 'Rechercher des guides et règles...';
      case 'de': return 'Leitfäden und Regeln durchsuchen...';
      default: return 'Search visa guides, rules...';
    }
  };

  const getCategoryLabel = (catObj) => {
    return catObj[currentLanguage] || catObj.en;
  };

  return (
    <>
      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
        <div className="relative w-full md:w-80">
          <Search className={`w-4 h-4 text-neutral-400 absolute ${isRTL ? 'right-3.5' : 'left-3.5'} top-1/2 -translate-y-1/2`} />
          <input
            type="text"
            placeholder={getSearchPlaceholder()}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full ${isRTL ? 'pr-10 pl-4 text-right' : 'pl-10 pr-4 text-left'} py-2.5 rounded-full border border-neutral-200 text-xs bg-neutral-50 focus:outline-none focus:border-[#B8864B] focus:bg-white transition-all`}
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {BLOG_CATEGORIES.map((catObj) => {
            const label = getCategoryLabel(catObj);
            const isSelected = activeCategory === catObj.en;
            return (
              <button
                key={catObj.en}
                onClick={() => setActiveCategory(catObj.en)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#B8864B] text-white shadow-xs'
                    : 'bg-neutral-100 text-[#555555] hover:bg-neutral-200/70'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => {
          const articleUrl = getLocalizedPath(`/blog/${article.slug || article.id}`);
          return (
            <motion.article
              key={article.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FCFAF8] rounded-2xl border border-neutral-200/80 hover:border-[#B8864B]/60 transition-all duration-300 shadow-xs hover:shadow-lg overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <Link to={articleUrl} className="block relative h-48 overflow-hidden cursor-pointer">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#8C6230] uppercase tracking-wider shadow-xs`}>
                    {article.category}
                  </div>
                </Link>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] text-neutral-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <Link to={articleUrl} className="block">
                    <h3 className="text-base sm:text-lg font-bold text-[#222222] group-hover:text-[#B8864B] transition-colors line-clamp-2 mb-3 leading-snug cursor-pointer">
                      {article.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-[#555555] line-clamp-3 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-neutral-200/60 mt-auto flex items-center justify-between">
                <span className="text-[11px] text-neutral-400 font-medium">
                  {getByAuthorText(article.author)}
                </span>

                <Link
                  to={articleUrl}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#B8864B] hover:text-[#9F7038] cursor-pointer"
                >
                  <span>{getReadMoreText()}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </Link>
              </div>
            </motion.article>
          );
        })}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-16">
          <p className="text-neutral-500 text-sm">
            {currentLanguage === 'ar' 
              ? `لم يتم العثور على أي مقالات تطابق "${searchTerm}". يرجى تجربة كلمة بحث أخرى.` 
              : `No articles found matching "${searchTerm}". Try a different keyword.`}
          </p>
        </div>
      )}
    </>
  );
};

export default ArticleCatalog;
