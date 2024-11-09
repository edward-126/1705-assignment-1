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
      <div className="relative sm:*:sticky sm:*:top-0">
        <Hero />
        <HomeCards />
        <MailingList />
        <HomeNews />
        <HomeFooter />
      </div>
    </>
  );
}
