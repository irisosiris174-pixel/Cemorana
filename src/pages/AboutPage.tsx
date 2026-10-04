import React from 'react';
import { useLocation } from 'react-router-dom';
import { Target, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { getLanguageFromPath, translations } from '../i18n';
import { PEXELS_IMAGES } from '../data/pexelsImages';

export const AboutPage: React.FC = () => {
  const location = useLocation();
  const currentLang = getLanguageFromPath(location.pathname);
  const t = translations[currentLang].aboutPage;

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header Banner with Pexels Background */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 z-0">
          <img
            src={PEXELS_IMAGES.aboutBanner}
            alt="À propos de Cemorana"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase border border-teal-500/30">
            Institution financière de confiance
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">{t.title}</h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">{t.subtitle}</p>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Mission & Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200/80 space-y-4 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-teal-50 text-[#0a6c74] flex items-center justify-center">
              <Target className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">{t.missionTitle}</h2>
            <p className="text-slate-600 text-base leading-relaxed">{t.missionDesc}</p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200/80 space-y-4 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-teal-50 text-[#0a6c74] flex items-center justify-center">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">{t.valuesTitle}</h2>
            <p className="text-slate-600 text-base leading-relaxed">{t.valuesDesc}</p>
          </div>
        </div>

        {/* Commitments Banner */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-[#004d5a] rounded-3xl p-8 sm:p-14 text-white space-y-8 shadow-2xl relative overflow-hidden">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold">{t.commitmentsTitle}</h2>
            <p className="text-teal-200 text-sm">Nos garanties d'excellence pour chaque emprunteur</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {t.commitmentsList.map((item, idx) => (
              <div key={idx} className="bg-white/10 rounded-2xl p-6 backdrop-blur-md space-y-2 border border-white/10">
                <div className="flex items-center gap-3 font-bold text-teal-300 text-lg">
                  <CheckCircle2 className="w-6 h-6 shrink-0 text-teal-400" />
                  <span>{item.title}</span>
                </div>
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
