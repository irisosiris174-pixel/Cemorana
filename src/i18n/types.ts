export type Language = 'de' | 'en' | 'lt' | 'fr';

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    testimonials: string;
    apply: string;
    contact: string;
    privacy: string;
    legal: string;
    calculator: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Label: string;
    stat1Val: string;
    stat2Label: string;
    stat2Val: string;
    stat3Label: string;
    stat3Val: string;
  };
  aboutBrief: {
    title: string;
    subtitle: string;
    desc1: string;
    desc2: string;
    readMore: string;
    points: string[];
  };
  servicesBrief: {
    title: string;
    subtitle: string;
    viewAll: string;
  };
  simulator: {
    title: string;
    subtitle: string;
    amountLabel: string;
    durationLabel: string;
    months: string;
    years: string;
    fixedRate: string;
    monthlyPayment: string;
    totalInterest: string;
    totalAmount: string;
    applyBtn: string;
    disclaimer: string;
  };
  steps: {
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
  };
  testimonialsSection: {
    title: string;
    subtitle: string;
    viewAll: string;
  };
  faqSection: {
    title: string;
    subtitle: string;
  };
  ctaBanner: {
    title: string;
    subtitle: string;
    btn: string;
  };
  servicesPage: {
    heroTitle: string;
    heroSubtitle: string;
    personalLoan: {
      title: string;
      desc: string;
      features: string[];
    };
    autoLoan: {
      title: string;
      desc: string;
      features: string[];
    };
    mortgageLoan: {
      title: string;
      desc: string;
      features: string[];
    };
    renovationLoan: {
      title: string;
      desc: string;
      features: string[];
    };
    studentLoan: {
      title: string;
      desc: string;
      features: string[];
    };
    consolidationLoan: {
      title: string;
      desc: string;
      features: string[];
    };
  };
  aboutPage: {
    title: string;
    subtitle: string;
    missionTitle: string;
    missionDesc: string;
    valuesTitle: string;
    valuesDesc: string;
    commitmentsTitle: string;
    commitmentsList: { title: string; desc: string }[];
  };
  applyPage: {
    badge: string;
    title: string;
    subtitle: string;
    form: {
      personalInfo: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      country: string;
      creditDetails: string;
      amount: string;
      duration: string;
      purpose: string;
      purposeOptions: {
        personal: string;
        auto: string;
        mortgage: string;
        renovation: string;
        student: string;
        consolidation: string;
      };
      financialInfo: string;
      employmentStatus: string;
      employmentOptions: {
        employed: string;
        selfEmployed: string;
        retired: string;
        student: string;
        other: string;
      };
      monthlyIncome: string;
      monthlyExpenses: string;
      consentText: string;
      submitBtn: string;
      submitting: string;
      successTitle: string;
      successMsg: string;
      errorMsg: string;
    };
  };
  legalPage: {
    title: string;
    lastUpdated: string;
    companyInfo: string;
    companyName: string;
    address: string;
    email: string;
    phone: string;
    regNumber: string;
    regulatoryInfo: string;
    disclaimer: string;
  };
  privacyPage: {
    title: string;
    lastUpdated: string;
    intro: string;
    dataUsage: string;
    resendNote: string;
    rights: string;
    cookies: string;
  };
  footer: {
    desc: string;
    quickLinks: string;
    ourServices: string;
    legalLinks?: string;
    contactInfo: string;
    rights: string;
    address: string;
  };
  notFound: {
    title: string;
    desc: string;
    backHome: string;
  };
}
