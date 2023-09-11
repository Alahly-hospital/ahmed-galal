import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import photo from "../../assets/bg2.jpg";
import "./blogs.scss";
import Link from "next/link";
import Api from "@/config/api";
import YouTube from "react-youtube";
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
      height: '315',
      width: '100%',
      playerVars: {
         autoplay: 0, // Change to 1 if you want the video to autoplay
      },
    };
  
    return <YouTube videoId={videoId} opts={opts} />;
  }
  
  console.log(blogs);

  return (   
    <div>
      <section className=" mb-4 pb-4">
        <Container>
          <h2 className="title pt-4">المدونات</h2>            <Row className="blogs-section " >

          {blogs.slice(0,2).map((blog, id) => (
              <div class="col-lg-6"key={id}>
                 {blog.video?    
                   <VideoPlayer videoId={blog.video} />
:''}
                {blog.image? <img
                  className="img w-100 rounded  mb-3"
                  height={315}
                  width={315}
                  src={blog.image.src}
                  alt=""
                />:''}
              
               
                <h2>{blog.title}</h2>
                <div className="  text-secondary mt-3">
                  <p className="">{blog.content}</p>
                </div>
              </div>
          ))}
            </Row>

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
