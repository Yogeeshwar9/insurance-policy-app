import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const slides=[
  {
    img:`./images/health1_img.jpg`,
    alt:`img`
  },
  {
    img:`./images/bikeIns_img.png`,
    alt:`img`
  },
  {
    img:`./images/CarIns_img.jpg`,
    alt:`img`
  },
  {
    img:`./images/HomeIns_img.jpg`,
    alt:`img`
  },
  {
    img:`./images/TravelIns_img.jpg`,
    alt:`img`
  },
  {
    img:`./images/termIns_img.jpg`,
    alt:`img`
  },
  {
    img:`./images/fireIns_img.jpg`,
    alt:`img`
  }
]
var settings = {
  arrows: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function Content() {
  return (
    <div className='bg-slate-800 flex flex-row items-center mb-5'>
      <div className='w-[36rem] h-[33rem] mt-7 mb-7 ml-[28%]'>
        <Slider {...settings}>
          {slides.map((slide,idx)=>{
            return <div key={idx} >
                <img src={slide.img} alt={slide.alt} className='h-[33rem] w-[36rem]'/>
            </div>
          })}
        </Slider>
      </div>
    </div>
  )
}


export default Content
