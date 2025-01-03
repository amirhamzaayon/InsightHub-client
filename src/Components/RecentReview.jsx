import { Badge } from "@/components/ui/badge";

export const RecentReview = () => {
  return (
    <div className="flex flex-col w-auto gap-4 p-6 bg-gray-100 rounded-lg">
      <div className="flex items-end justify-between gap-1">
        <h3 className="text-2xl font-bold">
          Service Name <br /> Name
        </h3>
        <Badge>Food</Badge>
      </div>
      <div className="p-4 rounded-sm bg-slate-50 min-h-24">
        <p>Review of Service</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-gray-300 rounded-full">
          <img src="" alt="" />
        </div>
        <div className="flex flex-col ">
          <p className="font-semibold">Reviewer Name</p>
          <p>Review Date</p>
        </div>
      </div>
    </div>
  );
};
