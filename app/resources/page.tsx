import { NavBar } from "@/components/sections/NavBar";
import { Footer } from "@/components/sections/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Calculator, PenTool } from "lucide-react";

const resources = [
  {
    title: "Starlink Installation Guide for Guyana",
    description: "Everything you need to know about setting up Starlink in Georgetown and remote regions.",
    category: "Guides",
    icon: BookOpen,
    date: "June 15, 2025",
  },
  {
    title: "Optimizing Your Business WiFi",
    description: "How to eliminate dead zones and maximize bandwidth for your team.",
    category: "Tips",
    icon: PenTool,
    date: "June 10, 2025",
  },
  {
    title: "Solar Power for Network Gear",
    description: "Calculating the battery and panel requirements for 24/7 off-grid connectivity.",
    category: "Engineering",
    icon: Calculator,
    date: "June 05, 2025",
  },
];

export default function ResourcesPage() {
  return (
    <main>
      <NavBar />
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/40 text-primary bg-primary/10">
              Blog & Resources
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Knowledge Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert insights, guides, and tips on connectivity, security, and power infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((res) => {
              const Icon = res.icon;
              return (
                <Card key={res.title} className="flex flex-col border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">
                        {res.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{res.date}</span>
                    </div>
                    <CardTitle className="text-xl leading-tight">
                      {res.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-sm line-clamp-3 mb-6">
                      {res.description}
                    </CardDescription>
                    <Button variant="link" className="p-0 h-auto text-primary group" asChild>
                      <Link href="#">
                        Read Article
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-24 p-12 rounded-3xl bg-primary/5 border border-primary/10 text-center">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Have a specific question?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Our engineering team is happy to provide technical advice for your specific project requirements.
            </p>
            <Button asChild size="lg">
              <Link href="/quote">Request Technical Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
