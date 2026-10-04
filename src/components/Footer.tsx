import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';
import { getLanguageFromPath, translations } from '../i18n';

export const Footer: React.FC = () => {
  const location = useLocation();
  const currentLang = getLanguageFromPath(location.pathname);
  const t = translations[currentLang].footer;
  const navT = translations[currentLang].nav;
  const servicesT = translations[currentLang].servicesPage;

  const servicesList = [
    { id: 'personal', title: servicesT.personalLoan.title },
    { id: 'auto', title: servicesT.autoLoan.title },
    { id: 'mortgage', title: servicesT.mortgageLoan.title },
    { id: 'renovation', title: servicesT.renovationLoan.title },
    { id: 'student', title: servicesT.studentLoan.title },
    { id: 'consolidation', title: servicesT.consolidationLoan.title },
  ];

  return (
    <footer className="bg-[#262626] text-slate-300 pt-16 pb-12 border-t border-[#383838]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#383838]">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to={`/${currentLang}`} className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="Cemorana"
                className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
              />
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-teal-400 transition-colors">
                CEMORANA
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.desc}
            </p>
            <div className="flex items-center gap-2 text-xs text-teal-400 font-medium pt-2">
              <Shield className="w-4 h-4" />
              <span>Conforme RGPD & Chiffrement SSL 256-bit</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-semibold tracking-wide">
              {t.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to={`/${currentLang}`} className="hover:text-white transition-colors">
                  {navT.home}
                </Link>
              </li>
              <li>
                <Link to={`/${currentLang}/about`} className="hover:text-white transition-colors">
                  {navT.about}
                </Link>
              </li>
              <li>
                <Link to={`/${currentLang}/services`} className="hover:text-white transition-colors">
                  {navT.services}
                </Link>
              </li>
              <li>
                <Link to={`/${currentLang}/testimonials`} className="hover:text-white transition-colors">
                  {navT.testimonials}
                </Link>
              </li>
              <li>
                <Link to={`/${currentLang}/submission`} className="hover:text-white transition-colors">
                  {navT.apply}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-semibold tracking-wide">
              {t.ourServices}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesList.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/${currentLang}/services#${service.id}`}
                    className="hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-semibold tracking-wide">
              {t.contactInfo}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-[#16939d] shrink-0" />
                <a href="mailto:contact@cemorana.com" className="hover:text-white transition-colors">
                  contact@cemorana.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Phone className="w-4 h-4 text-[#16939d] shrink-0" />
                <a href="https://wa.me/4915779193294" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +49 157 79193294 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-[#16939d] shrink-0" />
                <span>Deutschland / EU</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Subfooter */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © {new Date().getFullYear()} Cemorana. {t.rights}.
          </p>
          <div className="flex items-center gap-4">
            <Link to={`/${currentLang}/privacy-policy`} className="hover:text-white transition-colors">
              {navT.privacy}
            </Link>
            <span>•</span>
            <Link to={`/${currentLang}/legal-notice`} className="hover:text-white transition-colors">
              {navT.legal}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
