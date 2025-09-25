import sliderImg from "@images/slider-image-1.jpeg"
import sliderImg2 from "@images/slider-image-2.jpeg"
import sliderImg3 from "@images/slider-image-3.jpeg"

import staticImg from "@images/blog-img-1.jpeg"
import staticImg2 from "@images/blog-img-2.jpeg"
import MySwiper from "../_Components/Swiper/MySwiper"
import Image from "next/image"

export default function HomeSwiper() {
  return (
    <div className="flex content-center w-3/4 mx-auto my-10">
          <div className="w-3/4 h-[400px]">
          <MySwiper imagesList={ [sliderImg.src, sliderImg2.src, sliderImg3.src] }  />
          </div>
          <div className="w-1/4 h-[400px] flex flex-col gap-3 ms-3">

            <div><Image className="h-[194px]" src={staticImg} alt="InstaMart" /></div>
            <div><Image className="h-[194px]" src={staticImg2} alt="InstaMart" /></div>

          </div>

          

    </div>
  )
}
