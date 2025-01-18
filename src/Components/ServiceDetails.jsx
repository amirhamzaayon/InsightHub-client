import { Badge } from "@/components/ui/badge";
import { FaStar } from "react-icons/fa6";
export const ServiceDetails = ({ serviceDetails }) => {
  const {
    _id,
    companyName,
    serviceTitle,
    category,
    priceRange,
    serviceImage,
    website,
    description,
    reviewsInfo,
    // reviewsInfo.averageRating,
    // reviewsInfo.totalReviews,
  } = serviceDetails || {};

  return (
    <div className="flex flex-col gap-4 p-6 rounded-lg">
      <div>
        <img
          className="w-full h-auto border-8 rounded-lg border-slate-100"
          src={serviceImage}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start gap-1">
          <Badge>{category}</Badge>
          <div className="flex items-center justify-between w-full gap-6 ">
            <div>
              <h3 className="text-2xl font-bold">{serviceTitle}</h3>
              <p>{companyName}</p>
            </div>
            <div>
              <p>
                Average Rating: {reviewsInfo[0].averageRating}
                <FaStar className="inline-block" />
                <p>Total Review: {reviewsInfo[1].totalReviews}</p>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-32 p-4 rounded-lg bg-slate-100">
          {description}
        </div>
        <div className="flex gap-4">
          <button className="flex-grow btn">{priceRange}</button>
          <button className="flex-grow btn">{website}</button>
        </div>
        <button className="rounded-full btn">Book Now</button>
      </div>
    </div>
  );
};
