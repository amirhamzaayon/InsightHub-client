import { Link } from "react-router-dom";

export const ServiceCard = ({ service }) => {
  const {
    _id,
    companyName,
    serviceTitle,
    category,
    priceRange,
    serviceImage,
    description,
  } = service || {};

  return (
    service && (
      <div className="flex flex-col gap-4 p-6 text-gray-800 border rounded-lg md:flex-row bg-green-50 border-green-400/25">
        <div className="w-full h-auto bg-gray-300 rounded-lg md:w-1/3">
          <img
            src={serviceImage}
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full gap-4 ">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex flex-col items-start gap-1">
              <div className="p-2 bg-green-300 rounded-full badge">
                {category}
              </div>
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
          <div className="space-x-4">
            <Link
              to={`/ServiceDetailsPage/${_id}`}
              className="bg-green-200 rounded-full btn hover:bg-green-300 border-green-600/25"
            >
              <button>Know More</button>
            </Link>
            <button class="btn btn-circle ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="size-[1.2em]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
  );
};
