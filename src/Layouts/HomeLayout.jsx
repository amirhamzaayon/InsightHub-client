import { Outlet } from "react-router-dom";
import { Footer } from "../Components/Footer";
import { FrequentlyQuestion } from "../Components/FrequentlyQuestion";
import { RecentReview } from "../Components/RecentReview";
import { HeroSection } from "../Components/HeroSection";
import { NavBar } from "../Components/NavBar";
import { OurPartners } from "../Components/OurPartners";
import { Button } from "@/Components/ui/button";

export const HomeLayout = () => {
  return (
    <div className="font-roboto">
      <header className="w-10/12 mx-auto mt-6">
        <NavBar></NavBar>
        <HeroSection></HeroSection>
      </header>
      <main>
        <section className="w-10/12 py-12 mx-auto">
          <OurPartners></OurPartners>
        </section>
        <section>
          <Outlet></Outlet>
        </section>
        <section>
          <RecentReview></RecentReview>
        </section>
        <section className="w-6/12 py-12 mx-auto">
          <FrequentlyQuestion></FrequentlyQuestion>
        </section>
      </main>
      <footer className="w-10/12 mx-auto ">
        <Footer></Footer>
      </footer>
    </div>
  );
};
