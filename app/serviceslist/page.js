"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./services.scss";
import { data } from "../OurService/servicesData";
import Link from "next/link";
export default function serviceslist() {
  return (
    <>
      <div className="bg-img ">
        <div className="bg-layer   text-white  text-center p-4">
          <h1 className="pt-4 m-4 mt-4" style={{fontSize:'4rem' }}>خدماتنا</h1>
        </div>
      </div>
      <section className="section-color">

   
      <Container>
  <h2 className="title pt-4">خدماتنا</h2>
  <Row className="justify-content-center">
    {data.map((item, index) => (
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
            <span className="primary-color">{item.title_s}</span>
            {item.text}
          </h5>
        </div>
      </Col>
    ))}
  </Row>
  <div className="d-flex align-content-center justify-content-center mb-4">
    <button className="btn primary-bg rounded-4 fs-5">
      {" "}
      <Link href="/" className="text-decoration-none text-white">
        العودة للصفحة الرئيسية
      </Link>{" "}
    </button>
  </div>
</Container>
</section>

    </>
  );
}
