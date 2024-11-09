"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { NAVLINKS } from "./home-nav";
import { Button } from "../ui/button";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <>
      <div className="z-50 block h-7 sm:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>
            <Menu className="size-7" onClick={() => setIsOpen(true)} />
          </SheetTrigger>
          <SheetContent className="h-full">
            <SheetHeader className="h-full">
              <SheetTitle className="hidden pb-5">
                <div className="" onClick={() => setIsOpen(false)}></div>
              </SheetTitle>
              <SheetDescription className="hidden"></SheetDescription>
              <div className="flex h-full flex-col justify-between">
                <div className="flex flex-col gap-6 pt-5">
                  {NAVLINKS.map((item, idx) => (
                    <div className="" key={idx}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex text-xl text-muted-foreground transition-all duration-300 ease-in-out hover:text-primary active:scale-[0.98]",
                          pathname === item.href && "font-medium text-primary",
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </div>
                <Button
                  variant={"outline"}
                  className="bg-transparent hover:bg-transparent"
                  asChild
                >
                  <Link href="/register">Register for Upcoming Events</Link>
                </Button>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};
