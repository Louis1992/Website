// Site configuration
export const SITE_URL = "https://www.leadgenies.de";

// Helper function for canonical URLs
export function getCanonicalUrl(path: string): string {
  // Ensure path starts with a slash and remove any trailing slash
  const formattedPath = path.startsWith('/') ? path : `/${path}`;
  return new URL(formattedPath, SITE_URL).toString();
}

export const SITE_TITLE = "LeadGenies - AI-Powered B2B Cold Calling with German Excellence";
export const SITE_DESCRIPTION = "Your B2B Telemarketing Agency - Powered by AI, Delivered by Humans. We combine cutting-edge AI lead research with authentic German sales expertise to transform your sales pipeline.";

export const PERSONAL_INFO = {
  name: "LeadGenies Vertriebslösungen GmbH",
  title: "B2B Telemarketing Agency",
  subtitle: "AI-Powered Cold Calling with German Excellence",
  address: "Ringstraße 102",
  city: "Seevetal",
  state: "Niedersachsen",
  postcode: "21218",
  country: "Germany",
  phone: "+49 173 8082217",
  email: "louis@leadgenies.de",
  businessSite: "https://www.leadgenies.de"
};

// Temporary alias for backward compatibility during migration
export const COMPANY_INFO = PERSONAL_INFO;

// Temporary empty array for suburbs (not used in Zen site)
export const SUBURBS = [];

// Temporary empty array for WHY_CHOOSE_US (not used in Zen site)  
export const WHY_CHOOSE_US = [];

// Temporary exports for backward compatibility during migration
// These will be removed once all pages are updated to the Zen theme
export const SERVICES = [];
export const TESTIMONIALS = [];
export const CERTIFICATIONS = [];
export const WHY_CHOOSE_US_SAFETY = [];
export const LOCAL_AREAS = [];
export const SERVICE_AREAS = [];
export const WHY_CHOOSE_US_AIRCON = [];
export const SERVICE_AREAS_EXTENDED = [];

