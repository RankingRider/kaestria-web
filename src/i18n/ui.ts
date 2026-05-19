export type Lang = 'en' | 'fr';

export const languages: Record<Lang, string> = {
  en: 'English',
  fr: 'Français',
};

export const defaultLang: Lang = 'en';

export type UI = {
  header: {
    products: string;
    services: string;
    about: string;
    contact: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    descIntro: string;
    descRest: string;
    signature: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  products: {
    sectionTitle: string;
    sectionSubtitle: string;
    groupWellness: string;
    groupWellnessTag: string;
    groupEcommerce: string;
    groupEcommerceTag: string;
    badges: { new: string; live: string; inReview: string; soon: string };
    items: Array<{
      tag: string;
      description: string;
      badgeKey: 'new' | 'live' | 'inReview' | 'soon';
      cta: string;
      ctaInactive?: string;
    }>;
  };
  services: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: Array<{ title: string; description: string }>;
  };
  about: {
    title: string;
    p1Role: string;
    p1Tail: string;
    p1Years: string;
    p1End: string;
    p2Lead: string;
    p2Consulting: string;
    p2Middle: string;
    p2Product: string;
    p2Tail: string;
    p3: string;
    statsYears: string;
    statsProducts: string;
    statsLanguages: string;
  };
  contact: {
    title: string;
    body: string;
  };
  footer: {
    legal: string;
  };
  legalPage: {
    title: string;
    editorTitle: string;
    editorIntro: (name: string, brand: string) => string;
    hostTitle: string;
    ipTitle: string;
    ipBody: string;
    dataTitle: string;
    dataBody: string;
    cookiesTitle: string;
    cookiesBody: string;
    lawTitle: string;
    lawBody: string;
    director: string;
  };
};

