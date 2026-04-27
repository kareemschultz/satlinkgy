"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeUp>
            <Badge variant="outline" className="mb-4 border-primary/40 text-primary bg-primary/10">
              Our Work
            </Badge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Recent Projects
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A snapshot of what we&apos;ve built for our clients.
            </p>
          </FadeUp>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <div
                  className={cn(
                    "relative h-48 rounded-xl overflow-hidden bg-gradient-to-br",
                    project.color
                  )}
                >
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <Badge variant="outline" className="self-start mb-2 text-white border-white/40 bg-white/10">
                      {project.tag}
                    </Badge>
                    <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="self-start mt-2 text-white/70 hover:text-white p-0 h-auto"
                    >
                      View Project →
                    </Button>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