export const NAVIGATION_LINKS = [
  { name: "What We Do", href: "#what-we-do" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Is It Worth It?", href: "#roi-calculator" },
  { name: "Our Guarantee", href: "#guarantee" },
  { name: "Pricing", href: "#pricing" }
];

// Expertise areas for homepage
export const EXPERTISE_AREAS = [
  {
    id: "ai-research",
    title: "AI-Powered Research",
    description: "Multi-database enrichment and company lookalikes for perfect targeting",
    icon: "Brain"
  },
  {
    id: "german-callers",
    title: "German Excellence",
    description: "Professionally trained German cold callers who understand B2B sales",
    icon: "Users"
  },
  {
    id: "data-quality",
    title: "Waterfall Enrichment",
    description: "7-step verification process ensuring 99% data accuracy",
    icon: "Database"
  },
  {
    id: "proven-results",
    title: "Proven Results",
    description: "Average 12-15 qualified appointments per month with 31% conversion rate",
    icon: "TrendingUp"
  }
];

// Why choose LeadGenies for B2B cold calling
export const WHY_CHOOSE_LEADGENIES = [
  {
    title: "AI + Human Synergy",
    description: "Not just cold calling, but intelligent, data-driven conversations",
    icon: "Sparkles"
  },
  {
    title: "German Quality",
    description: "Native German speakers who understand local business culture",
    icon: "Award"
  },
  {
    title: "Technical Excellence",
    description: "Waterfall enrichment, lookalikes, multi-database research",
    icon: "Cpu"
  },
  {
    title: "Risk-Free Trial",
    description: "Money-back guarantee shows confidence in our service",
    icon: "Shield"
  }
];

// Legacy export for backward compatibility
export const WHY_CHOOSE_DANSINGA = WHY_CHOOSE_LEADGENIES;

// Article categories
export const ARTICLE_CATEGORIES = [
  { id: "cold-calling", name: "Cold Calling Tips", slug: "cold-calling" },
  { id: "lead-generation", name: "Lead Generation", slug: "lead-generation" },
  { id: "b2b-sales", name: "B2B Sales", slug: "b2b-sales" },
  { id: "ai-technology", name: "AI & Technology", slug: "ai-technology" },
  { id: "case-studies", name: "Case Studies", slug: "case-studies" },
  { id: "industry-insights", name: "Industry Insights", slug: "industry-insights" }
];

// FAQ items
export const FAQ_ITEMS = [
  {
    question: "How does AI enhance your cold calling?",
    answer: "We use AI for ICP analysis, lead scoring, waterfall enrichment, and conversation insights to ensure every call is intelligent and data-driven."
  },
  {
    question: "What makes you different from other agencies?",
    answer: "We combine German expertise with AI technology - you get the best of both worlds: cutting-edge data research and authentic human connections."
  },
  {
    question: "Which industries do you serve?",
    answer: "We specialize in B2B SaaS, IT, Consulting, Real Estate, and Professional Services across German-speaking markets."
  },
  {
    question: "What results can I expect?",
    answer: "On average, clients see 12-15 qualified appointments per month with a 31% conversion rate. Results vary based on your industry and ICP."
  },
  {
    question: "How quickly can we start?",
    answer: "We can go from contract to first call in 48 hours. Our onboarding process is streamlined and efficient."
  },
  {
    question: "Do you offer custom packages?",
    answer: "Yes, we create tailored solutions based on your specific needs, target market, and growth goals."
  }
];

// Newsletter removed per client request

// Footer content
export const FOOTER_CONTENT = {
  about: "LeadGenies - AI-Powered B2B Cold Calling with German Excellence. We combine cutting-edge AI lead research with authentic German sales expertise to transform your sales pipeline.",
  quickLinks: [
    { name: "Imprint", href: "/imprint" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" }
  ],
  copyright: "© 2024 LeadGenies GmbH. All rights reserved."
};

// Social links
export const SOCIAL_LINKS = {
  instagram: "",
  linkedin: "https://www.linkedin.com/company/leadgenies",
  youtube: "",
  twitter: ""
};

// Service packages
export const SERVICE_PACKAGES = {
  title: "Transparent Pricing for Predictable Growth",
  subtitle: "Choose your commitment level - scale your success",
  description: "All packages include our proven 5-step process: Strategic Workshop, AI-Powered Research, Lead Enrichment, Professional Calling, and Continuous Optimization.",
  packages: [
    {
      id: "test-month",
      title: "Test Month",
      duration: "1 Month",
      price: "€3,500",
      description: "Perfect for testing the waters",
      includes: [
        "50 calls/day",
        "Weekly optimization",
        "Money-back guarantee",
        "Basic reporting",
        "Email support"
      ],
      cta: "Start Test Month",
      popular: false
    },
    {
      id: "growth-package",
      title: "Growth Package",
      duration: "3 Months",
      price: "€2,900/month",
      savings: "Save €1,800",
      description: "Best for serious growth",
      includes: [
        "Everything in Test Month",
        "Dedicated account manager",
        "Advanced AI insights",
        "Custom ICP workshop",
        "Priority support"
      ],
      cta: "Choose Growth",
      popular: true
    },
    {
      id: "scale-package",
      title: "Scale Package",
      duration: "6 Months",
      price: "€2,500/month",
      savings: "Save €6,000",
      description: "For market domination",
      includes: [
        "Everything in Growth",
        "Multi-channel outreach",
        "C-level targeting",
        "Quarterly strategy sessions",
        "Custom integrations"
      ],
      cta: "Go All In",
      popular: false
    }
  ]
};

// Homepage hero content
export const HERO_CONTENT = {
  greeting: "Welcome to LeadGenies",
  title: "Your B2B Telemarketing Agency",
  subtitle: "Powered by AI, Delivered by Humans",
  description: "Where cutting-edge AI lead research meets authentic German sales expertise. We handle the entire cold calling process - from AI-powered research to booked meetings.",
  cta: "Book a Strategy Call"
};

// Company philosophy/approach
export const PHILOSOPHY = {
  quote: "Success in B2B sales isn't about making more calls - it's about making smarter calls with better data and authentic human connections.",
  cards: [
    { title: "AI-Powered", description: "Intelligent lead research and data enrichment" },
    { title: "Human Touch", description: "German professionals who understand B2B sales" },
    { title: "Proven Results", description: "10,000+ clients with 95% retention rate" }
  ]
};