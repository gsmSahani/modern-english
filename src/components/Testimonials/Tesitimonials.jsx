import React, { useMemo, useState } from "react";
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet-async";
import LazyLoad from "react-lazyload";
import testimonialsData from "../../config/testimonialsData";

const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const renderStars = useMemo(() => (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
        {halfStar === 1 && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={i} className="text-gray-300" />
        ))}
        <span className="ml-2">{rating.toFixed(1)}</span>
      </div>
    );
  }, []);

  return (
    <>
      <Helmet>
        <title>Spoken English Coaching in Pardi Valsad</title>
        <meta
          name="description"
          content="Read testimonials from our students and learn how our English coaching center in Pardi Valsad, Gujarat, has helped them improve their skills."
        />
      </Helmet>
      <div className="dark:bg-gray-600 dark:text-white">
        <h2 className="text-3xl font-bold text-center dark:text-white">
          Testimonials
        </h2>
        <div className="container mx-auto w-full px-4 py-8 overflow-x-hidden dark:text-white dark:bg-gray-600 rounded-2xl">
          <Slider {...settings} className="dark:bg-gray-600">
            {testimonialsData.map((testimonial, index) => (
              <LazyLoad key={index} height={200} offset={100}>
                <div className="p-6 flex justify-center overflow-x-hidden dark:text-white">
                  <div className="max-w-lg h-96 mx-auto rounded-lg shadow-lg p-6 flex flex-col items-center text-center bg-slate-200 dark:bg-black">
                    <LazyLoad height={150} offset={100}>
                      <img
                        src={testimonial.image.replace(/\.jpg|\.png/, ".webp")}
                        alt={testimonial.name}
                        className="w-28 h-28 rounded-full mb-4 object-cover"
                        style={{ width: "150px", height: "150px" }}
                      />
                    </LazyLoad>
                    <h3 className="text-xl font-bold mb-2">
                      {testimonial.name}
                    </h3>
                    {renderStars(testimonial.rating)}
                    <p className="text-gray-600 max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-500">
                      {truncateText(testimonial.feedback, 50)}
                    </p>
                  </div>
                </div>
              </LazyLoad>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
