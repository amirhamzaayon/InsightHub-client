export const RecentReview = ({ review }) => {
  if (!review || !review.reviews) {
    return null;
  }
  return (
    <div className="flex flex-col w-auto gap-4 p-6 border rounded-lg bg-gradient-to-t from-green-50 via-white to-green-50 border-green-400/25">
      <div className="flex justify-between gap-2">
        <h3 className="text-xl font-medium">
          {review.serviceTitle} <br /> {review.companyName}
        </h3>
        <p className="p-2 bg-green-300 rounded-full badge">{review.category}</p>
      </div>
      <div className="p-4 border rounded-sm bg-slate-50/25 border-green-400/25 min-h-24">
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
