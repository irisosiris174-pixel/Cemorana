import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle, ShieldCheck, Lock, Building, DollarSign, User } from 'lucide-react';
import { getLanguageFromPath, translations } from '../i18n';

export const CreditForm: React.FC = () => {
  const location = useLocation();
  const currentLang = getLanguageFromPath(location.pathname);
  const t = translations[currentLang].applyPage.form;

  // Extract query parameters if redirected from simulator
  const queryParams = new URLSearchParams(location.search);
  const initialAmount = queryParams.get('amount') || '10000';
  const initialDuration = queryParams.get('duration') || '36';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: 'Deutschland',
    amount: initialAmount,
    duration: initialDuration,
    purpose: 'personal',
    employmentStatus: 'employed',
    monthlyIncome: '',
    monthlyExpenses: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/credit-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          consent: true,
          language: currentLang,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(result.error || t.errorMsg);
      }
    } catch (err) {
      console.error('Submission error:', err);
      // Even if /api/credit-request is not available on local dev without vercel serverless runner,
      // simulate graceful completion or show structured feedback
      setStatus('error');
      setErrorMessage(t.errorMsg);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#004d5a] via-[#0a6c74] to-[#16939d] p-6 sm:p-10 text-white">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{translations[currentLang].applyPage.title}</h2>
        <p className="text-teal-100 text-sm sm:text-base max-w-2xl">{translations[currentLang].applyPage.subtitle}</p>
        
        <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-teal-200">
          <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg">
            <Lock className="w-4 h-4 text-teal-300" />
            <span>Chiffrement SSL 256-bit</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg">
            <ShieldCheck className="w-4 h-4 text-teal-300" />
            <span>Aucun stockage de vos données</span>
          </div>
        </div>
      </div>

      {status === 'success' ? (
        <div className="p-8 sm:p-12 text-center space-y-6 animate-in fade-in duration-300">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="space-y-2 max-w-lg mx-auto">
            <h3 className="text-2xl font-bold text-slate-900">{t.successTitle}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{t.successMsg}</p>
          </div>
          <div className="pt-4">
            <button
              onClick={() => setStatus('idle')}
              className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-medium transition-colors"
            >
              Nouvelle demande
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
          
          {/* Section 1: Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200 font-bold text-slate-900 text-lg">
              <User className="w-5 h-5 text-[#0a6c74]" />
              <span>{t.personalInfo}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">{t.firstName} *</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0a6c74] focus:ring-2 focus:ring-teal-100 outline-none transition-all text-sm"
                  placeholder="Max"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">{t.lastName} *</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0a6c74] focus:ring-2 focus:ring-teal-100 outline-none transition-all text-sm"
                  placeholder="Mustermann"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">{t.email} *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0a6c74] focus:ring-2 focus:ring-teal-100 outline-none transition-all text-sm"
                  placeholder="max.mustermann@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">{t.phone} *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0a6c74] focus:ring-2 focus:ring-teal-100 outline-none transition-all text-sm"
                  placeholder="+49 170 1234567"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">{t.country} *</label>
                <input
                  type="text"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0a6c74] focus:ring-2 focus:ring-teal-100 outline-none transition-all text-sm"
                  placeholder="Deutschland, France, Lietuva, ..."
                />
              </div>
            </div>
          </div>

          {/* Section 2: Credit details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200 font-bold text-slate-900 text-lg">
              <DollarSign className="w-5 h-5 text-[#0a6c74]" />
              <span>{t.creditDetails}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">{t.amount} *</label>
                <input
                  type="number"
                  name="amount"
                  min="3000"
                  required
                  value={formData.amount}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0a6c74] focus:ring-2 focus:ring-teal-100 outline-none transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">{t.duration} *</label>
                <input
                  type="number"
                  name="duration"
                  min="12"
                  max="360"
                  required
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0a6c74] focus:ring-2 focus:ring-teal-100 outline-none transition-all text-sm"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">{t.purpose} *</label>
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0a6c74] focus:ring-2 focus:ring-teal-100 outline-none transition-all text-sm bg-white"
                >
                  <option value="personal">{t.purposeOptions.personal}</option>
                  <option value="auto">{t.purposeOptions.auto}</option>
                  <option value="mortgage">{t.purposeOptions.mortgage}</option>
                  <option value="renovation">{t.purposeOptions.renovation}</option>
                  <option value="student">{t.purposeOptions.student}</option>
                  <option value="consolidation">{t.purposeOptions.consolidation}</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 3: Financial & Employment */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200 font-bold text-slate-900 text-lg">
              <Building className="w-5 h-5 text-[#0a6c74]" />
              <span>{t.financialInfo}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">{t.employmentStatus} *</label>
                <select
                  name="employmentStatus"
                  value={formData.employmentStatus}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0a6c74] focus:ring-2 focus:ring-teal-100 outline-none transition-all text-sm bg-white"
                >
                  <option value="employed">{t.employmentOptions.employed}</option>
                  <option value="selfEmployed">{t.employmentOptions.selfEmployed}</option>
                  <option value="retired">{t.employmentOptions.retired}</option>
                  <option value="student">{t.employmentOptions.student}</option>
                  <option value="other">{t.employmentOptions.other}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">{t.monthlyIncome} *</label>
                <input
                  type="number"
                  name="monthlyIncome"
                  required
                  value={formData.monthlyIncome}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0a6c74] focus:ring-2 focus:ring-teal-100 outline-none transition-all text-sm"
                  placeholder="2500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">{t.monthlyExpenses} *</label>
                <input
                  type="number"
                  name="monthlyExpenses"
                  required
                  value={formData.monthlyExpenses}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0a6c74] focus:ring-2 focus:ring-teal-100 outline-none transition-all text-sm"
                  placeholder="800"
                />
              </div>
            </div>
          </div>


          {status === 'error' && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#0a6c74] hover:bg-[#004d5a] disabled:opacity-60 text-white font-bold text-base shadow-lg hover:shadow-xl transition-all"
          >
            {status === 'submitting' ? (
              <span>{t.submitting}</span>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>{t.submitBtn}</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
