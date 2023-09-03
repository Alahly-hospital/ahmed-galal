"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./services.scss";
import { data } from "../OurService/servicesData";
import Link from "next/link";
import NavbarHeader from "/components/navbar/Navbar";
import Footer from "../footer/Footer";
import photo from "../../assets/bg2.jpg";
import Scrolltop from "/components/Scrolltop/Scrolltop";
export default function serviceslist() {
  return (
    <>
      <NavbarHeader />
      <Scrolltop/>
      <div className="bg-img">
        <div className="bg-layer text-white  text-center p-4">
          <h1 className="pt-4 m-4 mt-4">خدماتنا</h1>
        </div>
      </div>
      <section className="section-color mb-4 pb-4">
  <Container>
    <h2 className="title pt-4">المدونة</h2>
    <Row className="blogs-section d-flex justify-content-center">
           <div class="col">
            <div>
              <img
                class="img w-100 img-thumbnail"
                src={photo.src}
                alt=""
              />
            </div>
          </div>
          <div class="col">
            <div class="about-info">
              <h2>العنوان</h2>
               <div class="  text-secondary mt-3">
                <p class="">
                المدونةالمدونةالمدةالمدونةالمدونةالمدونةالمدونةالمدونةالمدونةالمدونة
                </p>
                
               
              </div>
             
            </div>
          </div>
     </Row>
  </Container>
</section>

      <section className="section-color mt-4">
        <Container>
          <h2 className="title pt-4">خدماتنا</h2>
          <Row className="justify-content-center m-4">
            {data.map((item, index) => (
              <Col
                lg={3}
                md={4}
                sm={6}
                xs={12}
                key={index}
                className="ourServices-card "
              >
                
                <div className="ourServices-card-inner ">
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
          <div className="d-flex align-content-center justify-content-center mb-4 ">
            <Link
              href="/"
              className="text-decoration-none text-white mb-4 mt-4"
              prefetch
            >
              <button className="btn primary-bg  fs-5 text-white" style={{padding:'7px 70px'}}>
                العودة للصفحة الرئيسية
              </button>
            </Link>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}
