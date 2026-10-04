export interface Testimonial {
  id: string;
  name: string;
  role: {
    de: string;
    en: string;
    lt: string;
    fr: string;
  };
  location: string;
  rating: number;
  amount: string;
  date: string;
  content: {
    de: string;
    en: string;
    lt: string;
    fr: string;
  };
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Markus Weber',
    role: {
      de: 'Ingenieur',
      en: 'Engineer',
      lt: 'Inžinierius',
      fr: 'Ingénieur'
    },
    location: 'München, Deutschland',
    rating: 5,
    amount: '25.000 €',
    date: '12/09/2026',
    content: {
      de: 'Ich habe bei Cemorana einen Autokredit beantragt. Der Zinssatz von 3% ist im aktuellen Marktumfeld unschlagbar. Die Auszahlung erfolgte innerhalb von 48 Stunden. Ausgezeichneter Service!',
      en: 'I applied for a car loan with Cemorana. The 3% interest rate is unbeatable in the current market. The payout was made within 48 hours. Excellent service!',
      lt: 'Kreipiausi į „Cemorana“ dėl paskolos automobiliui. 3% palūkanų norma šiuo metu yra neprilygstama. Pinigai buvo pervesti per 48 valandas. Puikus aptarnavimas!',
      fr: 'J\'ai souscrit un crédit auto chez Cemorana. Le taux de 3% est imbattable actuellement. Les fonds ont été débloqués en 48 heures. Service impeccable !'
    }
  },
  {
    id: '2',
    name: 'Sophie Laurent',
    role: {
      de: 'Architektin',
      en: 'Architect',
      lt: 'Architektė',
      fr: 'Architecte'
    },
    location: 'Lyon, France',
    rating: 5,
    amount: '18.000 €',
    date: '28/08/2026',
    content: {
      de: 'Ein sehr transparenter Prozess für unseren Renovierungskredit. Keine versteckten Gebühren und das Formular war in 3 Minuten ausgefüllt.',
      en: 'A very transparent process for our home renovation loan. No hidden fees and the application took only 3 minutes.',
      lt: 'Labai skaidrus procesas mūsų namo remontui. Jokių paslėptų mokesčių, o paraiška užpildyta per 3 minutes.',
      fr: 'Procédure d\'une transparence exemplaire pour notre prêt travaux. Aucun frais caché et demande complétée en 3 minutes.'
    }
  },
  {
    id: '3',
    name: 'Tomas Petrauskas',
    role: {
      de: 'Unternehmer',
      en: 'Entrepreneur',
      lt: 'Verslininkas',
      fr: 'Entrepreneur'
    },
    location: 'Vilnius, Lietuva',
    rating: 5,
    amount: '35.000 €',
    date: '15/08/2026',
    content: {
      de: 'Die Kreditumschuldung hat meine monatlichen Ausgaben deutlich gesenkt. Vielen Dank an das Cemorana-Team für die schnelle Abwicklung.',
      en: 'Debt consolidation significantly reduced my monthly expenses. Many thanks to the Cemorana team for swift execution.',
      lt: 'Paskolų refinansavimas žymiai sumažino mano mėnesines išlaidas. Ačiū „Cemorana“ komandai už greitą darbą.',
      fr: 'Le regroupement de crédits a considérablement réduit mes charges mensuelles. Un grand merci à l\'équipe Cemorana pour leur rapidité.'
    }
  },
  {
    id: '4',
    name: 'Elena Rostova',
    role: {
      de: 'Lehrerin',
      en: 'Teacher',
      lt: 'Mokytoja',
      fr: 'Enseignante'
    },
    location: 'Berlin, Deutschland',
    rating: 5,
    amount: '12.000 €',
    date: '02/08/2026',
    content: {
      de: 'Ein Privater Kredit ohne Bürokratie. Sehr freundlicher Kundenservice per E-Mail und WhatsApp. Ich kann Cemorana jedem empfehlen.',
      en: 'A personal loan without red tape. Very friendly customer service via email and WhatsApp. I recommend Cemorana to everyone.',
      lt: 'Asmeninė paskola be biurokratijos. Labai draugiškas aptarnavimas el. paštu ir WhatsApp. Rekomenduoju „Cemorana“.',
      fr: 'Un prêt personnel sans lourdeur administrative. Service client très réactif et bienveillant par WhatsApp. Je recommande vivement.'
    }
  },
  {
    id: '5',
    name: 'David Miller',
    role: {
      de: 'IT-Consultant',
      en: 'IT Consultant',
      lt: 'IT Konsultantas',
      fr: 'Consultant IT'
    },
    location: 'Frankfurt, Deutschland',
    rating: 5,
    amount: '40.000 €',
    date: '19/07/2026',
    content: {
      de: 'Seriös und verlässlich. Der festgeschriebene Zinssatz von 3% gibt mir volle Sicherheit für mein Immobilienprojekt.',
      en: 'Reputable and reliable. The fixed 3% interest rate provides complete security for my real estate project.',
      lt: 'Patikima ir solidu. Fiksuota 3% palūkanų norma suteikia visišką saugumą mano nekilnojamojo turto projektui.',
      fr: 'Sérieux et professionnel. Le taux fixe de 3% garantit une sécurité totale pour mon projet immobilier.'
    }
  },
  {
    id: '6',
    name: 'Laura Kazlauskaitė',
    role: {
      de: 'Medizinerin',
      en: 'Doctor',
      lt: 'Gydytoja',
      fr: 'Médecin'
    },
    location: 'Kaunas, Lietuva',
    rating: 5,
    amount: '15.000 €',
    date: '05/07/2026',
    content: {
      de: 'Schneller Service und sehr klare Bedingungen. Das Geld war pünktlich auf meinem Konto.',
      en: 'Fast service and very clear conditions. The money reached my account right on time.',
      lt: 'Greitas aptarnavimas ir labai aiškios sąlygos. Pinigai mano sąskaitą pasiekė laiku.',
      fr: 'Service rapide et conditions très claires. L\'argent a été crédité sur mon compte sans aucun retard.'
    }
  },
  {
    id: '7',
    name: 'Alexandre Moreau',
    role: {
      de: 'Grafikdesigner',
      en: 'Graphic Designer',
      lt: 'Grafikos dizaineris',
      fr: 'Designer Graphique'
    },
    location: 'Bordeaux, France',
    rating: 5,
    amount: '8.000 €',
    date: '22/06/2026',
    content: {
      de: 'Super einfache Abwicklung auf dem Smartphone. Nach 24 Stunden hatte ich die Bestätigung.',
      en: 'Super easy process on smartphone. I had the confirmation within 24 hours.',
      lt: 'Super paprastas procesas išmaniajame telefone. Patvirtinimą gavau per 24 valandas.',
      fr: 'Procédure ultra simple sur smartphone. J\'ai obtenu le traitement préliminaire sous 24h.'
    }
  },
  {
    id: '8',
    name: 'Anna Schmidt',
    role: {
      de: 'Pharmareferentin',
      en: 'Pharmaceutical Rep',
      lt: 'Farmacijos specialistė',
      fr: 'Déléguée Médicale'
    },
    location: 'Hamburg, Deutschland',
    rating: 5,
    amount: '20.000 €',
    date: '10/06/2026',
    content: {
      de: 'Cemorana hat mir geholfen, meine Weiterbildung zu finanzieren. Absolut professionell!',
      en: 'Cemorana helped me finance my professional training. Absolutely professional!',
      lt: '„Cemorana“ padėjo man finansuoti kvalifikacijos kėlimą. Visiškai profesionalu!',
      fr: 'Cemorana m\'a permis de financer ma formation professionnelle. Un accompagnement irréprochable.'
    }
  },
  {
    id: '9',
    name: 'Gintaras Vaitkus',
    role: {
      de: 'Logistikleiter',
      en: 'Logistics Manager',
      lt: 'Logistikos vadovas',
      fr: 'Responsable Logistique'
    },
    location: 'Klaipėda, Lietuva',
    rating: 5,
    amount: '30.000 €',
    date: '01/06/2026',
    content: {
      de: 'Alles klappte wie versprochen. Kein unnötiger Papierkram und ein top Zinssatz.',
      en: 'Everything worked as promised. No unnecessary paperwork and a top interest rate.',
      lt: 'Viskas pavyko taip, kaip žadėta. Jokio nereikalingo popierizmo ir puikios palūkanos.',
      fr: 'Tout s\'est déroulé comme promis. Aucun paperasse inutile et un taux d\'intérêt imbattable.'
    }
  },
  {
    id: '10',
    name: 'Claire Dubois',
    role: {
      de: 'Projektmanagerin',
      en: 'Project Manager',
      lt: 'Projektų vadovė',
      fr: 'Chef de Projet'
    },
    location: 'Strasbourg, France',
    rating: 5,
    amount: '14.000 €',
    date: '18/05/2026',
    content: {
      de: 'Sehr kompetentes Team. Ich konnte meine Fragen direkt per WhatsApp klären. Vielen Dank!',
      en: 'Very competent team. I was able to clarify my questions directly on WhatsApp. Thank you!',
      lt: 'Labai kompetentinga komanda. Į klausimus atsakyta tiesiogiai per „WhatsApp“. Ačiū!',
      fr: 'Équipe très compétente. J\'ai pu poser mes questions directement sur WhatsApp. Merci à tous !'
    }
  },
  {
    id: '11',
    name: 'Stefan Hoffmann',
    role: {
      de: 'Finanzberater',
      en: 'Financial Consultant',
      lt: 'Finansų konsultantas',
      fr: 'Conseiller Financier'
    },
    location: 'Stuttgart, Deutschland',
    rating: 5,
    amount: '45.000 €',
    date: '04/05/2026',
    content: {
      de: 'Als Finanzfachmann schätze ich die Einhaltung der Datenschutzrichtlinien und die Transparenz.',
      en: 'As a financial professional, I appreciate the strict data protection and transparency.',
      lt: 'Kaip finansų specialistas, vertinu duomenų apsaugos laikymąsi ir skaidrumą.',
      fr: 'En tant que professionnel de la finance, j\'apprécie le respect strict de la confidentialité et la clarté.'
    }
  },
  {
    id: '12',
    name: 'Rūta Baranauskienė',
    role: {
      de: 'Wirtschaftsprüferin',
      en: 'Auditor',
      lt: 'Auditorė',
      fr: 'Auditrice'
    },
    location: 'Šiauliai, Lietuva',
    rating: 5,
    amount: '22.000 €',
    date: '20/04/2026',
    content: {
      de: 'Sehr zufriedengestellt durch die Effizienz von Cemorana. Ein Musterbeispiel an Kundenorientierung.',
      en: 'Very satisfied by Cemorana\'s efficiency. A prime example of customer focus.',
      lt: 'Labai patenkinta „Cemorana“ efektyvumu. Puikus orientacijos į klientą pavyzdys.',
      fr: 'Très satisfaite par l\'efficacité de Cemorana. Un modèle de service client.'
    }
  }
];

