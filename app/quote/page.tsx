import type { Metadata } from "next";
import { NavBar } from "@/components/sections/NavBar";
import { Footer } from "@/components/sections/Footer";
import { QuoteContent } from "@/components/sections/QuoteContent";

export const metadata: Metadata = {
  title: "Request a Quote — Satlinkgy",
  description:
    "Submit a detailed quote request for connectivity, solar, CCTV, or infrastructure services across Guyana.",
};

export default function QuotePage() {
  return (
    <main>
      <NavBar />
      <QuoteContent />
      <Footer />
    </main>
  );
}
