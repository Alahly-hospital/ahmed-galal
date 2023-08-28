"use client";
import React from 'react'
import "./services.scss"
import { Card, Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {data} from "./data";
import { GiStomach } from 'react-icons/gi';
// import { FaUserDoctor } from 'react-icons';

const Services = () => {
    console.log(data);
    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Loop through slides
        speed: 500, // Transition speed
        slidesToShow: 2 , // Number of visible slides
        slidesToScroll: 2, // Number of slides to scroll
      };
     

  return (
    <div className="services-section mb-4"> 
        <Container className='my-5 '>
            <h2 className=' title' >مركز  مناظير الجهاز الهضمي والكبد يقدم  
    الخدمات التالية</h2>
            <Row>
                <Slider {...settings}>
                    {data.map((ele,ind)=>(
                     <Col md={4} lg={3} xs={6} key={ind}>
                        <Card className='services-card'>
                            <Card.Body>
                                <Row className="mb-3">
                                    <Col xs={6}>
                                        <h4 className='service-card-title'>{ele.title_ar} </h4>
                                        <Card.Subtitle className="mb-2 text-muted">{ele.title} </Card.Subtitle>
                                    </Col>
                                    <Col xs={6}>
                                        <GiStomach className='services-card-icon'/>
                                    </Col>
                                </Row>
                                 <Row>
                                    {
                                        ele?.text?.map((ele)=>(
                                            <Col xs={6} className="mb-1 mt-1"><GiStomach className='service-icon'/> {ele}</Col>
                                        ))
                                    }
                                 </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    ))
                    }
                    
                </Slider>
            </Row>
        </Container>
    </div>
  )
}

export default Services