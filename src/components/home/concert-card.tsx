import Image from "next/image";

export const ConcertCard = ({
  band,
  tour,
  location,
  date,
  imgUrl,
}: {
  band: string;
  tour: string;
  location: string;
  date: string;
  imgUrl?: string;
}) => {
  return (
    <div className="flex flex-col gap-0 overflow-hidden rounded-lg bg-background">
      <div className="h-32">
        {imgUrl ? (
          <Image
            width={400}
            height={300}
            src={imgUrl}
            alt={`Cover image of ${band} ${tour}`}
            className="size-full object-cover"
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-primary/5 p-3">
            <span className="text-center font-medium opacity-50">{`${band} ${tour}`}</span>
          </div>
        )}
      </div>
      <div className="space-y-6 p-4 pb-5">
        <p className="font-semibold">{`${band} ${tour}`}</p>
        <div className="flex items-center justify-between">
          <small className="font-medium">{location}</small>
          <small className="text-muted-foreground">{date}</small>
        </div>
      </div>
    </div>
  );
};
