import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function HeroSlide() {
  return (
    <Swiper
      spaceBetween={20}
      centeredSlides={true}
      autoplay={false}
      pagination={{
        type: "progressbar",
      }}
      speed={1000}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="assets/image/hero/hero04-01.jpg" alt="hero04-01" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="assets/image/hero/hero04-02.jpg" alt="hero04-02" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="assets/image/hero/hero04-03.jpg" alt="hero04-03" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="assets/image/hero/hero04-04.jpg" alt="hero04-04" />
      </SwiperSlide>
    </Swiper>
  );
}

export default HeroSlide;
