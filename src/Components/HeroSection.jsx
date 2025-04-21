import Slider from "react-slick";
export const HeroSection = () => {
  const images = [
    "/hero-images/car-repair.jpg",
    "/hero-images/electrician.jpg",
    "/hero-images/food-delivery.jpg",
    "/hero-images/pet-care.jpg",
  ];

  const settings = {
    dots: true, // Enable dots at the bottom
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Auto-slide
    autoplaySpeed: 3000, // Time between slides (in ms)
  };

  return (
    <div className="w-full min-h-[calc(100vh-132px)] mt-6 bg-gradient-to-br from-green-100 via-white to-green-100 rounded-2xl">
      <div className="flex flex-col justify-center lg:flex-row">
        <div className="flex flex-col w-full gap-4 p-8 pr-2 lg:w-1/2 lg:pr-8 lg:p-36 ">
          <span className="px-4 py-2 text-xs font-bold text-green-400 bg-gray-800 rounded-full sm:text-sm font w-fit">
            Not Only Get the Service But Also Insight
          </span>
          <h1 className="text-3xl font-bold text-gray-800 md:text-4xl lg:text-6xl ">
            Take the Best Services <br />
            Based on Pure Insight
          </h1>
          <p className="py-4 text-xl font-semibold text-gray-600 ">
            Explore a wide range of services tailored to your needs. <br />
            From home repairs to pet care, we've got you covered.
          </p>
          <button className="px-6 py-6 text-2xl font-bold text-gray-800 bg-green-300 rounded-full border-green-600/25 w-fit btn hover:bg-green-400">
            Get Your Service
          </button>
        </div>
        <div className="lg:w-1/2 md:p-24 lg:p-36">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index}>
                <div className="relative w-full h-full overflow-hidden rounded-full aspect-[1/1]">
                  {" "}
                  ">
                  <img
                    src={img}
                    alt={`Service ${index + 1}`}
                    className="object-cover object-center w-full h-full rounded-full aspect-[1/1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-400/70 to-transparent"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
// bg-gradient-to-t from-green-400/70 to-transparent
// bg-gradient-to-br from-green-100 via-transparent to-green-100
