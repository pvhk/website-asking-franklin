import type { SiteContent } from './types';

export const frContent: SiteContent = {
  siteName: 'Asking Franklin',
  siteDescription: 'Assistant IA SEO pour rédiger du contenu optimisé pour Google et les moteurs IA',

  nav: {
    home: 'Accueil',
    pricing: 'Tarifs',
    blog: 'Blog',
    knowledge: 'Knowledge Base',
    laDepeche: 'La Dépêche',
    cta: "J'essaye gratuitement",
  },

  home: {
    meta: {
      title: 'Asking Franklin - Le meilleur assistant IA SEO pour du contenu qui ranke',
      description: "Asking Franklin est l'assistant IA SEO qui analyse les intentions de recherche de vos clients, détecte les opportunités inexploitées et rédige du contenu optimisé pour ranker sur Google et les IA génératives. Essai gratuit 7 jours.",
    },
    hero: {
      title: 'L\'assistant IA SEO qui booste votre trafic SEO & GEO',
      subtitle: "Vous passez des heures à créer du contenu... sans générer le trafic que vous méritez ? Asking Franklin est l'assistant IA SEO qui analyse ce que cherchent vos clients et crée du contenu optimisé pour Google et les moteurs IA génératifs comme ChatGPT, Perplexity et Gemini.",
      cta: "Je teste gratuitement",
    },
    testimonials: {
      title: 'Ils utilisent Asking Franklin et ils adorent',
      anchor: 'temoignages',
      items: [
        {
          name: 'Quentin BARJON',
          role: 'CMO JDC SA',
          company: 'JDC SA',
          content: "Asking Franklin est vite devenu un incontournable pour notre stratégie SEO. L'outil est simple, clair et hyper pratique : il analyse tes mots-clés, les prend en compte et rédige pour toi des contenus optimisés et structurés. Un vrai gain de temps au quotidien.",
          rating: 5,
          image: 'quentin-barjon',
        },
        {
          name: 'Marlet KERVOLIN',
          role: 'CEO Agence MEMORI',
          company: 'Agence MEMORI',
          content: "Asking Franklin est parfait pour gagner du temps sur sa rédaction d'article de blog. Je n'ai plus besoin de passer des heures pour obtenir des articles qualitatifs, l'IA me permet d'avoir un texte cohérent et pertinent quant à ma niche, bien plus rapidement. L'outil m'aide également pour la recherche de mots clés donc je sais que j'écris sur des sujets que ma cible recherche.",
          rating: 5,
          image: 'marlet-kervolin',
        },
        {
          name: 'Benoit GAILLAT',
          role: 'CEO Agence Pikka',
          company: 'Agence Pikka',
          content: "L'outil Asking Franklin est un véritable assistant qui m'aide à rédiger du contenu de qualité et qui rank. Avoir la possibilité de lui fournir des instructions précises sur mes cibles et mon contexte est vraiment game-changer pour moi !",
          rating: 5,
          image: 'benoit-gaillat',
        },
      ],
    },
    blog: {
      title: 'Les derniers articles du blog',
      anchor: 'blog',
      items: [
        {
          title: 'Top 10 des techniques de rédaction web incontournables en 2025',
          excerpt: 'Découvrez les 10 techniques essentielles pour créer du contenu web performant et engageant en 2025.',
          image: 'top-10-techniques-redaction-web',
          url: 'https://blog.askingfranklin.com/top-10-des-techniques-de-redaction-web-incontournables-2025/',
          date: '11 octobre 2025',
        },
        {
          title: '3 secrets pour devenir un excellent rédacteur en 2025',
          excerpt: 'Les clés essentielles pour développer vos compétences en rédaction web et vous démarquer.',
          image: '3-secrets-excellent-redacteur',
          url: 'https://blog.askingfranklin.com/3-secrets-pour-devenir-un-excellent-redacteur/',
          date: '25 août 2025',
        },
        {
          title: '3 étapes simples pour un contenu qui engage et convertit votre audience',
          excerpt: 'Apprenez à créer du contenu captivant qui transforme vos visiteurs en clients fidèles.',
          image: '3-etapes-contenu-engage',
          url: 'https://blog.askingfranklin.com/3-etapes-simples-pour-un-contenu-qui-engage-et-convertit-votre-audience/',
          date: '17 novembre 2021',
        },
      ],
      cta: 'Voir tous les articles',
    },
    howItWorks: {
      title: 'Ok, concrètement comment ça marche ?',
      subtitle: 'Asking Franklin, votre assistant IA SEO, booste la visibilité de vos contenus en combinant analyse des intentions de recherche, des SERPs, de la concurrence et optimisation SEO & GEO pour ranker dans les LLMs ET Google.',
      anchor: 'comment-ca-marche',
      features: [
        {
          icon: 'Search',
          title: "Analyse d'intention de recherche en temps réel",
          description: "Découvrez exactement ce que cherchent vos clients pour écrire juste !",
        },
        {
          icon: 'Sparkles',
          title: 'Optimisation multi-LLMs',
          description: "Devenez les sources incontournables pour ChatGPT, Claude, Perplexity, Gemini...",
        },
        {
          icon: 'Zap',
          title: 'Génération ultra rapide',
          description: "Économisez 66% de votre temps en laissant Asking Franklin rédiger pour vous !",
        },
        {
          icon: 'MessageSquare',
          title: 'Un assistant pré-entraîné pour vous',
          description: "Une partie du contenu génère ne vous convient pas ? Vous souhaitez donner vos experts instructions, apporter des modifications, approfondir ? Dites le et Franklin notera là l'adaptera.",
        },
        {
          icon: 'TrendingUp',
          title: 'Optimisations SEO',
          description: "Optimisation E-E-A-T, structure sémantique et balisage technique pour maximiser votre visibilité.",
        },
      ],
      steps: [
        {
          number: '1',
          title: "Découvrez de nouvelles opportunités pour ranker",
          description: 'Votre assistant IA suggère automatiquement les meilleurs mots-clés pour lesquels votre site web devrait être indexé. En fonction de votre site, de vos concurrents et de vos objectifs.',
          image: 'Step0-Keywords-opportunities',
          cta: 'Découvrez vos opportunités',
          ctaUrl: 'https://app.askingfranklin.com/register',
        },
        {
          number: '2',
          title: "Tapez le mot-clé que vous avez choisi",
          description: 'Asking Franklin ira chercher toutes les questions, les recherches et sujets connexes en relation avec ce dernier. Incontournable pour optimiser votre création de contenu, de produits et de services en vous basant sur ce que veulent vos clients.',
          image: 'step1-keyword',
          cta: "J'essaye gratuitement",
          ctaUrl: 'https://app.askingfranklin.com/register',
        },
        {
          number: '3',
          title: 'Asking Franklin analyse le top de la SERP',
          description: 'Rien de tel que des concurrents mieux positionnés sur le mot-clé choisi pour déterminer des opportunités seo et s\'en saisir pour rédiger des contenus qui convertissent ! Franklin, votre assistant IA de rédaction s\'en charge pour vous.',
          image: 'step2-serp',
        },
        {
          number: '4',
          title: 'Asking Franklin vous rédige un plan d\'article SEO optimisé',
          description: 'Basé vraiment sur l\'analyse de l\'intention de recherche puis des meilleurs contenus du top de la Serp, Asking Franklin vous rédige un plan d\'article complet et détaillé. Ce même plan est basé sur l\'analyse des résultats de recherche, des formats et de la sémantique des contenus positionnés. L\'IA identifie ensuite des opportunités sous-exploitées pour produire un plan optimisé.',
          image: 'step3-plan',
        },
        {
          number: '5',
          title: 'Asking Franklin génère votre article optimisé SEO et GEO',
          description: 'A partir du plan d\'article, Franklin rédige automatiquement vos contenus en prenant en compte vos retours et les optimisations nécessaires pour se positionner. Vous préférez rédiger vous-même certaines parties, rajouter des sources, développer certains paragraphes ? Demandez le à Franklin.',
          image: 'step4-article',
          cta: 'Je laisse Franklin écrire mon prochain article',
          ctaUrl: 'https://app.askingfranklin.com/register',
        },
      ],
    },
    faq: {
      title: 'Vous avez des questions ? On a les réponses !',
      anchor: 'faq',
      items: [
        {
          question: "Qu'est-ce qu'un assistant IA SEO comme Asking Franklin ?",
          answer: "Asking Franklin est un assistant IA SEO qui combine intelligence artificielle et analyse des moteurs de recherche pour vous aider à créer du contenu optimisé. L'outil analyse les intentions de recherche, les SERPs, la concurrence, et rédige des articles optimisés pour Google et les moteurs IA génératifs comme ChatGPT, Perplexity et Gemini.",
        },
        {
          question: "Est-ce que je peux utiliser l'assistant IA SEO gratuitement ?",
          answer: "Oui, vous pouvez créer un compte pour tester l'assistant IA SEO Asking Franklin gratuitement durant 7 jours, sans carte bancaire requise.",
        },
        {
          question: "Est-ce qu'Asking Franklin peut me servir même si je ne suis pas inspiré ou doué en rédaction ?",
          answer: "C'est justement un des points forts de cet assistant IA SEO. Tapez simplement le mot-clé sur lequel vous voulez rédiger du contenu, et Asking Franklin analysera tout ce que recherchent les internautes à ce sujet : volumes de recherche, concurrence, mots-clés associés et intentions de recherche.",
        },
        {
          question: "Pourquoi Asking Franklin est-il différent des autres outils de rédaction de contenu assistés par IA ?",
          answer: "L'une des principales forces de cet assistant IA SEO réside dans sa capacité conversationnelle. Vous pouvez apporter votre expertise sur le sujet à n'importe quelle étape de la création de votre contenu. Donner des instructions précises, des détails sur vos cibles, le ton à adopter… Asking Franklin en tiendra compte et apprendra au fur et à mesure.",
        },
        {
          question: 'Est-ce que les contenus générés par un assistant IA SEO sont pénalisés par Google ?',
          answer: "Non, un contenu généré par IA n'est pas pénalisé par défaut par Google si ce dernier apporte une réelle expertise et des informations vérifiées. L'assistant IA SEO Asking Franklin intègre des optimisations E-E-A-T (Expérience, Expertise, Autorité, Fiabilité) pour garantir la qualité et le positionnement de vos contenus.",
        },
        {
          question: "Qu'est-ce qui différencie Asking Franklin des autres outils de rédaction automatisée par l'IA ?",
          answer: "Asking Franklin est un assistant IA SEO complet qui va au-delà de la simple génération de texte. Il peut automatiser la création de vos contenus tout en combinant analyse SERP, détection d'intention de recherche, et optimisation SEO & GEO. L'IA seule a ses limites, c'est pourquoi vous gardez toujours la plume sur vos contenus. Franklin devient un vrai assistant qui puise dans vos connaissances et instructions pour répondre à vos besoins d'écriture.",
        },
      ],
    },
  },

  knowledgeBase: {
    meta: {
      title: 'Knowledge Base - Asking Franklin',
      description: 'Apprenez à maîtriser la création de contenu SEO avec Asking Franklin. Guides, tutoriels et meilleures pratiques.',
    },
    title: 'Knowledge Base',
    subtitle: 'Tout ce que vous devez savoir pour maîtriser la création de contenu SEO avec Asking Franklin.',
    articles: [
      {
        slug: 'getting-started-with-asking-franklin',
        title: 'Débuter avec Asking Franklin',
        excerpt: 'Apprenez les bases de l\'utilisation d\'Asking Franklin pour créer du contenu optimisé SEO qui se positionne dans Google et devient une référence pour les assistants IA.',
        category: 'Démarrage',
        date: '1 décembre 2025',
        readTime: '5 min de lecture',
      },
      {
        slug: 'how-to-connect-wordpress-to-asking-franklin',
        title: 'Comment Connecter WordPress à Asking Franklin',
        excerpt: 'Guide étape par étape pour connecter votre site WordPress à Asking Franklin pour une publication de contenu fluide. Apprenez à configurer les mots de passe d\'application et intégrer votre site.',
        category: 'Tutoriels',
        date: '1 décembre 2025',
        readTime: '3 min de lecture',
      },
    ],
  },

  features: {
    optimizedContent: {
      meta: {
        title: 'Rédigez du contenu optimisé - SEO & GEO | Asking Franklin',
        description: 'Créez du contenu qui se positionne sur Google ET qui est cité par les assistants IA comme ChatGPT, Perplexity et Gemini. Optimisation SEO et GEO par IA.',
      },
      label: 'Optimisation SEO & GEO',
      title: 'Rédigez du contenu qui se positionne partout',
      subtitle: "Créez des articles optimisés pour les moteurs de recherche traditionnels (SEO) et les moteurs d'IA générative (GEO). Votre contenu devient une source de référence pour Google, ChatGPT, Perplexity, Claude et Gemini.",
      sections: [
        {
          icon: 'Search',
          title: 'Analyse SERP des 10 premiers concurrents',
          description: 'Franklin analyse automatiquement les 10 pages les mieux positionnées pour votre mot-clé. Il extrait leur structure, longueur de contenu, titres et patterns sémantiques pour comprendre exactement ce que Google récompense.',
        },
        {
          icon: 'Target',
          title: "Détection de l'intention de recherche",
          description: "Comprenez si les utilisateurs cherchent des informations, comparent des produits ou sont prêts à acheter. Franklin identifie l'intention de recherche principale et structure votre contenu pour correspondre aux attentes des utilisateurs.",
        },
        {
          icon: 'BarChart3',
          title: 'Score SEO en temps réel',
          description: "Obtenez un feedback instantané sur 8 métriques SEO clés pendant que vous écrivez : nombre de mots, structure des titres, densité de mots-clés, liens internes, placement des mots-clés dans H1/H2, et plus. Regardez votre score s'améliorer en temps réel.",
        },
        {
          icon: 'Sparkles',
          title: 'Génération de contenu par IA',
          description: "Du mot-clé à l'article publié en quelques minutes. Franklin génère un plan de contenu détaillé basé sur l'analyse SERP, puis rédige du contenu optimisé SEO avec une hiérarchie de titres appropriée et des mots-clés sémantiques.",
        },
        {
          icon: 'MessageSquare',
          title: 'Éditeur IA conversationnel',
          description: "Éditez votre contenu par conversation naturelle. Demandez à Franklin de développer une section, changer le ton, ajouter des exemples ou réécrire des paragraphes. Votre expertise combinée à l'efficacité de l'IA.",
        },
        {
          icon: 'FileText',
          title: 'Génération de balises meta',
          description: "Générez automatiquement des titres et descriptions meta optimisés qui génèrent des clics. Franklin suit les meilleures pratiques SEO pour les limites de caractères et le placement des mots-clés.",
        },
        {
          icon: 'Palette',
          title: 'Ton de voix personnalisé',
          description: "Définissez la voix de votre marque et Franklin s'adapte. Qu'il soit formel, conversationnel, technique ou amical—votre contenu reste cohérent avec l'identité de votre marque.",
        },
        {
          icon: 'Globe',
          title: 'Support multilingue',
          description: "Créez du contenu optimisé dans plusieurs langues. Franklin adapte les stratégies SEO pour différents marchés et comportements de recherche.",
        },
      ],
      cta: {
        title: 'Commencez à écrire du contenu qui se positionne',
        description: 'Rejoignez des milliers de marketeurs qui créent du contenu optimisé SEO avec Franklin.',
        button: 'Essayer gratuitement 7 jours',
      },
      faq: {
        title: 'FAQ - Contenu optimisé SEO & GEO',
        items: [
          {
            question: "Comment Asking Franklin optimise-t-il le contenu pour le SEO et le GEO ?",
            answer: "Asking Franklin combine l'analyse SERP des 10 premiers résultats Google avec l'optimisation GEO (Generative Engine Optimization). L'outil analyse la structure, la longueur et les patterns sémantiques des contenus les mieux positionnés, puis génère des articles optimisés pour être à la fois bien classés sur Google et cités par les IA génératives comme ChatGPT, Perplexity et Gemini.",
          },
          {
            question: "Combien de temps faut-il pour générer un article optimisé avec Asking Franklin ?",
            answer: "Le processus complet — de l'analyse de l'intention de recherche à la génération du contenu optimisé SEO — prend entre 2 et 8 minutes. Vous pouvez ensuite personnaliser le contenu via l'Assistant Franklin conversationnel pour ajouter votre expertise métier.",
          },
          {
            question: "Asking Franklin est-il compatible avec WordPress ?",
            answer: "Oui, Asking Franklin s'intègre directement avec WordPress. Vous pouvez exporter vos articles en un clic avec un formatage parfait, en conservant toutes les balises SEO, la structure HTML, les titres, listes et liens internes.",
          },
          {
            question: "L'IA d'Asking Franklin génère-t-elle du contenu unique ?",
            answer: "Oui, chaque article généré par Asking Franklin est 100% unique et sans plagiat. L'IA s'appuie sur l'analyse SERP et vos instructions pour créer du contenu original qui respecte votre charte éditoriale et votre ton de voix.",
          },
          {
            question: "Qu'est-ce que le score SEO en temps réel ?",
            answer: "Le score SEO en temps réel évalue votre contenu sur 8 métriques clés pendant que vous écrivez : nombre de mots, structure des titres (H1/H2), densité de mots-clés, liens internes, placement des mots-clés et plus. Le score s'actualise instantanément pour vous guider vers un contenu parfaitement optimisé.",
          },
        ],
      },
    },
    dataInsights: {
      meta: {
        title: 'Prenez des décisions basées sur les données | Asking Franklin',
        description: 'Accédez à des analytics SEO complets, métriques de mots-clés, suivi de positionnement et données de performance AI Overview pour prendre des décisions éclairées.',
      },
      label: 'Analytics & Insights',
      title: 'Prenez des décisions basées sur les données',
      subtitle: "Arrêtez de deviner. Accédez à des analytics SEO complets, suivez vos positions dans la recherche traditionnelle ET les AI Overviews, et découvrez des opportunités de mots-clés inexploitées avec des insights data-driven.",
      sections: [
        {
          icon: 'TrendingUp',
          title: 'Valeur estimée du trafic (ETV)',
          description: "Visualisez la valeur monétaire réelle de votre trafic organique. Suivez l'ETV sur tous vos mots-clés et pages positionnés pour comprendre quel contenu génère le plus d'impact business.",
        },
        {
          icon: 'BarChart3',
          title: 'Suivi de position & Buckets',
          description: 'Surveillez vos classements à travers 12 buckets de position (Top 1, 2-3, 4-10, et au-delà). Suivez les mouvements semaine après semaine : nouveaux classements, améliorations, baisses et positions perdues.',
        },
        {
          icon: 'Sparkles',
          title: 'Performance AI Overview',
          description: "Suivez votre présence dans les AI Overviews de Google séparément des classements organiques. Comprenez où votre contenu est cité par les résumés IA—une source de trafic croissante souvent négligée.",
        },
        {
          icon: 'Users',
          title: "Démographie de l'audience",
          description: "Sachez qui recherche vos mots-clés. Accédez à la répartition par genre et par tranche d'âge (18-24, 25-34, 35-44, 45-54, 55-64) pour aligner votre contenu avec votre audience réelle.",
        },
        {
          icon: 'Search',
          title: 'Intelligence mots-clés',
          description: "Obtenez des métriques complètes pour chaque mot-clé : volume de recherche, score de difficulté, niveau de concurrence, CPC, et notre Score d'Opportunité propriétaire qui équilibre potentiel et effort.",
        },
        {
          icon: 'Lightbulb',
          title: 'Recommandations de mots-clés intelligentes',
          description: "Franklin suggère des mots-clés adaptés à votre domaine avec des scores de pertinence et un potentiel ETV attendu. Arrêtez de perdre du temps sur des mots-clés qui ne font pas avancer les choses.",
        },
        {
          icon: 'PieChart',
          title: "Distribution de l'intention de recherche",
          description: "Visualisez comment votre portefeuille de mots-clés se répartit par intention : informationnelle, commerciale, transactionnelle et navigationnelle. Équilibrez votre stratégie de contenu en conséquence.",
        },
        {
          icon: 'History',
          title: 'Analyse des tendances historiques',
          description: "Suivez votre progression SEO dans le temps avec des snapshots mensuels. Voyez comment votre autorité de domaine, valeur de trafic et classements évoluent. Identifiez ce qui fonctionne et doublez la mise.",
        },
      ],
      cta: {
        title: 'Débloquez vos données SEO',
        description: 'Prenez chaque décision de contenu appuyée par des données réelles.',
        button: 'Commencer votre essai gratuit',
      },
      faq: {
        title: 'FAQ - Données & Insights SEO',
        items: [
          {
            question: "Quelles métriques SEO Asking Franklin fournit-il ?",
            answer: "Asking Franklin fournit plus de 100 métriques par domaine et 50 données par mot-clé, incluant : volume de recherche, score de difficulté, CPC, niveau de concurrence, Score d'Opportunité propriétaire, valeur estimée du trafic (ETV), distribution d'intention de recherche, et suivi de position sur 12 buckets (Top 1, 2-3, 4-10, etc.).",
          },
          {
            question: "Comment fonctionne le suivi de position sur 12 buckets ?",
            answer: "Le suivi de position répartit vos classements Google dans 12 tranches : Top 1, 2-3, 4-10, 11-20, 21-30, 31-40, 41-50, 51-60, 61-70, 71-80, 81-90, et 91-100. Chaque semaine, vous voyez les gains, les pertes, les nouvelles positions et les positions perdues pour chaque bucket.",
          },
          {
            question: "Asking Franklin suit-il les AI Overviews de Google ?",
            answer: "Oui, Asking Franklin suit séparément votre présence dans les AI Overviews de Google (anciennement SGE) en plus des classements organiques traditionnels. Cette fonctionnalité vous permet d'identifier où votre contenu est cité par les résumés IA — une source de trafic en forte croissance.",
          },
          {
            question: "Comment le Score d'Opportunité est-il calculé ?",
            answer: "Le Score d'Opportunité est un indicateur propriétaire qui équilibre le potentiel de trafic d'un mot-clé (volume de recherche, ETV) avec l'effort nécessaire pour se positionner (difficulté, concurrence). Plus le score est élevé, plus le rapport bénéfice/effort est favorable.",
          },
        ],
      },
    },
    autopilot: {
      meta: {
        title: 'Autopilot - Génération de contenu automatisée | Asking Franklin',
        description: 'Bientôt disponible : Génération et publication de contenu entièrement automatisées. Définissez votre stratégie et laissez Franklin gérer le reste.',
      },
      label: 'Bientôt disponible',
      title: 'Mettez votre contenu en autopilot',
      subtitle: "Définissez votre stratégie de contenu une fois, et laissez Franklin gérer l'exécution. Découverte automatique de mots-clés, génération de contenu et publication—tout cela pendant que vous vous concentrez sur ce qui compte vraiment.",
      features: [
        'Génération de contenu programmée basée sur votre stratégie de mots-clés',
        'Publication automatique sur WordPress avec formatage parfait',
        'Calendrier de contenu intelligent avec horaires de publication optimaux',
        'Suggestions de maillage interne automatisées',
        'Génération de contenu en masse pour les clusters de contenu',
        'Synchronisation automatique avec votre CMS pour un workflow fluide',
        'Recommandations de contenu basées sur la performance',
        'Rafraîchissement automatique du contenu pour les articles obsolètes',
      ],
      cta: {
        title: 'Soyez les premiers informés',
        description: 'Autopilot arrive bientôt. Obtenez un accès anticipé lors du lancement.',
        button: "Rejoindre la liste d'attente",
      },
      faq: {
        title: 'FAQ - Autopilot',
        items: [
          {
            question: "Quand la fonctionnalité Autopilot sera-t-elle disponible ?",
            answer: "Autopilot est actuellement en développement. Inscrivez-vous à la liste d'attente pour être parmi les premiers informés du lancement et bénéficier d'un accès anticipé.",
          },
          {
            question: "Que fera Autopilot concrètement ?",
            answer: "Autopilot automatisera l'ensemble du workflow de création de contenu : découverte de mots-clés, génération d'articles optimisés SEO, publication automatique sur WordPress, suggestions de maillage interne, et rafraîchissement automatique des contenus obsolètes.",
          },
          {
            question: "Autopilot remplacera-t-il le contrôle humain ?",
            answer: "Non, Autopilot est conçu pour automatiser les tâches répétitives tout en vous laissant le contrôle total sur la stratégie, la validation et la personnalisation. Vous définissez les paramètres et Franklin exécute selon vos critères.",
          },
        ],
      },
    },
  },

  pricing: {
    meta: {
      title: 'Tarifs - Asking Franklin',
      description: 'Choisissez le plan qui correspond à vos besoins de création de contenu. Tarification flexible pour particuliers et équipes.',
    },
    title: 'Des plans adaptés à chaque étape de votre croissance',
    subtitle: 'Solopreneurs, agences, TPE, PME, Grands comptes... vous trouverez forcément le plan qui vous correspond.',
    plans: [
      {
        name: 'Starter',
        price: '$49',
        priceAnnual: '$468',
        priceAnnualStrikethrough: '$588',
        period: '/mois',
        description: '600 crédits (Essayez gratuitement pendant 7 jours)',
        features: [
          '+ 15 articles / mois',
          '50 recherches mots-clés : volume, concurrence, mots-clés associés',
          'Interactions assistant IA Franklin illimitées',
          'Génération ultra rapide : article complet en <5 minutes',
          "Analyse d'intention de recherche temps réel",
          'Optimisation SEO de base (Balises, structure, sémantique)',
          "Plan d'article optimisé : structure basée sur l'analyse des meilleurs contenus positionnés",
          'Analyse SERP et concurrence : identification des opportunités SEO basée sur le Top 10',
          '1 domaine suivi',
          '1 utilisateur',
        ],
        cta: 'Commencer gratuitement',
      },
      {
        name: 'Pro',
        price: '$89',
        priceAnnual: '$864',
        priceAnnualStrikethrough: '$1068',
        period: '/mois',
        description: '2000 crédits (Essayez gratuitement pendant 7 jours)',
        features: [
          '+ 50 articles / mois',
          '200 recherches mots-clés : volume, concurrence, mots-clés associés',
          'Interactions assistant IA Franklin illimitées',
          'Génération ultra rapide : article complet en <5 minutes',
          "Analyse d'intention de recherche temps réel",
          'Optimisation SEO de base (Balises, structure, sémantique)',
          "Plan d'article optimisé : structure basée sur l'analyse des meilleurs contenus positionnés",
          'Analyse SERP et concurrence : identification des opportunités SEO basée sur le Top 10',
          '1 domaine suivi',
          '1 utilisateur',
        ],
        cta: 'Commencer gratuitement',
        highlighted: true,
      },
      {
        name: 'Entreprise',
        price: '$199',
        priceAnnual: '$1908',
        priceAnnualStrikethrough: '$2388',
        period: '/mois',
        description: '5000 Crédits (Essayez gratuitement pendant 7 jours)',
        features: [
          '+ 125 articles',
          '500 recherches mots-clés : volume, concurrence, mots-clés associés',
          'Interactions assistant IA Franklin illimitées',
          'Nouvelles fonctionnalités en avant-première 🚀',
          'Génération ultra rapide : article complet en <5 minutes',
          "Analyse d'intention de recherche temps réel",
          'Optimisation SEO de base (Balises, structure, sémantique)',
          "Plan d'article optimisé : structure basée sur l'analyse des meilleurs contenus positionnés",
          'Analyse SERP et concurrence : identification des opportunités SEO basée sur le Top 10',
          '2 domaines suivis',
          '2 utilisateurs',
        ],
        cta: 'Commencer gratuitement',
      },
    ],
    faq: {
      title: 'Questions Fréquemment Posées',
      items: [
        {
          question: "Qu'est-ce qu'Asking Franklin ?",
          answer: "Asking Franklin vous aide à trouver les bons mots-clés sans volume de recherche ou mot-clé, en s'intéressant aux positionnement sur les LLMs (= générer les articles cités dans les réponses de Google AI, ChatGPT, Perplexity...). L'outil combine analyse SEO, optimisation sémantique et structuration de contenu pour faire de vos articles des sources de références.",
        },
        {
          question: 'Combien coûte Asking Franklin ?',
          answer: "Asking Franklin propose 3 plans : Starter à 49$/mois (15 articles générés/mois), Pro à 89$/mois (50 articles générés/mois), et Entreprise à 199$/mois (125+ articles générés/mois).",
        },
        {
          question: 'Puis-je tester Asking Franklin gratuitement ?',
          answer: "Oui, vous avez accès à une période d'essai de 7 jours. Vous pouvez créer votre compte pour tester l'outil, sans carte bancaire demandée pour cette période d'essai.",
        },
        {
          question: "Qu'est-ce qu'un crédit chez Asking Franklin ?",
          answer: "Un crédit équivaut à une action effectuée. Générer un contenu coûte 40 crédits. D'autres actions comme l'analyse de recherche, estimer votre opportunité de positionner, générer un plan, éditer une introduction, générer des paragraphes, ou reformuler coûtent également quelques crédits. Vérification complète, optimisation SEO et EEAT consomment entre 1 et 3 crédits.",
        },
        {
          question: "Comment fonctionne l'optimisation LLM d'Asking Franklin",
          answer: "L'E-E-A-T (Expérience-Expertise-Autorité-Trustworthiness) est un signal de qualité déployé par Google dans ses lignes directrices SEO. Asking Franklin analyse votre contenu en profondeur pour identifier et intégrer les signaux E-E-A-T. L'outil examine les sources citées, le niveau d'expertise démontré, les preuves d'autorité, et la fiabilité générale. Ensuite, il suggère des optimisations pour renforcer ces dimensions : intégration de données vérifiées, ajout de références solides, amélioration de la crédibilité.",
        },
        {
          question: "Qu'est-ce que l'Assistant Franklin ?",
          answer: "L'Assistant Franklin est un agent intelligent conçu pour vous accompagner dans la création de vos contenus. Il permet d'ajouter votre expertise aux articles à chaque étape, dans une discussion fluide. L'outil s'adapte à vos instructions en apprenant au fur et à mesure, ajustant ton, style et structure. Ses plans rédactionnels s'affinent à partir de vos indications, et chaque content généré s'aligne sur vos objectifs business et votre audience.",
        },
        {
          question: 'Asking Franklin génère-t-il vraiment des articles en moins de 5 minutes ?',
          answer: "Oui, Le processus complet (analyse de l'intention + génération de contenu + SEO) s'effectue en 2 à 8 minutes. Vous pouvez ensuite personnaliser le contenu en collaborant avec l'Assistant Franklin qui, fort de votre expertise, vous aidera à approfondir les points techniques, intégrer vos retours d'expérience, ajuster le ton, ou détailler certaines parties.",
        },
        {
          question: 'Asking Franklin publie-t-il automatiquement sur WordPress ?',
          answer: "L'intégration WordPress permet d'exporter les articles en un clic vers votre site WordPress. L'export s'adapte aux formats et thèmes WordPress, conserve les balises SEO, et garde la structure HTML complète. Asking Franklin conserve également tous les éléments de mise en forme (titres, listes, liens internes, images...) pour une publication immédiate ou une relecture rapide dans votre éditeur WordPress.",
        },
        {
          question: "Comment Asking Franklin analyse-t-il l'intention de recherche ?",
          answer: "Asking Franklin analyse en temps réel l'intention derrière votre mot-clé de départ. Ses analyses s'appuient sur les données SERP, les volumes de recherche connexes, et les questions fréquentes des utilisateurs. Le contenu ainsi produit répond précisément à ce que cherchent vos cibles.",
        },
        {
          question: 'Asking Franklin remplace-t-il les rédacteurs humains ?',
          answer: "Non, Asking Franklin accélère la création de contenus sans remplacer les humains. L'outil vous assiste dans la personnalisation via l'Assistant Franklin en vous permettant de modifier chaque section générée. L'IA transforme votre expertise métier en contenu différencié, tout en vous permettant d'ajouter la touche humaine et unique qui fait la différence.",
        },
        {
          question: 'Asking Franklin fonctionne-t-il en plusieurs langues ?',
          answer: "Oui, Asking Franklin est optimisé pour le français avec un fort SEO français. Nous créons de l'anglais voir d'autres SERP, etc.",
        },
      ],
    },
  },

  freeTools: {
    googleSuggests: {
      meta: {
        title: 'Outil Google Suggests Gratuit - Trouvez les mots-cl\u00e9s recherch\u00e9s | Asking Franklin',
        description: 'D\u00e9couvrez ce que les internautes recherchent sur Google avec notre outil gratuit de suggestions de mots-cl\u00e9s. Questions, comparaisons, pr\u00e9positions et recherches associ\u00e9es.',
      },
      title: 'Outil Google Suggests Gratuit',
      subtitle: 'D\u00e9couvrez ce que les internautes recherchent sur Google. Entrez un mot-cl\u00e9 et obtenez des centaines de suggestions regroup\u00e9es par questions, comparaisons et plus.',
      placeholder: 'Entrez un mot-cl\u00e9 (ex: "marketing de contenu")',
      languageLabel: 'Langue',
      countryLabel: 'Pays',
      buttonLabel: 'Obtenir les suggestions',
      loadingLabel: 'Recherche en cours...',
      noResults: 'Aucune suggestion trouv\u00e9e pour ce mot-cl\u00e9. Essayez un autre mot-cl\u00e9.',
      errorMessage: 'Une erreur est survenue. Veuillez r\u00e9essayer dans un instant.',
      rateLimitMessage: 'Trop de requ\u00eates. Veuillez patienter avant de r\u00e9essayer.',
      sections: {
        questions: 'Questions',
        comparisons: 'Comparaisons',
        prepositions: 'Pr\u00e9positions',
        related: 'Recherches associ\u00e9es',
      },
      cta: {
        title: 'Transformez ces mots-cl\u00e9s en articles optimis\u00e9s SEO',
        description: "Asking Franklin analyse l'intention de recherche, vos concurrents, et r\u00e9dige du contenu qui se positionne sur Google et les moteurs IA.",
        button: "D\u00e9marrer l'essai gratuit",
      },
      faq: {
        title: 'Questions fr\u00e9quentes',
        items: [
          {
            question: "Qu'est-ce que Google Suggests ?",
            answer: "Google Suggests (ou Google Autocomplete) est une fonctionnalit\u00e9 qui pr\u00e9dit ce que vous recherchez pendant que vous tapez. Notre outil interroge l'autocompl\u00e9tion de Google pour des dizaines de variations de votre mot-cl\u00e9 afin de r\u00e9v\u00e9ler ce que les internautes recherchent r\u00e9ellement.",
          },
          {
            question: 'Cet outil est-il vraiment gratuit ?',
            answer: "Oui, cet outil est 100% gratuit et ne n\u00e9cessite aucun compte. Vous pouvez effectuer jusqu'\u00e0 5 recherches par minute.",
          },
          {
            question: 'Comment utiliser ces suggestions pour le SEO ?',
            answer: "Google Suggests r\u00e9v\u00e8le les vraies requ\u00eates des utilisateurs. Utilisez-les pour trouver des mots-cl\u00e9s longue tra\u00eene, comprendre l'intention de recherche, cr\u00e9er des sections FAQ, planifier du contenu de blog et d\u00e9couvrir les lacunes de contenu de vos concurrents.",
          },
          {
            question: 'Quelles langues et pays sont support\u00e9s ?',
            answer: "Nous supportons actuellement les suggestions en anglais et en fran\u00e7ais, avec des r\u00e9sultats localis\u00e9s pour les \u00c9tats-Unis, le Royaume-Uni, le Canada, l'Australie, la France, la Belgique, la Suisse et le Luxembourg.",
          },
          {
            question: 'Les r\u00e9sultats sont-ils \u00e0 jour ?',
            answer: "Les r\u00e9sultats sont mis en cache pendant 24 heures pour garantir des temps de r\u00e9ponse rapides. Les donn\u00e9es d'autocompl\u00e9tion Google sont r\u00e9guli\u00e8rement mises \u00e0 jour, vous verrez donc toujours les tendances r\u00e9centes.",
          },
        ],
      },
    },
    serpPreview: {
      meta: {
        title: "Outil d'Aper\u00e7u SERP Gratuit - V\u00e9rifiez vos Meta Tags | Asking Franklin",
        description: "Pr\u00e9visualisez l'apparence de votre page dans les r\u00e9sultats Google. V\u00e9rifiez la longueur du titre, de la description et le placement des mots-cl\u00e9s avec notre outil gratuit.",
      },
      title: "Outil d'Aper\u00e7u SERP Gratuit",
      subtitle: "Visualisez exactement comment votre page appara\u00eetra dans les r\u00e9sultats de recherche Google. V\u00e9rifiez votre titre, description et URL en temps r\u00e9el.",
      titleLabel: 'Meta Title',
      titlePlaceholder: 'Entrez le titre de votre page',
      descriptionLabel: 'Meta Description',
      descriptionPlaceholder: 'Entrez votre meta description',
      urlLabel: 'URL de la page',
      urlPlaceholder: 'https://www.exemple.fr/ma-page',
      keywordLabel: 'Mot-cl\u00e9 cible (optionnel)',
      keywordPlaceholder: 'ex: marketing de contenu',
      desktopTab: 'Bureau',
      mobileTab: 'Mobile',
      checks: {
        titleLength: 'Longueur du titre',
        titleLengthGood: 'Bonne longueur (30-60 caract\u00e8res)',
        titleLengthWarning: 'L\u00e9g\u00e8rement long (risque de troncature)',
        titleLengthBad: 'Trop court ou trop long',
        descLength: 'Longueur de la description',
        descLengthGood: 'Bonne longueur (120-160 caract\u00e8res)',
        descLengthWarning: 'L\u00e9g\u00e8rement courte ou longue',
        descLengthBad: 'Trop courte ou trop longue',
        keywordInTitle: 'Mot-cl\u00e9 dans le titre',
        keywordInTitleGood: 'Mot-cl\u00e9 trouv\u00e9 dans le titre',
        keywordInTitleBad: 'Mot-cl\u00e9 absent du titre',
        keywordInDesc: 'Mot-cl\u00e9 dans la description',
        keywordInDescGood: 'Mot-cl\u00e9 trouv\u00e9 dans la description',
        keywordInDescBad: 'Mot-cl\u00e9 absent de la description',
        keywordAtStart: 'Mot-cl\u00e9 au d\u00e9but du titre',
        keywordAtStartGood: 'Le mot-cl\u00e9 appara\u00eet dans la premi\u00e8re moiti\u00e9 du titre',
        keywordAtStartBad: 'Essayez de placer le mot-cl\u00e9 plus t\u00f4t dans le titre',
      },
      cta: {
        title: 'G\u00e9n\u00e9rez des meta tags parfaits automatiquement',
        description: "Asking Franklin g\u00e9n\u00e8re des meta titles et descriptions optimis\u00e9s pour chaque article, bas\u00e9s sur l'analyse SERP et l'intention de recherche.",
        button: "D\u00e9marrer l'essai gratuit",
      },
      faq: {
        title: 'Questions fr\u00e9quentes',
        items: [
          { question: 'Quelle est la longueur id\u00e9ale du meta title ?', answer: "Google affiche g\u00e9n\u00e9ralement les 50 \u00e0 60 premiers caract\u00e8res d'un titre. Visez 30 \u00e0 60 caract\u00e8res pour que votre titre complet soit visible dans les r\u00e9sultats de recherche." },
          { question: 'Quelle est la longueur id\u00e9ale de la meta description ?', answer: "Google affiche environ 150-160 caract\u00e8res sur desktop et 120 sur mobile. Visez 120 \u00e0 160 caract\u00e8res pour de meilleurs r\u00e9sultats." },
          { question: 'Google utilise-t-il toujours ma meta description ?', answer: "Non. Google peut afficher un extrait diff\u00e9rent de votre page s'il le juge plus pertinent pour la requ\u00eate de l'utilisateur. Cependant, une meta description bien r\u00e9dig\u00e9e augmente les chances d'\u00eatre utilis\u00e9e." },
          { question: 'Dois-je inclure mon mot-cl\u00e9 dans le titre ?', answer: "Oui. Inclure votre mot-cl\u00e9 cible dans le meta title est l'un des facteurs SEO on-page les plus importants. Placez-le le plus t\u00f4t possible dans le titre." },
          { question: "Qu'est-ce qu'un extrait SERP ?", answer: "Un extrait SERP est l'aper\u00e7u de votre page affich\u00e9 dans les r\u00e9sultats Google. Il comprend g\u00e9n\u00e9ralement le titre (lien bleu), l'URL (fil d'Ariane) et la meta description." },
        ],
      },
    },
    wordCounter: {
      meta: {
        title: 'Compteur de Mots & Analyseur de Contenu Gratuit | Asking Franklin',
        description: 'Comptez les mots, caract\u00e8res, phrases et paragraphes. Analysez la densit\u00e9 de mots-cl\u00e9s, le score de lisibilit\u00e9 et le temps de lecture avec notre outil gratuit.',
      },
      title: 'Compteur de Mots & Analyseur de Contenu',
      subtitle: 'Analysez votre contenu en temps r\u00e9el. Comptez les mots, v\u00e9rifiez la densit\u00e9 de mots-cl\u00e9s, mesurez la lisibilit\u00e9 et obtenez des insights pour am\u00e9liorer votre r\u00e9daction.',
      placeholder: 'Collez ou tapez votre contenu ici...',
      keywordLabel: 'Mot-cl\u00e9 cible (optionnel)',
      keywordPlaceholder: 'ex: marketing de contenu',
      stats: {
        words: 'Mots',
        characters: 'Caract\u00e8res',
        sentences: 'Phrases',
        paragraphs: 'Paragraphes',
        readingTime: 'Temps de lecture',
      },
      densityTitle: 'Densit\u00e9 de mots-cl\u00e9s',
      readabilityTitle: 'Lisibilit\u00e9',
      topKeywordsTitle: 'Mots-cl\u00e9s principaux',
      cta: {
        title: 'Allez au-del\u00e0 du simple comptage',
        description: "Asking Franklin analyse l'intention de recherche, la concurrence SERP et r\u00e9dige du contenu optimis\u00e9 SEO qui se positionne sur Google et les moteurs IA.",
        button: "D\u00e9marrer l'essai gratuit",
      },
      faq: {
        title: 'Questions fr\u00e9quentes',
        items: [
          { question: 'Combien de mots doit contenir un article de blog pour le SEO ?', answer: "Il n'y a pas de nombre magique, mais les \u00e9tudes montrent que le contenu long (1 500 \u00e0 2 500+ mots) a tendance \u00e0 mieux se positionner. La longueur id\u00e9ale d\u00e9pend du sujet, de la concurrence et de l'intention de recherche." },
          { question: "Qu'est-ce que la densit\u00e9 de mots-cl\u00e9s ?", answer: "La densit\u00e9 de mots-cl\u00e9s est le pourcentage de fois o\u00f9 votre mot-cl\u00e9 cible appara\u00eet par rapport au nombre total de mots. Une densit\u00e9 de 1 \u00e0 3% est g\u00e9n\u00e9ralement recommand\u00e9e. Trop faible et les moteurs de recherche ne comprendront pas votre sujet ; trop \u00e9lev\u00e9e et cela peut \u00eatre consid\u00e9r\u00e9 comme du keyword stuffing." },
          { question: "Qu'est-ce qu'un bon score de lisibilit\u00e9 Flesch ?", answer: "Un score Flesch de 60 \u00e0 70 est id\u00e9al pour la plupart des contenus web. Les scores au-dessus de 70 sont faciles \u00e0 lire, tandis que les scores en dessous de 30 sont tr\u00e8s difficiles. Visez 50 \u00e0 70 pour du contenu de blog." },
          { question: 'Le nombre de mots affecte-t-il le r\u00e9f\u00e9rencement ?', answer: "Le nombre de mots n'est pas un facteur de classement direct, mais un contenu complet qui couvre un sujet en profondeur a tendance \u00e0 mieux se classer. Un contenu plus long inclut naturellement plus de mots-cl\u00e9s pertinents." },
          { question: "Quel est le temps de lecture id\u00e9al pour un article ?", answer: "Les \u00e9tudes sugg\u00e8rent 7 \u00e0 10 minutes (environ 1 600 \u00e0 2 400 mots) comme point id\u00e9al pour l'engagement. Cependant, privil\u00e9giez toujours la qualit\u00e9 \u00e0 la longueur." },
        ],
      },
    },
    schemaGenerator: {
      meta: {
        title: 'G\u00e9n\u00e9rateur de Schema Markup Gratuit - JSON-LD | Asking Franklin',
        description: "G\u00e9n\u00e9rez des donn\u00e9es structur\u00e9es Schema.org au format JSON-LD. Cr\u00e9ez du balisage pour Articles, FAQ, Produits, LocalBusiness, HowTo et plus avec notre outil gratuit.",
      },
      title: 'G\u00e9n\u00e9rateur de Schema Markup Gratuit',
      subtitle: "G\u00e9n\u00e9rez des donn\u00e9es structur\u00e9es JSON-LD valides pour votre site web. Choisissez un type de sch\u00e9ma, remplissez les champs et copiez le balisage g\u00e9n\u00e9r\u00e9.",
      schemaTypeLabel: 'Type de sch\u00e9ma',
      generateButton: 'G\u00e9n\u00e9rer',
      copyButton: 'Copier le JSON-LD',
      copiedMessage: 'Copi\u00e9 dans le presse-papiers !',
      previewLabel: 'Sortie JSON-LD',
      cta: {
        title: 'Donn\u00e9es structur\u00e9es, automatiquement',
        description: "Asking Franklin ajoute les donn\u00e9es structur\u00e9es Article et FAQ \u00e0 chaque contenu g\u00e9n\u00e9r\u00e9. Concentrez-vous sur la r\u00e9daction, on s'occupe du SEO technique.",
        button: "D\u00e9marrer l'essai gratuit",
      },
      faq: {
        title: 'Questions fr\u00e9quentes',
        items: [
          { question: "Qu'est-ce que le Schema markup ?", answer: "Le Schema markup (ou donn\u00e9es structur\u00e9es) est du code ajout\u00e9 \u00e0 vos pages pour aider les moteurs de recherche \u00e0 mieux comprendre votre contenu. Il utilise le vocabulaire Schema.org pour d\u00e9crire des articles, produits, FAQ et entreprises dans un format lisible par les machines." },
          { question: 'Le Schema markup aide-t-il le SEO ?', answer: "Oui. Bien que le Schema markup ne soit pas un facteur de classement direct, il permet d'obtenir des rich snippets (\u00e9toiles, FAQ d\u00e9roulantes, prix, etc.) dans les r\u00e9sultats de recherche, ce qui am\u00e9liore significativement le taux de clics." },
          { question: "Qu'est-ce que le JSON-LD ?", answer: "Le JSON-LD (JavaScript Object Notation for Linked Data) est le format recommand\u00e9 par Google pour ajouter des donn\u00e9es structur\u00e9es aux pages web. C'est une balise script ajout\u00e9e au HTML contenant le balisage schema au format JSON." },
          { question: 'Quels types de Schema sont les plus importants ?', answer: "Les types les plus impactants sont : Article (pour les articles de blog), FAQPage (pour les sections FAQ), Product (pour l'e-commerce), LocalBusiness (pour le SEO local), HowTo (pour les tutoriels) et BreadcrumbList (pour la navigation)." },
          { question: 'Comment tester mes donn\u00e9es structur\u00e9es ?', answer: "Utilisez le test des r\u00e9sultats enrichis de Google (search.google.com/test/rich-results) pour valider votre balisage JSON-LD. Il affichera les erreurs ou avertissements et un aper\u00e7u de votre rich snippet." },
        ],
      },
    },
  },

  terms: {
    meta: {
      title: 'CGV - Conditions Générales de Vente | Asking Franklin',
      description: "Consultez les Conditions Générales de Vente d'Asking Franklin, l'assistant IA SEO. Modalités d'abonnement, crédits, facturation et politique d'essai gratuit de 7 jours.",
    },
    title: "Conditions Générales de Vente (CGV) – Asking Franklin",
    intro: "Dernière mise à jour : 16 novembre 2025",
    sections: [
      {
        title: '1. Objet',
        content: 'Les présentes Conditions Générales de Vente (CGV) ont pour objet de définir les modalités et conditions dans lesquelles Asking Franklin fournit à ses utilisateurs un accès à sa plateforme d\'intelligence artificielle dédiée à la création de contenus optimisés pour le SEO (ci-après « Services »).\n\nEn utilisant la plateforme Asking Franklin, l\'utilisateur reconnaît avoir pris connaissance des présentes CGV et les accepter sans réserve.'
      },
      {
        title: '2. Description des Services',
        content: 'Asking Franklin est un outil de création de contenu assisté par intelligence artificielle, conçu pour aider les utilisateurs à produire du contenu optimisé pour le SEO.\n\nLa plateforme permet notamment :\n\n• la génération automatisée de textes optimisés pour les moteurs de recherche,\n\n• l\'assistance à la rédaction pour divers formats (articles, pages, descriptions…),\n\n• des suggestions d\'optimisation SEO (structure, mots-clés, améliorations),\n\n• la personnalisation des contenus selon les besoins définis par l\'utilisateur,\n\n• la reformulation ou amélioration de contenus existants,\n\n• l\'accès à différents outils, modules et modes en fonction du plan d\'abonnement choisi.\n\nAsking Franklin se réserve le droit de faire évoluer, modifier ou enrichir les fonctionnalités proposées.'
      },
      {
        title: '3. Modalités de Commande et d\'Accès aux Services',
        content: '**3.1 Déroulé de la commande**\n\nLe processus de commande s\'effectue exclusivement en ligne et comprend les étapes suivantes :\n\n• Le client sélectionne un plan d\'abonnement (mensuel ou annuel).\n\n• Le client renseigne ses coordonnées bancaires via le système sécurisé proposé.\n\n• Aucun paiement n\'est prélevé immédiatement.\n\n• Le client bénéficie automatiquement d\'une période d\'essai gratuite de 7 jours lui permettant d\'utiliser les Services sans restriction.\n\n• À l\'issue de ces 7 jours d\'essai, le client est automatiquement débité du montant correspondant au plan choisi, sauf résiliation préalable effectuée avant la fin de la période d\'essai.\n\n**3.2 Commandes**\n\nToute commande est réputée ferme et définitive à partir du moment où la période d\'essai arrive à son terme sans résiliation.\n\n**3.3 Accès aux Services**\n\nL\'accès aux Services est accordé immédiatement après la création du compte et l\'activation de la période d\'essai.'
      },
      {
        title: '4. Tarifs et Paiement',
        content: '**4.1 Tarification**\n\nLes tarifs en vigueur sont ceux affichés sur le site Asking Franklin lors de la commande.\nIls sont exprimés en euros hors taxes (HT) et peuvent être modifiés à tout moment, sans rétroactivité sur les commandes validées.\n\n**4.2 Paiement**\n\nLe paiement est prélevé automatiquement à la fin de la période d\'essai de 7 jours, puis selon la fréquence choisie (mensuelle ou annuelle).\n\nL\'utilisateur garantit la validité de ses informations de paiement et autorise Asking Franklin à procéder au prélèvement automatique.\n\n**4.3 Non-remboursement (absence totale de remboursement)**\n\nUne fois le paiement prélevé — que ce soit après la période d\'essai ou lors d\'un renouvellement — aucun remboursement n\'est possible, pour aucune raison, y compris :\n\n• insatisfaction,\n\n• erreur de manipulation,\n\n• absence d\'utilisation du service,\n\n• changement de besoin,\n\n• dysfonctionnement temporaire,\n\n• résiliation en cours de période,\n\n• contestation de paiement ultérieure.\n\nL\'utilisateur renonce expressément à tout droit de rétractation dès lors que le premier prélèvement a été effectué.'
      },
      {
        title: '5. Responsabilité de l\'Utilisateur',
        content: '**5.1 Utilisation des Contenus**\n\nL\'utilisateur est entièrement responsable des contenus générés via la plateforme.\nIl doit s\'assurer qu\'ils respectent la loi, les droits d\'auteurs, les règles SEO propres à son secteur et tout autre règlement applicable.\n\n**5.2 Informations fournies**\n\nL\'utilisateur s\'engage à fournir des informations exactes et à configurer correctement les paramètres nécessaires à la génération de contenus (mots-clés, indications, contraintes…).\nToute erreur ou résultat insatisfaisant lié à ces paramètres ne saurait engager la responsabilité d\'Asking Franklin.'
      },
      {
        title: '6. Exclusion de Garantie et Limitation de Responsabilité',
        content: '**6.1 Contenu Généré**\n\nLes contenus générés sont produits automatiquement par intelligence artificielle.\nAsking Franklin ne garantit pas :\n\n• leur exactitude,\n\n• leur pertinence,\n\n• leur originalité,\n\n• leur conformité à des exigences spécifiques du client.\n\n**6.2 Absence de Garantie**\n\nLes Services sont fournis « tels quels » et sans garantie expresse ou implicite.\n\n**6.3 Limitation de Responsabilité**\n\nAsking Franklin ne pourra être tenu responsable en cas de dommages directs ou indirects résultant de l\'utilisation, de l\'impossibilité d\'utiliser ou de l\'interprétation des contenus générés.'
      },
      {
        title: '7. Propriété Intellectuelle',
        content: '**7.1 Propriété des Technologies**\n\nLes technologies, algorithmes, outils, interfaces et données utilisés dans le cadre de la plateforme restent la propriété exclusive d\'Asking Franklin.\n\n**7.2 Contenus Générés**\n\nLes contenus générés sont cédés à l\'utilisateur pour son usage, sans garantie d\'exclusivité ni d\'originalité.'
      },
      {
        title: '8. Suspension et Résiliation',
        content: '**8.1 Suspension ou Résiliation par Asking Franklin**\n\nEn cas de non-respect des présentes CGV, Asking Franklin se réserve le droit de suspendre ou de résilier l\'accès aux Services sans préavis ni indemnisation.\n\n**8.2 Résiliation par l\'Utilisateur**\n\nL\'utilisateur peut résilier son abonnement à tout moment depuis son espace personnel.\nToute période en cours reste due dans son intégralité, sans possibilité de remboursement.'
      },
      {
        title: '9. Assistance et Support',
        content: 'Le support est disponible via les moyens indiqués sur la plateforme.\nAsking Franklin s\'engage à traiter les demandes dans les meilleurs délais, mais aucune demande de remboursement ne pourra être acceptée.'
      },
      {
        title: '10. Loi Applicable et Juridiction',
        content: 'Les présentes CGV sont soumises au droit français.\nEn cas de litige, une résolution amiable sera privilégiée avant toute action en justice.\nÀ défaut d\'accord amiable, les tribunaux compétents seront ceux du ressort du siège social d\'Asking Franklin.'
      },
      {
        title: '11. Dispositions Finales',
        content: 'L\'acceptation des présentes CGV est obligatoire pour accéder aux Services.\nAsking Franklin peut mettre à jour les CGV à tout moment ; la version en vigueur est celle publiée sur le site au moment de l\'utilisation.'
      },
      {
        title: '12. Offre Black Friday',
        content: 'L\'offre du Black Friday est valable jusqu\'au 30/11. L\'offre vous permet de bénéficier de 50% de réduction sur le 1er mois de votre abonnement mensuel. Ou bien de 50% sur votre abonnement annuel (payable en 1 fois).'
      }
    ]
  },

  legalNotice: {
    meta: {
      title: 'Mentions Légales - Asking Franklin | Assistant IA SEO',
      description: "Mentions légales d'Asking Franklin : éditeur du site, hébergement, propriété intellectuelle et conditions d'utilisation de l'assistant IA SEO de création de contenu optimisé.",
    },
    title: 'Mentions Légales',
    sections: [
      {
        title: 'Edition du site',
        content: 'Le présent site, accessible à l\'URL WWW.askingfranklin.com (le « Site »), est édité par : Romain CERNIK.\n\nConformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l\'économie numérique, il est précisé aux utilisateurs du site AskingFranklin l\'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.'
      },
      {
        title: 'Hébergement',
        content: 'Le Site est hébergé par la société OVH SAS, situé 2 rue Kellermann - BP 80157 - 59053 Roubaix Cedex 1, (contact téléphonique ou email : 1007).'
      },
      {
        title: 'Directeur de publication',
        content: 'Le Directeur de la publication du Site est Romain CERNIK.'
      },
      {
        title: 'Nous contacter',
        content: 'Par email : contact@askingfranklin.com'
      },
      {
        title: 'Données personnelles',
        content: 'Le traitement de vos données à caractère personnel est régi par notre Charte du respect de la vie privée, disponible depuis la section "Charte de Protection des Données Personnelles", conformément au Règlement Général sur la Protection des Données 2016/679 du 27 avril 2016 («RGPD»).'
      }
    ]
  },

  privacyPolicy: {
    meta: {
      title: 'Politique de Confidentialité - Asking Franklin | Protection des données',
      description: "Découvrez comment Asking Franklin protège vos données personnelles. Politique de confidentialité conforme au RGPD : collecte, traitement, stockage et droits des utilisateurs de l'assistant IA SEO.",
    },
    title: 'Politique de Confidentialité d\'Asking Franklin',
    intro: 'Dernière mise à jour : 16 novembre 2025\n\nLa présente politique de confidentialité a pour objet d\'informer les utilisateurs de la manière dont Asking Franklin collecte, utilise, conserve et protège leurs données personnelles dans le cadre de l\'utilisation de l\'outil de génération de contenu optimisé pour le SEO et les LLMs.',
    sections: [
      {
        title: '1. Définitions',
        content: 'Données Personnelles : toute information se rapportant à une personne physique identifiée ou identifiable (nom, adresse e-mail, adresse IP, etc.).\n\nUtilisateur : toute personne accédant et utilisant la plateforme Asking Franklin.\n\nCookie : petit fichier texte déposé sur l\'appareil de l\'utilisateur lors de la navigation sur le site.\n\nResponsable de traitement : Asking Franklin, dont les coordonnées sont indiquées ci-dessous.'
      },
      {
        title: '2. Responsable de Traitement',
        content: 'Asking Franklin\nSiège social : 75 avenue du 11 novembre 33290 Blanquefort\nEmail : contact@askingfranklin.com'
      },
      {
        title: '3. Données Collectées',
        content: '3.1. Données fournies par l\'utilisateur\n• Informations d\'inscription et de profil (nom, prénom, adresse e-mail, photo, etc.).\n• Données de paiement et informations de facturation lors des achats ou abonnements.\n• Informations transmises lors de la communication avec notre support.\n\n3.2. Données collectées automatiquement\n• Données de navigation (adresse IP, type de navigateur, pages consultées, temps de visite, etc.).\n• Cookies et technologies similaires pour faciliter la navigation, améliorer l\'expérience utilisateur et réaliser des analyses statistiques.\n\n3.3. Données issues des intégrations externes\n• Informations provenant des connexions à des services tiers (WordPress, flux RSS, YouTube, etc.) afin d\'assurer l\'automatisation et l\'optimisation du maillage interne.'
      },
      {
        title: '4. Finalités du Traitement des Données',
        content: 'Les données collectées sont utilisées pour :\n• Fournir et améliorer les services : permettre l\'accès à la plateforme et la génération de contenu optimisé.\n• Gestion de la relation client : support technique, assistance, communication d\'informations.\n• Analyse et statistiques : mesurer l\'utilisation de la plateforme et améliorer l\'expérience utilisateur.\n• Sécurité : prévenir les fraudes et garantir la sécurité des accès et transactions.'
      },
      {
        title: '5. Base Légale du Traitement',
        content: 'Le traitement des données est réalisé sur la base :\n• Du consentement explicite de l\'utilisateur lors de l\'inscription ou de l\'utilisation de certains services.\n• De la nécessité contractuelle pour la fourniture des services commandés.\n• Des intérêts légitimes d\'Asking Franklin (amélioration, sécurité, expérience utilisateur).'
      },
      {
        title: '6. Durée de Conservation des Données',
        content: 'Les données personnelles sont conservées :\n• Pendant toute la durée de l\'abonnement ou de l\'utilisation active des services.\n• Pour une durée maximale de 3 ans après le dernier contact ou la fin de la relation contractuelle, sauf disposition légale contraire.'
      },
      {
        title: '7. Communication des Données à des Tiers',
        content: 'Asking Franklin peut communiquer vos données à :\n• Des prestataires techniques et informatiques (hébergement, paiement, statistiques).\n• Des partenaires dans le cadre d\'intégrations (WordPress, YouTube, flux RSS).\n\nCes tiers sont soumis à une obligation contractuelle de confidentialité et de sécurité.'
      },
      {
        title: '8. Utilisation des Cookies',
        content: 'La plateforme utilise des cookies pour :\n• Faciliter la navigation et personnaliser l\'expérience utilisateur.\n• Réaliser des statistiques d\'usage.\n• Fournir des fonctionnalités de connexion et d\'intégration à des services tiers.\n\nL\'utilisateur peut configurer son navigateur pour refuser les cookies, mais certaines fonctionnalités peuvent être limitées.'
      },
      {
        title: '9. Sécurité des Données',
        content: 'Asking Franklin met en œuvre des mesures techniques et organisationnelles appropriées pour protéger les données personnelles contre toute destruction, perte, altération ou accès non autorisé.'
      },
      {
        title: '10. Vos Droits',
        content: 'Conformément au RGPD, vous disposez des droits suivants :\n• Droit d\'accès : connaître les données détenues à votre sujet.\n• Droit de rectification : corriger toute donnée inexacte.\n• Droit à l\'effacement : demander la suppression de vos données.\n• Droit à la limitation : suspendre temporairement l\'utilisation de vos données.\n• Droit d\'opposition : vous opposer au traitement pour des raisons particulières.\n• Droit à la portabilité : recevoir vos données dans un format structuré.\n\nPour exercer ces droits, contactez : contact@askingfranklin.com'
      },
      {
        title: '11. Transferts Internationaux',
        content: 'Vos données sont traitées et stockées au sein de l\'Union Européenne. Tout transfert éventuel hors UE serait réalisé dans le respect des garanties légales.'
      },
      {
        title: '12. Modification de la Politique de Confidentialité',
        content: 'Asking Franklin se réserve le droit de modifier la présente politique à tout moment. Les modifications seront publiées sur le site. Les utilisateurs sont invités à consulter régulièrement cette section.'
      }
    ]
  },

  footer: {
    description: "Asking Franklin, l'assistant IA SEO qui booste la visibilité de vos contenus pour ranker dans les LLMs ET Google. Analysez les intentions de recherche, rédigez du contenu optimisé et dominez les SERPs.",
    links: [
      {
        title: 'Produit',
        items: [
            { label: 'Accueil', href: '/fr' },
            { label: 'Tarifs', href: '/fr/tarifs' },
            { label: 'Outils Gratuits', href: '/fr/outils-gratuits/google-suggests' },
            { label: 'Knowledge Base', href: '/fr/base-de-connaissances' },
            { label: 'Blog', href: 'https://blog.askingfranklin.com/' },
        ],
      },
      {
        title: 'Légal',
        items: [
          { label: 'CGV/CGU', href: '/fr/cgv-cgu' },
          { label: 'Mentions Légales', href: '/fr/mentions-legales' },
          { label: 'Politique de Confidentialité', href: '/fr/politique-de-confidentialite' },
        ],
      },
      {
        title: 'Entreprise',
        items: [
          { label: 'La Dépêche', href: 'https://ladepeche.askingfranklin.com/' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/company/asking-franklin' },
        ],
      },
    ],
    copyright: '© Asking Franklin 2025',
  },
};
