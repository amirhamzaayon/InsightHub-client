import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/Providers/AuthProvider";
import Swal from "sweetalert2";

export const UpdateServicePopupForm = ({ serviceId, initialData }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => setIsOpen(!isOpen);
  // const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState(initialData || {});

  // Pre-fill the form with existing service data
  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateService = (e) => {
    e.preventDefault();

    fetch(`https://insight-hub-server.vercel.app/myservices/${serviceId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Service has been updated.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/features/MyServices");
          togglePopup();
        }
      });
  };
  console.log(JSON.stringify(formData));

  return (
    <div>
      <button
        onClick={togglePopup}
        className="px-4 py-2 text-white bg-black rounded hover:bg-gray-800"
      >
        Update Form
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
            <form onSubmit={handleUpdateService} className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block font-semibold text-gray-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName || ""}
                    onChange={handleInputChange}
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
                    value={formData.serviceTitle || ""}
                    onChange={handleInputChange}
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
                    value={formData.category || ""}
                    onChange={handleInputChange}
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
                    value={formData.priceRange || ""}
                    onChange={handleInputChange}
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
                    value={formData.serviceImage || ""}
                    onChange={handleInputChange}
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
                    value={formData.website || ""}
                    onChange={handleInputChange}
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
                  value={formData.description || ""}
                  onChange={handleInputChange}
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
                Update
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