export const ui: Record<Lang, UI> = {
  en: {
    header: { products: 'Products', services: 'Services', about: 'About', contact: 'Get in touch' },
    hero: {
      badge: 'Available for senior consulting & AI engineering',
      titleLine1: 'Senior IT consulting',
      titleLine2: '& AI-native apps.',
      descIntro: 'Kaestria is the consulting and product studio of',
      descRest:
        '. 15+ years of shipping software, now focused on building real AI products — and helping teams do the same.',
      signature: 'Seasoned IT meets AI velocity. Shipping from the Indian Ocean.',
      ctaPrimary: 'Start a project',
      ctaSecondary: 'See products',
    },
    products: {
      sectionTitle: 'Apps shipping today, more on the way.',
      sectionSubtitle: 'A growing portfolio of AI-native products across two verticals.',
      groupWellness: 'Wellness',
      groupWellnessTag: '/wellness · 1 product',
      groupEcommerce: 'E-commerce',
      groupEcommerceTag: '/e-commerce · 4 products',
      badges: { new: 'New', live: 'Live', inReview: 'In review', soon: 'Soon' },
      items: [
        {
          tag: 'Mobile · iOS & Android',
          description:
            'AI-powered supplement scheduler. Scan barcodes or label photos, get personalized timing recommendations based on your daily routine, and never miss a dose.',
          badgeKey: 'new',
          cta: 'View on Google Play',
        },
        {
          tag: 'Web · SaaS',
          description:
            'AI-driven Shopify SEO automation. Bulk-generate meta tags, audit your store, and predict ranking impact before pushing changes.',
          badgeKey: 'live',
          cta: 'Visit rankingrider.com',
        },
        {
          tag: 'Shopify App',
          description:
            'Same AI SEO power, deeply integrated into your Shopify admin. Optimize products in bulk without leaving your store.',
          badgeKey: 'live',
          cta: 'View on Shopify App Store',
        },
        {
          tag: 'Wix App',
          description: 'Wix store SEO automation, built on the same AI engine. In review on Wix App Market.',
          badgeKey: 'inReview',
          cta: '',
          ctaInactive: 'Coming soon',
        },
        {
          tag: 'BigCommerce App',
          description: 'The same SEO automation toolkit, extending to BigCommerce stores.',
          badgeKey: 'soon',
          cta: '',
          ctaInactive: 'Coming Q3 2026',
        },
      ],
    },
    services: {
      sectionTitle: 'Practical AI expertise, senior delivery.',
      sectionSubtitle: "Most AI projects don't ship. I help yours actually does.",
      items: [
        {
          title: 'AI Training & Workshops',
          description:
            'Hands-on workshops on Claude, GPT, and production LLM patterns. From prompt engineering basics to agent orchestration. Tailored for engineering teams and product leads.',
        },
        {
          title: 'Vibe Coding',
          description:
            'AI-assisted development with Claude Code. I show your team how to ship features 5–10× faster by partnering with AI instead of fighting it. Real codebase, real velocity.',
        },
        {
          title: 'Automation Deployment',
          description:
            'Self-hosted N8N workflows, OpenClaw agent runtimes, and custom Docker stacks deployed on your infrastructure. Own your automation, no SaaS lock-in.',
        },
        {
          title: 'Senior IT Consulting',
          description:
            '15+ years across architecture, DevOps, cloud, and product delivery. From technical due diligence to scaling decisions, I bring senior judgment when it matters most.',
        },
      ],
    },
    about: {
      title: "Hi, I'm Arthur.",
      p1Role: 'Senior IT Project Manager & AI Engineer',
      p1Tail: ' with ',
      p1Years: '15+ years',
      p1End: ' of experience shipping software across startups, scale-ups, and large organizations.',
      p2Lead: 'I run Kaestria — a one-person studio combining ',
      p2Consulting: 'consulting',
      p2Middle: ' (where I help teams adopt AI without breaking what works) and ',
      p2Product: 'product engineering',
      p2Tail: ' (where I build AI-native apps end to end — code, design, ops, distribution).',
      p3: 'Generalist by training, AI expert by current practice. I speak English · Français · Polski and operate remote-first from Reunion Island.',
      statsYears: 'Years XP',
      statsProducts: 'Products shipped',
      statsLanguages: 'Languages',
    },
    contact: {
      title: "Let's build something together.",
      body: 'Have an AI project in mind? Need senior eyes on your architecture? Want a workshop for your team? Drop a line — I read every message.',
    },
    footer: { legal: 'Legal notice' },
    legalPage: {
      title: 'Legal notice',
      editorTitle: 'Website editor',
      editorIntro: (name, brand) => `${name} — operating under the trade name ${brand}.`,
      hostTitle: 'Hosting',
      ipTitle: 'Intellectual property',
      ipBody:
        "All content on this site (text, graphics, logos, icons, images) is the exclusive property of Kaestria unless otherwise stated. Any reproduction, distribution, modification or use without prior written authorisation is prohibited.",
      dataTitle: 'Personal data',
      dataBody:
        'This website does not collect any personal data directly. Privacy policies specific to Kaestria products are available individually.',
      cookiesTitle: 'Cookies',
      cookiesBody: 'This website uses no tracking cookies or third-party analytics.',
      lawTitle: 'Applicable law',
      lawBody:
        'This legal notice is governed by French law. Any dispute shall fall under the exclusive jurisdiction of French courts.',
      director: 'Publication director',
    },
  },
  fr: {
    header: { products: 'Produits', services: 'Services', about: 'À propos', contact: 'Me contacter' },
    hero: {
      badge: 'Disponible pour conseil senior & ingénierie IA',
      titleLine1: 'Conseil IT senior',
      titleLine2: '& apps AI-native.',
      descIntro: 'Kaestria est le studio de conseil et de produits d\'',
      descRest:
        '. 15+ années à livrer du logiciel, maintenant focalisé sur construire de vrais produits IA — et aider les équipes à faire de même.',
      signature: 'L\'expertise IT rencontre la vélocité IA. Livré depuis l\'Océan Indien.',
      ctaPrimary: 'Démarrer un projet',
      ctaSecondary: 'Voir les produits',
    },
    products: {
      sectionTitle: 'Des apps en production, et d\'autres en route.',
      sectionSubtitle: 'Un portfolio croissant de produits AI-native sur deux verticales.',
      groupWellness: 'Bien-être',
      groupWellnessTag: '/wellness · 1 produit',
      groupEcommerce: 'E-commerce',
      groupEcommerceTag: '/e-commerce · 4 produits',
      badges: { new: 'Nouveau', live: 'En ligne', inReview: 'En review', soon: 'Bientôt' },
      items: [
        {
          tag: 'Mobile · iOS & Android',
          description:
            'Planificateur de suppléments propulsé par l\'IA. Scannez le code-barres ou photographiez l\'étiquette, obtenez des recommandations de timing personnalisées selon votre routine quotidienne, et ne ratez plus jamais une prise.',
          badgeKey: 'new',
          cta: 'Voir sur Google Play',
        },
        {
          tag: 'Web · SaaS',
          description:
            'Automatisation SEO Shopify pilotée par l\'IA. Génération en bulk de meta tags, audit de boutique, et prédiction d\'impact SEO avant chaque push.',
          badgeKey: 'live',
          cta: 'Visiter rankingrider.com',
        },
        {
          tag: 'Shopify App',
          description:
            'La même puissance SEO IA, profondément intégrée à votre admin Shopify. Optimisez vos produits en bulk sans quitter votre boutique.',
          badgeKey: 'live',
          cta: 'Voir sur Shopify App Store',
        },
        {
          tag: 'Wix App',
          description: 'Automatisation SEO Wix, basée sur le même moteur IA. En cours de review sur Wix App Market.',
          badgeKey: 'inReview',
          cta: '',
          ctaInactive: 'Bientôt disponible',
        },
        {
          tag: 'BigCommerce App',
          description: 'La même boîte à outils SEO, étendue aux boutiques BigCommerce.',
          badgeKey: 'soon',
          cta: '',
          ctaInactive: 'Bientôt — T3 2026',
        },
      ],
    },
    services: {
      sectionTitle: 'Expertise IA pragmatique, livraison senior.',
      sectionSubtitle: 'La plupart des projets IA ne sortent jamais. J\'aide à ce que les vôtres soient livrés.',
      items: [
        {
          title: 'Formation IA & Workshops',
          description:
            'Ateliers pratiques sur Claude, GPT et les patterns LLM en production. Du prompt engineering aux agents orchestrés. Adapté aux équipes tech et product.',
        },
        {
          title: 'Vibe Coding',
          description:
            'Développement assisté par l\'IA avec Claude Code. Je montre à votre équipe comment livrer des features 5 à 10× plus vite en collaborant avec l\'IA au lieu de la combattre.',
        },
        {
          title: 'Déploiement d\'automatisations',
          description:
            'Workflows N8N self-hosted, runtimes d\'agents OpenClaw, et stacks Docker custom déployées sur votre infra. Maîtrisez votre automatisation, sans lock-in SaaS.',
        },
        {
          title: 'Conseil IT senior',
          description:
            '15+ années sur l\'architecture, le DevOps, le cloud et la livraison produit. De l\'audit technique aux décisions de scaling, j\'apporte un regard senior quand ça compte vraiment.',
        },
      ],
    },
    about: {
      title: 'Bonjour, je suis Arthur.',
      p1Role: 'Senior IT Project Manager & AI Engineer',
      p1Tail: ' avec ',
      p1Years: '15+ ans',
      p1End: " d'expérience à livrer du logiciel pour des startups, scale-ups et grands groupes.",
      p2Lead: 'Je dirige Kaestria — un studio solo combinant ',
      p2Consulting: 'conseil',
      p2Middle: ' (j\'aide les équipes à adopter l\'IA sans casser ce qui marche) et ',
      p2Product: 'ingénierie produit',
      p2Tail: ' (je construis des apps AI-native de bout en bout — code, design, ops, distribution).',
      p3: 'Généraliste de formation, expert IA dans la pratique actuelle. Je parle English · Français · Polski et travaille en remote-first depuis La Réunion.',
      statsYears: 'Années d\'XP',
      statsProducts: 'Produits livrés',
      statsLanguages: 'Langues',
    },
    contact: {
      title: 'Construisons quelque chose ensemble.',
      body: 'Un projet IA en tête ? Besoin d\'un regard senior sur votre archi ? Un workshop pour votre équipe ? Écrivez-moi — je lis chaque message.',
    },
    footer: { legal: 'Mentions légales' },
    legalPage: {
      title: 'Mentions légales',
      editorTitle: 'Éditeur du site',
      editorIntro: (name, brand) => `${name} — exerçant sous le nom commercial ${brand}.`,
      hostTitle: 'Hébergement',
      ipTitle: 'Propriété intellectuelle',
      ipBody:
        "L'ensemble du contenu de ce site (textes, graphismes, logos, icônes, images) est la propriété exclusive de Kaestria, sauf mention contraire. Toute reproduction, distribution, modification ou utilisation sans autorisation écrite préalable est interdite.",
      dataTitle: 'Données personnelles',
      dataBody:
        'Ce site ne collecte aucune donnée personnelle directement. Les politiques de confidentialité spécifiques aux produits Kaestria sont disponibles individuellement.',
      cookiesTitle: 'Cookies',
      cookiesBody: "Ce site n'utilise pas de cookies de suivi ni d'analytique tiers.",
      lawTitle: 'Loi applicable',
      lawBody:
        'Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.',
      director: 'Directeur de la publication',
    },
  },
};

export function getT(lang: Lang): UI {
  return ui[lang];
}

export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (segment === 'fr') return 'fr';
  return defaultLang;
}

export function altLangUrl(currentPath: string, currentLang: Lang): string {
  if (currentLang === 'en') {
    if (currentPath === '/' || currentPath === '') return '/fr/';
    return `/fr${currentPath.endsWith('/') ? currentPath : currentPath + '/'}`;
  }
  // currentLang === 'fr'
  const stripped = currentPath.replace(/^\/fr/, '') || '/';
  return stripped;
}
