import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
export const MyService = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 p-6 bg-gray-100 rounded-lg md:flex-row">
      <div className="w-full h-auto bg-gray-300 rounded-lg md:w-1/3">
        <img src="" alt="" className="object-cover w-full h-full rounded-lg" />
      </div>
      <div className="flex flex-col w-full gap-4">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex flex-col items-start gap-1">
            <Badge>Food</Badge>
            <div>
              <h3 className="text-2xl font-bold">Service Name</h3>
              <p>Company Name</p>
            </div>
          </div>
          <button className="mt-2 btn md:mt-0">Delete</button>
          <button className="mt-2 btn md:mt-0">Update</button>
        </div>
        <div className="text-sm md:text-base">Short Description of Product</div>
        <button onClick={() => navigate("/ServiceDetailsPage")} className="btn">
          Know More
        </button>
      </div>
    </div>
  );
};
