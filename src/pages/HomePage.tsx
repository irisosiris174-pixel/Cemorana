import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Zap, Award, Percent, ArrowRight, Check, Users, HelpCircle, FileText, ChevronRight, CheckCircle2 } from 'lucide-react';
import { getLanguageFromPath, translations } from '../i18n';
import { HeroSlider } from '../components/HeroSlider';
import { SimulatorSection } from '../components/SimulatorSection';
import { TESTIMONIALS_DATA, FAQ_DATA } from '../data/content';
import { PEXELS_IMAGES } from '../data/pexelsImages';

export const HomePage: React.FC = () => {
  const location = useLocation();
  const currentLang = getLanguageFromPath(location.pathname);
  const t = translations[currentLang];

  const serviceCards = [
    { key: 'personalLoan', icon: ShieldCheck, title: t.servicesPage.personalLoan.title, desc: t.servicesPage.personalLoan.desc, image: PEXELS_IMAGES.services.personal, badge: 'Liberté' },
    { key: 'autoLoan', icon: Zap, title: t.servicesPage.autoLoan.title, desc: t.servicesPage.autoLoan.desc, image: PEXELS_IMAGES.services.auto, badge: 'Taux 3%' },
    { key: 'mortgageLoan', icon: Award, title: t.servicesPage.mortgageLoan.title, desc: t.servicesPage.mortgageLoan.desc, image: PEXELS_IMAGES.services.mortgage, badge: 'Immobilier' },
    { key: 'renovationLoan', icon: Percent, title: t.servicesPage.renovationLoan.title, desc: t.servicesPage.renovationLoan.desc, image: PEXELS_IMAGES.services.renovation, badge: 'Travaux' },
    { key: 'studentLoan', icon: FileText, title: t.servicesPage.studentLoan.title, desc: t.servicesPage.studentLoan.desc, image: PEXELS_IMAGES.services.student, badge: 'Études' },
    { key: 'consolidationLoan', icon: Users, title: t.servicesPage.consolidationLoan.title, desc: t.servicesPage.consolidationLoan.desc, image: PEXELS_IMAGES.services.consolidation, badge: 'Rachat' },
  ];

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Hero Slider Section */}
      <HeroSlider />

      {/* 2. Redesigned "À propos de Cemorana" Section with Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Image with floating badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[380px] sm:h-[460px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={PEXELS_IMAGES.about}
                  alt="Équipe Cemorana Financial Solutions"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-2 sm:bottom-6 sm:-right-6 bg-slate-900 text-white p-5 rounded-2xl shadow-2xl border border-slate-700 max-w-xs space-y-2">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-teal-500/20 text-teal-400 rounded-xl">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xl font-extrabold text-white">100% Confidentialité</div>
                    <div className="text-xs text-teal-300 font-medium">Aucun frais préalable</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Content & Points */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3.5 py-1 rounded-full bg-teal-50 text-[#0a6c74] font-bold text-xs uppercase tracking-wider">
                {t.aboutBrief.subtitle}
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                {t.aboutBrief.title}
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                {t.aboutBrief.desc1}
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                {t.aboutBrief.desc2}
              </p>

              <div className="space-y-3 pt-2">
                {t.aboutBrief.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-teal-100 text-[#0a6c74] mt-0.5 shrink-0">
                      <Check className="w-4 h-4 font-bold" />
                    </div>
                    <span className="text-slate-700 text-sm font-semibold">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to={`/${currentLang}/about`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0a6c74] hover:bg-[#004d5a] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all group"
                >
                  <span>{t.aboutBrief.readMore}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Dedicated Credit Simulator Section */}
      <SimulatorSection />

      {/* 4. Services Section with Photos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-full bg-teal-50 text-[#0a6c74] font-bold text-xs uppercase tracking-wider">
            Offres personnalisées
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{t.servicesBrief.title}</h2>
          <p className="text-slate-600 text-base">{t.servicesBrief.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.key}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Service Photo Header */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    <span className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-teal-300 text-xs font-bold px-3 py-1 rounded-full border border-teal-500/30">
                      {service.badge}
                    </span>
                    <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-[#0a6c74] text-white flex items-center justify-center shadow-md">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0a6c74] transition-colors">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">{service.desc}</p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/${currentLang}/services`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0a6c74] hover:text-[#004d5a] tracking-wider uppercase group-hover:translate-x-1 transition-transform"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-4">
          <Link
            to={`/${currentLang}/services`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
          >
            <span>{t.servicesBrief.viewAll}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 5. 4-Step Process Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold">{t.steps.title}</h2>
            <p className="text-slate-300 text-base">{t.steps.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: t.steps.step1Title, desc: t.steps.step1Desc },
              { title: t.steps.step2Title, desc: t.steps.step2Desc },
              { title: t.steps.step3Title, desc: t.steps.step3Desc },
              { title: t.steps.step4Title, desc: t.steps.step4Desc },
            ].map((step, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-4 hover:border-teal-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#0a6c74] to-[#16939d] text-white font-extrabold flex items-center justify-center text-xl shadow-lg">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900">{t.testimonialsSection.title}</h2>
          <p className="text-slate-600 text-base">{t.testimonialsSection.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.slice(0, 3).map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-amber-400">
                  {'★'.repeat(item.rating)}
                </div>
                <span className="text-xs font-semibold text-[#0a6c74] bg-teal-50 px-2.5 py-1 rounded-full">
                  {item.amount}
                </span>
              </div>
              <p className="text-slate-700 text-sm italic leading-relaxed">
                "{item.content[currentLang]}"
              </p>
              <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
                <div>
                  <div className="font-bold text-slate-900">{item.name}</div>
                  <div className="text-slate-500">{item.role[currentLang]} • {item.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to={`/${currentLang}/testimonials`}
            className="inline-flex items-center gap-2 text-[#0a6c74] font-bold text-sm hover:underline"
          >
            <span>{t.testimonialsSection.viewAll}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900">{t.faqSection.title}</h2>
          <p className="text-slate-600 text-base">{t.faqSection.subtitle}</p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 space-y-2">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#0a6c74] shrink-0" />
                <span>{faq.question[currentLang]}</span>
              </h3>
              <p className="text-slate-600 text-sm pl-7 leading-relaxed">
                {faq.answer[currentLang]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#004d5a] via-[#0a6c74] to-[#16939d] rounded-3xl p-8 sm:p-14 text-center text-white space-y-6 shadow-2xl relative overflow-hidden">
          <h2 className="text-2xl sm:text-4xl font-extrabold max-w-2xl mx-auto tracking-tight">{t.ctaBanner.title}</h2>
          <p className="text-teal-100 text-base sm:text-lg max-w-xl mx-auto">{t.ctaBanner.subtitle}</p>
          <div className="pt-2">
            <Link
              to={`/${currentLang}/submission`}
              className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#004d5a] font-bold text-base shadow-xl hover:scale-105 transition-all"
            >
              <span>{t.ctaBanner.btn}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
