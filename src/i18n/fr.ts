import type { Translations } from './types';

export const fr: Translations = {
  nav: {
    home: 'Accueil',
    about: 'À propos',
    services: 'Nos solutions',
    testimonials: 'Témoignages',
    apply: 'Demande de crédit',
    contact: 'Contact',
    privacy: 'Confidentialité',
    legal: 'Mentions légales',
    calculator: 'Simulateur',
  },
  hero: {
    badge: 'Votre partenaire financier de confiance en Europe',
    title: 'Des solutions de crédit sur mesure pour tous vos projets',
    subtitle: 'Cemorana vous propose des crédits personnels transparents, rapides et fiables avec des conditions avantageuses et un taux annuel fixe à partir de 3%.',
    ctaPrimary: 'Demander un crédit en ligne',
    ctaSecondary: 'Simuler mon crédit',
    stat1Label: 'Clients satisfaits',
    stat1Val: '15 000+',
    stat2Label: 'Taux annuel fixe',
    stat2Val: '3,00%',
    stat3Label: 'Traitement express',
    stat3Val: '24h',
  },
  aboutBrief: {
    title: 'Excellence & Transparence au service de vos projets',
    subtitle: 'À propos de Cemorana',
    desc1: 'Cemorana est une institution financière reconnue, spécialisée dans les solutions de crédit aux particuliers et l\'accompagnement sur mesure.',
    desc2: 'Nous accordons une priorité absolue à la confidentialité, la réactivité et la clarté des conditions sans aucun frais caché.',
    readMore: 'En savoir plus sur nous',
    points: [
      'Taux d\'intérêt fixe de 3% p.a. sans aucune mauvaise surprise',
      'Procédure 100% digitale et strictement confidentielle'
    ],
  },
  servicesBrief: {
    title: 'Nos solutions de financement',
    subtitle: 'Une gamme complète adaptée à chaque étape de votre vie',
    viewAll: 'Voir toutes nos solutions',
  },
  simulator: {
    title: 'Simulateur de crédit interactif',
    subtitle: 'Calculez vos mensualités estimées sans aucun engagement',
    amountLabel: 'Montant du crédit souhaité (€)',
    durationLabel: 'Durée du remboursement (Mois)',
    months: 'mois',
    years: 'ans',
    fixedRate: 'Taux annuel fixe',
    monthlyPayment: 'Mensualité estimée',
    totalInterest: 'Total des intérêts',
    totalAmount: 'Montant total à rembourser',
    applyBtn: 'Demander ce crédit',
    disclaimer: 'Remarque : Ce résultat est une simulation indicative calculée sur la base d\'un taux annuel fixe de 3,00%.',
  },
  steps: {
    title: 'Obtenez votre crédit en 4 étapes simples',
    subtitle: 'Un parcours rapide, transparent et sécurisé',
    step1Title: '1. Simulation & Demande',
    step1Desc: 'Choisissez votre montant et remplissez notre formulaire en ligne en moins de 3 minutes.',
    step2Title: '2. Étude Express',
    step2Desc: 'Nos experts étudient votre dossier de manière strictement confidentielle sous 24h.',
    step3Title: '3. Offre de contrat',
    step3Desc: 'Vous recevez une proposition claire et ferme au taux annuel fixe de 3%.',
    step4Title: '4. Versment des fonds',
    step4Desc: 'Après validation du contrat, le montant est versé directement sur votre compte bancaire.',
  },
  testimonialsSection: {
    title: 'Ce que disent nos clients',
    subtitle: 'La confiance et la satisfaction de nos emprunteurs sont la fierté de Cemorana',
    viewAll: 'Voir tous les témoignages',
  },
  faqSection: {
    title: 'Foire aux questions (FAQ)',
    subtitle: 'Retrouvez toutes les réponses à vos questions sur nos offres de crédit',
  },
  ctaBanner: {
    title: 'Prêt à réaliser votre projet ?',
    subtitle: 'Faites votre demande de crédit en ligne dès aujourd\'hui et recevez une réponse sous 24 heures.',
    btn: 'Démarrer ma demande',
  },
  servicesPage: {
    heroTitle: 'Nos solutions de financement sur mesure',
    heroSubtitle: 'Découvrez des offres de crédit flexibles conçues pour concrétiser toutes vos ambitions.',
    personalLoan: {
      title: 'Crédit personnel',
      desc: 'Un prêt flexible à usage libre sans justification de dépense. Idéal pour vos besoins personnels, voyages, équipement ou imprévus.',
      features: ['Montants de 3 000 € à 50 000 €', 'Libre utilisation des fonds', 'Mensualités fixes pour une parfaite maîtrise', 'Aucune pénalité de remboursement anticipé']
    },
    autoLoan: {
      title: 'Crédit automobile & véhicule',
      desc: 'Financez votre voiture neuve ou d\'occasion, moto ou véhicule électrique à des conditions exceptionnelles.',
      features: ['Décision rapide pour votre achat auto', 'Taux annuel fixe avantageux de 3%', 'Durée allant jusqu\'à 84 mois', 'Demande simple et rapide']
    },
    mortgageLoan: {
      title: 'Crédit immobilier',
      desc: 'Concrétisez votre projet d\'acquisition immobilière ou d\'investissement grâce à notre expertise en financement.',
      features: ['Sécurité d\'un taux fixe à long terme', 'Accompagnement personnalisé', 'Financement d\'achat, construction ou rachat', 'Conditions transparentes']
    },
    renovationLoan: {
      title: 'Crédit travaux & rénovation',
      desc: 'Investissez dans la valorisation de votre logement : rénovation énergétique, cuisine, aménagement intérieur ou extérieur.',
      features: ['Taux préférentiel travaux', 'Sans hypothèque pour les montants intermédiaires', 'Valorisation de votre patrimoine', 'Remboursement adapté']
    },
    studentLoan: {
      title: 'Crédit étudiant & formation',
      desc: 'Financez vos études supérieures, frais de scolarité ou séjours à l\'étranger en toute sérénité.',
      features: ['Mensualités réduites pendant les études', 'Plan de remboursement différé', 'Sans garant exigé sous conditions', 'Accord rapide']
    },
    consolidationLoan: {
      title: 'Regroupement de crédits',
      desc: 'Rassemblez tous vos crédits en cours en une seule mensualité réduite pour alléger votre budget mensuel.',
      features: ['Réduction significative de vos mensualités', 'Un seul interlocuteur unique', 'Taux annuel fixe de 3%', 'Gestion budgétaire simplifiée']
    }
  },
  aboutPage: {
    title: 'À propos de Cemorana',
    subtitle: 'Votre partenaire de confiance pour les solutions de crédit en Europe.',
    missionTitle: 'Notre Mission',
    missionDesc: 'Chez Cemorana, nous sommes convaincus que l\'accès au crédit doit être simple, transparent et exempt de lourdeurs bureaucratiques. Nous accompagnons chaque client dans la concrétisation durable de ses projets.',
    valuesTitle: 'Nos Valeurs Fondamentales',
    valuesDesc: 'Notre engagement s\'appuie sur quatre piliers : l\'intégrité, la transparence totale, la proximité client et la rapidité d\'exécution.',
    commitmentsTitle: 'Nos Engagements Qualité',
    commitmentsList: [
      { title: 'Taux Annuel Fixe de 3%', desc: 'Aucune variation imprévue : votre taux demeure strictement identique pendant toute la durée du crédit.' },
      { title: '100% Protection des Données', desc: 'Aucune donnée personnelle n\'est conservée sur la base de données du site web. Transmission directe et sécurisée.' },
      { title: 'Réponse sous 24h', desc: 'Notre équipe étudie votre dossier et vous recontacte dans un délai garanti de 24 heures.' },
      { title: 'Conseillers Dédiés', desc: 'Un suivi personnalisé et bienveillant à chaque étape de votre projet.' }
    ]
  },
  applyPage: {
    badge: 'Formulaire de demande en ligne',
    title: 'Faire une demande de crédit',
    subtitle: 'Complétez le formulaire ci-dessous. Notre équipe étudiera votre dossier sous 24h.',
    form: {
      personalInfo: '1. Informations personnelles',
      firstName: 'Prénom',
      lastName: 'Nom',
      email: 'Adresse e-mail',
      phone: 'Numéro de téléphone',
      country: 'Pays de résidence',
      creditDetails: '2. Caractéristiques du crédit',
      amount: 'Montant souhaité (€) (minimum 3 000 €)',
      duration: 'Durée souhaitée (Mois)',
      purpose: 'Objet du crédit',
      purposeOptions: {
        personal: 'Crédit personnel libre',
        auto: 'Crédit auto / véhicule',
        mortgage: 'Crédit immobilier',
        renovation: 'Travaux & Rénovation',
        student: 'Études & Formation',
        consolidation: 'Regroupement de crédits'
      },
      financialInfo: '3. Situation professionnelle et financière',
      employmentStatus: 'Statut professionnel',
      employmentOptions: {
        employed: 'Salarié(e) / Fonctionnaire',
        selfEmployed: 'Indépendant(e) / Libéral',
        retired: 'Retraité(e)',
        student: 'Étudiant(e) / Apprenti',
        other: 'Autre'
      },
      monthlyIncome: 'Revenus nets mensuels (€)',
      monthlyExpenses: 'Charges mensuelles / Loyer (€)',
      consentText: 'Je certifie l\'exactitude des informations fournies et j\'accepte le traitement confidentiel de ma demande de crédit.',
      submitBtn: 'Envoyer ma demande de crédit',
      submitting: 'Envoi en cours...',
      successTitle: 'Merci pour votre demande !',
      successMsg: 'Votre dossier a été transmis avec succès à notre équipe. Nous l\'examinerons et vous contacterons dans un délai de 24 heures.',
      errorMsg: 'Une erreur est survenue lors de l\'envoi de votre demande. Veuillez réessayer ou nous contacter par e-mail ou WhatsApp.'
    }
  },
  legalPage: {
    title: 'Mentions Légales',
    lastUpdated: 'Dernière mise à jour : Octobre 2026',
    companyInfo: 'Informations sur l\'entreprise',
    companyName: 'Cemorana Financial Solutions',
    address: 'Kardinal-Faulhaber-Straße 12, 80333 München-Altstadt-Lehel, Allemagne',
    email: 'contact@cemorana.com',
    phone: '+49 157 79193294',
    regNumber: 'Numéro d\'enregistrement : HRB-CEM-2026-EU',
    regulatoryInfo: 'Organisme de contrôle',
    disclaimer: 'Cemorana est une institution spécialisée dans les solutions de crédit aux particuliers. Les données présentées sur ce site sont indicatives et ne constituent pas un engagement contractuel. Le contrat de prêt définitif intervient après étude d\'éligibilité et signature.'
  },
  privacyPage: {
    title: 'Politique de Confidentialité',
    lastUpdated: 'Dernière mise à jour : Octobre 2026',
    intro: 'La protection de vos données personnelles est au cœur des priorités de Cemorana.',
    dataUsage: 'Aucun stockage sur les serveurs du site : Cemorana ne conserve aucune donnée personnelle dans une base de données du site web. Les informations renseignées dans le formulaire sont exclusivement destinées à transmettre une alerte e-mail via Resend à contact@cemorana.com.',
    resendNote: 'Les e-mails sont acheminés de manière chiffrée via le service sécurisé Resend conformément aux normes européennes de protection des données.',
    rights: 'Vos droits : Vous disposez d\'un droit d\'accès, de rectification et de suppression de vos données à tout moment en écrivant à contact@cemorana.com.',
    cookies: 'Cookies : Ce site utilise uniquement les cookies de session strictement nécessaires au choix de la langue et au bon fonctionnement de la navigation.'
  },
  footer: {
    desc: 'Cemorana est votre institution spécialisée en crédit aux particuliers, regroupement de prêts et solutions financières en Europe.',
    quickLinks: 'Liens rapides',
    ourServices: 'Nos services',
    legalLinks: 'Informations légales',
    contactInfo: 'Contact & Support',
    rights: 'Tous droits réservés. Cemorana',
    address: 'Service client Europe | E-mail: contact@cemorana.com | Tél: +49 157 79193294',
  },
  notFound: {
    title: 'Page non trouvée (404)',
    desc: 'La page que vous recherchez n\'existe pas ou a été déplacée.',
    backHome: 'Retourner à l\'accueil',
  }
};
