"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const banners = [
  { src: "/banner3.png", alt: "AI Solutions" },
  { src: "/banner.png", alt: "Tech Systems" },
  { src: "/banner2.png", alt: "Infrastructure" },
];

export default function BannerSlider() {
  return (
    <div className="w-full h-[250px] sm:h-[320px] md:h-[400px] lg:h-[480px] relative overflow-hidden mt-6 bg-black">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
        loop
        grabCursor
        className="w-full h-full"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <img
              src={banner.src}
              alt={banner.alt}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
