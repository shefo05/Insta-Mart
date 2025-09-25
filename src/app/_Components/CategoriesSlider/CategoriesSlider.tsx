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
            height={200} 
            slidesPerView={8} 
            spaceBetween={10} 
            imagesList={allCategories.map(category => category.image)}
            captions={allCategories.map(category => category.name)}
        ></MySwiper>
        </div>
        
  )
}
