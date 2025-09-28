import { getAllCategories } from '_/app/_Services/category.services/category.services';
import React from 'react'
import MySwiper from '../Swiper/MySwiper';

export default async function CategoriesSlider() {
    const allCategories = await getAllCategories();

    if(allCategories == null){
        return null;
    }
  return (
        <div className="pb-8 pt-2">
        <MySwiper 
            smallHeight = {100}
            mediumHeight = {150} 
            largeHeight = {200} 
            xlargeHeight = {200}
            smallSlidesPerView={4}
            largeSlidesPerView={12} 
            spaceBetween={10} 
            imagesList={allCategories.map(category => category.image)}
            captions={allCategories.map(category => category.name)}
        ></MySwiper>
        </div>
        
  )
}
