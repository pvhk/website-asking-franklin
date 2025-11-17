import type { SiteContent } from './types';

export const frContent: SiteContent = {
  siteName: 'Asking Franklin',
  siteDescription: 'Assistant IA pour le contenu SEO',

  nav: {
    home: 'Accueil',
    pricing: 'Tarifs',
    blog: 'Blog',
    laDepeche: 'La Dépêche',
    cta: "J'essaye gratuitement",
  },

  home: {
    meta: {
      title: 'Asking Franklin - Le meilleur assistant IA pour rédiger vos contenus SEO',
      description: "L'assistant IA de rédaction SEO qui analyse ce que cherchent réellement vos clients, détecte les opportunités inexploitées et vous aide à créer des contenus qui se positionnent dans Google ET deviennent des sources de référence pour les IA génératives.",
    },
    hero: {
      title: 'Le meilleur assistant IA pour rédiger vos contenus SEO',
      subtitle: "Vous passez des heures à créer du contenu... sans générer le trafic que vous méritez ? Asking Franklin est l'assistant IA de rédaction SEO qui change la donne. Notre outil analyse ce que cherchent réellement vos clients, détecte les opportunités inexploitées et vous aide à créer des contenus qui se positionnent dans Google ET deviennent des sources de référence pour les IA génératives comme ChatGPT, Perplexity et Gemini.",
      cta: "Je teste gratuitement",
    },
    testimonials: {
      title: 'Ils utilisent Asking Franklin et ils adorent',
      anchor: 'temoignages',
      items: [
        {
          name: 'Quentin BARJON',
          role: 'CMO',
          company: 'JDC sA',
          content: "Asking Franklin est vite devenu un incontournable pour notre stratégie SEO. L'outil est simple, clair et hyper pratique : il analyse tes mots-clés, les prend en compte et rédige pour toi des contenus optimisés et structurés. Un vrai gain de temps au quotidien.",
          rating: 5,
          image: 'quentin-barjon',
        },
        {
          name: 'Marlet KERVOLIN',
          role: 'CEO',
          company: 'Kaboom Kitchen',
          content: "Asking Franklin est parfait pour gagner du temps sur sa rédaction d'article de blog. Je n'ai plus besoin de passer des heures pour obtenir des articles qualitatifs, l'IA me permet d'avoir un texte cohérent et pertinent quant à ma niche, bien plus rapidement. L'outil m'aide également pour la recherche de mots clés donc je sais que j'écris sur des sujets que ma cible recherche.",
          rating: 5,
          image: 'marlet-kervolin',
        },
        {
          name: 'Benoit GAILLAT',
          role: 'CEO',
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
      subtitle: 'Asking Franklin booste la visibilité de vos contenus en combinant intentions de recherche, analyse des SERPs, de la concurrence et optimisation SEO pour ranker dans les LLMs ET Google.',
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
          title: "Tapez le mot-clé que vous avez choisi",
          description: 'Asking Franklin ira chercher toutes les questions, les recherches et sujets connexes en relation avec ce dernier. Incontournable pour optimiser votre création de contenu, de produits et de services en vous basant sur ce que veulent vos clients.',
          image: 'step1-keyword',
          cta: "J'essaye gratuitement",
          ctaUrl: 'https://app.askingfranklin.com/register',
        },
        {
          number: '2',
          title: 'Asking Franklin analyse le top de la SERP',
          description: 'Rien de tel que des concurrents mieux positionnés sur le mot-clé choisi pour déterminer des opportunités seo et s\'en saisir pour rédiger des contenus qui convertissent ! Franklin, votre assistant IA de rédaction s\'en charge pour vous.',
          image: 'step2-serp',
        },
        {
          number: '3',
          title: 'Asking Franklin vous rédige un plan d\'article SEO optimisé',
          description: 'Basé vraiment sur l\'analyse de l\'intention de recherche puis des meilleurs contenus du top de la Serp, Asking Franklin vous rédige un plan d\'article complet et détaillé. Ce même plan est basé sur l\'analyse des résultats de recherche, des formats et de la sémantique des contenus positionnés. L\'IA identifie ensuite des opportunités sous-exploitées pour produire un plan optimisé.',
          image: 'step3-plan',
        },
        {
          number: '4',
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
          question: "Est-ce que je peux utiliser l'outil gratuitement ?",
          answer: "Oui, vous pouvez créer un compte pour tester l'outil gratuitement durant 7 jours.",
        },
        {
          question: "Est-ce qu'Asking Franklin peut me servir même si je ne suis pas inspiré ou doué en rédaction ?",
          answer: "C'est un des points forts de l'outil. Tapez simplement le mot-clé sur lequel vous voulez rédiger du contenu, Asking Franklin vous indiquera tout ce que recherchent les internautes à ce sujet. Mais aussi les volumes de recherche, la concurrence et les mots-clés associés.",
        },
        {
          question: "Pourquoi Asking Franklin est-il différent des autres outils de rédaction de contenu assistés par IA ?",
          answer: "L'une des principales forces de l'outil réside dans sa capacité conversationnelle. Vous pouvez apporter votre expertise sur le sujet à n'importe quelle étape de la création de votre contenu. Donner des instructions précises, des détails sur vos cibles, le ton à adopter… Asking Franklin en tiendra compte et apprendra au fur et à mesure.",
        },
        {
          question: 'Est-ce que les contenus générés par IA sont pénalisés ?',
          answer: "Un contenu généré par IA n'est pas pénalisé par défaut si ce dernier apporte une réelle expertise et des informations vérifiées. Il faut que ce dernier réponde véritablement aux questions que se posent les internautes.",
        },
        {
          question: "Qu'est-ce qui différencie Asking Franklin des autres outils de rédaction automatisé par l'IA ?",
          answer: "Asking Franklin peut automatiser la création de vos contenus, que vous n'ayez aucune idée ou déjà une stratégie de content marketing bien établie. Mais l'IA seule a ses limites c'est pourquoi vous avez toujours la plume sur vos contenus. Franklin devient alors un vrai assistant qui puisera dans les connaissances et instructions que vous lui fournirez pour répondre à vos besoins d'écriture !",
        },
      ],
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

  terms: {
    meta: {
      title: 'CGV - Asking Franklin',
      description: "Conditions Générales de Vente",
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
      }
    ]
  },

  legalNotice: {
    meta: {
      title: 'Mentions Légales - Asking Franklin',
      description: 'Informations légales',
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
      title: 'Politique de Confidentialité - Asking Franklin',
      description: 'Comment nous protégeons vos données',
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
    description: "Asking Franklin c'est l'assistant IA qui booste la visibilité de vos contenus pour ranker dans les LLMs ET Google.",
    links: [
      {
        title: 'Produit',
        items: [
          { label: 'Accueil', href: '/fr' },
          { label: 'Tarifs', href: '/fr/tarifs' },
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
