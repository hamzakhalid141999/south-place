import Contact from "@/components/contact";
import HomepageBanner from "@/components/homepage";
import HomepageSecond from "@/components/homepage-second";
import InvestmentOverviews from "@/components/investment-overview";
import Summary from "@/components/summary";

export default function Home() {
  return (
    <div className="">
        <HomepageBanner />
        <HomepageSecond />
        <Summary />
        <InvestmentOverviews />
        <Contact />
    </div>
  );
}
