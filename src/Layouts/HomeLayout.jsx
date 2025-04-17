import { Outlet } from "react-router-dom";
import { Footer } from "../Components/Footer";
import { FrequentlyQuestion } from "../Components/FrequentlyQuestion";
import { HeroSection } from "../Components/HeroSection";
import { NavBar } from "../Components/NavBar";
import { OurPartners } from "../Components/OurPartners";
import { ServiceCard } from "@/Components/ServiceCard";
import { RecentReviews } from "@/Components/RecentReviews";

export const HomeLayout = () => {
  return (
    <div className="font-roboto">
      <header className="w-10/12 mx-auto mt-6">
        <NavBar></NavBar>
        <section id="Home">
          <HeroSection></HeroSection>
        </section>
      </header>
      <main>
        <section className="w-10/12 py-12 mx-auto">
          <OurPartners></OurPartners>
        </section>
        <section id="ServiceCards" className="w-6/12 py-12 mx-auto">
          <ServiceCard></ServiceCard>
          <Outlet></Outlet>
        </section>
        <section className="w-6/12 py-12 mx-auto">
          <RecentReviews></RecentReviews>
        </section>
        <section id="faq" className="w-6/12 py-12 mx-auto">
          <FrequentlyQuestion></FrequentlyQuestion>
        </section>
      </main>
      <footer className="w-10/12 mx-auto ">
        <Footer></Footer>
      </footer>
    </div>
  );
};
