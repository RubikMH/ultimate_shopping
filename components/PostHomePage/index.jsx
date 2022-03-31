import React from 'react'
import H3 from '../Typography/H3'
import Small from '../Typography/Small'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

import convertInt from '../../Helpers/converInt'

const PostHomePage = ({ post }) => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        className="w-1/6 h-full"
        modules={[Navigation]}
        Navigation
        slidesPerView={1}
        speed={900}
        loop
      >
        {post.map((element) => (
          <SwiperSlide>
            <div className="flex flex-col   ">
              <div className="w-2/3 h-2/3 flex justify-center items-center  ">
                <img
                  src={element.fields.imgCard[0].fields.file.url}
                  className="w-full h-full object-cover"
                  alt={element.fields.titleProduct}
                />
              </div>
              <div className=" w-full h-1/4 mt-4 px-1 py-2 flex flex-col justify-items-center">
                <H3>{element.fields.titleProduct}</H3>
                <Small>{convertInt(element.fields.price)} تومان</Small>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default PostHomePage
