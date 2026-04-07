import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function ImageCarousel() {
  const imageFiles = [
    "exp-conditions.png",
    "artbreeder_study_example_a.png",
    "artbreeder_study_example_b.png",
    "speed_climbing_example_a.png",
    "speed_climbing_example_b.png",
  ];

  return (
    <div className="relative w-full">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: imageFiles.length }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="h-48 xs:h-64 sm:h-80 md:h-96 lg:h-120">
                  <CardContent className="flex h-full items-center justify-center p-6">
                    <Image
                      src={"/images/research/" + imageFiles[index]}
                      alt="Research Image"
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
    </div>
  );
}

export default ImageCarousel;
