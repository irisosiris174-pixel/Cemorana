import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, ArrowRight, ChevronLeft, ChevronRight, Calculator } from 'lucide-react';
import { getLanguageFromPath, translations } from '../i18n';

export const HeroSlider: React.FC = () => {
  const location = useLocation();
  const currentLang = getLanguageFromPath(location.pathname);
  const t = translations[currentLang].hero;

  const slides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
      badge: t.badge,
      title: t.title,
      subtitle: t.subtitle,
      tag: 'Taux fixe 3.00%',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1920',
      badge: currentLang === 'fr' ? 'Crédit Immobilier & Projets' : 'Immobilien & Prospekte',
      title: currentLang === 'fr' ? 'Concrétisez vos projets immobiliers & travaux' : 'Verwirklichen Sie Ihre Wohn- & Immobilienprojekte',
      subtitle: currentLang === 'fr' ? 'Bénéficiez de conditions préférentielles et d\'un accompagnement sur mesure pour financer votre habitat.' : 'Profitieren Sie von Vorzugskonditionen und maßgeschneiderter Beratung für Ihr Zuhause.',
      tag: 'Jusqu\'à 120 mois',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1920',
      badge: currentLang === 'fr' ? 'Financement Auto & Équipement' : 'Auto- & Fahrzeugkredit',
      title: currentLang === 'fr' ? 'Roulez vers la liberté avec un crédit auto à 3%' : 'Fahren Sie Ihren Traumwagen mit 3% Festzins',
      subtitle: currentLang === 'fr' ? 'Achat neuf ou occasion, véhicule électrique ou hybride : décision sous 24 heures sans frais cachés.' : 'Neu- oder Gebrauchtwagen: Schnelle Zusage innerhalb von 24 Stunden ohne versteckte Kosten.',
      tag: 'Réponse sous 24h',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <section className="relative min-h-[580px] sm:min-h-[640px] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      
      {/* Slide Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlays for High Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="max-w-3xl space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-teal-500/20 backdrop-blur-md text-teal-300 text-xs font-bold tracking-wide border border-teal-500/30 shadow-lg">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>{slides[currentIndex].badge}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping ml-1" />
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-md min-h-[120px] sm:min-h-[140px] flex items-center">
            {slides[currentIndex].title}
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-2xl font-normal drop-shadow-sm min-h-[72px] sm:min-h-[60px]">
            {slides[currentIndex].subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Link
              to={`/${currentLang}/submission`}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#0a6c74] to-[#16939d] hover:from-[#004d5a] hover:to-[#0a6c74] text-white font-bold text-base shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
            >
              <span>{t.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="#simulator-section"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold text-base transition-all flex items-center justify-center gap-2"
            >
              <Calculator className="w-5 h-5 text-teal-300" />
              <span>{t.ctaSecondary}</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/15 max-w-xl">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-400 tracking-tight">{t.stat1Val}</div>
              <div className="text-xs text-slate-400 font-medium mt-1">{t.stat1Label}</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-400 tracking-tight">{t.stat2Val}</div>
              <div className="text-xs text-slate-400 font-medium mt-1">{t.stat2Label}</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-400 tracking-tight">{t.stat3Val}</div>
              <div className="text-xs text-slate-400 font-medium mt-1">{t.stat3Label}</div>
            </div>
          </div>

        </div>
      </div>

      {/* Slider Controls & Indicators */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center gap-3">
        <button
          onClick={goToPrev}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 transition-all hover:scale-105 active:scale-95"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        {/* Indicators */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-teal-400' : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 transition-all hover:scale-105 active:scale-95"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </section>
  );
};
