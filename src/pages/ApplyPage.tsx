import React from 'react';
import { useLocation } from 'react-router-dom';
import { CreditForm } from '../components/CreditForm';
import { getLanguageFromPath, translations } from '../i18n';
import { PEXELS_IMAGES } from '../data/pexelsImages';

export const ApplyPage: React.FC = () => {
  const location = useLocation();
  const currentLang = getLanguageFromPath(location.pathname);
  const t = translations[currentLang].applyPage;

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header Banner with Pexels Background */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 z-0">
          <img
            src={PEXELS_IMAGES.applyBanner}
            alt={t.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase border border-teal-500/30">
            {t.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">{t.title}</h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">{t.subtitle}</p>
        </div>
      </section>

      {/* Credit Form Component */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <CreditForm />
      </div>

    </div>
  );
};
