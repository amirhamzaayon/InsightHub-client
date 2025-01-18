import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { UpdateServicePopupForm } from "./PopupForm/UpdateServicePopupForm";
export const MyService = ({ service }) => {
  const navigate = useNavigate();
  // console.log(service);

  const {
    _id,
    companyName,
    serviceTitle,
    category,
    serviceImage,
    description,
  } = service || {};

  const handleDelete = () => {
    // if (user.email !== userEmail) {
    //   alert("You are not authorized to delete this review!");
    //   return;
    // }

    const confirmation = window.confirm(
      "Are you sure you want to delete this review?"
    );
    if (!confirmation) return;

    fetch(`https://insight-hub-server.vercel.app/services/${_id}`, {
      method: "DELETE",
    })
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
      <div className="flex flex-col gap-4 p-6 bg-gray-100 rounded-lg md:flex-row">
        <div className="w-full h-auto bg-gray-300 rounded-lg md:w-1/3">
          <img
            src={serviceImage}
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full gap-4">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex flex-col items-start gap-1">
              <Badge>{category}</Badge>
              <div>
                <h3 className="text-2xl font-bold">{serviceTitle}</h3>
                <p>{companyName}</p>
              </div>
            </div>
            <button className="mt-2 btn md:mt-0" onClick={() => handleDelete()}>
              Delete
            </button>
            {/* <button className="mt-2 btn md:mt-0"> */}
            <UpdateServicePopupForm
              serviceId={_id}
              initialData={service}
            ></UpdateServicePopupForm>
            {/* </button> */}
          </div>
          <div className="text-sm md:text-base">{description}</div>
          <button
            onClick={() => navigate(`/ServiceDetailsPage/${_id}`)}
            className="btn"
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};
