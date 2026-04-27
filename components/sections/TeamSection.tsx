"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { FadeUp } from "@/components/ui/motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/250?img=68",
    firstName: "Kevin",
    lastName: "Singh",
    positions: ["Managing Director", "Senior Systems Engineer"],
    socialNetworks: [
      { name: "LinkedIn", url: "#" },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/250?img=53",
    firstName: "Ryan",
    lastName: "Persaud",
    positions: ["Operations Manager"],
    socialNetworks: [
      { name: "LinkedIn", url: "#" },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/250?img=12",
    firstName: "Amrita",
    lastName: "Dyal",
    positions: ["Client Relations Manager"],
    socialNetworks: [
      { name: "LinkedIn", url: "#" },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/250?img=32",
    firstName: "Mark",
    lastName: "Anthony",
    positions: ["Lead Field Technician"],
    socialNetworks: [
      { name: "LinkedIn", url: "#" },
    ],
  },
];

const socialIcon = (socialName: string) => {
  switch (socialName) {
    case "LinkedIn":
      return <Linkedin className="h-4 w-4" />;
    case "Facebook":
      return <Facebook className="h-4 w-4" />;
    case "Instagram":
      return <Instagram className="h-4 w-4" />;
  }
};

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
            ({ imageUrl, firstName, lastName, positions, socialNetworks }, index) => (
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
                  <CardFooter className="px-6 pb-6 pt-0 space-x-4">
                    {socialNetworks.map(({ name, url }, i) => (
                      <Link
                        key={i}
                        href={url}
                        target="_blank"
                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                      >
                        {socialIcon(name)}
                      </Link>
                    ))}
                  </CardFooter>
                </Card>
              </FadeUp>
            )
          )}
        </div>
      </div>
    </section>
  );
}
