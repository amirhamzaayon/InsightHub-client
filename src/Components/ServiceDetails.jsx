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
      <div className="relative">
        <img
          className="w-full h-auto border rounded-lg border-green-600/25"
          src={serviceImage}
          alt=""
        />
        <div className="absolute inset-0 w-full h-full rounded-lg bg-gradient-to-t from-green-400/50 to-transparent">
          <div className="flex flex-col items-start justify-end w-full h-full p-4 text-gray-800/90">
            <h3 className="text-sm font-medium">{serviceTitle}</h3>
            <p className="text-sm font-semibold">
              By <strong className="text-slate-50/90">{companyName}</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start gap-1">
          <div className="p-2 bg-green-300 rounded-full badge badge-sm">
            {category}
          </div>
          <div className="flex items-center justify-between w-full gap-6 ">
            <div>
              <h3 className="text-2xl font-bold">{serviceTitle}</h3>
              <p>
                By{" "}
                <span className="font-semibold text-green-500">
                  {companyName}
                </span>
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold text-gray-800/90">
                  Average Rating:{" "}
                </span>
                {reviewsInfo[0].averageRating}{" "}
                <FaStar className="inline-block fill-green-400 " />
                <p>
                  <span className="font-semibold text-gray-800/90">
                    Total Insight Given:{" "}
                  </span>
                  {reviewsInfo[1].totalReviews}
                </p>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-32 p-4 rounded-lg bg-green-50">
          {description}
        </div>
        <div className="flex gap-4">
          <button className="flex-grow rounded-full btn bg-green-50 hover:bg-green-300 border-green-300/25">
            {priceRange}
          </button>
          <button className="flex-grow rounded-full btn bg-green-50 hover:bg-green-300 border-green-300/25">
            {" "}
            <a href={website}></a>Visit Site
          </button>
          <button className="bg-green-200 btn btn-circle hover:bg-green-300 border-green-600/25">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-[1.2em]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
        </div>
        <button className="bg-green-200 hover:bg-green-300 border-green-600/25 btn">
          Create An Schedule
        </button>
      </div>
    </div>
  );
};
