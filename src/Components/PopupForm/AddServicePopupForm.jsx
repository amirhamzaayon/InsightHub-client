import { AuthContext } from "@/Providers/AuthProvider";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddServicePopupForm = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  const { user } = useContext(AuthContext);

  const handleAddService = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.entries())
    const initialData = Object.fromEntries(formData.entries());

    // Add additional data
    initialData.ownerEmail = user?.email || "anonymous@example.com"; // Default to anonymous if user is undefined
    initialData.ownerName = user?.displayName || "Anonymous"; // Default to Anonymous if displayName is not available
    initialData.reviewsInfo = [{ averageRating: 0 }, { totalReviews: 0 }]; // Add a default reviewInfo object
    initialData.reviews = []; // Add an empty reviews array
    initialData.addedDate = new Date()
      .toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      .replace(",", "");

    console.log(initialData);

    fetch("https://insight-hub-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(initialData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Service Has been Added.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/features/MyServices");
        }
      });
  };

  // userEmail;
  // ("contact@techsolutions.com");
  // addedDate;
  // ("2023-01-10");

  return (
    <div>
      <button
        onClick={togglePopup}
        className="px-4 py-2 text-white bg-black rounded hover:bg-gray-800"
      >
        Open Form
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
            {/* Close Button */}
            <button
              onClick={togglePopup}
              className="absolute text-gray-500 top-4 right-4 hover:text-black"
            >
              ✕
            </button>

            {/* Form */}
            <form onSubmit={handleAddService} className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block font-semibold text-gray-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-black focus:border-black"
                    placeholder="Enter company name"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700">
                    Service Name
                  </label>
                  <input
                    type="text"
                    name="serviceTitle"
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-black focus:border-black"
                    placeholder="Enter service name"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block font-semibold text-gray-700">
                    Category
                  </label>
                  <select
                    name="category"
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-black focus:border-black"
                  >
                    <option selected disabled>
                      Please Select an Option
                    </option>
                    <option>Electrical</option>
                    <option>Health Care</option>
                    <option>Pet Care</option>
                    <option>Car Repair</option>
                    <option>Food</option>
                    <option>Travel</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-gray-700">
                    Price Range
                  </label>
                  <select
                    name="priceRange"
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-black focus:border-black"
                  >
                    <option selected disabled>
                      Please Select an Price Range
                    </option>
                    <option>500-1000 BDT</option>
                    <option>1000-2000 BDT</option>
                    <option>2000-3000 BDT</option>
                    <option>3000-5000 BDT</option>
                    <option>Above 5000 BDT</option>
                  </select>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block font-semibold text-gray-700">
                    Service Image File
                  </label>
                  <input
                    type="text"
                    name="serviceImage"
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-black focus:border-black"
                    placeholder="Enter image file path"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700">
                    Website Link
                  </label>
                  <input
                    type="url"
                    name="website"
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-black focus:border-black"
                    placeholder="Enter website link"
                  />
                </div>
              </div>

              {/* Row 4 */}
              <div>
                <label className="block font-semibold text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-black focus:border-black"
                  placeholder="Enter description"
                  rows="4"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddServicePopupForm;
