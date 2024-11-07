import { cn } from "@/lib/utils";

export const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1116px] px-3 sm:px-0", className)}
    >
      {children}
    </div>
  );
};
