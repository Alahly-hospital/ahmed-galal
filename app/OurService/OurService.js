import React from "react";
import "./ourService.scss";
import { Col, Container, Row } from "react-bootstrap";
import {data} from './servicesData'
import Link from "next/link";

const OurService = () => {
  return (
    <Container>
      <h2 className="title">خدماتنا </h2>
      <Row className="justify-content-center">
     {data.slice(0, 8).map((item, index) => (
   <Col
   lg={3}
   md={4}
   sm={6}
   xs={12}
   key={index}
   className="ourServices-card"
 >
   <div className="ourServices-card-inner">
     <img
       src={item.img}
       alt="colon"
       className="w-100 img-fliud"
       height={300}
     ></img>
     <h5 className="card-title">
       <span className="primary-color">{item.title}</span>
       {item.text}
     </h5>
   </div>
 </Col>
))}
 

      </Row>
      <div className="d-flex align-content-center justify-content-center mb-4">
        <button className="btn primary-bg rounded-4 fs-5">
          {" "}
          <Link href="serviceslist" className="text-decoration-none text-white">
            كل الخدمات
          </Link>{" "}
        </button>
      </div>
    </Container>
  );
};

export default OurService;
