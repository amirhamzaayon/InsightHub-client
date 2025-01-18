import { Badge } from "@/components/ui/badge";

import UpdateReviewPopupForm from "./PopupForm/UpdateReviewPopupForm";
import { AuthContext } from "@/Providers/AuthProvider";
import { useContext } from "react";
export const MyReview = ({ review }) => {
  const { user } = useContext(AuthContext);
  const handleDelete = () => {
    // if (user.email !== userEmail) {
    //   alert("You are not authorized to delete this review!");
    //   return;
    // }

    const confirmation = window.confirm(
      "Are you sure you want to delete this review?"
    );
    if (!confirmation) return;

    fetch(
      `http://localhost:5000/services/${review._id}/reviews?userEmail=${user.email}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert("Review deleted successfully!");
          // if (onReviewDeleted) onReviewDeleted(); // Optional callback to refresh UI
        }
      })
      .catch((error) => console.error("Error deleting review:", error));
  };
  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 bg-gray-100 rounded-lg">
        <div className="flex items-end justify-between gap-1">
          <h3 className="text-2xl font-bold">{review.serviceTitle}</h3>
          <Badge>{review.category}</Badge>
        </div>
        <div className="p-4 rounded-sm bg-slate-50 min-h-24">
          <p>Rating: {review.reviews.rating}</p>
          <p>{review.reviews.review}</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex-grow btn" onClick={() => handleDelete()}>
            Delete
          </button>
          <UpdateReviewPopupForm review={review}></UpdateReviewPopupForm>
        </div>
      </div>
    </div>
  );
};
