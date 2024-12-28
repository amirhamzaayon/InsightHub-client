import { RelatedServices } from "../Components/RelatedServices";
import { ServiceDetails } from "../Components/ServiceDetails";

export const ServiceDetailsPage = () => {
  return (
    <div>
      <section>
        <ServiceDetails></ServiceDetails>
        <ServiceDetails></ServiceDetails>
      </section>
      <section>
        <RelatedServices></RelatedServices>
      </section>
    </div>
  );
};
