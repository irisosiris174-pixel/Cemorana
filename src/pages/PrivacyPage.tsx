import React from 'react';
import { useLocation } from 'react-router-dom';
import { getLanguageFromPath, translations } from '../i18n';
import { Database, UserCheck, Cookie } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  const location = useLocation();
  const currentLang = getLanguageFromPath(location.pathname);
  const t = translations[currentLang].privacyPage;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold text-slate-900">{t.title}</h1>
        <p className="text-xs text-slate-500">{t.lastUpdated}</p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-8 text-slate-700 text-sm leading-relaxed">
        <div className="space-y-3">
          <p className="font-medium text-slate-900 text-base">{t.intro}</p>
        </div>

        <div className="space-y-3 p-6 bg-teal-50/50 rounded-xl border border-teal-100">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Database className="w-5 h-5 text-[#0a6c74]" />
            <span>Aucune conservation de données personnelles</span>
          </h2>
          <p>{t.dataUsage}</p>
          <p className="text-xs text-teal-800 font-semibold">{t.resendNote}</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-[#0a6c74]" />
            <span>Vos droits</span>
          </h2>
          <p>{t.rights}</p>
        </div>

        <div className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Cookie className="w-5 h-5 text-[#0a6c74]" />
            <span>Gestion des cookies</span>
          </h2>
          <p>{t.cookies}</p>
        </div>
      </div>
    </div>
  );
};
