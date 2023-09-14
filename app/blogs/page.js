"use client";
import React, { useEffect, useState } from "react";
import "./blogs.scss";
import { Container, Row } from "react-bootstrap";
import NavbarHeader from "../../components/Navbar/Navbar";
import Scrolltop from "../../components/Scrolltop/Scrolltop";
import Footer from "../../components/Footer/Footer";
import photo from "../../assets/bg2.jpg";
import Api from "@/config/api";
import Image from "next/image";
import apiUrl from "../../config/domains"
import YouTube from 'react-youtube';
import data from "../../assets/data.json"

export default function blogs() {
  const [blogs, setBlogs] = useState([]);
  const [search,setSearch] = useState("")
  const [select,setSelect] = useState("")

  async function getBlogs() {
    try {
      let res = await Api.get("/blogs");
      // let data = data.json(res);
      setBlogs(res.data);
    } catch (e) {
      let error = e?.response?.data?.message || e?.response?.data?.error;
      console.log(`error ${error}`);
      console.log(e);
      
    }
  }
  useEffect(() => {
    getBlogs();
  }, []);
  function getVideoId (url){
    const urlSearchParams = new URLSearchParams(new URL(url).search);
    const videoId = urlSearchParams.get("v");
    return videoId
  }
console.log(blogs)
let filterdData = blogs
if(search){
  filterdData = filterdData.filter((ele)=>
  ele?.title?.includes(search)  ||
  ele?.content?.includes(search))
}
if(select){
  filterdData = filterdData.filter((ele)=>ele?.category?.includes(select))
}

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
          <div className="row search-box w-80 m-auto">
              <div className="col-6">
                  <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className="w-100" placeholder="ابحث عن مدونة"/>
              </div>
              <div className="col-6">
                  <select className="w-100" value={select} onChange={(e)=>setSelect(e.target.value)}>
                      <option value="">All</option>
                     {
                      data.map((ele)=>(
                        <option value={ele}>{ele}</option>
                      ))
                      }

                  </select>
              </div>
          </div>
          {filterdData.map((blog,id)=>(

             <Row className="blogs-section d-flex justify-content-center" key={id}>
            <div class="col-lg-6">
              <div>
              {blog.video?
                <YouTube className="w-100" videoId={getVideoId(blog.video)} opts={{height: '315',origin: 'https://www.youtube.com'}} />:''}
                {blog.image? 
                <img
                  className="img w-100 rounded  mb-3"
                  height={315}
                  width={315}
                  src={apiUrl+ blog.image}
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
