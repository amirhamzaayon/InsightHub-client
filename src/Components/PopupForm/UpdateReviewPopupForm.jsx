import { useContext, useState, useEffect } from "react";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "@/Providers/AuthProvider";
import { useParams } from "react-router-dom";

const UpdateReviewPopupForm = ({ review }) => {
  // const { id } = useParams(); // Service ID
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => setIsOpen(!isOpen);

  const [rating, setRating] = useState(review.reviews?.rating || 0);
  const [reviewText, setReviewText] = useState(review.reviews?.review || "");

  console.log(review._id);

  useEffect(() => {
    setRating(review.reviews?.rating || 0);
    setReviewText(review.reviews?.review || "");
  }, [review]);

  const handleRatingUpdate = (rate) => {
    setRating(rate);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();

    const updatedReview = {
      userEmail: user.email, // Include the user's email
      review: reviewText,
      rating,
      updatedDate: new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };

    fetch(`http://localhost:5000/services/${review._id}/reviews`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert("Review updated successfully!");
        }
        togglePopup();
      })
      .catch((error) => console.error("Error updating review:", error));
  };

  return (
    <div>
      <button
        onClick={togglePopup}
        className="px-4 py-2 text-white bg-black rounded hover:bg-gray-800"
      >
        Update Form
      </button>

      {isOpen && (
        <div className="w-full p-6 bg-white rounded-lg shadow-md">
          <form onSubmit={handleSubmitReview} className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-700">Edit Review</h2>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-700"
                onClick={togglePopup}
              >
                ✕
              </button>
            </div>

            {/* Star Rating */}
            <div>
              <label className="block font-semibold text-gray-700">
                Rating
              </label>
              <Rating
                emptySymbol={<FaStar className="text-3xl text-gray-400" />}
                fullSymbol={<FaStar className="text-3xl text-yellow-500" />}
                fractions={2}
                onChange={handleRatingUpdate}
                initialRating={rating}
                className="text-2xl text-yellow-500"
              />
            </div>

            {/* Review Text */}
            <div>
              <label className="block font-semibold text-gray-700">
                Your Review
              </label>
              <textarea
                name="reviewText"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-black focus:border-black"
                placeholder="Write your review here..."
                rows="5"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-800"
            >
              Update Review
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateReviewPopupForm;
