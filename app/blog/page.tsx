import type { Metadata } from "next";
import { NavBar } from "@/components/sections/NavBar";
import { Footer } from "@/components/sections/Footer";
import { BlogContent } from "@/components/sections/BlogContent";

export const metadata: Metadata = {
  title: "Blog & Resources — Satlinkgy",
  description:
    "Guides, tips, and insights on Starlink, solar power, WiFi, CCTV, and connectivity solutions in Guyana.",
};

export default function BlogPage() {
  return (
    <main>
      <NavBar />
      <BlogContent />
      <Footer />
    </main>
  );
}
