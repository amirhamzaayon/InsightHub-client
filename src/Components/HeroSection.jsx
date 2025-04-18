// import Slider from "react-slick";
// export const HeroSection = () => {
//   const images = [
//     "/hero-images/car-repair.jpg",
//     "/hero-images/electrician.jpg",
//     "/hero-images/food-delivery.jpg",
//     "/hero-images/pet-care.jpg",
//   ];

//   const settings = {
//     dots: true, // Enable dots at the bottom
//     infinite: true, // Infinite looping
//     speed: 500, // Transition speed
//     slidesToShow: 1, // Show one slide at a time
//     slidesToScroll: 1, // Scroll one slide at a time
//     autoplay: true, // Auto-slide
//     autoplaySpeed: 3000, // Time between slides (in ms)
//   };

//   return (
//     <div className="w-full h-[calc(100vh-132px)] mt-6 bg-gradient-to-br from-green-100 via-white to-green-100 rounded-2xl">
//       <div className="flex">
//         <div className="flex flex-col w-1/2 gap-4 pr-8 p-36">
//           <h1 className="text-6xl font-bold text-gray-800 ">
//             <span className="px-4 py-1 text-base font-bold text-green-400 bg-gray-800 rounded-full font w-fit">
//               Not Only Get the Service but Also Insight
//             </span>{" "}
//             <br />
//             Take the Best Services <br />
//             Based on Pure Insight
//           </h1>
//           <p className="py-4 text-xl font-semibold text-gray-600 ">
//             Explore a wide range of services tailored to your needs. <br />
//             From home repairs to pet care, we've got you covered.
//           </p>
//           <button className="px-8 py-6 text-lg font-bold text-gray-800 bg-green-400 border-gray-200 rounded-full w-fit btn hover:bg-green-300">
//             Get Your Expert
//           </button>
//         </div>
//         <div className="w-1/2 p-36">
//           <Slider {...settings}>
//             {images.map((img, index) => (
//               <div key={index}>
//                 <div
//                   className="bg-no-repeat bg-cover rounded-full w-fit h-fit "
//                   style={{
//                     //   height: "500px",
//                     backgroundImage: `url(${img})`,
//                     //   backgroundSize: "cover",
//                     //   backgroundPosition: "center",
//                   }}
//                 ></div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

import Slider from "react-slick";
export const HeroSection = () => {
  const images = [
    "/hero-images/car-repair.jpg",
    "/hero-images/electrician.jpg",
    "/hero-images/food-delivery.jpg",
    "/hero-images/pet-care.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="w-full min-h-[calc(100vh-132px)] mt-6 bg-gradient-to-br from-green-100 via-white to-green-100 rounded-2xl">
      <div className="flex flex-col lg:flex-row">
        {/* Text Content */}
        <div className="flex flex-col w-full gap-4 p-6 lg:w-1/2 md:p-12 lg:p-20 xl:p-36">
          <h1 className="text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl xl:text-6xl">
            <span className="inline-block px-3 py-1 mb-2 text-xs font-bold text-green-400 bg-gray-800 rounded-full md:text-sm lg:text-base">
              Not Only Get the Service but Also Insight
            </span>{" "}
            <br />
            Take the Best Services <br />
            Based on Pure Insight
          </h1>
          <p className="py-2 text-base font-semibold text-gray-600 md:py-4 md:text-lg xl:text-xl">
            Explore a wide range of services tailored to your needs.{" "}
            <br className="hidden md:block" />
            From home repairs to pet care, we've got you covered.
          </p>
          <button className="px-6 py-3 text-base font-bold text-gray-800 transition duration-300 bg-green-400 border-gray-200 rounded-full md:px-8 md:py-4 lg:py-6 md:text-lg w-fit btn hover:bg-green-300">
            Get Your Expert
          </button>
        </div>

        {/* Image Slider */}
        <div className="w-full p-6 lg:w-1/2 md:p-12 lg:p-20 xl:p-36">
          <div className="relative w-full h-full">
            <Slider {...settings}>
              {images.map((img, index) => (
                <div key={index} className="relative">
                  <div className="relative w-full h-64 overflow-hidden md:h-80 lg:h-96 rounded-xl">
                    {/* Image */}
                    <img
                      src={img}
                      alt={`Service ${index + 1}`}
                      className="object-cover w-full h-full"
                    />

                    {/* Gradient Overlay - Bottom to Top */}
                    <div className="absolute inset-0 bg-gradient-to-t from-green-400/70 to-transparent"></div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
