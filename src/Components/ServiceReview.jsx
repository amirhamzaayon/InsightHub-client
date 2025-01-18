export const ServiceReview = ({ reviews }) => {
  console.log(reviews);
  return (
    <>
      {reviews.map((review, index) => (
        <div
          key={index}
          className="flex flex-col w-auto gap-4 p-4 m-6 bg-gray-100 rounded-lg"
        >
          <div className="flex items-center gap-2">
            <div className="w-10 bg-gray-400 rounded-full">
              <img className="rounded-full" src={review.userProfile} alt="" />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">{review.userName}</p>
              <p className="font-semibold">{review.userEmail}</p>
              <p>{review.addedDate}</p>
            </div>
          </div>
          <div className="p-4 rounded-sm bg-slate-50 min-h-24">
            <p>Rating: {review.rating}</p>
            <p>{review.review}</p>
          </div>
        </div>
      ))}
    </>
  );
};
