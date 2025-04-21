import { useEffect, useState } from "react";
import { RecentReview } from "./RecentReview";
import Slider from "react-slick";

export const RecentReviews = () => {
  const [allReviews, setAllReviews] = useState([]);

  const settings = {
    dots: true, // Enable dots at the bottom
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 3, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Auto-slide
    autoplaySpeed: 1500, // Time between slides (in ms)
  };

  // useEffect(() => {
  //   fetch("https://insight-hub-server.vercel.app/services/reviews")
  //     .then((res) => res.json())
  //     .then((data) => setAllReviews(data));
  // }, []);

  useEffect(() => {
    fetch("https://insight-hub-server.vercel.app/allreviews")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch reviews");
        return res.json();
      })
      .then((data) => {
        console.log(data); // Check the structure of the data
        setAllReviews(data);
      })
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);
  console.log(allReviews);

  return (
    <div>
      <h2 className="mb-12 font-bold text-center text-gray-800 text-3xl/normal">
        Listen Latest Experience From Worldwide Users
        <br /> And Their Insight About Services
      </h2>
      {/* <div className="grid grid-cols-3 gap-4">
        {allReviews.map((review, index) => (
          <RecentReview key={index} review={review}></RecentReview>
        ))}
      </div> */}
      <div className="w-full ">
        <Slider {...settings}>
          {allReviews.map((review, index) => (
            <div key={index} className="flex-none p-2">
              {/* Added spacing */}
              <RecentReview review={review}></RecentReview>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
