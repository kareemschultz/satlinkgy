export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  longDescription?: string;
  benefits?: string[];
  useCases?: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface WhyUsItem {
  icon: string;
  title: string;
  desc: string;
}

export interface Industry {
  icon: string;
  label: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Project {
  title: string;
  tag: string;
  color: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  service: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  content: string;
}

export interface Partner {
  name: string;
  category: string;
}
