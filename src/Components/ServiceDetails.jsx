import { Badge } from "@/components/ui/badge";
import { FaStar } from "react-icons/fa6";
export const ServiceDetails = () => {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-lg">
      <div>
        <img
          className="w-full h-auto border-8 rounded-lg border-slate-100"
          src="/hero-images/pexels-danikprihodko.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start gap-1">
          <Badge>Category</Badge>
          <div className="flex items-center justify-between w-full gap-6 ">
            <div>
              <h3 className="text-2xl font-bold">Service Name</h3>
              <p>Company Name</p>
            </div>
            <div>
              <FaStar />
            </div>
          </div>
        </div>

        <div className="w-full h-32 p-4 rounded-lg bg-slate-100">
          Short Description of Product
        </div>
        <div className="flex gap-4">
          <button className="flex-grow btn">Price Ranges</button>
          <button className="flex-grow btn">Visite Website</button>
        </div>
        <button className="rounded-full btn">Book Now</button>
      </div>
    </div>
  );
};
