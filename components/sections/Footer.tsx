"use client";

import { ShieldCheck, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { FadeUp } from "@/components/ui/motion";
import { siteConfig } from "@/config/site";
import { services } from "@/lib/data";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Process", href: "/#process" },
  { label: "Projects", href: "/#projects" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  return (
    <FadeUp>
      <footer className="border-t border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="space-y-4">
              <a href="/" className="flex items-center gap-2 font-bold text-lg text-foreground">
                <ShieldCheck className="h-6 w-6 text-primary" />Satlinkgy
              </a>
              <p className="text-sm text-primary font-medium">{siteConfig.tagline}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Reliable connectivity, security, and power infrastructure solutions for homes, businesses, and remote locations across Guyana.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((s) => (
                  <li key={s.id}>
                    <a href={`/services/${s.id}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{s.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-3">
                <li><a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"><Phone className="h-4 w-4 text-primary flex-shrink-0" />{siteConfig.phone}</a></li>
                <li><a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"><Mail className="h-4 w-4 text-primary flex-shrink-0" />{siteConfig.email}</a></li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-primary flex-shrink-0" />{siteConfig.location}</li>
              </ul>
              <div className="flex items-center gap-3 mt-6">
                <a href={siteConfig.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"><Facebook className="h-4 w-4" /></a>
                <a href={siteConfig.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"><Instagram className="h-4 w-4" /></a>
                <a href={siteConfig.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"><Linkedin className="h-4 w-4" /></a>
                <a href={siteConfig.whatsapp} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"><MessageCircle className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Satlinkgy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </FadeUp>
  );
}
