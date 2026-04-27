"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FadeUp } from "@/components/ui/motion";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://i.pravatar.cc/150?img=1",
    name: "John Doe",
    userName: "Small Business Owner",
    comment:
      "Satlinkgy transformed our office connectivity. The Starlink setup was fast and the local networking is flawless.",
    rating: 5.0,
  },
  {
    image: "https://i.pravatar.cc/150?img=2",
    name: "Sophia Collins",
    userName: "Residential Customer",
    comment:
      "Finally, reliable internet at our remote estate! The solar-powered WiFi solution is exactly what we needed.",
    rating: 5.0,
  },
  {
    image: "https://i.pravatar.cc/150?img=3",
    name: "Adam Johnson",
    userName: "Project Manager",
    comment:
      "Professional tower construction and excellent aftercare. They are our go-to for infrastructure in Guyana.",
    rating: 5.0,
  },
  {
    image: "https://i.pravatar.cc/150?img=4",
    name: "Ethan Parker",
    userName: "Tech Lead",
    comment:
      "Their CCTV and access control systems have significantly improved our facility security. Highly recommended.",
    rating: 5.0,
  },
];

export function TestimonialSection() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeUp>
            <Badge variant="outline" className="mb-4 border-primary/40 text-primary bg-primary/10">
              Testimonials
            </Badge>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              What Our Clients Say
            </h2>
          </FadeUp>
        </div>

        <FadeUp delay={0.2}>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {reviewList.map((review) => (
                <CarouselItem
                  key={review.name}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="bg-card h-full flex flex-col">
                    <CardContent className="pt-6 flex-grow">
                      <div className="flex gap-1 pb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="size-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic">
                        {`"${review.comment}"`}
                      </p>
                    </CardContent>

                    <CardHeader>
                      <div className="flex flex-row items-center gap-4">
                        <Avatar>
                          <AvatarImage
                            src={review.image}
                            alt={review.name}
                          />
                          <AvatarFallback>{review.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col text-left">
                          <CardTitle className="text-lg">{review.name}</CardTitle>
                          <CardDescription>{review.userName}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious className="-left-12" />
              <CarouselNext className="-right-12" />
            </div>
          </Carousel>
        </FadeUp>
      </div>
    </section>
  );
}
