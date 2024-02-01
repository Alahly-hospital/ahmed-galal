"use client";
import React from 'react';
import "./services.scss";
import { Card, Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { data } from "./data";
import { GiStomach } from 'react-icons/gi';
import img from '../../assets/cover.jpg'
import { FaCheckCircle } from 'react-icons/fa';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BiLeftArrowAlt } from 'react-icons/bi';


const Services = () => {
   
    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Loop through slides
        speed: 500, // Transition speed
        slidesToShow: 2, // Number of visible slides
        slidesToScroll: 2, // Number of slides to scroll
        adaptiveHeight: false,          

        responsive: [
            {
                breakpoint: 992,  
                settings: {
                    slidesToShow: 1,  
                    slidesToScroll: 1,  
                }
            },

        ]
    };

    return (
        <div className="services-section mb-4">
            <Container className='my-5 '>
                <h2 className=' title' >مركز  مناظير الجهاز الهضمي والكبد يقدم
                    الخدمات التالية</h2>
                <Row>
                    <Slider {...settings} >
                        {data.map((ele, ind) => (
                            <Col lg={6} key={ind}   >
                                <Card className='services-card '>
                                    <Card.Body>
                                        <Row className="mb-1"><Col lg={2}>
                                                {/* <GiStomach className='services-card-icon' /> */}
                                                <img src={img.src} alt='image-colon' className='w-100 rounded shadow'/>
                                            </Col>
                                            <Col lg={6} className=''>
                                                <h4 className='service-card-title mb-3'>{ele.title_ar} </h4>
                                                <Card.Subtitle className="mb-2 text-muted">{ele.title} </Card.Subtitle>
                                            </Col>
                                            
                                        </Row>
                                        <div className='scrollbar' >
    <Row>
        {ele?.text?.map((ele, index) => (
            <Col lg={6} key={index} className="mt-1 mb-1">
                <BiLeftArrowAlt className='service-icon fs-5' /> {ele}
            </Col>
        ))}
    </Row>
</div>


                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Slider>
                </Row>
            </Container>
        </div>
    )
}

export default Services;
