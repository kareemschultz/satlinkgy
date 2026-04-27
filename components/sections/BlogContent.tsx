"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { blogPosts } from "@/lib/data";
import { Clock, ArrowRight } from "lucide-react";

export function BlogContent() {
  return (
    <div className="pt-16">
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeUp><Badge variant="outline" className="mb-4 border-primary/40 text-primary bg-primary/10">Resources</Badge></FadeUp>
            <FadeUp delay={0.1}><h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Blog &amp; Guides</h1></FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Practical guides, tips, and insights on connectivity, solar, security, and infrastructure in Guyana.
              </p>
            </FadeUp>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Card className="h-full border-border bg-card hover:border-primary/30 transition-all duration-300 group flex flex-col">
                  <div className="h-1.5 rounded-t-lg bg-gradient-to-r from-primary to-secondary" />
                  <CardContent className="pt-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs border-primary/30 text-primary">{post.tag}</Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">{post.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                      <Button asChild variant="ghost" size="sm" className="gap-1 text-primary hover:text-primary">
                        <a href={`/blog/${post.slug}`}>Read More <ArrowRight className="h-3 w-3" /></a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
