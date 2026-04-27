"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Loader2, CheckCircle2, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NavBar } from "@/components/sections/NavBar";
import { Footer } from "@/components/sections/Footer";
import { siteConfig } from "@/config/site";
import { services } from "@/lib/data";

interface QuoteForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  service: string;
  priority: string;
  budget: string;
  message: string;
}

const emptyForm: QuoteForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  location: "",
  service: "",
  priority: "",
  budget: "",
  message: "",
};

export default function QuotePage() {
  const [form, setForm] = useState<QuoteForm>(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(field: keyof QuoteForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formspree.io/f/${siteConfig.formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        toast.success("Quote request sent! Our team will contact you shortly.");
        setForm(emptyForm);
      } else {
        toast.error("Oops! There was a problem sending your request.");
      }
    } catch (error) {
      toast.error("Error sending request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main>
      <NavBar />
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-primary/40 text-primary bg-primary/10">
              Request a Quote
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Get a Customized Solution
            </h1>
            <p className="text-xl text-muted-foreground">
              Provide us with some details about your project and we&apos;ll get back to you with a
              comprehensive quote and implementation plan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                  <CardDescription>
                    Fields marked with * are required.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          required
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          value={form.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Project Location (Region/City) *</Label>
                      <Input
                        id="location"
                        required
                        placeholder="e.g. Georgetown, Lethem, etc."
                        value={form.location}
                        onChange={(e) => handleChange("location", e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Needed *</Label>
                        <Select required onValueChange={(v) => handleChange("service", v)}>
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((s) => (
                              <SelectItem key={s.id} value={s.title}>
                                {s.title}
                              </SelectItem>
                            ))}
                            <SelectItem value="Multiple">Multiple Services</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="priority">Urgency</Label>
                        <Select onValueChange={(v) => handleChange("priority", v)}>
                          <SelectTrigger id="priority">
                            <SelectValue placeholder="How soon do you need this?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Immediate">Immediate / Emergency</SelectItem>
                            <SelectItem value="1-2 Weeks">1-2 Weeks</SelectItem>
                            <SelectItem value="1 Month">Within 1 Month</SelectItem>
                            <SelectItem value="Planning">Planning Phase</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Description & Requirements</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        placeholder="Tell us more about your specific needs..."
                        value={form.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Quote Request"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-4">Why Request a Quote?</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Customized pricing based on your specific requirements.</span>
                    </li>
                    <li className="flex gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Professional site survey recommendations.</span>
                    </li>
                    <li className="flex gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Detailed implementation timeline.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">Need Help Faster?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Chat with us directly on WhatsApp for immediate assistance.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-green-600/10 hover:bg-green-600/20 text-green-600 border-green-600/20 gap-2">
                    <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp Chat
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
