export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  logo: string;
  logoFallback: string;
  contact: {
    whatsapp: string;
    whatsappFormatted: string;
    email: string;
  };
  social: {
    facebook: string;
    instagram: string;
    tiktok: string;
  };
  theme: {
    background: string;
    primary: string;
    accent: string;
    secondary: string;
  };
  positioning: string;
  targetMarket: string[];
  targetRegion: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  iconName: string;
  badge?: string;
  subServices: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  features: string[];
  workflow: {
    step: number;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedSlugs: string[];
}

export interface PricingPlan {
  id: "basic" | "professional" | "enterprise";
  name: string;
  price: number;
  formattedPrice: string;
  pageLimit: number;
  revisions: number;
  supportDays: number;
  popular: boolean;
  badge?: string;
  description: string;
  features: string[];
  whatsappMessage: string;
}

export interface AdditionalServicePrice {
  id: string;
  name: string;
  category: string;
  startingPrice: string;
  description: string;
  isSimulated: boolean;
  notes?: string;
}

export type PortfolioCategory =
  | "all"
  | "restaurant"
  | "ecommerce"
  | "company-profile"
  | "property";

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  categoryLabel: string;
  description: string;
  fullDescription: string;
  keyFeatures: string[];
  techStack: string[];
  image: string;
  isDemo: false;
  demoUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  business: string;
  message: string;
  rating: number;
  isDemo: false;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  thumbnail: string;
  author: string;
  content: string[]; // markdown or formatted paragraphs
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export interface BrandAdvantage {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
