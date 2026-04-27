import { NavBar } from "@/components/sections/NavBar";
import { Footer } from "@/components/sections/Footer";
import { TeamSection } from "@/components/sections/TeamSection";
import { Badge } from "@/components/ui/badge";
import { FadeUp } from "@/components/ui/motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      <NavBar />
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <Badge variant="outline" className="mb-4 border-primary/40 text-primary bg-primary/10">
                About Satlinkgy
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Connecting Guyana&apos;s Most Remote Communities
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Founded with a mission to bridge the digital divide, Satlinkgy provides world-class
                connectivity, security, and power infrastructure across Guyana.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From the heart of Georgetown to the furthest reaches of the Rupununi, we deliver
                reliable technology solutions that empower businesses and homes to thrive in the
                modern world.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
              <Image
                src="/demo-img.jpg" // Placeholder for an actual company photo
                alt="Satlinkgy Team in Action"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To provide high-quality, reliable, and affordable technology infrastructure
                solutions that enhance the lives and operations of people and businesses
                throughout Guyana.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be Guyana&apos;s leading provider of specialized technology services,
                recognized for our technical excellence, professional integrity, and commitment
                to national development.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <TeamSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}
