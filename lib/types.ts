export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface ServiceDetail extends Service {
  longDescription: string;
  benefits: { icon: string; title: string; desc: string }[];
  useCases: string[];
  faqs: { q: string; a: string }[];
  heroColor: string;
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

export interface ProjectDetail extends Project {
  slug: string;
  location: string;
  description: string;
  scope: string[];
  outcome: string;
  duration: string;
  client: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  service: string;
  location: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  color: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  idealFor: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  color: string;
  content: string;
}
