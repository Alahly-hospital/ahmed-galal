import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import photo from "../../assets/bg2.jpg";
import "./blogs.scss";
import Link from "next/link";
import Api from "@/config/api";
import YouTube from "react-youtube";
import apiUrl from "../../config/domains.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import Card from 'react-bootstrap/Card';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  async function getBlogs() {
    try {
      let res = await Api.get("/blogs");
      setBlogs(res.data);
      console.log(res.data);
    } catch (e) {
      let error = e?.response?.data?.message || e?.response?.data?.error;
      console.log(`error ${error}`);
    }
  }
  useEffect(() => {
    getBlogs();
  }, []);
  function VideoPlayer({ videoId }) {
    const opts = {
      height: "315",
      width: "100%",
      playerVars: {
        autoplay: 0, // Change to 1 if you want the video to autoplay
      },
    };

    return <YouTube videoId={videoId} opts={opts} />;
  }

  // function getVideoId(url) {
  //   const urlSearchParams = new URLSearchParams(new URL(url).search);
  //   const videoId = urlSearchParams.get("v");
  //   return videoId;
  // }

  function getVideoId(url) {
    // const urlSearchParams = new URLSearchParams(new URL(url).search);
    // const videoId = urlSearchParams.get("v");
    // console.log(url);
    // return videoId;

    const videoId = url.split("/").pop().split("?")[0];
    console.log(videoId);
    return videoId;
  }
  console.log(blogs);
  const breakpoints={
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
  }
  return (
    <div>
      <section className=" mb-4 pb-4">
        <Container>
          <h2 className="title pt-4">المدونات</h2>{" "}
          {/* <Row className="blogs-section"> */}
          {/* {blogs?.slice(0, 2)?.map((blog, id) => (
            <Row
            className="blogs-section d-flex justify-content-center"
            key={id}
          >
            <div className="col-lg-6">
              <div className="w-100">
                {blog.video ? (
                  <YouTube
                    className=" w-100"
                    style={{maxWidth:"100%" , width:"100%"}}
                    // height={400}
                    videoId={getVideoId(blog.video)}
                    opts={{ origin: "https://www.youtube.com" }}
                    
                  />
                ) : (
                  ""
                )}
                {blog.image ? (
                  <img
                    className="img w-100 rounded  mb-3 h-50 d-block"
                    // width={400}
                    src={apiUrl + blog.image}
                    alt=""
                  />
                ) : (
                  "" 
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-info">
                <h2>{blog.title}</h2>
                <div className="  text-secondary mt-3">
                  <p className="">{blog.content}</p>
                </div>
              </div>
            </div>
          </Row>
          ))} */}
          {/* </Row> */}
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            // navigation={true}
            height={1000}
            pagination={{ clickable: true }}
            style={{ padding: "50px" }}
            breakpoints={breakpoints}
          >
            {
              blogs.map((ele) => (
                <SwiperSlide style={{height:"24rem"}}>
                  <Card style={{ width: "100%" ,height:"100%" }}>
                    <Card.Img className="img w-100 rounded  mb-3 h-50 d-block"
                      // width={400}
                      src={apiUrl + ele?.image}
                      alt="" />
                    <Card.Body>
                      <Card.Title>{ele?.title}</Card.Title>
                      <Card.Text>
                        {ele?.content.slice(0, 200)} ......
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              ))
            }
          </Swiper>
          <div className="d-flex align-content-center justify-content-center mb-4 mt-4 pt-4 mt-4 ">
            <Link
              href="/blogs"
              className="text-decoration-none text-white"
              prefetch
            >
              <button
                className="btn primary-bg fs-5 text-white mb-4 pb-2"
                style={{ padding: "7px 70px" }}
              >
                كل المدونات
              </button>{" "}
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
