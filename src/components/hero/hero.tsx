import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CONCERTINFO } from "@/data/allData";
import { BEBAS_NEUE } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { MaxWidthWrapper } from "../shared";
import { ConcertCard } from "./concert-card";
import { HomeNav } from "./home-nav";

export const Hero = () => {
  return (
    <>
      <section className="h-dvh overflow-y-hidden bg-[#EBCFBF] bg-[url('/assets/hero-noise.svg')]">
        {/* hero nav */}
        <HomeNav />
        <MaxWidthWrapper className="relative mt-20 h-fit">
          <div className="flex justify-between">
            {/* hero text */}
            <div className="mt-12 flex flex-col gap-2">
              <h1 className={cn("", BEBAS_NEUE.className)}>
                book your <br /> concert tickets
              </h1>
              <h3>100% Refunds for Cancellations*</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit,
                sed do eiusmod tempor incididunt ut labore et <br /> dolore
                magna aliqua.
              </p>

              {/* hero slider */}
              <div className="">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  orientation="vertical"
                  className="relative mt-2 w-full max-w-64"
                >
                  <CarouselContent className="-mt-1 h-[370px]">
                    {CONCERTINFO.map((concertInfo, idx) => (
                      <CarouselItem
                        key={idx}
                        className="md:basis-1/2 [&:not(:first-child)]:pt-7"
                      >
                        <ConcertCard
                          band={concertInfo.band}
                          tour={concertInfo.tourName}
                          date={concertInfo.date}
                          location={concertInfo.location}
                          imgUrl={concertInfo.imgUrl}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="absolute bottom-0 flex w-full items-center justify-center bg-gradient-to-t from-primary pb-2">
                    <ChevronDown className="size-10 animate-bounce stroke-background/50" />
                  </div>
                </Carousel>
              </div>
            </div>
            {/* TODO: make the counter functional */}
            {/* counter */}
            <div className="flex items-start gap-3">
              <p>
                <span className="font-semibold">01</span> / 04
              </p>
              <div className="h-40 w-2 rounded-full bg-primary/20">
                <div className="h-1/4 w-full rounded-full bg-primary"></div>
              </div>
            </div>
          </div>
          {/* hero image */}
          <div className="absolute -bottom-5 -right-8 overflow-hidden">
            <Image
              height={671}
              width={851}
              priority
              src="/assets/hero-img.svg"
              alt="hero-image"
              className="pointer-events-none h-full scale-[1] select-none"
            />
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};
