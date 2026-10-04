import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getLanguageFromPath, translations } from '../i18n';
import { AlertCircle, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const location = useLocation();
  const currentLang = getLanguageFromPath(location.pathname);
  const t = translations[currentLang].notFound;

  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto">
        <AlertCircle className="w-10 h-10" />
      </div>
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900">{t.title}</h1>
        <p className="text-slate-600 text-sm">{t.desc}</p>
      </div>
      <div>
        <Link
          to={`/${currentLang}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0a6c74] text-white font-bold text-sm shadow-md hover:bg-[#004d5a] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.backHome}</span>
        </Link>
      </div>
    </div>
  );
};
