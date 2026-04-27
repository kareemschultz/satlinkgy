"use client";

import { motion } from "framer-motion";
import {
  Wifi,
  Satellite,
  RadioTower,
  Sun,
  Cctv,
  ShieldCheck,
  Network,
  CheckCircle2,
} from "lucide-react";
import type { ElementType } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { services } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const iconMap: Record<string, ElementType> = {
  Wifi,
  Satellite,
  RadioTower,
  Sun,
  Cctv,
  ShieldCheck,
  Network,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeUp>
            <Badge variant="outline" className="mb-4 border-primary/40 text-primary bg-primary/10">
              What We Do
            </Badge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Comprehensive Tech Infrastructure Services
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              End-to-end solutions for connectivity, security, and power.
            </p>
          </FadeUp>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <StaggerItem key={service.id} className={service.id === "networking" ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(14,165,233,0.15)" }}
                  transition={{ duration: 0.25 }}
                  className="h-full"
                >
                  <Card className="h-full border-border bg-card overflow-hidden relative group">
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-0.5 bg-primary origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <CardHeader className="pb-3">
                      {Icon && (
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      )}
                      <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/services/${service.id}`}
                        className="inline-flex items-center text-sm font-medium text-primary mt-6 group/link"
                      >
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
