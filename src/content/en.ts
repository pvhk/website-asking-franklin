import type { SiteContent } from './types';

export const enContent: SiteContent = {
  siteName: 'Asking Franklin',
  siteDescription: 'AI SEO Assistant for writing optimized content for Google and AI engines',

  nav: {
    home: 'Home',
    pricing: 'Pricing',
    blog: 'Blog',
    knowledge: 'Knowledge Base',
    laDepeche: 'La Dépêche',
    cta: 'Try it for free',
  },

  home: {
    meta: {
      title: 'Asking Franklin - The Best AI SEO Assistant That Writes Content That Ranks',
      description: 'Asking Franklin is the AI SEO assistant that analyzes your customers\' search intent, detects untapped keyword opportunities, and writes optimized content that ranks on Google and generative AI engines. Free 7-day trial.',
    },
    hero: {
      title: 'The AI SEO Assistant that grows your SEO & GEO traffic',
      subtitle: "Spending hours creating content... without generating the traffic you deserve? Asking Franklin is the AI SEO assistant that analyzes what your customers search for and creates content optimized for Google and generative AI engines like ChatGPT, Perplexity, and Gemini.",
      cta: "Try it for free",
    },
    testimonials: {
      title: 'They use Asking Franklin and love it',
      anchor: 'testimonials',
      items: [
        {
          name: 'Quentin BARJON',
          role: 'CMO JDC SA',
          company: 'JDC SA',
          content: "Asking Franklin has quickly become essential for our SEO strategy. The tool is simple, clear and super practical: it analyzes your keywords, takes them into account and writes optimized and structured content for you. A real time saver on a daily basis.",
          rating: 5,
          image: 'quentin-barjon',
        },
        {
          name: 'Marlet KERVOLIN',
          role: 'CEO MEMORI Agency',
          company: 'MEMORI Agency',
          content: "Asking Franklin is perfect for saving time on blog article writing. I no longer need to spend hours to get quality articles, the AI allows me to have coherent and relevant text for my niche, much faster. The tool also helps me with keyword research so I know I'm writing on topics my target audience is searching for.",
          rating: 5,
          image: 'marlet-kervolin',
        },
        {
          name: 'Benoit GAILLAT',
          role: 'CEO Pikka Agency',
          company: 'Pikka Agency',
          content: "The Asking Franklin tool is a real assistant that helps me write quality content that ranks. Having the ability to provide precise instructions about my targets and context is really game-changing for me!",
          rating: 5,
          image: 'benoit-gaillat',
        },
      ],
    },
    blog: {
      title: 'Latest Blog Articles',
      anchor: 'blog',
      items: [
        {
          title: 'SEO Content Writer: What It Is and How to Excel in 2026',
          excerpt: 'Learn what an SEO content writer does, the skills you need, and how to master the craft to rank higher and drive organic traffic.',
          image: 'top-10-techniques-redaction-web',
          url: 'https://blog.askingfranklin.com/en/seo-content-writer-what-it-is-and-how-to-excel-in-2026/',
          date: 'February 2026',
        },
      ],
      cta: 'View all articles',
    },
    howItWorks: {
      title: 'Ok, so how does it actually work?',
      subtitle: 'Asking Franklin, your AI SEO assistant, boosts your content visibility by combining search intent analysis, SERP analysis, competition analysis, and SEO & GEO optimization to rank in LLMs AND Google.',
      anchor: 'how-it-works',
      features: [
        {
          icon: 'Search',
          title: "Real-time search intent analysis",
          description: "Discover exactly what your customers are searching for to write accurately!",
        },
        {
          icon: 'Sparkles',
          title: 'Multi-LLM optimization',
          description: "Become the go-to sources for ChatGPT, Claude, Perplexity, Gemini...",
        },
        {
          icon: 'Zap',
          title: 'Ultra-fast generation',
          description: "Save 66% of your time by letting Asking Franklin write for you!",
        },
        {
          icon: 'MessageSquare',
          title: 'A pre-trained assistant for you',
          description: "Part of the generated content doesn't suit you? Want to give expert instructions, make modifications, or go deeper? Tell Franklin and it will adapt.",
        },
        {
          icon: 'TrendingUp',
          title: 'SEO optimizations',
          description: "E-E-A-T optimization, semantic structure and technical markup to maximize your visibility.",
        },
      ],
      steps: [
        {
          number: '1',
          title: 'Discover new opportunities to rank',
          description: 'Your AI assistant automatically suggests the best keywords for which your website should be indexed. Based on your website, competitors and your objectives.',
          image: 'Step0-Keywords-opportunities',
          cta: 'Discover your opportunities',
          ctaUrl: 'https://app.askingfranklin.com/register',
        },
        {
          number: '2',
          title: 'Type in the keyword you have chosen',
          description: 'Asking Franklin will search for all questions, searches and related topics in relation to it. Essential to optimize your content, product and service creation based on what your customers want.',
          image: 'step1-keyword',
          cta: 'Try it for free',
          ctaUrl: 'https://app.askingfranklin.com/register',
        },
        {
          number: '3',
          title: 'Asking Franklin analyzes the top of the SERP',
          description: 'Nothing like competitors better positioned on the chosen keyword to determine SEO opportunities and seize them to write content that converts! Franklin, your AI writing assistant, takes care of it for you.',
          image: 'step2-serp',
        },
        {
          number: '4',
          title: 'Asking Franklin writes you an optimized SEO article plan',
          description: 'Based on the analysis of search intent and the best content at the top of the SERP, Asking Franklin writes you a complete and detailed article plan. This plan is based on the analysis of search results, formats and semantics of positioned content. The AI then identifies underexploited opportunities to produce an optimized plan.',
          image: 'step3-plan',
        },
        {
          number: '5',
          title: 'Asking Franklin generates your SEO and GEO optimized article',
          description: 'From the article plan, Franklin automatically writes your content taking into account your feedback and the optimizations necessary to rank. Do you prefer to write certain parts yourself, add sources, develop certain paragraphs? Ask Franklin.',
          image: 'step4-article',
          cta: 'Let Franklin write my next article',
          ctaUrl: 'https://app.askingfranklin.com/register',
        },
      ],
    },
    faq: {
      title: 'Got questions? We have answers!',
      anchor: 'faq',
      items: [
        {
          question: "What is an AI SEO assistant like Asking Franklin?",
          answer: "Asking Franklin is an AI SEO assistant that combines artificial intelligence with search engine analysis to help you create optimized content. The tool analyzes search intent, SERPs, competition, and writes articles optimized for Google and generative AI engines like ChatGPT, Perplexity, and Gemini.",
        },
        {
          question: "Can I use the AI SEO assistant for free?",
          answer: "Yes, you can create an account to test the AI SEO assistant Asking Franklin for free for 7 days, with no credit card required.",
        },
        {
          question: "Can Asking Franklin help me even if I'm not inspired or skilled at writing?",
          answer: "That's one of the key strengths of this AI SEO assistant. Simply type in the keyword you want to write content about, and Asking Franklin will analyze everything users are searching for on that topic: search volumes, competition, related keywords, and search intent.",
        },
        {
          question: "Why is Asking Franklin different from other AI-assisted content writing tools?",
          answer: "One of the main strengths of this AI SEO assistant lies in its conversational ability. You can bring your expertise to the subject at any stage of creating your content. Give precise instructions, details about your targets, the tone to adopt... Asking Franklin will take it into account and learn as it goes.",
        },
        {
          question: 'Is content generated by an AI SEO assistant penalized by Google?',
          answer: "No, AI-generated content is not penalized by default by Google if it provides real expertise and verified information. The AI SEO assistant Asking Franklin integrates E-E-A-T optimizations (Experience, Expertise, Authoritativeness, Trustworthiness) to ensure the quality and ranking of your content.",
        },
        {
          question: "What differentiates Asking Franklin from other AI-automated writing tools?",
          answer: "Asking Franklin is a complete AI SEO assistant that goes beyond simple text generation. It can automate your content creation while combining SERP analysis, search intent detection, and SEO & GEO optimization. AI alone has its limits, which is why you always keep the pen on your content. Franklin becomes a real assistant that draws on your knowledge and instructions to meet your writing needs.",
        },
      ],
    },
  },

  knowledgeBase: {
    meta: {
      title: 'Knowledge Base - Asking Franklin',
      description: 'Learn how to master SEO content creation with Asking Franklin. Guides, tutorials, and best practices.',
    },
    title: 'Knowledge Base',
    subtitle: 'Everything you need to know to master SEO content creation with Asking Franklin.',
    articles: [
      {
        slug: 'getting-started-with-asking-franklin',
        title: 'Getting Started with Asking Franklin',
        excerpt: 'Learn the basics of using Asking Franklin to create SEO-optimized content that ranks in Google and becomes a reference for AI assistants.',
        category: 'Getting Started',
        date: 'December 1, 2025',
        readTime: '5 min read',
      },
      {
        slug: 'how-to-connect-wordpress-to-asking-franklin',
        title: 'How to Connect WordPress to Asking Franklin',
        excerpt: 'Step-by-step guide to connect your WordPress site to Asking Franklin for seamless content publishing. Learn how to set up application passwords and integrate your site.',
        category: 'Tutorials',
        date: 'December 1, 2025',
        readTime: '3 min read',
      },
    ],
  },

  features: {
    optimizedContent: {
      meta: {
        title: 'Write Optimized Content - SEO & GEO | Asking Franklin',
        description: 'Create content that ranks on Google AND gets cited by AI assistants like ChatGPT, Perplexity, and Gemini. AI-powered SEO and GEO optimization.',
      },
      label: 'SEO & GEO Optimization',
      title: 'Write content that ranks everywhere',
      subtitle: "Create articles optimized for both traditional search engines (SEO) and generative AI engines (GEO). Your content becomes a reference source for Google, ChatGPT, Perplexity, Claude, and Gemini.",
      sections: [
        {
          icon: 'Search',
          title: 'SERP Analysis of Top 10 Competitors',
          description: 'Franklin automatically analyzes the top 10 ranking pages for your keyword. It extracts their structure, content length, headings, and semantic patterns to understand exactly what Google rewards.',
        },
        {
          icon: 'Target',
          title: 'Search Intent Detection',
          description: 'Understand whether users are looking for information, comparing products, or ready to buy. Franklin identifies the primary search intent and structures your content to match user expectations.',
        },
        {
          icon: 'BarChart3',
          title: 'Real-Time SEO Score',
          description: 'Get instant feedback on 8 key SEO metrics as you write: word count, heading structure, keyword density, internal links, keyword placement in H1/H2, and more. Watch your score improve in real-time.',
        },
        {
          icon: 'Sparkles',
          title: 'AI-Powered Content Generation',
          description: 'From keyword to published article in minutes. Franklin generates a detailed content plan based on SERP analysis, then writes SEO-optimized content with proper heading hierarchy and semantic keywords.',
        },
        {
          icon: 'MessageSquare',
          title: 'Conversational AI Editor',
          description: 'Edit your content through natural conversation. Ask Franklin to expand a section, change the tone, add examples, or rewrite paragraphs. Your expertise combined with AI efficiency.',
        },
        {
          icon: 'FileText',
          title: 'Meta Tags Generation',
          description: 'Automatically generate optimized meta titles and descriptions that drive clicks. Franklin follows SEO best practices for character limits and keyword placement.',
        },
        {
          icon: 'Palette',
          title: 'Custom Tone of Voice',
          description: 'Define your brand voice and Franklin adapts. Whether formal, conversational, technical, or friendly—your content stays consistent with your brand identity.',
        },
        {
          icon: 'Globe',
          title: 'Multi-Language Support',
          description: 'Create optimized content in multiple languages. Franklin adapts SEO strategies for different markets and search behaviors.',
        },
      ],
      cta: {
        title: 'Start writing content that ranks',
        description: 'Join thousands of marketers creating SEO-optimized content with Franklin.',
        button: 'Try free for 7 days',
      },
    },
    dataInsights: {
      meta: {
        title: 'Make Decisions on Data | Asking Franklin',
        description: 'Access comprehensive SEO analytics, keyword metrics, ranking tracking, and AI Overview performance data to make informed content decisions.',
      },
      label: 'Analytics & Insights',
      title: 'Make decisions based on real data',
      subtitle: "Stop guessing. Access comprehensive SEO analytics, track your rankings across traditional search AND AI Overviews, and discover untapped keyword opportunities with data-driven insights.",
      sections: [
        {
          icon: 'TrendingUp',
          title: 'Estimated Traffic Value (ETV)',
          description: 'See the real monetary value of your organic traffic. Track ETV across all your ranked keywords and pages to understand which content drives the most business impact.',
        },
        {
          icon: 'BarChart3',
          title: 'Position Tracking & Buckets',
          description: 'Monitor your rankings across 12 position buckets (Top 1, 2-3, 4-10, and beyond). Track movements week-over-week: new rankings, improvements, drops, and lost positions.',
        },
        {
          icon: 'Sparkles',
          title: 'AI Overview Performance',
          description: "Track your presence in Google's AI Overviews separately from organic rankings. Understand where your content gets cited by AI summaries—a growing traffic source often overlooked.",
        },
        {
          icon: 'Users',
          title: 'Audience Demographics',
          description: 'Know who searches for your keywords. Access gender distribution and age breakdown (18-24, 25-34, 35-44, 45-54, 55-64) to align your content with your actual audience.',
        },
        {
          icon: 'Search',
          title: 'Keyword Intelligence',
          description: 'Get comprehensive metrics for every keyword: search volume, difficulty score, competition level, CPC, and our proprietary Opportunity Score that balances potential vs. effort.',
        },
        {
          icon: 'Lightbulb',
          title: 'Smart Keyword Recommendations',
          description: 'Franklin suggests keywords tailored to your domain with relevance scores and expected ETV potential. Stop wasting time on keywords that won\'t move the needle.',
        },
        {
          icon: 'PieChart',
          title: 'Search Intent Distribution',
          description: 'Visualize how your keyword portfolio breaks down by intent: informational, commercial, transactional, and navigational. Balance your content strategy accordingly.',
        },
        {
          icon: 'History',
          title: 'Historical Trend Analysis',
          description: 'Track your SEO progress over time with monthly snapshots. See how your domain authority, traffic value, and rankings evolve. Identify what\'s working and double down.',
        },
      ],
      cta: {
        title: 'Unlock your SEO data',
        description: 'Make every content decision backed by real data.',
        button: 'Start your free trial',
      },
    },
    autopilot: {
      meta: {
        title: 'Autopilot - Automated Content Generation | Asking Franklin',
        description: 'Coming soon: Fully automated content generation and publishing. Set your strategy and let Franklin handle the rest.',
      },
      label: 'Coming Soon',
      title: 'Put your content on autopilot',
      subtitle: "Set your content strategy once, and let Franklin handle the execution. Automated keyword discovery, content generation, and publishing—all while you focus on what matters most.",
      features: [
        'Scheduled content generation based on your keyword strategy',
        'Automatic WordPress publishing with perfect formatting',
        'Smart content calendar with optimal posting times',
        'Automated internal linking suggestions',
        'Bulk content generation for content clusters',
        'Auto-sync with your CMS for seamless workflow',
        'Performance-based content recommendations',
        'Automated content refresh for outdated articles',
      ],
      cta: {
        title: 'Be the first to know',
        description: 'Autopilot is coming soon. Get early access when we launch.',
        button: 'Join the waitlist',
      },
    },
  },

  pricing: {
    meta: {
      title: 'Pricing - Asking Franklin',
      description: 'Choose the plan that fits your content creation needs. Flexible pricing for individuals and teams.',
    },
    title: 'Plans adapted to every stage of your growth',
    subtitle: 'Solopreneurs, agencies, small and large businesses... you will definitely find the plan that suits you.',
    plans: [
      {
        name: 'Starter',
        price: '$49',
        priceAnnual: '$468',
        priceAnnualStrikethrough: '$588',
        period: '/month',
        description: '600 credits (Try free for 7 days)',
        features: [
          '+ 15 articles / month',
          '50 keyword searches: volume, competition, related keywords',
          'Unlimited Franklin AI assistant interactions',
          'Ultra-fast generation: complete article in <5 minutes',
          'Real-time search intent analysis',
          'Basic SEO optimization (Tags, structure, semantics)',
          'Optimized article plan: structure based on analysis of best-performing content',
          'SERP and competition analysis: SEO opportunity identification based on Top 10',
          '1 tracked domain',
          '1 user',
        ],
        cta: 'Start for free',
      },
      {
        name: 'Pro',
        price: '$89',
        priceAnnual: '$864',
        priceAnnualStrikethrough: '$1068',
        period: '/month',
        description: '2000 credits (Try free for 7 days)',
        features: [
          '+ 50 articles / month',
          '200 keyword searches: volume, competition, related keywords',
          'Unlimited Franklin AI assistant interactions',
          'Ultra-fast generation: complete article in <5 minutes',
          'Real-time search intent analysis',
          'Basic SEO optimization (Tags, structure, semantics)',
          'Optimized article plan: structure based on analysis of best-performing content',
          'SERP and competition analysis: SEO opportunity identification based on Top 10',
          '1 tracked domain',
          '1 user',
        ],
        cta: 'Start for free',
        highlighted: true,
      },
      {
        name: 'Enterprise',
        price: '$199',
        priceAnnual: '$1908',
        priceAnnualStrikethrough: '$2388',
        period: '/month',
        description: '5000 Credits (Try free for 7 days)',
        features: [
          '+ 125 articles',
          '500 keyword searches: volume, competition, related keywords',
          'Unlimited Franklin AI assistant interactions',
          'Early access to new features 🚀',
          'Ultra-fast generation: complete article in <5 minutes',
          'Real-time search intent analysis',
          'Basic SEO optimization (Tags, structure, semantics)',
          'Optimized article plan: structure based on analysis of best-performing content',
          'SERP and competition analysis: SEO opportunity identification based on Top 10',
          '2 tracked domains',
          '2 users',
        ],
        cta: 'Start for free',
      },
    ],
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: "What is Asking Franklin?",
          answer: "Asking Franklin helps you find the right keywords beyond search volume, focusing on LLM positioning (generating articles cited in Google AI, ChatGPT, Perplexity responses...). The tool combines SEO analysis, semantic optimization, and content structuring to make your articles reference sources.",
        },
        {
          question: 'How much does Asking Franklin cost?',
          answer: "Asking Franklin offers 3 plans: Starter at $49/month (15 generated articles/month), Pro at $89/month (50 generated articles/month), and Enterprise at $199/month (125+ generated articles/month).",
        },
        {
          question: 'Can I test Asking Franklin for free?',
          answer: "Yes, you have access to a 7-day free trial. You can create your account to test the tool, with no credit card required for this trial period.",
        },
        {
          question: "What is a credit at Asking Franklin?",
          answer: "A credit equals one action performed. Generating content costs 40 credits. Other actions like search analysis, estimating your ranking opportunity, generating a plan, editing an introduction, generating paragraphs, or rephrasing also cost a few credits. Complete verification, SEO optimization, and E-E-A-T consume between 1 and 3 credits.",
        },
        {
          question: "How does Asking Franklin's LLM optimization work?",
          answer: "E-E-A-T (Experience-Expertise-Authoritativeness-Trustworthiness) is a quality signal deployed by Google in its SEO guidelines. Asking Franklin analyzes your content in depth to identify and integrate E-E-A-T signals. The tool examines cited sources, demonstrated expertise level, authority evidence, and general reliability. Then, it suggests optimizations to strengthen these dimensions: integration of verified data, addition of solid references, credibility improvement.",
        },
        {
          question: "What is the Franklin Assistant?",
          answer: "The Franklin Assistant is an intelligent agent designed to accompany you in creating your content. It allows you to add your expertise to articles at every stage, in a fluid discussion. The tool adapts to your instructions by learning as it goes, adjusting tone, style, and structure. Its editorial plans are refined from your directions, and each generated content aligns with your business objectives and audience.",
        },
        {
          question: 'Does Asking Franklin really generate articles in less than 5 minutes?',
          answer: "Yes, the complete process (intent analysis + content generation + SEO) takes 2 to 8 minutes. You can then customize the content by collaborating with the Franklin Assistant who, with your expertise, will help you deepen technical points, integrate your feedback, adjust the tone, or detail certain parts.",
        },
        {
          question: 'Does Asking Franklin automatically publish to WordPress?',
          answer: "WordPress integration allows you to export articles in one click to your WordPress site. The export adapts to WordPress formats and themes, preserves SEO tags, and keeps the complete HTML structure. Asking Franklin also retains all formatting elements (headings, lists, internal links, images...) for immediate publication or quick review in your WordPress editor.",
        },
        {
          question: "How does Asking Franklin analyze search intent?",
          answer: "Asking Franklin analyzes in real-time the intent behind your starting keyword. Its analyses are based on SERP data, related search volumes, and users' frequent questions. The content thus produced precisely answers what your targets are looking for.",
        },
        {
          question: 'Does Asking Franklin replace human writers?',
          answer: "No, Asking Franklin accelerates content creation without replacing humans. The tool assists you in customization via the Franklin Assistant by allowing you to modify each generated section. AI transforms your professional expertise into differentiated content, while allowing you to add the human and unique touch that makes the difference.",
        },
        {
          question: 'Does Asking Franklin work in multiple languages?',
          answer: "Yes, Asking Franklin is optimized for French with strong French SEO. We also create English and other SERP content, etc.",
        },
      ],
    },
  },

  terms: {
    meta: {
      title: 'Terms of Sale - Asking Franklin',
      description: 'Terms and Conditions of Sale',
    },
    title: "Terms and Conditions of Sale – Asking Franklin",
    intro: "Last updated: November 16, 2025",
    sections: [
      {
        title: '1. Purpose',
        content: 'These Terms and Conditions of Sale (ToS) are intended to define the terms and conditions under which Asking Franklin provides its users with access to its artificial intelligence platform dedicated to creating SEO-optimized content (hereinafter "Services").\n\nBy using the Asking Franklin platform, the user acknowledges having read these ToS and accepts them without reservation.'
      },
      {
        title: '2. Service Description',
        content: 'Asking Franklin is an AI-assisted content creation tool, designed to help users produce SEO-optimized content.\n\nThe platform notably allows:\n\n• automated generation of texts optimized for search engines,\n\n• writing assistance for various formats (articles, pages, descriptions...),\n\n• SEO optimization suggestions (structure, keywords, improvements),\n\n• content personalization according to user-defined needs,\n\n• reformulation or improvement of existing content,\n\n• access to different tools, modules and modes depending on the chosen subscription plan.\n\nAsking Franklin reserves the right to evolve, modify or enrich the proposed features.'
      },
      {
        title: '3. Order Process and Service Access',
        content: '**3.1 Order Process**\n\nThe order process is carried out exclusively online and includes the following steps:\n\n• The customer selects a subscription plan (monthly or annual).\n\n• The customer enters their banking details via the secure system provided.\n\n• No payment is collected immediately.\n\n• The customer automatically benefits from a 7-day free trial period allowing them to use the Services without restriction.\n\n• At the end of this 7-day trial, the customer is automatically charged the amount corresponding to the chosen plan, unless prior cancellation is made before the end of the trial period.\n\n**3.2 Orders**\n\nAny order is considered firm and final from the moment the trial period ends without cancellation.\n\n**3.3 Service Access**\n\nAccess to Services is granted immediately after account creation and trial period activation.'
      },
      {
        title: '4. Pricing and Payment',
        content: '**4.1 Pricing**\n\nThe prices in effect are those displayed on the Asking Franklin website at the time of order.\nThey are expressed in euros excluding taxes (excl. VAT) and may be modified at any time, without retroactive effect on validated orders.\n\n**4.2 Payment**\n\nPayment is automatically collected at the end of the 7-day trial period, then according to the chosen frequency (monthly or annual).\n\nThe user guarantees the validity of their payment information and authorizes Asking Franklin to proceed with automatic collection.\n\n**4.3 No Refund Policy (complete absence of refund)**\n\nOnce payment is collected — whether after the trial period or upon renewal — no refund is possible, for any reason, including:\n\n• dissatisfaction,\n\n• handling error,\n\n• non-use of the service,\n\n• change of need,\n\n• temporary malfunction,\n\n• cancellation during the period,\n\n• subsequent payment dispute.\n\nThe user expressly waives any right of withdrawal once the first payment has been made.'
      },
      {
        title: '5. User Responsibility',
        content: '**5.1 Content Use**\n\nThe user is entirely responsible for content generated via the platform.\nThey must ensure that it complies with the law, copyrights, SEO rules specific to their sector and any other applicable regulation.\n\n**5.2 Information Provided**\n\nThe user undertakes to provide accurate information and to correctly configure the parameters necessary for content generation (keywords, instructions, constraints...).\nAny error or unsatisfactory result related to these parameters cannot engage Asking Franklin\'s responsibility.'
      },
      {
        title: '6. Warranty Exclusion and Liability Limitation',
        content: '**6.1 Generated Content**\n\nGenerated content is produced automatically by artificial intelligence.\nAsking Franklin does not guarantee:\n\n• their accuracy,\n\n• their relevance,\n\n• their originality,\n\n• their compliance with specific customer requirements.\n\n**6.2 Absence of Warranty**\n\nServices are provided "as is" and without express or implied warranty.\n\n**6.3 Liability Limitation**\n\nAsking Franklin cannot be held responsible for direct or indirect damages resulting from the use, inability to use or interpretation of generated content.'
      },
      {
        title: '7. Intellectual Property',
        content: '**7.1 Technology Ownership**\n\nThe technologies, algorithms, tools, interfaces and data used within the platform remain the exclusive property of Asking Franklin.\n\n**7.2 Generated Content**\n\nGenerated content is transferred to the user for their use, without guarantee of exclusivity or originality.'
      },
      {
        title: '8. Suspension and Termination',
        content: '**8.1 Suspension or Termination by Asking Franklin**\n\nIn case of non-compliance with these ToS, Asking Franklin reserves the right to suspend or terminate access to Services without notice or compensation.\n\n**8.2 Termination by User**\n\nThe user may terminate their subscription at any time from their personal space.\nAny current period remains due in full, without possibility of refund.'
      },
      {
        title: '9. Assistance and Support',
        content: 'Support is available through the means indicated on the platform.\nAsking Franklin commits to processing requests as soon as possible, but no refund request can be accepted.'
      },
      {
        title: '10. Applicable Law and Jurisdiction',
        content: 'These ToS are subject to French law.\nIn case of dispute, an amicable resolution will be favored before any legal action.\nFailing an amicable agreement, the competent courts will be those of the jurisdiction of Asking Franklin\'s headquarters.'
      },
      {
        title: '11. Final Provisions',
        content: 'Acceptance of these ToS is mandatory to access the Services.\nAsking Franklin may update the ToS at any time; the version in force is the one published on the site at the time of use.'
      },
      {
        title: '12. Black Friday offer',
        content: 'The Black Friday offer is valid until November 30. The offer gives you a 50% discount on the first month of your monthly subscription. Or 50% off your annual subscription (payable in one go).'
      }
    ]
  },

  legalNotice: {
    meta: {
      title: 'Legal Notice - Asking Franklin',
      description: 'Legal information',
    },
    title: 'Legal Notice',
    sections: [
      {
        title: 'Site Publication',
        content: 'This site, accessible at the URL WWW.askingfranklin.com (the "Site"), is published by: Romain CERNIK.\n\nIn accordance with the provisions of Law No. 2004-575 of June 21, 2004 for confidence in the digital economy, users of the AskingFranklin website are informed of the identity of the various parties involved in its creation and monitoring.'
      },
      {
        title: 'Hosting',
        content: 'The Site is hosted by OVH SAS, located at 2 rue Kellermann - BP 80157 - 59053 Roubaix Cedex 1, (telephone or email contact: 1007).'
      },
      {
        title: 'Publication Director',
        content: 'The Publication Director of the Site is Romain CERNIK.'
      },
      {
        title: 'Contact Us',
        content: 'By email: contact@askingfranklin.com'
      },
      {
        title: 'Personal Data',
        content: 'The processing of your personal data is governed by our Privacy Policy, available in the "Personal Data Protection Policy" section, in accordance with the General Data Protection Regulation 2016/679 of April 27, 2016 ("GDPR").'
      }
    ]
  },

  privacyPolicy: {
    meta: {
      title: 'Privacy Policy - Asking Franklin',
      description: 'How we protect your data',
    },
    title: 'Asking Franklin Privacy Policy',
    intro: 'Last updated: November 16, 2025\n\nThis privacy policy aims to inform users how Asking Franklin collects, uses, stores, and protects their personal data when using the content generation tool optimized for SEO and LLMs.',
    sections: [
      {
        title: '1. Definitions',
        content: 'Personal Data: any information relating to an identified or identifiable natural person (name, email address, IP address, etc.).\n\nUser: any person accessing and using the Asking Franklin platform.\n\nCookie: small text file placed on the user\'s device while browsing the site.\n\nData Controller: Asking Franklin, whose contact details are indicated below.'
      },
      {
        title: '2. Data Controller',
        content: 'Asking Franklin\nHeadquarters: 75 avenue du 11 novembre 33290 Blanquefort\nEmail: contact@askingfranklin.com'
      },
      {
        title: '3. Data Collected',
        content: '3.1. Data provided by the user\n• Registration and profile information (name, first name, email address, photo, etc.).\n• Payment data and billing information during purchases or subscriptions.\n• Information transmitted when communicating with our support.\n\n3.2. Automatically collected data\n• Browsing data (IP address, browser type, pages viewed, visit time, etc.).\n• Cookies and similar technologies to facilitate navigation, improve user experience, and perform statistical analyses.\n\n3.3. Data from external integrations\n• Information from connections to third-party services (WordPress, RSS feeds, YouTube, etc.) to ensure automation and optimization of internal linking.'
      },
      {
        title: '4. Purposes of Data Processing',
        content: 'The collected data is used to:\n• Provide and improve services: allow access to the platform and generation of optimized content.\n• Customer relationship management: technical support, assistance, information communication.\n• Analysis and statistics: measure platform usage and improve user experience.\n• Security: prevent fraud and ensure security of access and transactions.'
      },
      {
        title: '5. Legal Basis for Processing',
        content: 'Data processing is carried out on the basis of:\n• Explicit consent of the user during registration or use of certain services.\n• Contractual necessity for the provision of ordered services.\n• Legitimate interests of Asking Franklin (improvement, security, user experience).'
      },
      {
        title: '6. Data Retention Period',
        content: 'Personal data is retained:\n• Throughout the subscription period or active use of services.\n• For a maximum period of 3 years after the last contact or end of the contractual relationship, unless otherwise required by law.'
      },
      {
        title: '7. Disclosure of Data to Third Parties',
        content: 'Asking Franklin may disclose your data to:\n• Technical and IT service providers (hosting, payment, statistics).\n• Partners in the context of integrations (WordPress, YouTube, RSS feeds).\n\nThese third parties are subject to a contractual obligation of confidentiality and security.'
      },
      {
        title: '8. Use of Cookies',
        content: 'The platform uses cookies to:\n• Facilitate navigation and personalize user experience.\n• Perform usage statistics.\n• Provide connection and integration functionalities to third-party services.\n\nUsers can configure their browser to refuse cookies, but some functionalities may be limited.'
      },
      {
        title: '9. Data Security',
        content: 'Asking Franklin implements appropriate technical and organizational measures to protect personal data against any destruction, loss, alteration, or unauthorized access.'
      },
      {
        title: '10. Your Rights',
        content: 'In accordance with GDPR, you have the following rights:\n• Right of access: know the data held about you.\n• Right of rectification: correct any inaccurate data.\n• Right to erasure: request deletion of your data.\n• Right to restriction: temporarily suspend the use of your data.\n• Right to object: object to processing for specific reasons.\n• Right to portability: receive your data in a structured format.\n\nTo exercise these rights, contact: contact@askingfranklin.com'
      },
      {
        title: '11. International Transfers',
        content: 'Your data is processed and stored within the European Union. Any potential transfer outside the EU would be carried out in compliance with legal guarantees.'
      },
      {
        title: '12. Privacy Policy Modifications',
        content: 'Asking Franklin reserves the right to modify this policy at any time. Modifications will be published on the site. Users are invited to regularly consult this section.'
      }
    ]
  },

  footer: {
    description: 'Asking Franklin, the AI SEO assistant that boosts your content visibility to rank in LLMs AND Google. Analyze search intent, write optimized content, and dominate the SERPs.',
    links: [
      {
        title: 'Product',
        items: [
          { label: 'Home', href: '/' },
          { label: 'Pricing', href: '/pricing' },
          { label: 'Knowledge Base', href: '/knowledge-base' },
          { label: 'Blog', href: 'https://blog.askingfranklin.com/en/' },
        ],
      },
      {
        title: 'Legal',
        items: [
          { label: 'Terms', href: '/terms' },
          { label: 'Legal Notice', href: '/legal-notice' },
          { label: 'Privacy Policy', href: '/privacy-policy' },
        ],
      },
      {
        title: 'Company',
        items: [
          { label: 'La Dépêche', href: 'https://ladepeche.askingfranklin.com/' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/company/asking-franklin' },
        ],
      },
    ],
    copyright: '© Asking Franklin 2025',
  },
};
