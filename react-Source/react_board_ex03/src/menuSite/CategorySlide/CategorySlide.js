import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./CatagorySlide.css";
import chicken from "./img/chicken.svg";
import burger from "./img/burger.svg";
import pizza from "./img/pizza.svg";
import kfood from "./img/kfood.svg";
import sandwich from "./img/sandwich.svg";
import china from "./img/china.svg";
import japan from "./img/japan.svg";
import dessert from "./img/dessert.svg";
import cafe from "./img/cafe.svg";
import porkfood from "./img/porkfoot.svg";
import { Link } from "react-router-dom";

export default function CategorySlide() {
  return (
    <div>
      <Swiper
        slidesPerView={5}
        spaceBetween={25}
        // pagination={{
        //   clickable: false,
        // }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to="/main/chicken">
            <img src={chicken} alt="#" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/main/burger">
            <img src={burger} alt="pizza"></img>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/main/pizza">
            <img src={pizza} alt="pizza"></img>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/main/korean">
            <img src={kfood} alt="#" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/main/sandwitch">
            <img src={sandwich} alt="#" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/main/chinese">
            <img src={china} alt="#" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/main/japanese">
            <img src={japan} alt="#" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/main/dessert">
            <img src={dessert} alt="#" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/main/cafe">
            <img src={cafe} alt="#" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/main/porkfood">
            <img src={porkfood} alt="#" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
