import { useEffect, useState } from "react";
import { ServiceCard } from "./ServiceCard";

export const ServiceCards = () => {
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/services")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setServices(data);
  //     });
  // }, []);
  // console.log(services);

  //-------------------------------------------------------------

  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fetch services based on search and filter
  const fetchServices = () => {
    const query = new URLSearchParams({
      serviceTitle: searchTerm,
      category: selectedCategory === "All" ? "" : selectedCategory,
    }).toString();

    fetch(`http://localhost:5000/search?${query}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .catch((error) => console.error("Error fetching services:", error));
  };

  // Fetch unique categories for filter dropdown
  const fetchCategories = () => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  };

  useEffect(() => {
    fetchServices(); // Fetch services initially and whenever filters change
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    fetchCategories(); // Fetch categories on component mount
  }, []);

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-center">
        Find Your Service Partner
      </h2>
      <div className="flex flex-col items-center gap-6 p-6 mb-6">
        {/* Search Input */}
        <div className="w-full max-w-md">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by Service Title"
            className="w-full p-2 text-lg text-gray-800 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
          />
        </div>

        {/* Categories */}
        <div className="w-full max-w-2xl p-2 rounded-full shadow-sm bg-slate-100">
          <div className="flex flex-wrap justify-center gap-4 flex-shrink-1">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm font-medium text-black rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-200 hover:bg-blue-600"
                    : "bg-white hover:bg-gray-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 ">
        {services.length === 0 ? (
          <p>Loading services...</p>
        ) : (
          services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))
        )}
      </div>
    </div>
    //-----------------------------------------------------------------
    // <div className="p-6 text-white bg-black">
    //   <h1 className="mb-6 text-2xl font-bold text-center">Services</h1>

    //   {/* Search Input */}
    //   <div className="flex justify-center mb-4">
    //     <input
    //       type="text"
    //       value={searchTerm}
    //       onChange={(e) => setSearchTerm(e.target.value)}
    //       placeholder="Search by Service Title"
    //       className="w-2/3 p-2 text-black border border-white rounded-lg"
    //     />
    //   </div>

    //   {/* Category Filter Dropdown */}
    //   <div className="flex justify-center mb-6">
    //     <select
    //       value={selectedCategory}
    //       onChange={(e) => setSelectedCategory(e.target.value)}
    //       className="w-2/3 p-2 text-black border border-white rounded-lg"
    //     >
    //       <option value="">All Categories</option>
    //       {categories.map((category, index) => (
    //         <option key={index} value={category}>
    //           {category}
    //         </option>
    //       ))}
    //     </select>
    //   </div>

    //   {/* Service Cards */}
    //   <div className="grid grid-cols-1 gap-6">
    //     {services.length === 0 ? (
    //       <p>Loading services...</p>
    //     ) : (
    //       services.map((service) => (
    //         <ServiceCard key={service._id} service={service}></ServiceCard>
    //       ))
    //     )}
    //   </div>
    // </div>
  );
};
