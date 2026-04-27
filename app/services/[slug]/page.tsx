import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NavBar } from "@/components/sections/NavBar";
import { Footer } from "@/components/sections/Footer";
import { ServiceDetailContent } from "@/components/sections/ServiceDetailContent";
import { services } from "@/lib/data";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = services.find((s) => s.id === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} — Satlinkgy`,
    description: service.description,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.id === params.slug);
  if (!service) notFound();
  return (
    <main>
      <NavBar />
      <ServiceDetailContent service={service} />
      <Footer />
    </main>
  );
}
