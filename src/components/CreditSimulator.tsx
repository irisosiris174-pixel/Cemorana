import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calculator, ArrowRight, Percent } from 'lucide-react';
import { getLanguageFromPath, translations } from '../i18n';

export const CreditSimulator: React.FC = () => {
  const location = useLocation();
  const currentLang = getLanguageFromPath(location.pathname);
  const t = translations[currentLang].simulator;

  const [amount, setAmount] = useState<number>(10000);
  const [duration, setDuration] = useState<number>(36);

  const annualRate = 0.03; // 3% fixed rate
  const monthlyRate = annualRate / 12;

  // Formula: M = P * [r(1+r)^n] / [(1+r)^n - 1]
  const calculateMonthlyPayment = () => {
    if (monthlyRate === 0) return amount / duration;
    const payment =
      (amount * (monthlyRate * Math.pow(1 + monthlyRate, duration))) /
      (Math.pow(1 + monthlyRate, duration) - 1);
    return payment;
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalAmount = monthlyPayment * duration;
  const totalInterest = totalAmount - amount;

  return (
    <div id="calculator" className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
      <div className="bg-gradient-to-r from-[#004d5a] to-[#0a6c74] p-6 sm:p-8 text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-white/10 rounded-lg">
            <Calculator className="w-6 h-6 text-teal-300" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">{t.title}</h3>
        </div>
        <p className="text-teal-100 text-sm">{t.subtitle}</p>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        
        {/* Amount Slider */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm font-semibold text-slate-800">
            <span>{t.amountLabel}</span>
            <span className="text-xl font-bold text-[#0a6c74] px-3 py-1 bg-teal-50 rounded-lg">
              {amount.toLocaleString()} €
            </span>
          </div>
          <input
            type="range"
            min="3000"
            max="1000000"
            step="1000"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0a6c74]"
          />
          <div className="flex justify-between text-xs text-slate-400">
            <span>3.000 €</span>
            <span>500.000 €</span>
            <span>1.000.000 €</span>
          </div>
        </div>

        {/* Duration Slider */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm font-semibold text-slate-800">
            <span>{t.durationLabel}</span>
            <span className="text-xl font-bold text-[#0a6c74] px-3 py-1 bg-teal-50 rounded-lg">
              {duration} {t.months} ({(duration / 12).toFixed(1)} {t.years})
            </span>
          </div>
          <input
            type="range"
            min="12"
            max="360"
            step="6"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0a6c74]"
          />
          <div className="flex justify-between text-xs text-slate-400">
            <span>12 mois</span>
            <span>180 mois</span>
            <span>360 mois</span>
          </div>
        </div>

        {/* Rate indicator badge */}
        <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm">
          <div className="flex items-center gap-2 text-slate-700 font-medium">
            <Percent className="w-4 h-4 text-[#0a6c74]" />
            <span>{t.fixedRate}</span>
          </div>
          <span className="font-bold text-[#0a6c74] text-base">3.00% p.a.</span>
        </div>

        {/* Results summary box */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-700/80 pb-4">
            <span className="text-slate-300 text-sm">{t.monthlyPayment}</span>
            <span className="text-3xl font-extrabold text-teal-400 tracking-tight">
              {monthlyPayment.toFixed(2)} € <span className="text-xs font-normal text-slate-400">/ mois</span>
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs pt-1">
            <div>
              <span className="text-slate-400 block mb-1">{t.totalInterest}</span>
              <span className="text-sm font-semibold text-slate-200">{totalInterest.toFixed(2)} €</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">{t.totalAmount}</span>
              <span className="text-sm font-semibold text-slate-200">{totalAmount.toFixed(2)} €</span>
            </div>
          </div>
        </div>

        {/* Apply CTA button */}
        <Link
          to={`/${currentLang}/submission?amount=${amount}&duration=${duration}`}
          className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#0a6c74] hover:bg-[#004d5a] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.99]"
        >
          <span>{t.applyBtn}</span>
          <ArrowRight className="w-5 h-5" />
        </Link>

        <p className="text-[11px] text-slate-400 text-center leading-normal">
          {t.disclaimer}
        </p>
      </div>
    </div>
  );
};
