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
import { useRouter } from "next/navigation";

export default function Blogs() {
  const router = useRouter()
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
                  
                  {blog.video ? (
                   <YouTube
                   videoId={getVideoId(blog.video)}
                   opts={{
                    width: '100%',  
height:'400px',  
                       origin: 'https://www.youtube.com'
                   }}
               />
               
                  ) : (
                    ""
                  )}
                  {blog.image ? (
                    <img
                      className="img w-100  rounded  mb-3"
                      width={315}
                      src={apiUrl + blog.image}
                      alt=""
                    />
                  ) : (
                    ""
                  )}
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
                  <Card className="cursor-pointer" style={{ width: "100%" ,height:"100%" }} onClick={()=>{router.push("/blogs/"+ele._id)}}>
                    <Card.Img className="img w-100 rounded  mb-3 h-50 d-block"
                      // width={400}
                      src={apiUrl + ele?.image}
                      alt="" />
                    <Card.Body className="pt-0">
                      <h5 dir="rtl">{ele?.title}</h5>
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
