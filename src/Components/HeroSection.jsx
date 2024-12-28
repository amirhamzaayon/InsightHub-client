import Slider from "react-slick";
export const HeroSection = () => {
  const images = [
    "../../public/hero-images/pexels-danikprihodko.jpg",
    "../../public/hero-images/pexels-giancarlo-gallardo.jpg",
    "../../public/hero-images/pexels-olia-danilevich.jpg",
    "../../public/hero-images/priscilla-du-preez.jpg",
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
    <div className="w-full min-h-screen mt-6 rounded-2xl">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <div
              className="w-full min-h-screen bg-no-repeat bg-cover rounded-2xl"
              style={{
                //   height: "500px",
                backgroundImage: `url(${img})`,
                //   backgroundSize: "cover",
                //   backgroundPosition: "center",
              }}
            ></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
