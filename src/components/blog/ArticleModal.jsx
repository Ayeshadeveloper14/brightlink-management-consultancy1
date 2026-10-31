import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { getArticleInLanguage } from '../../translations/blogData.js';

export const ArticleModal = ({ article: rawArticle, onClose, onOpenConsultation }) => {
  const { currentLanguage, isRTL } = useLanguage();
  const article = rawArticle ? getArticleInLanguage(rawArticle, currentLanguage) : null;

  return (
    <AnimatePresence>
      {article && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-200 relative my-8 ${isRTL ? 'text-right' : 'text-left'}`}
          >
            <button
              onClick={onClose}
              className={`absolute top-5 ${isRTL ? 'left-5' : 'right-5'} p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 transition-colors z-10 cursor-pointer`}
              aria-label={currentLanguage === 'ar' ? 'إغلاق النافذة' : 'Close modal'}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-t-3xl">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-2.5 py-0.5 rounded-full bg-[#B8864B] text-white text-[10px] font-bold uppercase tracking-wider">
                  {article.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-2 leading-tight">
                  {article.title}
                </h2>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between text-xs text-neutral-400 border-b border-neutral-100 pb-4">
                <div className="flex items-center gap-3">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                  <span>•</span>
                  <span>{currentLanguage === 'ar' ? `بقلم: ${article.author}` : `By ${article.author}`}</span>
                </div>
              </div>

              <div className="text-sm text-[#444444] leading-relaxed whitespace-pre-line space-y-4">
                {article.content}
              </div>

              <div className="pt-6 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => {
                    onClose();
                    const text = (() => {
                      switch (currentLanguage) {
                        case 'ar': return `مرحباً برايت لينك، أود استشارة متخصصة حول موضوع مقال "${article.title}".`;
                        case 'zh': return `您好 Brightlink，我想就“${article.title}”一文涉及的业务进行专业咨询。`;
                        case 'fr': return `Bonjour Brightlink, je souhaite une consultation spécialisée sur le sujet "${article.title}".`;
                        case 'de': return `Hallo Brightlink, ich wünsche eine fachliche Beratung zum Thema "${article.title}".`;
                        default: return `Hello Brightlink, I would like to consult on the topic of "${article.title}".`;
                      }
                    })();
                    window.open(`https://wa.me/971566556645?text=${encodeURIComponent(text)}`, '_blank');
                  }}
                  className="py-2.5 px-5 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white text-xs font-bold cursor-pointer"
                >
                  {currentLanguage === 'ar' ? 'استشارة متخصصة حول هذا الموضوع' : currentLanguage === 'zh' ? '就此主题预约咨询' : currentLanguage === 'fr' ? 'Consulter sur ce sujet' : currentLanguage === 'de' ? 'Themenberatung anfragen' : 'Consult on this Topic'}
                </button>

                <a
                  href={`https://wa.me/971566556645?text=${encodeURIComponent(
                    (() => {
                      switch (currentLanguage) {
                        case 'ar': return `مرحباً برايت لينك، قرأت مقال "${article.title}" وأود الاستفسار عن بعض النقاط.`;
                        case 'zh': return `您好 Brightlink，我阅读了关于“${article.title}”的文章，想咨询相关申请流程与要求。`;
                        case 'fr': return `Bonjour Brightlink, j'ai lu votre article "${article.title}" et je souhaiterais des renseignements complémentaires.`;
                        case 'de': return `Hallo Brightlink, ich habe Ihren Artikel "${article.title}" gelesen und möchte mich dazu näher erkundigen.`;
                        default: return `Hello Brightlink, I read your article "${article.title}" and would like to ask a few questions.`;
                      }
                    })()
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-4 rounded-xl bg-[#25D366] text-white text-xs font-bold flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>{currentLanguage === 'ar' ? 'اسأل عبر الواتساب' : currentLanguage === 'zh' ? '在 WhatsApp 上咨询' : currentLanguage === 'fr' ? 'Demander sur WhatsApp' : currentLanguage === 'de' ? 'Über WhatsApp anfragen' : 'Ask on WhatsApp'}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ArticleModal;
