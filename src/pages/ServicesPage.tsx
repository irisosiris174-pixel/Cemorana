import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Car, Home, Hammer, GraduationCap, RefreshCw, ArrowRight, Check } from 'lucide-react';
import { getLanguageFromPath, translations } from '../i18n';
import { PEXELS_IMAGES } from '../data/pexelsImages';

export const ServicesPage: React.FC = () => {
  const location = useLocation();
  const currentLang = getLanguageFromPath(location.pathname);
  const t = translations[currentLang].servicesPage;

  const solutions = [
    {
      id: 'personal',
      data: t.personalLoan,
      icon: Shield,
      badge: 'Liberté & Souplesse',
      image: PEXELS_IMAGES.services.personal,
    },
    {
      id: 'auto',
      data: t.autoLoan,
      icon: Car,
      badge: 'Taux Fixe 3%',
      image: PEXELS_IMAGES.services.auto,
    },
    {
      id: 'mortgage',
      data: t.mortgageLoan,
      icon: Home,
      badge: 'Immobilier',
      image: PEXELS_IMAGES.services.mortgage,
    },
    {
      id: 'renovation',
      data: t.renovationLoan,
      icon: Hammer,
      badge: 'Travaux & Deco',
      image: PEXELS_IMAGES.services.renovation,
    },
    {
      id: 'student',
      data: t.studentLoan,
      icon: GraduationCap,
      badge: 'Éducation',
      image: PEXELS_IMAGES.services.student,
    },
    {
      id: 'consolidation',
      data: t.consolidationLoan,
      icon: RefreshCw,
      badge: 'Économique',
      image: PEXELS_IMAGES.services.consolidation,
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header Banner with Background Image */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 z-0">
          <img
            src={PEXELS_IMAGES.aboutBanner}
            alt="Services Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase border border-teal-500/30">
            Solutions de crédit Cemorana
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">{t.heroTitle}</h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">{t.heroSubtitle}</p>
        </div>
      </section>

      {/* Solutions Grid with Pexels Photos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group scroll-mt-24"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.data.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-teal-300 text-xs font-bold px-3 py-1 rounded-full border border-teal-500/30 shadow-md">
                      {item.badge}
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-[#0a6c74] text-white flex items-center justify-center shadow-lg border border-teal-400/30">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0a6c74] transition-colors">{item.data.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.data.desc}</p>

                    <div className="space-y-2.5 pt-3 border-t border-slate-100">
                      {item.data.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <Check className="w-4 h-4 text-[#0a6c74] shrink-0 mt-0.5" />
                          <span className="font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <Link
                    to={`/${currentLang}/submission`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0a6c74] hover:bg-[#004d5a] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    <span>Demander cette solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
