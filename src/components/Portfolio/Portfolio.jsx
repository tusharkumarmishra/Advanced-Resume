import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import photohub1 from "../../img/photohub1.png";
import signupform from "../../img/signupform.png";
import Employeereviewsystem1 from "../../img/Employeereviewsystem1.png";
import cv from "../../img/cv.png";
import ipodreact1 from "../../img/ipodreact1.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
        <a href="https://photo-hub-by-tushar-using-reactjs.onrender.com"> <img src={photohub1} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://tusharkumarmishra.github.io/SignUp-Form/">  <img src={signupform} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
         <a href="https://employee-review-system-blux.onrender.com" ><img src={Employeereviewsystem1} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://tusharkumarmishra.github.io/My-CV/"><img src={cv} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://i-pod-by-tushar-kumar-mishra-using-react.onrender.com"> <img src={ipodreact1} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
