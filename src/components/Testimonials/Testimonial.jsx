import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import kunal1 from "../../img/kunal1.png";
import Ankit from "../../img/Ankit.png";
import kapish1 from "../../img/kapish1.png";

import pragya from "../../img/pragya.png";

const Testimonial = () => {
  const clients = [
    {
      img: kunal1,
        review:
          "Working with Tushar kumar mishra has been an absolute game-changer for our website. From the very beginning, it was clear that we were in the hands of a true expert..",
 },

    {
      img: kapish1,
      review:
        "What truly sets Tushar kumar mishra apart is their unwavering commitment to going above and beyond.Offering innovative solutions and timely responses throughout the entire process..",
    },
    {
      img:Ankit,
      review:
        " Their ability to transform ideas into a visually captivating and user-friendly website is nothing short of remarkable. he is possesses an innate talent for understanding our brand..",
    },
    {
      img: pragya,
      review:
        "If you're seeking a web designer who delivers excellence consistently, radiates professionalism, and is a delight to collaborate with, Tushar kumarr mishra is the one..",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
