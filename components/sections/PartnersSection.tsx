"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { FadeUp } from "@/components/ui/motion";
import { partners } from "@/lib/data";

export function PartnersSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-border bg-card/20">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p className="text-center text-sm font-medium text-muted-foreground mb-10 uppercase tracking-widest">
            Trusted Equipment Partners
          </p>
        </FadeUp>
        <div className="flex flex-wrap justify-center gap-4">
          {partners.map((partner, index) => (
            <motion.div key={partner.name}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}>
              <div className="flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 cursor-default">
                <span className="font-semibold text-foreground text-sm">{partner.name}</span>
                <Badge variant="outline" className="text-xs border-muted text-muted-foreground hidden sm:inline-flex">
                  {partner.category}
                </Badge>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
