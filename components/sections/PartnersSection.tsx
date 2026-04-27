"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { Badge } from "@/components/ui/badge";
import { FadeUp } from "@/components/ui/motion";
import { ShieldCheck, Satellite, Sun, RadioTower, Wifi, Zap } from "lucide-react";

interface PartnerProps {
  icon: any;
  name: string;
}

const partners: PartnerProps[] = [
  { icon: Satellite, name: "Starlink" },
  { icon: ShieldCheck, name: "Ubiquiti" },
  { icon: Sun, name: "Victron Energy" },
  { icon: RadioTower, name: "MikroTik" },
  { icon: Wifi, name: "TP-Link" },
  { icon: Zap, name: "APC" },
];

export function PartnersSection() {
  return (
    <section id="partners" className="py-16 bg-muted/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <FadeUp>
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Trusted by Leaders in Technology
          </p>
        </FadeUp>
      </div>
      
      <div className="relative">
        <Marquee
          fade={true}
          direction="left"
          reverse={false}
          pauseOnHover={true}
          className="gap-[4rem] [--duration:40s]"
        >
          {partners.map(({ icon: Icon, name }) => (
            <div
              key={name}
              className="flex items-center gap-2 text-2xl font-bold text-muted-foreground/50 hover:text-primary transition-colors cursor-default"
            >
              <Icon className="h-8 w-8" />
              <span>{name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
