import sliderImg from "@images/slider-image-1.jpeg"
import sliderImg2 from "@images/slider-image-2.jpeg"
import sliderImg3 from "@images/slider-image-3.jpeg"

import staticImg from "@images/blog-img-1.jpeg"
import staticImg2 from "@images/blog-img-2.jpeg"
import MySwiper from "../_Components/Swiper/MySwiper"
import Image from "next/image"

export default function HomeSwiper() {

  return (
    <div className="flex flex-col md:flex-row content-center w-3/4 mx-auto  md:my-10">
          <div className=' h-[200px] md:h-[250px] lg:h-[300px] xl:h-[400px] md:w-3/4 w-full'>
          <MySwiper smallHeight = {200}
            mediumHeight = {250} 
            largeHeight = {300} 
            xlargeHeight = {400} imagesList={ [sliderImg.src, sliderImg2.src, sliderImg3.src] }  />
          </div>
          <div className=" md:w-1/4 w-full my-3 md:my-0 flex  md:flex-col gap-3 md:ms-3">

            <div><Image className="h-[100px] md:h-[194px]" src={staticImg2} alt="InstaMart" /></div>
            <div><Image className="h-[100px] md:h-[194px]" src={staticImg} alt="InstaMart" /></div>

          </div>

          

    </div>
  )
}
