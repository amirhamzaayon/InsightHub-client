import { Badge } from "@/components/ui/badge";

export const RecentReview = ({ review }) => {
  if (!review || !review.reviews) {
    return null;
  }
  return (
    <div className="flex flex-col w-auto gap-4 p-6 bg-gray-100 rounded-lg">
      <div className="flex items-end justify-between gap-2">
        <h3 className="text-xl font-medium">
          {review.serviceTitle} <br /> {review.companyName}
        </h3>
        <Badge>
          <p>{review.category}</p>
        </Badge>
      </div>
      <div className="p-4 rounded-sm bg-slate-50 min-h-24">
        <p>Rating: {review.reviews?.rating}</p>
        <p>{review.reviews?.review}</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-10 bg-gray-300 rounded-full">
          <img
            className="rounded-full"
            src={review.reviews?.userProfile}
            alt=""
          />
        </div>
        <div className="flex flex-col ">
          <p className="font-semibold">{review.reviews?.userName}</p>
          <p>{review.reviews?.addedDate}</p>
        </div>
      </div>
    </div>
  );
};
