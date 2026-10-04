import React from 'react';
import { useLocation } from 'react-router-dom';
import { Calculator, ShieldCheck, Sparkles, TrendingUp, Lock } from 'lucide-react';
import { getLanguageFromPath, translations } from '../i18n';
import { CreditSimulator } from './CreditSimulator';

export const SimulatorSection: React.FC = () => {
  const location = useLocation();
  const currentLang = getLanguageFromPath(location.pathname);
  const t = translations[currentLang].simulator;

  return (
    <section id="simulator-section" className="relative py-20 bg-slate-900 text-white overflow-hidden scroll-mt-20">
      
      {/* Background Pexels Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src="https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Financial Calculation Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wide border border-teal-500/30">
            <Calculator className="w-4 h-4 text-teal-400" />
            <span>Simulateur en ligne 100% gratuit</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {t.title}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 2-Column Grid: Highlights + CreditSimulator Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Key Features & Advantages */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">Taux fixe à 3.00%</h4>
                  <p className="text-slate-400 text-xs">Aucune surprise sur toute la durée du contrat.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">Remboursement sur-mesure</h4>
                  <p className="text-slate-400 text-xs">Choisissez entre 12 et 120 mois selon vos capacités.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">Sans engagement & Confidentialité</h4>
                  <p className="text-slate-400 text-xs">Simulation 100% gratuite, sans stockage de données.</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-teal-900/30 border border-teal-500/30 text-teal-200 text-xs flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0" />
              <span>Réponse et étude personnalisée sous 24h après validation du formulaire.</span>
            </div>

          </div>

          {/* Right Column: CreditSimulator Widget Component */}
          <div className="lg:col-span-7">
            <CreditSimulator />
          </div>

        </div>

      </div>

    </section>
  );
};
