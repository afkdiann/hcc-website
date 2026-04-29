"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState, useEffect } from "react";
import { imageFiles } from "@/lib/data";

function ImageCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="relative w-full">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
        aria-label="Research image gallery"
        setApi={setApi}
      >
        <CarouselContent>
          {imageFiles.map((image, index) => (
            <CarouselItem
              key={index}
              aria-label={`Slide ${index + 1} of ${imageFiles.length}: ${image.alt}`}
            >
              <div className="p-1">
                <Card className="h-48 xs:h-64 sm:h-80 md:h-96 lg:h-120">
                  <CardContent className="flex h-full items-center justify-center p-6">
                    <Image
                      src={"./images/research/" + image.src}
                      alt={image.alt}
                      width={750}
                      height={500}
                      className="object-contain w-full h-full"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 -translate-x-1/2 ml-3" />
        <CarouselNext className="absolute right-0 translate-x-1/2 mr-3" />
      </Carousel>
      <div className="sr-only" aria-live="assertive" aria-atomic="true">
        {`Slide ${currentIndex + 1} of ${imageFiles.length}: ${imageFiles[currentIndex].alt}`}
      </div>
    </div>
  );
}

export default ImageCarousel;
