import {
  Hero,
  HomeCards,
  HomeFooter,
  HomeNews,
  MailingList,
} from "@/components/home";

export default function Home() {
  return (
    <>
      <div className="relative *:sticky *:top-0">
        <Hero />
        <HomeCards />
        <MailingList />
        <HomeNews />
        <HomeFooter />
      </div>
    </>
  );
}
