import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


export default function MultiplePostImageComponent(props: any) {
  const images = props.images;
  function getimg(img: string) {
    return `images/${img}`
  }
  return (
    <div className=" w-full order-1  sm:order-2 col-span-3 relative overflow-visible">
      <Swiper
        className=" w-full"
        modules={[Pagination]}
        spaceBetween={1}
        slidesPerView={1}
        pagination={true}
        onSlideChange={() => { }}
        onSwiper={(swiper: any) => { }}
        onNavigationNext={() => { }}
        onNavigationPrev={() => { }}
      >
        {images.map((image: any) => (
          <SwiperSlide>
            <img src={getimg(image)}
              width={500}
              height={500}
              className="w-full h-72 aspect-square"
              alt="lopencandy"
              crossOrigin="anonymous"
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}