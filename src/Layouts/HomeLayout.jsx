import { Outlet } from "react-router-dom";
import { Footer } from "../Components/Footer";
import { FrequentlyQuestion } from "../Components/FrequentlyQuestion";
import { RecentReview } from "../Components/RecentReview";
import { HeroSection } from "../Components/HeroSection";
import { NavBar } from "../Components/NavBar";
import { OurPartners } from "../Components/OurPartners";

export const HomeLayout = () => {
  return (
    <div className="font-roboto">
      <header className="w-10/12 mx-auto mt-6">
        <NavBar></NavBar>
        <HeroSection></HeroSection>
      </header>
      <main>
        <section>
          <Outlet></Outlet>
        </section>
        <section>
          <OurPartners></OurPartners>
        </section>
        <section>
          <RecentReview></RecentReview>
        </section>
        <section>
          <FrequentlyQuestion></FrequentlyQuestion>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};
