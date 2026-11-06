import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  ArrowRight, 
  ChevronRight, 
  ChevronDown, 
  Share2, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  MessageSquare, 
  PhoneCall, 
  BookmarkCheck,
  Check
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { BLOG_ARTICLES, getArticleInLanguage } from '../translations/blogData.js';
import { openWhatsApp } from '../utils/whatsapp.js';

export const BlogArticlePage = ({ onOpenConsultation }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { currentLanguage, isRTL, getLocalizedPath } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Scroll to top on slug/page change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }, [slug]);

  // Find article in dataset
  const rawArticle = BLOG_ARTICLES.find(
    (a) => a.slug === slug || a.id === slug || a.aliases?.includes(slug)
  );

  const article = rawArticle ? getArticleInLanguage(rawArticle, currentLanguage) : null;

  // Related articles (excluding current article)
  const relatedArticles = BLOG_ARTICLES.filter((a) => a.id !== rawArticle?.id).slice(0, 3);

  // Localized UI strings dictionary
  const uiTexts = {
    en: {
      backToBlog: 'Back to all articles',
      home: 'Home',
      blog: 'Blog & Guides',
      share: 'Share',
      copied: 'Link copied!',
      takeawaysTitle: 'Key Takeaways & Summary',
      proTipTitle: 'PRO Typing Expert Insight',
      faqsTitle: 'Frequently Asked Questions',
      consultationTitle: 'Need Professional Assistance With This Service?',
      consultationDesc: 'Our authorized typing consultants in Business Bay, Dubai are ready to review your documents and process your application with zero hassle.',
      chatWhatsApp: 'Chat On WhatsApp',
      bookConsultation: 'Book Free Consultation',
      relatedTitle: 'Related Guides & Policy Updates',
      notFoundTitle: 'Article Not Found',
      notFoundDesc: 'The requested guide could not be located or may have been updated.',
      returnBlog: 'Return to Blog'
    },
    ar: {
      backToBlog: 'العودة إلى كافة المقالات',
      home: 'الرئيسية',
      blog: 'المدونة والأدلة',
      share: 'مشاركة',
      copied: 'تم نسخ الرابط!',
      takeawaysTitle: 'أهم النقاط والملخص',
      proTipTitle: 'إضاءة من خبراء الطباعة المعتمدين',
      faqsTitle: 'الأسئلة الشائعة حول الموضوع',
      consultationTitle: 'هل تحتاج إلى استشارة متخصصة حول هذه المعاملة؟',
      consultationDesc: 'مستشارونا المعتمدون في الخليج التجاري بدبي جاهزون لمراجعة مستنداتك وإنجاز معاملتك بدقة وسرعة وبلا تعقيدات.',
      chatWhatsApp: 'محادثة عبر واتساب',
      bookConsultation: 'حجز استشارة مجانية',
      relatedTitle: 'مقالات وأدلة ذات صلة',
      notFoundTitle: 'المقال غير موجود',
      notFoundDesc: 'تعذر العثور على الدليل المطلوب أو ربما تم تحديث عنوانه.',
      returnBlog: 'العودة إلى المدونة'
    },
    zh: {
      backToBlog: '返回全部文章',
      home: '首页',
      blog: '博客与官方指南',
      share: '分享',
      copied: '链接已复制！',
      takeawaysTitle: '核心要点与摘要',
      proTipTitle: 'Brightlink资深专家建议',
      faqsTitle: '常见问题解答（FAQ）',
      consultationTitle: '需要专业人员协助办理该项业务？',
      consultationDesc: '我们位于迪拜商业湾的特许公关顾问随时准备核验您的文件并提供省心代办服务。',
      chatWhatsApp: '微信/WhatsApp咨询',
      bookConsultation: '预约免费咨询',
      relatedTitle: '相关官方指南与政策解读',
      notFoundTitle: '未找到相关文章',
      notFoundDesc: '您访问的文章可能已被更新或重构。',
      returnBlog: '返回博客列表'
    },
    fr: {
      backToBlog: 'Retour à tous les articles',
      home: 'Accueil',
      blog: 'Blog & Guides',
      share: 'Partager',
      copied: 'Lien copié !',
      takeawaysTitle: 'Points Clés & Synthèse',
      proTipTitle: 'Conseil de l’Expert Brightlink',
      faqsTitle: 'Questions Fréquentes',
      consultationTitle: 'Besoin d’un Accompagnement Professionnel ?',
      consultationDesc: 'Nos conseillers agréés à Business Bay, Dubaï, examinent vos documents et facilitent toutes vos démarches.',
      chatWhatsApp: 'Échanger sur WhatsApp',
      bookConsultation: 'Réserver une Consultation',
      relatedTitle: 'Guides et Articles Associés',
      notFoundTitle: 'Article Introuvable',
      notFoundDesc: 'Le guide demandé n’a pas pu être localisé.',
      returnBlog: 'Retour au Blog'
    },
    de: {
      backToBlog: 'Zurück zu allen Artikeln',
      home: 'Startseite',
      blog: 'Blog & Ratgeber',
      share: 'Teilen',
      copied: 'Link kopiert!',
      takeawaysTitle: 'Wichtige Kernpunkte im Überblick',
      proTipTitle: 'Expertentipp von Brightlink',
      faqsTitle: 'Häufig gestellte Fragen',
      consultationTitle: 'Benötigen Sie professionelle Unterstützung?',
      consultationDesc: 'Unsere akkreditierten Berater in Business Bay, Dubai, prüfen Ihre Unterlagen und begleiten Sie kompetent.',
      chatWhatsApp: 'WhatsApp Chat starten',
      bookConsultation: 'Kostenlose Beratung anfragen',
      relatedTitle: 'Verwandte Leitfäden & Regelungen',
      notFoundTitle: 'Artikel nicht gefunden',
      notFoundDesc: 'Der gewünschte Leitfaden konnte nicht aufgerufen werden.',
      returnBlog: 'Zurück zum Blog'
    },
    es: {
      backToBlog: 'Volver a todos los artículos',
      home: 'Inicio',
      blog: 'Blog y Guías',
      share: 'Compartir',
      copied: '¡Enlace copiado!',
      takeawaysTitle: 'Puntos Clave y Resumen',
      proTipTitle: 'Consejo del Experto de Brightlink',
      faqsTitle: 'Preguntas Frecuentes',
      consultationTitle: '¿Necesita Asistencia Profesional con Este Servicio?',
      consultationDesc: 'Nuestros consultores autorizados en Business Bay, Dubái están listos para revisar sus documentos y gestionar su solicitud sin complicaciones.',
      chatWhatsApp: 'Chatear por WhatsApp',
      bookConsultation: 'Reservar Consulta Gratuita',
      relatedTitle: 'Guías y Artículos Relacionados',
      notFoundTitle: 'Artículo No Encontrado',
      notFoundDesc: 'No se pudo localizar la guía solicitada o puede haber sido actualizada.',
      returnBlog: 'Volver al Blog'
    },
    pt: {
      backToBlog: 'Voltar a todos os artigos',
      home: 'Início',
      blog: 'Blog e Guias',
      share: 'Compartilhar',
      copied: 'Link copiado!',
      takeawaysTitle: 'Principais Pontos e Resumo',
      proTipTitle: 'Dica do Especialista Brightlink',
      faqsTitle: 'Perguntas Frequentes',
      consultationTitle: 'Precisa de Assessoria Profissional para Este Serviço?',
      consultationDesc: 'Nossos consultores credenciados em Business Bay, Dubai estão prontos para analisar seus documentos e cuidar de todo o processo.',
      chatWhatsApp: 'Conversar no WhatsApp',
      bookConsultation: 'Agendar Consulta Gratuita',
      relatedTitle: 'Guias e Artigos Relacionados',
      notFoundTitle: 'Artigo Não Encontrado',
      notFoundDesc: 'O guia solicitado não pôde ser encontrado.',
      returnBlog: 'Voltar ao Blog'
    },
    ru: {
      backToBlog: 'Назад ко всем статьям',
      home: 'Главная',
      blog: 'Блог и руководства',
      share: 'Поделиться',
      copied: 'Ссылка скопирована!',
      takeawaysTitle: 'Ключевые выводы и резюме',
      proTipTitle: 'Совет эксперта Brightlink',
      faqsTitle: 'Часто задаваемые вопросы',
      consultationTitle: 'Нужна профессиональная помощь с этой услугой?',
      consultationDesc: 'Наши сертифицированные консультанты в Бизнес Бэй (Дубай) готовы проверить ваши документы и подать заявку без лишних забот.',
      chatWhatsApp: 'Написать в WhatsApp',
      bookConsultation: 'Записаться на консультацию',
      relatedTitle: 'Похожие руководства и статьи',
      notFoundTitle: 'Статья не найдена',
      notFoundDesc: 'Запрошенная статья не найдена или была перемещена.',
      returnBlog: 'Вернуться в блог'
    },
    tr: {
      backToBlog: 'Tüm makalelere dön',
      home: 'Anasayfa',
      blog: 'Blog ve Rehberler',
      share: 'Paylaş',
      copied: 'Bağlantı kopyalandı!',
      takeawaysTitle: 'Öne Çıkan Noktalar ve Özet',
      proTipTitle: 'Brightlink Uzman Görüşü',
      faqsTitle: 'Sıkça Sorulan Sorular',
      consultationTitle: 'Bu Hizmet İçin Profesyonel Desteğe mi İhtiyacınız Var?',
      consultationDesc: 'Business Bay, Dubai’deki yetkili danışmanlarımız evraklarınızı incelemeye ve işlemlerinizi hızla tamamlamaya hazır.',
      chatWhatsApp: 'WhatsApp’tan Yazın',
      bookConsultation: 'Ücretsiz Danışmanlık Alın',
      relatedTitle: 'İlgili Rehberler ve Mevzuat',
      notFoundTitle: 'Makale Bulunamadı',
      notFoundDesc: 'Aradığınız rehber bulunamadı veya güncellenmiş olabilir.',
      returnBlog: 'Bloga Dön'
    },
    bn: {
      backToBlog: 'সকল প্রবন্ধে ফিরে যান',
      home: 'হোম',
      blog: 'ব্লগ ও গাইড',
      share: 'শেয়ার করুন',
      copied: 'লিঙ্ক কপি হয়েছে!',
      takeawaysTitle: 'মূল সারসংক্ষেপ ও নির্দেশিকা',
      proTipTitle: 'ব্রাইটলিংক বিশেষজ্ঞ পরামর্শ',
      faqsTitle: 'সচরাচর জিজ্ঞাসিত প্রশ্নাবলী',
      consultationTitle: 'এই সেবায় পেশাদার সহায়তা প্রয়োজন?',
      consultationDesc: 'বিজনেস বে, দুবাইয়ে আমাদের অনুমোদিত পরামর্শকগণ আপনার কাগজপত্র যাচাই এবং আবেদন প্রক্রিয়াকরণে সর্বদা প্রস্তুত।',
      chatWhatsApp: 'হোয়াটসঅ্যাপে চ্যাট করুন',
      bookConsultation: 'ফ্রি পরামর্শ বুক করুন',
      relatedTitle: 'সম্পর্কিত গাইড ও নীতিমালা',
      notFoundTitle: 'প্রবন্ধটি পাওয়া যায়নি',
      notFoundDesc: 'অনুরোধকৃত নির্দেশিকাটি খুঁজে পাওয়া যায়নি বা হালনাগাদ করা হয়েছে।',
      returnBlog: 'ব্লগে ফিরে যান'
    }
  };

  const currentUi = uiTexts[currentLanguage] || uiTexts.en;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (!article) {
    return (
      <div className="bg-[#FFFFFF] min-h-[70vh] py-24 px-4 flex items-center justify-center">
        <div className="max-w-md text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#FBF7F0] border border-[#B8864B]/30 text-[#8C6230] flex items-center justify-center">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-[#222222]">{currentUi.notFoundTitle}</h1>
          <p className="text-sm text-neutral-600">{currentUi.notFoundDesc}</p>
          <Link
            to={getLocalizedPath('/blog')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
          >
            <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            <span>{currentUi.returnBlog}</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* 1. Breadcrumbs & Top Navigation Bar */}
      <section className="bg-[#FCFAF8] border-b border-[#E8DFD5] py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 flex-wrap">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-neutral-500 overflow-x-auto py-1">
            <Link to={getLocalizedPath('/')} className="hover:text-[#B8864B] transition-colors whitespace-nowrap">
              {currentUi.home}
            </Link>
            <ChevronRight className={`w-3.5 h-3.5 text-neutral-400 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
            <Link to={getLocalizedPath('/blog')} className="hover:text-[#B8864B] transition-colors whitespace-nowrap">
              {currentUi.blog}
            </Link>
            <ChevronRight className={`w-3.5 h-3.5 text-neutral-400 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
            <span className="font-semibold text-[#8C6230] truncate max-w-[200px] sm:max-w-xs md:max-w-md">
              {article.title}
            </span>
          </nav>

          {/* Back to Blog Button */}
          <Link
            to={getLocalizedPath('/blog')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C6230] hover:text-[#B8864B] transition-colors cursor-pointer shrink-0"
          >
            <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
            <span>{currentUi.backToBlog}</span>
          </Link>
        </div>
      </section>

      {/* 2. Article Header Hero Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <header className="mb-8 sm:mb-12">
          {/* Category Badge & Share Button */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-[#FBF7F0] border border-[#B8864B]/30 text-[#8C6230] text-xs font-bold uppercase tracking-wider">
              {article.category}
            </span>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 text-xs text-neutral-600 hover:border-[#B8864B] hover:text-[#8C6230] transition-colors cursor-pointer"
              title="Share article"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-green-600 font-semibold">{currentUi.copied}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{currentUi.share}</span>
                </>
              )}
            </button>
          </div>

          {/* Main Article Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#222222] tracking-tight leading-tight sm:leading-tight mb-4">
            {article.title}
          </h1>

          {/* Subtitle / Excerpt */}
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-6 font-normal">
            {article.excerpt}
          </p>

          {/* Author, Date & Reading Time Meta */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-neutral-500 pt-4 border-t border-neutral-100">
            <span className="flex items-center gap-1.5 font-medium text-neutral-700">
              <User className="w-4 h-4 text-[#B8864B]" />
              {article.author}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-neutral-400" />
              {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-neutral-400" />
              {article.readTime}
            </span>
          </div>
        </header>

        {/* 3. Featured Image */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200 shadow-sm mb-10 h-64 sm:h-96 md:h-[420px] bg-neutral-100">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* 4. Detailed Introduction */}
        {article.introduction && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FCFAF8] border-l-4 border-[#B8864B] border-y border-r border-[#E8DFD5] mb-10 text-sm sm:text-base text-neutral-800 leading-relaxed shadow-xs">
            {article.introduction}
          </div>
        )}

        {/* 5. Informative Structured Sections */}
        <div className="space-y-10 sm:space-y-12">
          {article.sections?.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#222222] tracking-tight border-b border-neutral-100 pb-2">
                {section.heading}
              </h2>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                {section.content}
              </p>

              {/* Bullet Points */}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="space-y-2.5 pt-2">
                  {section.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Pro-Tip Box */}
              {section.proTip && (
                <div className="mt-4 p-4 sm:p-5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs sm:text-sm flex items-start gap-3 shadow-xs">
                  <Sparkles className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-amber-800 mb-1">{currentUi.proTipTitle}</span>
                    <p className="leading-relaxed">{section.proTip}</p>
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* 6. Conclusion */}
        {article.conclusion && (
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
            <h3 className="text-base sm:text-lg font-bold text-[#222222]">
              {currentLanguage === 'ar' ? 'الخلاصة والخطوات التالية' : 'Summary & Next Steps'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              {article.conclusion}
            </p>
          </div>
        )}

        {/* 7. Frequently Asked Questions Section */}
        {article.faqs && article.faqs.length > 0 && (
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <h3 className="text-xl font-bold text-[#222222] mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#B8864B]" />
              <span>{currentUi.faqsTitle}</span>
            </h3>

            <div className="space-y-3">
              {article.faqs.map((faq, fIdx) => {
                const isOpen = openFaqIndex === fIdx;
                return (
                  <div
                    key={fIdx}
                    className="border border-neutral-200 rounded-xl overflow-hidden bg-white shadow-xs"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                      className="w-full p-4 text-left font-bold text-xs sm:text-sm text-[#222222] flex items-center justify-between gap-3 hover:bg-neutral-50 transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#B8864B] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-4 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 bg-[#FCFAF8]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 8. Author / Consultation Callout Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-neutral-900 to-neutral-800 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-neutral-700">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              {currentUi.consultationTitle}
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
              {currentUi.consultationDesc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              type="button"
              onClick={() => openWhatsApp(article.title, currentLanguage, { type: 'consultation' })}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{currentUi.chatWhatsApp}</span>
            </button>

            <button
              type="button"
              onClick={() => onOpenConsultation(article.title)}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{currentUi.bookConsultation}</span>
            </button>
          </div>
        </div>

        {/* 9. Related Articles Section */}
        {relatedArticles.length > 0 && (
          <div className="mt-16 pt-12 border-t border-neutral-200">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-[#222222]">
                {currentUi.relatedTitle}
              </h3>
              <Link
                to={getLocalizedPath('/blog')}
                className="text-xs font-bold text-[#B8864B] hover:text-[#8C6230] flex items-center gap-1"
              >
                <span>{currentUi.backToBlog}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relRaw) => {
                const rel = getArticleInLanguage(relRaw, currentLanguage);
                return (
                  <article
                    key={rel.id}
                    className="bg-[#FCFAF8] rounded-xl border border-neutral-200 overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-[#B8864B]/50 transition-all group"
                  >
                    <div>
                      <Link
                        to={getLocalizedPath(`/blog/${rel.slug || rel.id}`)}
                        className="block relative h-40 overflow-hidden cursor-pointer"
                      >
                        <img
                          src={rel.image}
                          alt={rel.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-white/90 text-[#8C6230] text-[10px] font-bold uppercase tracking-wider">
                          {rel.category}
                        </span>
                      </Link>

                      <div className="p-4">
                        <span className="text-[11px] text-neutral-400 block mb-1">
                          {rel.date} · {rel.readTime}
                        </span>
                        <Link
                          to={getLocalizedPath(`/blog/${rel.slug || rel.id}`)}
                          className="text-sm font-bold text-[#222222] group-hover:text-[#B8864B] transition-colors line-clamp-2 block leading-snug"
                        >
                          {rel.title}
                        </Link>
                      </div>
                    </div>

                    <div className="p-4 pt-0">
                      <Link
                        to={getLocalizedPath(`/blog/${rel.slug || rel.id}`)}
                        className="text-xs font-bold text-[#B8864B] group-hover:text-[#8C6230] flex items-center gap-1"
                      >
                        <span>{currentLanguage === 'ar' ? 'قراءة المقال' : 'Read Article'}</span>
                        <ArrowRight className={`w-3 h-3 ${isRTL ? 'rotate-180' : ''}`} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default BlogArticlePage;
