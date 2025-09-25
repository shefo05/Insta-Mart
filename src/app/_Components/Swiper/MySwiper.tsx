'use client'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

export default function MySwiper(
  { imagesList, captions, slidesPerView = 1, spaceBetween = 50, height = 400 }:
  { imagesList: string[]; captions?: string[]; slidesPerView?: number; spaceBetween?: number; height?: number }
){
  return (
    <div className="mb-8">
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation
      // pagination={{ clickable: true }}
      loop={true}
      // scrollbar={{ draggable: true }}

      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    > 
    
      {imagesList.map((src, idx) => (
        <SwiperSlide key={src}>
          <div style={{ height: `${height}px` }} className="relative">
            <Image fill className="object-cover" src={src} alt="Insta Mart" />
          </div>
          {captions?.[idx] && (
            <div className="mt-2 text-center text-sm text-gray-700 line-clamp-1">{captions[idx]}</div>
          )}
        </SwiperSlide>
      ))}


      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      
    </Swiper>
    </div>
  );
}