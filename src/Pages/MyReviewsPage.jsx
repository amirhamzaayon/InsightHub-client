import { useContext, useEffect, useState } from "react";
import { MyReview } from "../Components/MyReview";
import { AuthContext } from "@/Providers/AuthProvider";

export const MyReviewsPage = () => {
  const [myReviews, setMyReviews] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://insight-hub-server.vercel.app/reviews?userEmail=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user.email, myReviews]);

  console.log(myReviews);
  return (
    <div>
      <section className="flex flex-col gap-6">
        {myReviews.length ? (
          myReviews.map((review) => (
            <MyReview key={review._id} review={review}></MyReview>
          ))
        ) : (
          <p>No Review Found</p>
        )}
      </section>
    </div>
  );
};
