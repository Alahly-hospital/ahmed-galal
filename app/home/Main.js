"use client"
import React from 'react'
import "./main.scss" 
import { Button, Container, Row } from 'react-bootstrap'
import MainImage from "../../assets/main-image.png"
import { FaCheckCircle } from 'react-icons/fa';
// import { FaLocationDot } from 'react-icons';
import { MdLocationOn } from 'react-icons/md';

const Main = () => {
  return (
    <Container style={{position:"relative",marginBottom:"150px"}}>
    <Row>
        <div className='col-12 col-md-6 left-main-section'><img src={MainImage.src} alt="Doctor image"/></div>
        <div className='col-12 col-md-6 right-main-section'>
          <h1>دكتور احمد جلال</h1>
          <ul>
            <li>  استشارى اول أمراض الجهاز الهضمي -الكبدوالمناظير <FaCheckCircle/> </li>
            <li>زمالة أمراض الجهاز الهضمي -الكبدوالمناظير التشخيصية و العلاجية  <FaCheckCircle/> </li>
            <li>زميل الجمعية الأميركية لمناظير الجهاز الهضمى <FaCheckCircle/> </li>
          <Button className='w-50 m-auto mt-4 reserve-btn' >احجز الان</Button>
          </ul>
        </div>
    </Row>
    <div className='floating-box'>
      <p className="location"> <MdLocationOn/>  
          المركز : ٢٩ شارع جلال حماد ناصية شارع جمال عبد الناصر <br/> اول شارع بعد ميدان جيهان ميامى الاسكندرية 
      </p>
    </div>
</Container>
  )
}

export default Main