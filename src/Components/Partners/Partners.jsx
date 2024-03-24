import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Nema from "../../assets/Nema.png";
import KASNEB from "../../assets/KASNEB.png";
import KFS from "../../assets/KFS.png";
import Miti from "../../assets/MitiAlliance.png";
import PMI from "../../assets/PMI.png";
import Sports from "../../assets/Sportsview.png";

function Partners(props) {
  const slides = [
    {
      image: Nema,
      title: "Nema",
      link: "https://www.nema.go.ke/",
    },
    {
      image: KASNEB,
      title: "KASNEB",
      link: "https://www.kasneb.or.ke/",
    },
    {
      image: KFS,
      title: "Kenya Forest Service",
      link: "https://www.kenyaforestservice.org/",
    },
    {
      image: Miti,
      title: "Miti Alliance",
      link: "https://miti.co.ke/",
    },
    {
      image: PMI,
      title: "Project Management Institute",
      link: "https://www.pmi.org/",
    },
    {
      image: Sports,
      title: "SportsView Hotel",
      link: "https://sportsviewhotel.com/s/",
    },
  ];


  return (
    <div>
      <h2 className="text-5xl font-bold font-serif text-[#73B55C] text-center p-4">
        Sponsors And Partners
      </h2>
      <div className="relative group">
      <div className="md:px-10">
        <Swiper
        loop
          modules={[Navigation]}
          navigation={{ prevEl: `#prev-btn`, nextEl: `#next-btn` }}
          slidesPerView={1.3}
          spaceBetween={10}
          centeredSlides={true}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 10, centeredSlides: false },
            1024: { slidesPerView: 3, spaceBetween: 20, centeredSlides: false },
          }}
        >
          {slides.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="bg-slate-100 flex flex-col items-center py-4 px-2 space-y-4 ">
                  <img
                    className="w-[100] h-[100] rounded-full"
                    src={slide.image}
                    alt="/"
                  />
                  <h3 className="font-semibold">{slide.title}</h3>
                  <a className="text-[#0288D1]" href={slide.link}>
                    Reach us
                  </a>
                </div>
              </SwiperSlide>
            );
          })}

        </Swiper>
        </div>
        <div className="absolute top-2/4 z-10 w-full group-hover:flex justify-between hidden">
          <div className="h-5 w-5 p-2 bg-[#0288D1] rounded-full ">
            <svg

              fill="#000000"
              viewBox="0 0 256 256"
              id="Flat"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M160,220a11.96287,11.96287,0,0,1-8.48535-3.51465l-80-80a12.00062,12.00062,0,0,1,0-16.9707l80-80a12.0001,12.0001,0,0,1,16.9707,16.9707L96.9707,128l71.51465,71.51465A12,12,0,0,1,160,220Z" />
            </svg>
          </div>
          <div  className="h-5 w-5 p-2 bg-[#0288D1] rounded-full">
            <svg
              fill="#000000"
              viewBox="0 0 256 256"
              id="Flat"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
            </svg>
          </div>
        </div>
      </div>
          <div className="flex flex-col items-center p-4">
        <button className='font-serif bg-[#73B55C] text-white'>Become a Sponsor</button>
          </div>
    </div>
  );
}

export default Partners;
