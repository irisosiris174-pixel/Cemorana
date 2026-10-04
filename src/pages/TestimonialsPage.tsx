import React from 'react';
import { useLocation } from 'react-router-dom';
import { Star, Quote, UserCheck } from 'lucide-react';
import { getLanguageFromPath, translations } from '../i18n';
import { TESTIMONIALS_DATA } from '../data/content';
import { PEXELS_IMAGES } from '../data/pexelsImages';

export const TestimonialsPage: React.FC = () => {
  const location = useLocation();
  const currentLang = getLanguageFromPath(location.pathname);
  const t = translations[currentLang].testimonialsSection;

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header Banner with Pexels Background */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 z-0">
          <img
            src={PEXELS_IMAGES.testimonialsBanner}
            alt={t.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase border border-teal-500/30">
            Avis & Expériences Emprunteurs
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">{t.title}</h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">{t.subtitle}</p>
        </div>
      </section>

      {/* Testimonials Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-lg transition-all space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#0a6c74] bg-teal-50 px-3 py-1 rounded-full">
                    {item.amount}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-teal-100 fill-teal-50" />

                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{item.content[currentLang]}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 text-[#0a6c74] font-bold flex items-center justify-center text-sm border border-teal-100">
                  {item.name.charAt(0)}
                </div>
                <div className="text-xs">
                  <div className="font-bold text-slate-900 flex items-center gap-1">
                    <span>{item.name}</span>
                    <UserCheck className="w-3.5 h-3.5 text-teal-600" />
                  </div>
                  <div className="text-slate-500">
                    {item.role[currentLang]} • {item.location}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{item.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
