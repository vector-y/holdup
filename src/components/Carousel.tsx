import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import 'swiper/css/navigation';

import { Autoplay, Keyboard, Pagination, Scrollbar} from 'swiper/modules';

const Carousel = () => {
    return(
    <section className='bg-white h-full w-full'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          scrollbar={{
            hide: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Keyboard, Pagination, Scrollbar]}
          className=""
        >
          <SwiperSlide className=''>
            <div className="p-4 mx-auto text-left max-w-screen-xl lg:pb-4 lg:px-32">
                <div className="flex items-center overflow-hidden rounded-2xl bg-black px-8 my-4 text-white lg:justify-center lg:py-20">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.75L4.75002 8C4.75002 8 4.00002 19.25 12 19.25C20 19.25 19.25 8 19.25 8L12 4.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.75 12.75L11 14.25L14.25 9.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <h2 className="text-2xl font-bold leading-[1.2] tracking-tight md:text-4xl lg:text-5xl xl:text-6xl text-white">Private & Secure.</h2>
                    <p className="text-xl w-full tracking-tight text-opacity-50 md:text-3xl lg:text-4xl pl-4 text-white">We use industry best-practices to keep your team's work safe.</p>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 mx-auto text-left max-w-screen-xl lg:pb-4 lg:px-32">
                <div className="flex items-center overflow-hidden rounded-2xl bg-black px-8 my-4 text-white lg:justify-center lg:py-20">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.75L4.75002 8C4.75002 8 4.00002 19.25 12 19.25C20 19.25 19.25 8 19.25 8L12 4.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.75 12.75L11 14.25L14.25 9.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <h2 className="text-2xl font-bold leading-[1.2] tracking-tight md:text-4xl lg:text-5xl xl:text-6xl text-white">Private & Secure.</h2>
                    <p className="text-xl w-full tracking-tight text-opacity-50 md:text-3xl lg:text-4xl pl-4 text-white">We use industry best-practices to keep your team's work safe.</p>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 mx-auto text-left max-w-screen-xl lg:pb-4 lg:px-32">
                <div className="flex items-center overflow-hidden rounded-2xl bg-black px-8 my-4 text-white lg:justify-center lg:py-20">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.75L4.75002 8C4.75002 8 4.00002 19.25 12 19.25C20 19.25 19.25 8 19.25 8L12 4.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.75 12.75L11 14.25L14.25 9.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <h2 className="text-2xl font-bold leading-[1.2] tracking-tight md:text-4xl lg:text-5xl xl:text-6xl text-white">Private & Secure.</h2>
                    <p className="text-xl w-full tracking-tight text-opacity-50 md:text-3xl lg:text-4xl pl-4 text-white">We use industry best-practices to keep your team's work safe.</p>
                </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    );
}

export default Carousel