import Image from "next/image";
import { cn } from "@/lib/utils";
import { MaxWidthWrapper } from "../shared";
import { BEBAS_NEUE } from "@/lib/fonts";
import { NEWSINFO } from "@/data/allData";
import { Button } from "../ui/button";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

export const HomeNews = () => {
  return (
    <>
      <section className="overflow-y-hidden max-sm:min-h-dvh sm:h-dvh">
        <MaxWidthWrapper className="relative flex h-full items-center">
          <div className="my-24 flex justify-between sm:my-0">
            <div className="flex flex-1 flex-col gap-4 sm:gap-8">
              <h1 className={cn("", BEBAS_NEUE.className)}>
                From the Newsroom
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              {/* cards grid */}
              <div className="group/grid my-12 grid gap-4 sm:grid-cols-3 [&:hover>li]:opacity-80">
                {NEWSINFO.map((newsItem, idx) => (
                  <li
                    className="group/card relative flex cursor-[url('/assets/cursor-read.svg')_25_25,_pointer] flex-col overflow-hidden rounded-lg bg-background shadow-xl transition-all duration-300 ease-in-out hover:z-50 hover:scale-[1.02] hover:!opacity-100 active:scale-[1.01] sm:hover:scale-125 sm:active:scale-[1.2]"
                    key={idx}
                  >
                    <Image
                      height={671}
                      width={851}
                      priority
                      src={newsItem.imgUrl}
                      alt={`Cover image of ${newsItem.title}`}
                      className="pointer-events-none h-full select-none"
                    />
                    <div className="space-y-6 p-5 pb-6">
                      <h2
                        className="font-semibold"
                        dangerouslySetInnerHTML={{ __html: newsItem.title }}
                      ></h2>
                      <div className="flex items-center justify-between">
                        <small className="font-medium">News</small>
                        <small className="text-muted-foreground">
                          {newsItem.date}
                        </small>
                      </div>
                    </div>

                    {/* gradients with arrows */}
                    {idx === NEWSINFO.length - 1 && (
                      <div className="absolute right-0 top-0 z-50 flex h-full items-center justify-center bg-gradient-to-l from-primary/30 opacity-0 transition-all duration-300 ease-in-out group-hover/grid:opacity-100">
                        <ChevronRight className="size-10 stroke-background/60" />
                      </div>
                    )}
                    {idx === 0 && (
                      <div className="absolute left-0 top-0 z-50 flex h-full items-center justify-center bg-gradient-to-r from-primary/30 opacity-0 transition-all duration-300 ease-in-out group-hover/grid:opacity-100">
                        <ChevronLeft className="size-10 stroke-background/60" />
                      </div>
                    )}
                  </li>
                ))}
              </div>
              <div className="mt-12 flex justify-end">
                <Button>Show Me More</Button>
              </div>
            </div>
            {/* TODO: make the counter functional */}
            {/* counter */}
            <div className="mt-20 hidden h-fit w-24 items-start justify-end gap-3 sm:flex">
              <div className="h-full">
                <div className="h-[130px]" />
                <p>
                  <span className="font-semibold">04</span> / 04
                </p>
              </div>
              <div className="h-40 w-2 rounded-full bg-primary/20">
                <div className="h-1/4 w-full bg-transparent" />
                <div className="h-1/4 w-full bg-transparent" />
                <div className="h-1/4 w-full bg-transparent" />
                <div className="h-1/4 w-full rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};
