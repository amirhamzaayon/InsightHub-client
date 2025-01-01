import { Badge } from "@/components/ui/badge";

export const ServiceCard = () => {
  return (
    // <div className="flex gap-4 p-6 bg-gray-100 rounded-lg">
    //   <div className="w-1/3 h-auto bg-gray-300 rounded-lg">
    //     <img src="" alt="" />
    //   </div>
    //   <div className="flex flex-col w-full gap-4">
    //     <div className="flex justify-between">
    //       <div className="flex flex-col items-start gap-1">
    //         <Badge>Category</Badge>
    //         <h3 className="text-lg font-bold">Service Name</h3>
    //       </div>

    //       <button className="btn">Price</button>
    //     </div>
    //     <div>Short Description of Product</div>
    //     <button className="btn">Know More</button>
    //   </div>
    // </div>
    <div className="flex flex-col gap-4 p-6 bg-gray-100 rounded-lg md:flex-row">
      <div className="w-full h-auto bg-gray-300 rounded-lg md:w-1/3">
        <img src="" alt="" className="object-cover w-full h-full rounded-lg" />
      </div>
      <div className="flex flex-col w-full gap-4">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex flex-col items-start gap-1">
            <Badge>Food</Badge>
            <h3 className="text-lg font-bold">Service Name</h3>
          </div>
          <button className="mt-2 btn md:mt-0">Price</button>
        </div>
        <div className="text-sm md:text-base">Short Description of Product</div>
        <button className="btn">Know More</button>
      </div>
    </div>
  );
};
