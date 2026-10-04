import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import type { Language } from '../i18n/types';
import { translations, getLanguageFromPath } from '../i18n';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'lt', label: 'Lietuvių', flag: '🇱🇹' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
];

export const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentLang = getLanguageFromPath(location.pathname);
  const t = translations[currentLang].nav;
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const getTargetUrl = (lang: Language) => {
    const parts = location.pathname.split('/').filter(Boolean);
    if (parts.length === 0) return `/${lang}`;
    parts[0] = lang;
    return `/${parts.join('/')}`;
  };

  const handleLanguageChange = (lang: Language) => {
    setLangDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate(getTargetUrl(lang));
  };

  const currentLangObj = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to={`/${currentLang}`} className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Cemorana"
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-[#0a6c74] transition-colors">
                CEMORANA
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#0a6c74] font-semibold -mt-1">
                Financial Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-slate-700 text-sm">
            <Link to={`/${currentLang}`} className="hover:text-[#0a6c74] transition-colors">
              {t.home}
            </Link>
            <Link to={`/${currentLang}/about`} className="hover:text-[#0a6c74] transition-colors">
              {t.about}
            </Link>
            <Link to={`/${currentLang}/services`} className="hover:text-[#0a6c74] transition-colors">
              {t.services}
            </Link>
            <Link to={`/${currentLang}/testimonials`} className="hover:text-[#0a6c74] transition-colors">
              {t.testimonials}
            </Link>
          </nav>

          {/* Actions: Language Selector & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors focus:outline-none"
                aria-label="Select Language"
              >
                <span className="text-base">{currentLangObj.flag}</span>
                <span className="uppercase">{currentLangObj.code}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-slate-100 py-1 z-50 animate-in fade-in duration-150">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left hover:bg-slate-50 transition-colors ${
                        currentLang === lang.code ? 'font-bold text-[#0a6c74] bg-teal-50/50' : 'text-slate-700'
                      }`}
                    >
                      <span className="text-base">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Apply Button */}
            <Link
              to={`/${currentLang}/submission`}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#0a6c74] text-white font-medium text-sm shadow-md hover:bg-[#004d5a] transition-all hover:shadow-lg active:scale-95"
            >
              {t.apply}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Mobile Lang Button */}
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="p-2 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium"
            >
              <span className="text-lg">{currentLangObj.flag}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Language Selector Modal/Panel if toggled on mobile */}
      {langDropdownOpen && (
        <div className="lg:hidden bg-slate-50 border-b border-slate-200 px-4 py-3 flex flex-wrap gap-2 justify-center">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm border ${
                currentLang === lang.code
                  ? 'bg-[#0a6c74] text-white border-[#0a6c74]'
                  : 'bg-white text-slate-700 border-slate-200'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 font-medium text-slate-700">
            <Link
              to={`/${currentLang}`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              {t.home}
            </Link>
            <Link
              to={`/${currentLang}/about`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              {t.about}
            </Link>
            <Link
              to={`/${currentLang}/services`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              {t.services}
            </Link>
            <Link
              to={`/${currentLang}/testimonials`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              {t.testimonials}
            </Link>
          </nav>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-3">
            <Link
              to={`/${currentLang}/submission`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-[#0a6c74] text-white font-medium text-sm shadow-md"
            >
              {t.apply}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
