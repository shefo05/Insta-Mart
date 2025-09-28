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
  { imagesList, captions, slidesPerView = 1, spaceBetween = 50,  smallHeight = 100, 
    mediumHeight = 150, 
    largeHeight = 200, 
    xlargeHeight = 200  }:
  { imagesList: string[]; captions?: string[]; slidesPerView?: number; spaceBetween?: number; smallHeight?: number; 
    mediumHeight?: number; 
    largeHeight?: number; 
    xlargeHeight?: number;  }
){

  const heightClass = `h-[${smallHeight}px] md:h-[${mediumHeight}px] lg:h-[${largeHeight}px] xl:h-[${xlargeHeight}px]`;

  return (
    <div className="mb-2 md:mb-8 ">
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
          <div  className={`relative ${heightClass} `}>
          {/* <div className="relative h-[100px] md:h-[150px] lg:h[200px]"> */}
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