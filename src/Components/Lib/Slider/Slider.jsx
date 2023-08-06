import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Info } from "../Info";

import "swiper/css";
import "./Slider.css";
export default function Slider() {
  // WILL PASS PROPS
  // const imglink = Info.map((props) => (
  //   <SwiperSlide>
  //     <img src={`${props.slider.image}`} alt="slider-img" />
  //   </SwiperSlide>
  // ));

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img
              src="https://deowgxgt4vwfe.cloudfront.net/uploads/1673946404_original.jpg"
              alt="tree"
            />
          </div>
        </SwiperSlide>
        {/* {imglink} */}
        <SwiperSlide>
          <div>
            <img
              src="https://deowgxgt4vwfe.cloudfront.net/uploads/1676617201_original.jpg"
              alt="tree"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://i.ibb.co/54XJ8JJ/Frilllx-Banner-2.jpg"
              alt="tree"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="	https://deowgxgt4vwfe.cloudfront.net/uploads/1667556669_original.jpg"
              alt="tree"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://deowgxgt4vwfe.cloudfront.net/uploads/1662537686_original.jpg"
              alt="tree"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
