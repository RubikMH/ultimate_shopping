import React from 'react'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
const MySwiper = ({ photos }) => {
  return (
    <div className=" w-1/3 block">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        loop
        speed={900}
      >
        {photos.map((photo) => (
          <SwiperSlide>
            <img src={photo.fields.file.url} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MySwiper
