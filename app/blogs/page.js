"use client";
import React, { useEffect, useState } from "react";
import "./blogs.scss";
import { Container, Row } from "react-bootstrap";
import NavbarHeader from "../../components/Navbar/Navbar";
import Scrolltop from "../../components/Scrolltop/Scrolltop";
import Footer from "../../components/Footer/Footer";
import photo from "../../assets/bg2.jpg";
import Api from "@/config/api";
import apiUrl from "../../config/domains"

export default function blogs() {
  const [blogs, setBlogs] = useState([]);
  async function getBlogs() {
    try {
      let res = await Api.get("/blogs");
      // let data = data.json(res);
      setBlogs(res.data);
      console.log(res.data);
    } catch (e) {
      let error = e?.response?.data?.message || e?.response?.data?.error;
      console.log(`error ${error}`);
      console.log(e);
      
    }
  }
  useEffect(() => {
    getBlogs();
  }, []);
console.log(blogs);
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
          {blogs.map((blog,id)=>(

             <Row className="blogs-section d-flex justify-content-center" key={id}>
            <div class="col-lg-6">
              <div>
              {blog.video?  <iframe
                  className="w-100"
                  height="315"
                  src={blog.video}
                  frameborder="0"
                  allowfullscreen
                ></iframe>:''}
                {blog.image? <img
                  className="img w-100 rounded  mb-3"
                  height={315}
                  width={315}
                  src={apiUrl+blog.image}
                  alt=""
                />:''}
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about-info">
                <h2>{blog.title}</h2>
                <div class="  text-secondary mt-3">
                  <p class="">
                    {blog.content}
                  </p>
                </div>
              </div>
            </div>
          </Row>
          ))}
         
          
        </Container>
      </section>
      <Footer />
    </>
  );
}
