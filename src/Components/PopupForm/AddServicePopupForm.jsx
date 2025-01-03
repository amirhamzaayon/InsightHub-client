import { useState } from "react";

const AddServicePopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

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
            <form className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block font-semibold text-gray-700">
                    Company Name
                  </label>
                  <input
                    type="text"
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
                  <select className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-black focus:border-black">
                    <option>Food</option>
                    <option>Travel</option>
                    <option>Home Service</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-gray-700">
                    Price Range
                  </label>
                  <select className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-black focus:border-black">
                    <option>500-1000 BDT</option>
                    <option>1000-2000 BDT</option>
                    <option>2000-5000 BDT</option>
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
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-black focus:border-black"
                    placeholder="Enter image file path"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700">
                    Website Link
                  </label>
                  <input
                    type="text"
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
