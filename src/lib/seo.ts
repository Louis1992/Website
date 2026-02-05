// src/lib/seo.ts
import { PERSONAL_INFO } from "./constants.js";

// Types for SEO settings
interface GeneralSEOSettings {
  hrefLang: string;
  metaTags: {
    title: string;
    description: string;
  };
  verification: {
    google?: string;
    bing?: string;
  };
  robots: {
    index: boolean;
    follow: boolean;
    customRobotsTxt?: string;
  };
  socialImage?: string;
  logo?: string;
  favicon?: string;
  headerScripts?: string;
  bodyScripts?: string;
  footerScripts?: string;
}

interface SchemaSettings {
  businessName: string;
  businessType: string;
  address: {
    streetAddress: string;
    locality: string;
    region: string;
    postCode: string;
    country: string;
  };
  contact: {
    email: string;
    phone: string;
  };
  image: string;
  website: string;
  paymentMethods: string[];
  openingHours: {
    open: string;
    close: string;
    days: string[];
  };
  geo: {
    latitude: string;
    longitude: string;
  };
  priceRange: string;
}

// Default settings for LeadGenies
const defaultGeneralSettings: GeneralSEOSettings = {
  hrefLang: 'de',
  metaTags: {
    title: '',
    description: ''
  },
  verification: {
    google: '',
    bing: ''
  },
  robots: {
    index: true,
    follow: true,
    customRobotsTxt: ''
  },
  socialImage: '',
  logo: '',
  favicon: '',
  headerScripts: '',
  bodyScripts: '',
  footerScripts: ''
};

const defaultSchemaSettings: SchemaSettings = {
  businessName: "LeadGenies",
  businessType: "ProfessionalService",
  address: {
    streetAddress: PERSONAL_INFO.address,
    locality: PERSONAL_INFO.city,
    region: PERSONAL_INFO.state,
    postCode: PERSONAL_INFO.postcode,
    country: "DE"
  },
  contact: {
    email: PERSONAL_INFO.email,
    phone: PERSONAL_INFO.phone
  },
  image: "/images/logo.png",
  website: "https://www.leadgenies.de",
  paymentMethods: ["Credit Card", "Bank Transfer", "Invoice"],
  openingHours: {
    open: "09:00",
    close: "18:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  },
  geo: {
    latitude: "53.3833",
    longitude: "9.9667"
  },
  priceRange: "$$$"
};

// Simple function to get settings from JSON files or return defaults
export async function getGeneralSEOSettings(): Promise<GeneralSEOSettings> {
  return defaultGeneralSettings;
}

export async function getSchemaSettings(): Promise<SchemaSettings> {
  return defaultSchemaSettings;
}

// Generate structured data from settings
export async function generateLocalBusinessSchema(url: string) {
  const schemaSettings = await getSchemaSettings();

  return {
    "@context": "https://schema.org",
    "@type": schemaSettings.businessType,
    "@id": url,
    "name": schemaSettings.businessName,
    "image": [schemaSettings.image],
    "url": schemaSettings.website || url,
    "telephone": schemaSettings.contact.phone,
    "email": schemaSettings.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": schemaSettings.address.streetAddress,
      "addressLocality": schemaSettings.address.locality,
      "addressRegion": schemaSettings.address.region,
      "postalCode": schemaSettings.address.postCode,
      "addressCountry": schemaSettings.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": schemaSettings.geo.latitude,
      "longitude": schemaSettings.geo.longitude
    },
    "priceRange": schemaSettings.priceRange,
    "paymentAccepted": schemaSettings.paymentMethods.join(', '),
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": schemaSettings.openingHours.days,
      "opens": schemaSettings.openingHours.open,
      "closes": schemaSettings.openingHours.close
    }
  };
}

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer.replace(/<\/?[^>]+(>|$)/g, "")
    }
  }))
});

// Generate Organization schema for LeadGenies
export const generatePersonSchema = (url: string) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": PERSONAL_INFO.name,
  "description": "AI-Powered B2B Cold Calling with German Excellence. LeadGenies combines cutting-edge AI lead research with authentic German sales expertise.",
  "url": url,
  "email": PERSONAL_INFO.email,
  "telephone": PERSONAL_INFO.phone,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": PERSONAL_INFO.address,
    "addressLocality": PERSONAL_INFO.city,
    "addressRegion": PERSONAL_INFO.state,
    "postalCode": PERSONAL_INFO.postcode,
    "addressCountry": "DE"
  },
  "knowsAbout": [
    "B2B Cold Calling",
    "Lead Generation",
    "AI Lead Research",
    "Waterfall Enrichment",
    "Telemarketing",
    "German B2B Sales"
  ],
  "sameAs": [
    PERSONAL_INFO.businessSite
  ]
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; item: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.item
  }))
});

// Function to get robots meta content
export async function getRobotsContent() {
  const settings = await getGeneralSEOSettings();
  const directives = [];

  if (settings.robots.index) {
    directives.push('index');
  } else {
    directives.push('noindex');
  }

  if (settings.robots.follow) {
    directives.push('follow');
  } else {
    directives.push('nofollow');
  }

  return directives.join(', ');
}
