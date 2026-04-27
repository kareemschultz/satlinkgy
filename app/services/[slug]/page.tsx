import { notFound } from "next/navigation";
import { services } from "@/lib/data";
import { NavBar } from "@/components/sections/NavBar";
import { Footer } from "@/components/sections/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.id === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <NavBar />
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#services"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>

          <div className="mb-12">
            <Badge variant="outline" className="mb-4 border-primary/40 text-primary bg-primary/10">
              Service Detail
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-lg text-foreground">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Interested in this service?</h3>
                <p className="text-muted-foreground mb-6">
                  Contact us today for a free consultation and customized quote for your specific needs.
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full" size="lg">
                    <Link href="/#contact">Get a Free Quote</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full bg-green-600/10 hover:bg-green-600/20 text-green-600 border-green-600/20 gap-2" size="lg">
                    <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">Why Choose Satlinkgy for {service.title}?</h2>
            <p className="text-muted-foreground text-lg mb-6">
              At Satlinkgy, we combine local expertise with international standards. Our team is dedicated to providing reliable, high-quality solutions that are built to last in Guyana&apos;s unique environment.
            </p>
            <p className="text-muted-foreground text-lg">
              Whether you&apos;re looking to secure your home, connect your business, or power a remote site, we have the experience and equipment to get the job done right.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
