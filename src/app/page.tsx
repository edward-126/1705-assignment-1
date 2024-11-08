import { Hero, HomeCards, MailingList } from "@/components/home";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Hero />
        <HomeCards />
        <MailingList />
      </div>
    </>
  );
}
