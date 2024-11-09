import { cn } from "@/lib/utils";

export const Counter = ({
  className,
  id,
}: {
  className?: string;
  id: number;
}) => {
  const limitedId = Math.min(id, 4);

  return (
    <div
      className={cn(
        "hidden w-24 items-start justify-end gap-3 sm:flex",
        className,
      )}
    >
      <div className="h-full">
        <div
          className={cn(
            "",
            limitedId === 1 && "h-[10px]",
            limitedId === 2 && "h-[50px]",
            limitedId === 3 && "h-[90px]",
            limitedId === 4 && "h-[130px]",
          )}
        />

        {/* section number */}
        <p>
          <span className="font-semibold">0{limitedId}</span> / 04
        </p>
      </div>
      <div className="h-40 w-2 rounded-full bg-primary/20">
        {Array.from({ length: limitedId - 1 }).map((_, idx) => (
          <div key={idx} className="h-1/4 w-full bg-transparent" />
        ))}
        {/* indicator pill */}
        <div className="h-1/4 w-full rounded-full bg-primary" />
      </div>
    </div>
  );
};
