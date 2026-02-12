import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// TODO make card height responsive with custom breakpoints

function ImageCarousel() {
  return (
    <div className="relative w-full pb-16">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 9 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="sm:h-48 md:h-96">
                  <CardContent className="flex h-full items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
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