"use client";
import React from "react";
import "./blogs.scss";
import { Container, Row } from "react-bootstrap";
import NavbarHeader from "@/components/Navbar/Navbar";
import Scrolltop from "@/components/Scrolltop/Scrolltop";
import Footer from "../../components/Footer/Footer";
import photo from "../../assets/bg2.jpg";

export default function blogs() {
  return (
    <>
      <NavbarHeader />
      <Scrolltop />
      <div className="bg-img">
        <div className="bg-layer text-white  text-center p-4">
          <h1 className="pt-4 m-4 mt-4">المدونات</h1>
        </div>
      </div>

      <section className="section-color mb-4 pb-4">
        <Container>
          <h2 className="title pt-4">المدونات</h2>
          <Row className="blogs-section d-flex justify-content-center">
            <div class="col">
              <div>
                <iframe
                  className="w-100"
                  height="315"
                  src="https://www.youtube.com/embed/rJyTfqdCvlk"
                  frameborder="0"
                  allowfullscreen
                ></iframe>

                <img
                  class="img w-100 img-thumbnail"
                  src={photo.src}
                  height={315}
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
                    المدونةالمدونةالمدةالمدونةالمدونةالمدونةالمدونةالمدونةالمدونةالمدونة
                    المدونةالمدونةالمدةالمدونةالمدونةالمدونةالمدونةالمدونةالمدونةالمدونة
                  </p>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
