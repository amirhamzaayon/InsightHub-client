import { ServiceReview } from "@/Components/ServiceReview";
import { RelatedServices } from "../Components/RelatedServices";
import { ServiceDetails } from "../Components/ServiceDetails";
import { NavBar } from "@/Components/NavBar";

export const ServiceDetailsPage = () => {
  return (
    <div className="w-8/12 mx-auto">
      <div className="py-6">
        <NavBar></NavBar>
      </div>
      <section className="container flex min-h-screen gap-4 p-6 mx-auto rounded-lg outline-lime-100 bg-slate-50">
        <div className="w-1/2 bg-white rounded-md">
          <ServiceDetails></ServiceDetails>
        </div>
        <div className="w-1/2 bg-white rounded-md">
          <ServiceReview></ServiceReview>
        </div>
      </section>
      <section>
        <RelatedServices></RelatedServices>
      </section>
    </div>
  );
};
