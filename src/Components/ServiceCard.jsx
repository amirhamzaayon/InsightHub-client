import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export const ServiceCard = ({ service }) => {
  console.log(service);

  const {
    _id,
    companyName,
    serviceTitle,
    category,
    priceRange,
    serviceImage,
    description,
  } = service || {};

  return service ? (
    <div className="flex flex-col gap-4 p-6 bg-gray-100 rounded-lg md:flex-row">
      <div className="w-full h-auto bg-gray-300 rounded-lg md:w-1/3">
        <img
          src={serviceImage}
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="flex flex-col w-full gap-4">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex flex-col items-start gap-1">
            <Badge>{category}</Badge>
            <div>
              <h3 className="text-2xl font-bold">{serviceTitle}</h3>
              <p>
                Provided by <strong>{companyName}</strong>
              </p>
            </div>
          </div>
          <button className="mt-2 btn md:mt-0">{priceRange}</button>
        </div>
        <div className="text-sm md:text-base">{description}</div>
        {/* <button onClick={() => navigate("/ServiceDetailsPage")} className="btn">
          Know More
        </button> */}
        <Link to={`/ServiceDetailsPage/${_id}`} className="btn">
          <button>Know More</button>
        </Link>
      </div>
    </div>
  ) : (
    <div>Service not found</div>
  );
};
