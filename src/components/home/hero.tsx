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
import { Counter, MaxWidthWrapper } from "../shared";
import { ConcertCard } from "./concert-card";
import { HomeNav } from "./home-nav";

export const Hero = () => {
  return (
    <>
      <section className="overflow-y-hidden bg-[#EBCFBF] bg-[url('/assets/hero-noise.svg')] max-sm:min-h-dvh sm:h-dvh">
        {/* hero nav */}
        <HomeNav />
        <MaxWidthWrapper className="relative mt-1 h-fit sm:mt-20">
          <div className="flex justify-between">
            {/* hero text */}
            <div className="flex flex-col gap-2 sm:mt-12">
              {/* hero image (>640px) */}
              <div className="my-8 block h-full overflow-hidden sm:hidden">
                <Image
                  height={671}
                  width={851}
                  priority
                  src="/assets/hero-img.svg"
                  alt="hero-image"
                  className="pointer-events-none h-full scale-[1] select-none"
                />
              </div>

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
                  className="relative mt-2 w-full sm:max-w-64"
                >
                  <CarouselContent className="-mt-1 h-[370px]">
                    {CONCERTINFO.map((concertInfo, idx) => (
                      <CarouselItem
                        key={idx}
                        className="basis-1 md:basis-1/2 [&:not(:first-child)]:pt-7"
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
            {/* counter */}
            <Counter id={1} />
          </div>
          {/* hero image (<640px) */}
          <div className="absolute -bottom-5 -right-8 hidden overflow-hidden sm:block">
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
