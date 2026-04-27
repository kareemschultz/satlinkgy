"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { FadeUp } from "@/components/ui/motion";
import Link from "next/link";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: string;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Residential Starlink",
    popular: PopularPlanType.NO,
    price: "Custom",
    description: "High-speed satellite internet for homes and small estates.",
    buttonText: "Request Quote",
    benefitList: [
      "Authorized Hardware Procurement",
      "Professional Mounting & Alignment",
      "Indoor WiFi Setup",
      "Basic Maintenance Guide",
    ],
  },
  {
    title: "Business Networking",
    popular: PopularPlanType.YES,
    price: "Scoped",
    description: "Full-scale networking and security for commercial facilities.",
    buttonText: "Get Free Survey",
    benefitList: [
      "Structured Cabling & Fiber",
      "CCTV & Access Control",
      "Enterprise WiFi Mesh",
      "SLA Support Contract",
      "Remote Monitoring",
    ],
  },
  {
    title: "Off-Grid Solar + Tech",
    popular: PopularPlanType.NO,
    price: "Bespoke",
    description: "The ultimate solution for remote mining, farming, or lodges.",
    buttonText: "Consult Our Engineers",
    benefitList: [
      "Hybrid Solar Power System",
      "Long-Range Wireless Backhaul",
      "Weather-Proof Infrastructure",
      "Critical Systems Backup",
    ],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeUp>
            <Badge variant="outline" className="mb-4 border-primary/40 text-primary bg-primary/10">
              Pricing & Packages
            </Badge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Solutions for Every Scale
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide transparent, value-driven pricing tailored to the specific needs of your project.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingList.map((pricing) => (
            <FadeUp key={pricing.title} delay={0.1}>
              <Card
                className={
                  pricing.popular === PopularPlanType.YES
                    ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-primary"
                    : "border-border"
                }
              >
                <CardHeader>
                  <CardTitle className="flex item-center justify-between">
                    {pricing.title}
                    {pricing.popular === PopularPlanType.YES && (
                      <Badge variant="secondary" className="text-sm text-primary">
                        Most Popular
                      </Badge>
                    )}
                  </CardTitle>
                  <div>
                    <span className="text-3xl font-bold">{pricing.price}</span>
                  </div>

                  <CardDescription>{pricing.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {pricing.benefitList.map((benefit: string) => (
                      <span key={benefit} className="flex items-center">
                        <Check className="text-primary mr-2 h-4 w-4" />
                        <h3 className="text-sm">{benefit}</h3>
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    asChild
                    variant={pricing.popular === PopularPlanType.YES ? "default" : "outline"}
                    className="w-full"
                  >
                    <Link href="/quote">{pricing.buttonText}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
