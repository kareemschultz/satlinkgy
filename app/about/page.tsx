import type { Metadata } from "next";
import { NavBar } from "@/components/sections/NavBar";
import { Footer } from "@/components/sections/Footer";
import { AboutContent } from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "About Us — Satlinkgy",
  description:
    "Learn about Satlinkgy — our story, mission, and the team behind Guyana's trusted infrastructure company.",
};

export default function AboutPage() {
  return (
    <main>
      <NavBar />
      <AboutContent />
      <Footer />
    </main>
  );
}
