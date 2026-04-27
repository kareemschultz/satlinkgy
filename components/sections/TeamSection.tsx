"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { FadeUp } from "@/components/ui/motion";

interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/250?img=68",
    firstName: "Kevin",
    lastName: "Singh",
    positions: ["Managing Director", "Senior Systems Engineer"],
  },
  {
    imageUrl: "https://i.pravatar.cc/250?img=53",
    firstName: "Ryan",
    lastName: "Persaud",
    positions: ["Operations Manager"],
  },
  {
    imageUrl: "https://i.pravatar.cc/250?img=12",
    firstName: "Amrita",
    lastName: "Dyal",
    positions: ["Client Relations Manager"],
  },
  {
    imageUrl: "https://i.pravatar.cc/250?img=32",
    firstName: "Mark",
    lastName: "Anthony",
    positions: ["Lead Field Technician"],
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeUp>
            <Badge variant="outline" className="mb-4 border-primary/40 text-primary bg-primary/10">
              Our Team
            </Badge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Meet the Experts
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamList.map(
            ({ imageUrl, firstName, lastName, positions }, index) => (
              <FadeUp key={index} delay={index * 0.1}>
                <Card className="bg-card h-full overflow-hidden group/hoverimg border-border">
                  <CardHeader className="p-0">
                    <div className="overflow-hidden aspect-square">
                      <Image
                        src={imageUrl}
                        alt={`${firstName} ${lastName}`}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover transition-all duration-300 group-hover/hoverimg:scale-110"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl mb-2">
                      {firstName} <span className="text-primary">{lastName}</span>
                    </CardTitle>
                    {positions.map((position, i) => (
                      <p key={i} className="text-sm text-muted-foreground">
                        {position}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </FadeUp>
            )
          )}
        </div>
      </div>
    </section>
  );
}
