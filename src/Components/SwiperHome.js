import React from "react";
//import swiper
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
//import image
import rompecabeza from "../puzzle.webp";

import producto11 from "../producto_1.jpg"
import producto12 from "../producto_2.webp"
import producto13 from "../producto_3.jpg"
import producto14 from "../producto_4.jpg"
import producto15 from "../producto_5.jpg"


function SwiperHome() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="swiper-box">
            <img
              src={rompecabeza}
              alt="Descripción de la imagen"
              style={{ width: "50%", height: "67%" }}
            />

            <div className="carrito-box">
              <h1>+8 Units</h1>
              <h1>+10 YEARS</h1>
              <h2>🛒 ADD TO CART. </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-box">
            <img
              src={producto11}
              alt="Descripción de la imagen"
              style={{ width: "50%", height: "47%" }}
            />

            <div className="carrito-box">
              <h1>+8 Units</h1>

              <h1>₡6,200</h1>
              <h2>🛒 ADD TO CART </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-box">
            <img
              src={producto12}
              alt="Descripción de la imagen"
              style={{ width: "30%", height: "17%" }}
            />

            <div className="carrito-box">
              <h1>+8 Units</h1>
              <h1>2 X  1000</h1>
              <h2>🛒 ADD TO CART </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-box">
            <img
              src={producto13}
              alt="Descripción de la imagen"
              style={{ width: "40%", height: "57%" }}
            />

            <div className="carrito-box">
              <h1>+20 Units</h1>
              <h1>₡17,000</h1>
              
              <h2>🛒 ADD TO CART </h2>
            </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-box">
            <img
              src={producto14}
              alt="Descripción de la imagen"
              style={{ width: "40%", height: "57%" }}
            />

            <div className="carrito-box">
              <h1>+19 Units</h1>
              <h1>₡17,000</h1>
              <h2>🛒 ADD TO CART </h2>
            </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-box">
            <img
              src={producto15}
              alt="Descripción de la imagen"
              style={{ width: "30%", height: "17%" }}
            />

            <div className="carrito-box">
              <h1>+33 Units</h1> 
              <h1>₡5,500</h1>
              <h2>🛒 ADD TO CART </h2>
            </div>
          </div>
          
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperHome;
