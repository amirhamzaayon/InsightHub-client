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
        <div className="relative w-full h-auto bg-gray-300 border rounded-lg md:w-1/3 border-green-600/25">
          <img
            src={serviceImage}
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="absolute inset-0 w-full h-full rounded-lg bg-gradient-to-t from-green-900/80 to-transparent">
            <div className="flex flex-col items-center justify-end w-full h-full p-4 text-gray-300">
              <h3 className="text-sm font-medium">{serviceTitle}</h3>
              <p className="text-sm font-semibold">
                By <strong className="text-green-400">{companyName}</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 ">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex flex-col items-start gap-1">
              <div className="p-2 text-xs bg-green-300 rounded-full badge">
                {category}
              </div>
              <div>
                <h3 className="text-2xl font-bold">{serviceTitle}</h3>
                <p>
                  Provided by <strong>{companyName}</strong>
                </p>
              </div>
            </div>
            <div className="space-y-1 text-right">
              <p className="text-sm font-semibold text-gray-600">
                Starting Packgage
              </p>
              <div className="p-2 text-xs bg-green-300 rounded-full badge">
                {priceRange}
              </div>
            </div>
          </div>
          <div className="text-sm md:text-base">{description}</div>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
            <Link
              to={`/ServiceDetailsPage/${_id}`}
              className="bg-green-200 rounded-full btn hover:bg-green-300 border-green-600/25"
            >
              <button className="">Get Insight</button>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M12.007 2.05932L1.0033 13.0557"
                  stroke="#1C1C1C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M6.00728 1.18866C6.00728 1.18866 11.6409 0.715645 12.4957 1.57084C13.3503 2.42604 12.8734 8.05944 12.8734 8.05944"
                  stroke="#1C1C1C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
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
        </div>
      </div>
    )
  );
};
