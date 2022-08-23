import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
import chicken from "./img/chicken.png";
import pizza from "./img/pizza.png";
import korean from "./img/korean.png";
import dosirak from "./img/dosirak.png";
import chinese from "./img/chinese.png";
import japanese from "./img/japanese.png";
import dessert from "./img/dessert.png";
import cafe from "./img/cafe.png";
import yasic from "./img/yasic.png";

export default function Category() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={70}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={chicken} alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pizza} alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={korean} alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={dosirak} alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={chinese} alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={japanese} alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={dessert} alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cafe} alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={yasic} alt="#" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