export interface FAQItem {
  question: { de: string; en: string; lt: string; fr: string };
  answer: { de: string; en: string; lt: string; fr: string };
}

export const FAQ_DATA: FAQItem[] = [
  {
    question: {
      de: 'Wie hoch ist der Zinssatz bei Cemorana?',
      en: 'What is the interest rate at Cemorana?',
      lt: 'Kokia yra palūkanų norma „Cemorana“?',
      fr: 'Quel est le taux d\'intérêt chez Cemorana ?'
    },
    answer: {
      de: 'Wir bieten einen festen Jahreszins von 3,00% p.a. für alle unsere Kreditarten an, unabhängig von der gewählten Laufzeit.',
      en: 'We offer a fixed annual interest rate of 3.00% p.a. for all our loan products, regardless of the chosen term.',
      lt: 'Mes siūlome fiksuotą 3,00% metinę palūkanų normą visiems mūsų kreditams, nepriklausomai nuo pasirinkto termino.',
      fr: 'Nous proposons un taux annuel fixe de 3,00% p.a. sur l\'ensemble de nos offres de crédit, quelle que soit la durée.'
    }
  },
  {
    question: {
      de: 'Welcher Mindestbetrag kann beantragt werden?',
      en: 'What is the minimum loan amount that can be requested?',
      lt: 'Kokia yra mažiausia galima paskolos suma?',
      fr: 'Quel est le montant minimum que l\'on peut demander ?'
    },
    answer: {
      de: 'Der Mindestkreditbetrag beträgt 3.000 €. Sie können Beträge von 3.000 € bis 50.000 € (bzw. mehr bei Immobilien) beantragen.',
      en: 'The minimum loan amount is €3,000. You can apply for amounts ranging from €3,000 up to €50,000 (or higher for real estate).',
      lt: 'Mažiausia paskolos suma yra 3 000 €. Galite teikti paraišką sumoms nuo 3 000 € iki 50 000 €.',
      fr: 'Le montant minimum est de 3 000 €. Vous pouvez demander des montants allant de 3 000 € jusqu\'à 50 000 € (ou plus selon le projet).'
    }
  },
  {
    question: {
      de: 'Wie schnell erhalte ich eine Antwort auf meinen Antrag?',
      en: 'How fast will I receive a response to my application?',
      lt: 'Kaip greitai gausiu atsakymą į savo paraišką?',
      fr: 'En combien de temps reçois-je une réponse à ma demande ?'
    },
    answer: {
      de: 'Unser Expertenteam prüft Ihre Kreditanfrage innerhalb von 24 Stunden und kontaktiert Sie umgehend per E-Mail oder Telefon.',
      en: 'Our credit experts evaluate your application within 24 hours and contact you promptly via email or phone.',
      lt: 'Mūsų komanda įvertina jūsų paraišką per 24 valandas ir susisiekia el. paštu arba telefonu.',
      fr: 'Notre équipe d\'experts étudie votre dossier sous 24 heures et vous recontacte rapidement par e-mail ou téléphone.'
    }
  },
  {
    question: {
      de: 'Werden meine persönlichen Daten auf der Website gespeichert?',
      en: 'Is my personal data saved on the website?',
      lt: 'Ar mano asmens duomenys saugomi svetainėje?',
      fr: 'Mes données personnelles sont-elles enregistrées sur le site ?'
    },
    answer: {
      de: 'Nein. Aus Sicherheits- und Datenschutzgründen speichert Cemorana keinerlei persönliche Daten auf Webservern oder in Datenbanken. Das Formular sendet die Angaben direkt per verschlüsselter E-Mail via Resend.',
      en: 'No. For privacy and security reasons, Cemorana stores zero personal data on web servers or databases. The form sends data directly via encrypted email via Resend.',
      lt: 'Ne. Saugumo sumetimais „Cemorana“ nesaugo jokių duomenų svetainės serveriuose. Paraiška siunčiama el. paštu per „Resend“.',
      fr: 'Non. Par souci de confidentialité et de sécurité, Cemorana ne stocke aucune donnée sur les serveurs du site. Les informations sont envoyées directement par e-mail sécurisé via Resend.'
    }
  }
];
