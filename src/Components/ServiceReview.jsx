export const ServiceReview = ({ reviews }) => {
  console.log(reviews);
  return (
    <>
      {reviews.map((review, index) => (
        <div
          key={index}
          className="flex flex-col w-auto gap-4 p-4 m-6 border rounded-lg bg-gradient-to-t from-green-50/50 via-white to-green-50/50 border-green-400/25"
        >
          <div className="flex items-center gap-2">
            <div className="w-10 bg-gray-400 rounded-full">
              <img className="rounded-full" src={review.userProfile} alt="" />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">{review.userName}</p>
              <p className="text-sm font-semibold text-gray-500">
                {review.userEmail}
              </p>
              <p className="text-sm font-semibold text-gray-500">
                {review.addedDate}
              </p>
            </div>
          </div>
          <div className="p-4 border rounded-sm bg-green-50 min-h-24 border-green-400/10">
            <p>Rating: {review.rating}</p>
            <p>{review.review}</p>
          </div>
        </div>
      ))}
    </>
  );
};
