"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { MaxWidthWrapper } from "../shared";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";

export const NAVLINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Live",
    href: "#live",
  },
  {
    label: "Resources",
    href: "#resources",
  },
];

export const HomeNav = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className="border-b border-primary">
        <MaxWidthWrapper>
          <div className="hidden h-[4.5rem] items-center justify-end gap-6 sm:flex">
            {NAVLINKS.map((navItem, idx) => (
              <Link
                className={cn(
                  "group px-2 text-sm font-semibold",
                  pathname === navItem.href
                    ? "border-b-[2px] border-primary"
                    : "",
                )}
                href={navItem.href}
                key={idx}
              >
                <span className="transition-all duration-300 ease-in-out group-hover:text-primary/60 group-active:text-primary/90">
                  {navItem.label}
                </span>
              </Link>
            ))}
            <Button
              variant={"outline"}
              className="bg-transparent hover:bg-transparent"
              asChild
            >
              <Link href="/register">Register for Upcoming Events</Link>
            </Button>
          </div>
          <div className="flex h-20 items-center justify-end sm:hidden">
            <MobileNav />
          </div>
        </MaxWidthWrapper>
      </nav>
    </>
  );
};
