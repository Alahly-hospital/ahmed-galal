import React from "react";
import "./ourService.scss";
import { Col, Container, Row } from "react-bootstrap";
import {data} from './servicesData'
import Link from "next/link";
const OurService = () => {
  return (
    <Container>
      <h2 className="title">خدماتنا </h2>
      <Row className="justify-content-center m-4">
     {data.slice(0, 3).map((item, index) => (
   <Col
   lg={3}
   md={4}
   sm={6}
   xs={12}
   key={index}
   className="ourServices-card m-4"
 >
   <div className="ourServices-card-inner">
     <img
       src={item.img}
       alt="colon"
       className="w-100 img-fliud"
       height={300}
     ></img>
     <h6 className="card-title">
       <span className="primary-color">{item.title_s}</span>
       {item.text}
     </h6>
   </div>
 </Col>
))}
      </Row>
      <div className="d-flex align-content-center justify-content-center mb-4 mt-4 pt-4 mt-4 "> 
               <Link href="/serviceslist" className="text-decoration-none text-white" prefetch>

        <button className="btn primary-bg fs-5 text-white" style={{padding:'7px 70px'}}>
            كل الخدمات
        </button>          </Link>

      </div>
    </Container>
  );
};

export default OurService;
