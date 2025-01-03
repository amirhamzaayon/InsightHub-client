import { ServiceReview } from "@/Components/ServiceReview";
import { RelatedServices } from "../Components/RelatedServices";
import { ServiceDetails } from "../Components/ServiceDetails";
import { NavBar } from "@/Components/NavBar";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import AddReviewPopupForm from "@/Components/PopupForm/AddReviewPopupForm";

export const ServiceDetailsPage = () => {
  const [isReviewPopupOpen, setIsReviewPopupOpen] = useState(false);
  const [rating, setRating] = useState(0);

  console.log(rating);

  const handleOpenPopup = () => setIsReviewPopupOpen(true);
  const handleClosePopup = () => setIsReviewPopupOpen(false);
  const handleRatingChange = (rate) => setRating(rate);

  return (
    <div className="w-8/12 mx-auto">
      <div className="py-6">
        <NavBar></NavBar>
      </div>
      <section className="container flex min-h-screen gap-4 p-6 mx-auto rounded-lg outline-lime-100 bg-slate-50">
        <div className="w-1/2 bg-white rounded-md">
          <ServiceDetails></ServiceDetails>
        </div>
        <div className="w-1/2 bg-white rounded-md">
          <div className="flex items-center justify-between gap-4 p-4 m-6 bg-gray-100 rounded-lg">
            <h3 className="text-2xl font-bold">Service Name</h3>
            <Badge>Food</Badge>
          </div>
          <ServiceReview></ServiceReview>
          <button className="m-6 btn" onClick={handleOpenPopup}>
            Add Review
          </button>
          <div className="m-6">
            {/* AddReviewPopupForm */}
            {isReviewPopupOpen && (
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
