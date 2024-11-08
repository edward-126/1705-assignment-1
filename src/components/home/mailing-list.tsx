import Image from "next/image";
import { MaxWidthWrapper } from "../shared";
import { cn } from "@/lib/utils";
import { BEBAS_NEUE } from "@/lib/fonts";
import { Button } from "../ui/button";

export const MailingList = () => {
  return (
    <>
      <section className="overflow-y-hidden bg-[#B1DCDD] bg-[url('/assets/hero-noise.svg')] max-sm:min-h-dvh sm:h-dvh">
        <MaxWidthWrapper className="flex h-full items-center">
          <div className="my-24 flex justify-between sm:my-0">
            <div className="flex flex-1 flex-grow flex-col items-center gap-4 sm:flex-row sm:gap-8">
              <div className="w-fit">
                <Image
                  height={598}
                  width={545}
                  priority
                  src="/assets/mailing-img.svg"
                  alt="hero-image"
                  className="pointer-events-none h-full select-none"
                />
              </div>
              <div className="mt-6 flex flex-1 flex-col gap-4 sm:mt-0 sm:gap-8">
                <h1 className={cn("", BEBAS_NEUE.className)}>
                  join the <br className="hidden sm:block" /> mailing list
                </h1>
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do <br className="hidden sm:block" /> eiusmod tempor
                  incididunt.
                </h2>
                <div className="h-px w-full bg-primary" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
                <div className="mt-1">
                  <Button>Subscribe</Button>
                </div>
              </div>
            </div>
            {/* TODO: make the counter functional */}
            {/* counter */}
            <div className="hidden w-24 items-start justify-end gap-3 sm:flex">
              <div className="h-full">
                <div className="h-[90px]" />
                <p>
                  <span className="font-semibold">03</span> / 04
                </p>
              </div>
              <div className="h-40 w-2 rounded-full bg-primary/20">
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
