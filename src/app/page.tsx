import { Hero, HomeCards } from "@/components/home";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Hero />
        <HomeCards />
      </div>
    </>
  );
}
