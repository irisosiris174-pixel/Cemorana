import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ApplyPage } from './pages/ApplyPage';
import { LegalPage } from './pages/LegalPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { defaultLanguage } from './i18n';

// Scroll to top component on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

// Language Root Redirector
const RootRedirector = () => {
  return <Navigate to={`/${defaultLanguage}`} replace />;
};

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-teal-100 selection:text-[#004d5a]">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            {/* Root redirects to /de */}
            <Route path="/" element={<RootRedirector />} />

            {/* Multilingual Routes per Language Prefix */}
            {['de', 'en', 'lt', 'fr'].map((lang) => (
              <React.Fragment key={lang}>
                <Route path={`/${lang}`} element={<HomePage />} />
                <Route path={`/${lang}/about`} element={<AboutPage />} />
                <Route path={`/${lang}/services`} element={<ServicesPage />} />
                <Route path={`/${lang}/testimonials`} element={<TestimonialsPage />} />
                <Route path={`/${lang}/submission`} element={<ApplyPage />} />
                <Route path={`/${lang}/apply`} element={<Navigate to={`/${lang}/submission`} replace />} />
                <Route path={`/${lang}/legal-notice`} element={<LegalPage />} />
                <Route path={`/${lang}/privacy-policy`} element={<PrivacyPage />} />
              </React.Fragment>
            ))}

            {/* Fallback 404 Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <WhatsAppButton />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
