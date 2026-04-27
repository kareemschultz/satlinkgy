"use client";

import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { pricingPlans } from "@/lib/data";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <FadeUp><Badge variant="outline" className="mb-4 border-primary/40 text-primary bg-primary/10">Pricing</Badge></FadeUp>
          <FadeUp delay={0.1}><h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Transparent Pricing</h2></FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Starting prices for common configurations. Every project is different — contact us for a precise quote.
            </p>
          </FadeUp>
        </div>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {pricingPlans.map((plan) => (
            <StaggerItem key={plan.name}>
              <Card className={cn("h-full flex flex-col border-border bg-card transition-all duration-300",
                plan.highlighted ? "border-primary shadow-lg shadow-primary/10 relative" : "hover:border-primary/30")}>
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <p className="text-sm font-medium text-muted-foreground mb-1">{plan.name}</p>
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                  <p className="text-xs text-muted-foreground">{plan.period}</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-3 flex-1 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full" variant={plan.highlighted ? "default" : "outline"}>
                    <a href="#contact">{plan.cta}</a>
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <FadeUp delay={0.3}>
          <p className="text-center text-sm text-muted-foreground mt-8">
            All prices are in USD. Installation includes site survey, equipment, labour, and commissioning.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
