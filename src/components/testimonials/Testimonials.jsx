import React from 'react'
import "./testimonials.css"
import Avt1 from "../../assets/AVTR1.png"
import Avt2 from "../../assets/AVTR2.jpg"

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar:Avt1,
    name:'Azizur Rahman',
    review:'"I am absolutely thrilled to share my experience working with Atiqur Rahman! His expertise and dedication have truly transformed our online presence. From the very beginning, he exhibited a deep understanding of our vision and objectives, translating them into a beautifully designed and highly functional website. What stood out to me was their exceptional attention to detail. Every element of the website, from the seamless navigation to the visually appealing layouts, speaks volumes about their commitment to delivering a top-notch product. They were also incredibly responsive throughout the entire process, patiently addressing all our queries and incorporating feedback with remarkable agility."'
  },
  {
    avatar:Avt2,
    name:'Rahima Rahman',
    review:'"I was looking for a web developer to help me create a new website for my business. I was hesitant at first because I had never worked with a web developer before, but I am so glad I decided to work with Atiqur Rahman. He was incredibly patient and helpful, and he really took the time to understand my needs. He also created a website that exceeded my expectations. I would highly recommend Atiqur Rahman to anyone looking for a web developer."'
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review},index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
                  <div className="client__avatar">
                      <img src={avatar} alt='Avatar one'/>
                  </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>
                      {review}
                  </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}
export default Testimonials;