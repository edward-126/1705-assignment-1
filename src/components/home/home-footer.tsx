import Link from "next/link";
import { MaxWidthWrapper } from "../shared";
import { Button } from "../ui/button";

export const HomeFooter = () => {
  return (
    <>
      <footer className="bg-primary pb-1 pt-16 text-background">
        <MaxWidthWrapper className="flex flex-col gap-10">
          <div className="flex items-center justify-end">
            <Button className="border border-background">
              Ask Us Anything
            </Button>
          </div>
          <div className="flex flex-col items-center justify-between gap-1 border-t border-background py-6 sm:flex-row">
            <small>
              Copyright © 2022 Kerner Norland. All Rights Reserved.
            </small>
            <div className="space-x-8">
              <Link
                href="/terms"
                className="transition-all duration-300 ease-in-out hover:text-muted-foreground"
              >
                <small className="underline underline-offset-4">
                  Terms of Service
                </small>
              </Link>
              <Link
                href="/privacy"
                className="transition-all duration-300 ease-in-out hover:text-muted-foreground"
              >
                <small>Privacy Policy</small>
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </footer>
    </>
  );
};
