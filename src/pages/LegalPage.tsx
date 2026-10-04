import React from 'react';
import { useLocation } from 'react-router-dom';
import { getLanguageFromPath, translations } from '../i18n';
import { FileCheck } from 'lucide-react';

export const LegalPage: React.FC = () => {
  const location = useLocation();
  const currentLang = getLanguageFromPath(location.pathname);
  const t = translations[currentLang].legalPage;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold text-slate-900">{t.title}</h1>
        <p className="text-xs text-slate-500">{t.lastUpdated}</p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-[#0a6c74]" />
            <span>{t.companyInfo}</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
            <div>
              <span className="text-slate-400 block text-xs">Raison Sociale</span>
              <span className="font-semibold">{t.companyName}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-xs">Adresse</span>
              <span className="font-semibold">{t.address}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-xs">Email</span>
              <span className="font-semibold">{t.email}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-xs">Téléphone / WhatsApp</span>
              <span className="font-semibold">{t.phone}</span>
            </div>
            <div className="sm:col-span-2">
              <span className="text-slate-400 block text-xs">Immatriculation</span>
              <span className="font-semibold">{t.regNumber}</span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 space-y-3">
          <h3 className="text-lg font-bold text-slate-900">{t.regulatoryInfo}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{t.disclaimer}</p>
        </div>
      </div>
    </div>
  );
};
