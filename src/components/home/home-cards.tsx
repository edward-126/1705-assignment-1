"use client";

import { BEBAS_NEUE } from "@/lib/fonts";
import { MaxWidthWrapper } from "../shared/max-width-wrapper";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "../ui/button";

const COLORS = [
  "bg-[#F8D38E]",
  "bg-[#F3AF8A]",
  "bg-[#BEA8F6]",
  "bg-[#E9EDA9]",
  "bg-[#5ED7FA]",
];

export const HomeCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <section className="h-dvh overflow-y-hidden">
        <MaxWidthWrapper className="relative flex h-full items-center">
          <div className="flex justify-between">
            <div className="flex flex-1 flex-col gap-4 sm:gap-8">
              <h1 className={cn("", BEBAS_NEUE.className)}>
                watch your favorite artists onstage
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <div className="flex -space-x-72 max-sm:mt-4">
                {Array.from({ length: 5 }).map((_, idx) => {
                  const zIndex =
                    hoveredIndex === null
                      ? 50 - idx * 10
                      : 50 - Math.abs(idx - hoveredIndex) * 10;

                  return (
                    <div
                      className={cn(
                        "flex cursor-[url('/assets/cursor.svg')_25_25,_pointer] flex-col gap-5 rounded-lg p-7 shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.03] active:scale-[1.01]",
                        COLORS[idx % COLORS.length],
                      )}
                      key={idx}
                      style={{ zIndex }}
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="flex-1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed <br /> do.
                        </h3>
                        <div className="flex size-10 items-center justify-center rounded-full border border-primary p-1.5">
                          <p className="font-medium">0{idx + 1}</p>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                      </p>
                      <p className="mt-3 font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do.
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex justify-end">
                <Button>View Events and Register</Button>
              </div>
            </div>
            {/* TODO: make the counter functional */}
            {/* counter */}
            <div className="hidden items-start gap-3 sm:flex">
              <p>
                <span className="font-semibold">02</span> / 04
              </p>
              <div className="h-40 w-2 rounded-full bg-primary/20">
                <div className="w-fullbg-transparent h-1/4" />
                <div className="h-1/4 w-full rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};
