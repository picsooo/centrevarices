// ============================================================
// Centre des Varices — Contenu du site
// Modifier ce fichier pour mettre à jour les textes, horaires,
// photos et coordonnées du site.
// ============================================================

export const siteConfig = {
  name: "Centre des Varices",
  nameAr: "مركز الدوالي",
  doctor: "Dr Ziane epse Aniat",
  doctorTitle: "Médecin spécialiste en médecine interne",
  doctorTitleAr: "طبيبة أخصائية في الطب الداخلي",

  // Coordonnées
  address: "Rue Mohamed Bettouche Ali N° 28, Clair Val, Dely Ibrahim, Alger",
  addressAr: "شارع محمد بتوش علي رقم 28، كلير فال، دالي إبراهيم، الجزائر",
  landmark: "À côté du CNMS",
  landmarkAr: "بجانب الصندوق الوطني للضمان الإجتماعي",
  phone: "028 32 68 81",
  phoneHref: "tel:+21328326881",
  mobile: "0560 76 43 16",
  mobileHref: "tel:+213560764316",
  whatsapp: "+213560764316",
  whatsappUrl: "https://wa.me/213560764316",
  email: "contact@centredesvarices.dz", // TODO_CLIENT: confirmer l'email

  // Horaires
  hours: {
    days: "Samedi — Jeudi",
    daysAr: "السبت — الخميس",
    time: "08h30 — 16h30",
    closed: "Vendredi",
    closedAr: "الجمعة",
  },

  // Google Maps
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.5!2d2.98!3d36.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDely+Ibrahim!5e0!3m2!1sfr!2sdz!4v1700000000000", // TODO_CLIENT: remplacer par l'URL exacte Google Maps

  // Mode de réservation : 'whatsapp' | 'email' | 'both'
  bookingMode: "both" as "whatsapp" | "email" | "both",

  // Examens réalisés sur place
  exams: [
    {
      name: "Echodoppler vasculaire",
      nameAr: "إيكو دوبلر الأوعية الدموية",
      description: "Artères et veines",
      descriptionAr: "الشرايين والأوردة",
      icon: "activity" as const,
    },
    {
      name: "Cartographie veineuse",
      nameAr: "خريطة الأوردة",
      description: "Bilan veineux complet",
      descriptionAr: "تقييم وريدي شامل",
      icon: "scan" as const,
    },
    {
      name: "ECG",
      nameAr: "تخطيط القلب",
      description: "Électrocardiogramme",
      descriptionAr: "تخطيط كهربائية القلب",
      icon: "heart-pulse" as const,
    },
    {
      name: "MAPA",
      nameAr: "قياس الضغط المتنقل",
      description: "Monitoring ambulatoire de la pression artérielle",
      descriptionAr: "مراقبة ضغط الدم المتنقل",
      icon: "gauge" as const,
    },
  ],

  // Pathologies prises en charge
  pathologies: [
    {
      fr: "Maladies vasculaires",
      ar: "أمراض الأوعية الدموية",
    },
    {
      fr: "Diagnostic et traitement des varices",
      ar: "تشخيص و علاج الدوالي",
    },
    {
      fr: "Prise en charge de l'ulcère de jambe veineux",
      ar: "علاج جرح القدم الوريدي",
    },
    {
      fr: "Maladies auto-immunes et maladies systémiques",
      ar: "الأمراض المناعية و الإلتهابية",
    },
    {
      fr: "Diabète — Hypertension artérielle — Maladies de la glande thyroïde",
      ar: "مرض السكري – الضغط الدموي – إضطراب الغدة الدرقية",
    },
  ],

  // Étapes de consultation
  consultationSteps: [
    {
      title: "Écoute & examen clinique",
      titleAr: "الاستماع والفحص السريري",
      description:
        "Le médecin prend le temps de vous écouter et réalise un examen clinique complet.",
      descriptionAr:
        "تأخذ الطبيبة الوقت الكافي للاستماع إليك وتقوم بفحص سريري شامل.",
    },
    {
      title: "Examens au cabinet",
      titleAr: "الفحوصات في العيادة",
      description:
        "Les examens nécessaires (echodoppler, ECG, MAPA) sont réalisés sur place, sans déplacement.",
      descriptionAr:
        "يتم إجراء الفحوصات اللازمة (إيكو دوبلر، تخطيط القلب) في العيادة دون الحاجة للتنقل.",
    },
    {
      title: "Diagnostic & plan de traitement",
      titleAr: "التشخيص وخطة العلاج",
      description:
        "Un diagnostic précis suivi d'un plan de traitement personnalisé, clair et détaillé.",
      descriptionAr: "تشخيص دقيق متبوع بخطة علاج شخصية وواضحة ومفصلة.",
    },
  ],

  // À apporter
  tooBring:
    "Anciens comptes rendus, analyses récentes, liste des traitements en cours.",
  tooBringAr:
    "التقارير الطبية السابقة، التحاليل الحديثة، قائمة الأدوية الحالية.",

  // Motifs de consultation (pour le formulaire)
  consultationReasons: [
    { value: "varices", label: "Varices", labelAr: "الدوالي" },
    {
      value: "echodoppler",
      label: "Echodoppler vasculaire",
      labelAr: "إيكو دوبلر الأوعية",
    },
    {
      value: "ulcere",
      label: "Ulcère de jambe",
      labelAr: "جرح القدم الوريدي",
    },
    {
      value: "diabete-hta",
      label: "Diabète / Hypertension",
      labelAr: "السكري / الضغط",
    },
    { value: "thyroide", label: "Thyroïde", labelAr: "الغدة الدرقية" },
    {
      value: "auto-immune",
      label: "Maladie auto-immune",
      labelAr: "أمراض مناعية",
    },
    { value: "suivi", label: "Suivi", labelAr: "متابعة" },
    { value: "autre", label: "Autre", labelAr: "أخرى" },
  ],

  // Photos — À REMPLACER par les photos réelles du cabinet
  photos: {
    hero: {
      src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1400&h=800&fit=crop&crop=center",
      alt: "Cabinet médical moderne et lumineux", // À REMPLACER par photo réelle
    },
    doctor: {
      src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=750&fit=crop&crop=face",
      alt: "Dr Ziane epse Aniat", // À REMPLACER par photo réelle
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop",
        alt: "Salle de consultation", // À REMPLACER par photo réelle
      },
      {
        src: "https://images.unsplash.com/photo-1583912267550-d6c2ac3196c0?w=800&h=600&fit=crop",
        alt: "Échographe doppler", // À REMPLACER par photo réelle
      },
      {
        src: "https://images.unsplash.com/photo-1631217872822-d73e67b13d93?w=800&h=600&fit=crop",
        alt: "Salle d'attente lumineuse", // À REMPLACER par photo réelle
      },
      {
        src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop",
        alt: "Accueil du cabinet", // À REMPLACER par photo réelle
      },
      {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
        alt: "Espace d'attente confortable", // À REMPLACER par photo réelle
      },
    ],
    ambiance: {
      src: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=1400&h=600&fit=crop",
      alt: "Ambiance végétale apaisante", // À REMPLACER par photo réelle
    },
  },

  // Bio du médecin
  doctorBio: `TODO_CLIENT — Ajouter ici le parcours du Dr Ziane epse Aniat : formation, spécialisations, expérience, diplômes. Ce texte sera affiché dans la section "Le médecin".`,
  doctorBioAr: `TODO_CLIENT — أضف هنا مسيرة الدكتورة زيان: التكوين، التخصصات، الخبرة، الشهادات.`,

  // SEO
  seo: {
    title:
      "Centre des Varices Dely Ibrahim — Dr Ziane | Echodoppler & Médecine Interne à Alger",
    description:
      "Cabinet de médecine interne et vasculaire à Dely Ibrahim, Alger. Diagnostic et traitement des varices, echodoppler, ECG, MAPA. Dr Ziane epse Aniat. Prenez rendez-vous.",
    keywords: [
      "varices Alger",
      "echodoppler Dely Ibrahim",
      "médecin interniste Alger",
      "traitement varices Dely Ibrahim",
      "centre des varices",
      "doppler vasculaire Alger",
      "médecine interne Dely Ibrahim",
    ],
  },

  // Footer
  credit: {
    name: "Webminds Digital Solutions",
    url: "https://webminds.dz",
  },
};

export type SiteConfig = typeof siteConfig;
