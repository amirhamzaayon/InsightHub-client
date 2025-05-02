import { ServiceReview } from "@/Components/ServiceReview";
import { RelatedServices } from "../Components/RelatedServices";
import { ServiceDetails } from "../Components/ServiceDetails";
import { NavBar } from "@/Components/NavBar";
import { Badge } from "@/components/ui/badge";
import { useContext, useEffect, useState } from "react";
import AddReviewPopupForm from "@/Components/PopupForm/AddReviewPopupForm";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "@/Providers/AuthProvider";

export const ServiceDetailsPage = () => {
  const [isReviewPopupOpen, setIsReviewPopupOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // console.log(rating);

  const handleOpenPopup = () => setIsReviewPopupOpen(true);
  const handleClosePopup = () => setIsReviewPopupOpen(false);
  const handleRatingChange = (rate) => setRating(rate);

  const { reviews, ...serviceDetails } = useLoaderData() || {};
  // console.log(serviceDetails);
  // console.log(reviews);

  // Redirect to login if the user is not authenticated and tries to open the popup
  useEffect(() => {
    if (!user?.email && isReviewPopupOpen) {
      navigate("/auth/login");
    }
  }, [user, isReviewPopupOpen, navigate]);

  return (
    <div className="w-8/12 mx-auto">
      <div className="py-6">
        <NavBar></NavBar>
      </div>
      <section className="container flex flex-col min-h-screen gap-4 p-6 mx-auto rounded-lg md:flex-row bg-slate-50">
        <div className="w-full bg-white rounded-md md:w-1/2">
          <ServiceDetails serviceDetails={serviceDetails}></ServiceDetails>
        </div>
        <div className="w-full bg-white rounded-md md:w-1/2">
          <div className="flex items-center justify-between gap-4 p-4 m-6 rounded-lg bg-green-50">
            <h3 className="text-2xl font-bold">Service Name</h3>
            <Badge>Food</Badge>
          </div>
          <ServiceReview reviews={reviews}></ServiceReview>
          <button className="m-6 btn" onClick={handleOpenPopup}>
            Add Review
          </button>
          <div className="m-6">
            {/* AddReviewPopupForm */}
            {isReviewPopupOpen && user?.email && (
              <AddReviewPopupForm
                onClose={handleClosePopup}
                handleRatingChange={handleRatingChange}
              />
            )}
          </div>
        </div>
      </section>
      <section>
        <RelatedServices></RelatedServices>
      </section>
    </div>
  );
};
