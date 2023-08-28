"use client"
import React, { useEffect, useRef } from 'react'
import "./main.scss" 
import { Button, Container, Row } from 'react-bootstrap'
import MainImage from "../../assets/main-image.png"
import MainImage2 from "../../assets/MainImage5.png"
import MainImage3 from "../../assets/MainImage2.png"
import { FaCheckCircle } from 'react-icons/fa';
// import { FaLocationDot } from 'react-icons';
import { MdLocationOn } from 'react-icons/md';
import Slider from "react-slick";

import Link from 'next/link'
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1 ,
  autoplay:true,
  autoplaySpeed:3000
};
const Main = () => {
  const mainRef = useRef(null);
  const listItems = [
    "استشارى اول أمراض الجهاز الهضمي -الكبدوالمناظير",
    "زمالة أمراض الجهاز الهضمي -الكبدوالمناظير التشخيصية و العلاجية",
    "زميل الجمعية الأميركية لمناظير الجهاز الهضمى"
  ];

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.classList.add('fade-in');
    }
  }, []);
  return (
    <Container ref={mainRef} className='main-container' style={{position:"relative",marginBottom:"150px"}}>
    <Row>
        <div className='col-12 col-md-6 left-main-section'>    <Slider {...settings}>

<img class="slider-image"   src={MainImage.src} height={75} className='w-100' alt="" />
<img class="slider-image"  src={MainImage2.src}height={75}className='w-100'  alt="" />
<img class="slider-image"  src={MainImage3.src}height={75}className='w-100'   alt="" />


</Slider></div>
        <div className='col-12 col-md-6 right-main-section'>
          <h1>دكتور احمد جلال</h1>
          <ul>
          {listItems.map((item, index) => (
              <li key={index} className="fade-in">
                {item} <FaCheckCircle />
              </li>
            ))}
          <Button className='w-50 m-auto mt-4 reserve-btn' ><Link className=' text-decoration-none text-white' href={'reservation'}> احجز الان</Link></Button>
          </ul>
        </div>
    </Row>
    <div className='floating-box'>
      <p className="location"> <MdLocationOn/>  
          المركز : ٢٩ شارع جلال حماد ناصية شارع جمال عبد الناصر <br/> اول شارع بعد ميدان جيهان ميامى الاسكندرية 
      </p>
    </div>
    <div className='my-3 p-3 ' >
    </div>
</Container>
  )
}

export default Main