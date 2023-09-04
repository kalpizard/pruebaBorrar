import React from "react";
//import swiper
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
//import image
import rompecabeza from "../puzzle.webp";

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
              <h1>8 Unidades</h1>
              <h1>+10 años</h1>
              <h2>🛒 AGREGA AL CARRITO. </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-box">
            <img
              src={rompecabeza}
              alt="Descripción de la imagen"
              style={{ width: "50%", height: "67%" }}
            />

            <div className="carrito-box">
              <h1>+8 Unidades</h1>
              <h2>🛒 AGREGA AL CARRITO. </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-box">
            <img
              src={rompecabeza}
              alt="Descripción de la imagen"
              style={{ width: "50%", height: "67%" }}
            />

            <div className="carrito-box">
              <h1>+8 Unidades</h1>
              <h2>🛒 AGREGA AL CARRITO. </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-box">
            <img
              src={rompecabeza}
              alt="Descripción de la imagen"
              style={{ width: "50%", height: "67%" }}
            />

            <div className="carrito-box">
              <h1>8 Unidades</h1>
              <h2>🛒 AGREGA AL CARRITO. </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperHome;
