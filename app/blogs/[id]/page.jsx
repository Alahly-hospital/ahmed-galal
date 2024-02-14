"use client";
import { useEffect, useState } from "react";
import Api from "@/config/api";
import YouTube from "react-youtube";
import apiUrl from "../../../config/domains";
import img from '../../../assets/bg2.jpg'

const blog = ({ params }) => {
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  console.log(params);
  async function getBlogs() {
    try {
      let res = await Api.get("/blogs");
      let data = res.data;
      let blog = data?.find((ele) => ele._id == params.id);
      setBlog(blog);
      setBlogs(res.data);
    } catch (e) {
      let error = e?.response?.data?.message || e?.response?.data?.error;
      console.log(`error ${error}`);
    }
  }
  useEffect(() => {
    getBlogs();
  }, []);
  console.log(blog);

  useEffect(() => {
    const blog = blogs.find((ele) => ele._id == id);
  }, []);
  console.log(blog);
  function getVideoId(url) {
    if (!url) return null;

    const videoId = url.split("/").pop().split("?")[0];
    return videoId;
  }
  return (
    <div className="container blog-details d-flex flex-column align-items-center text-center mt-4 mb-4 ">
      <div className="row d-flex justify-content-center align-items-center">
     {blog?.video && (
   <div className="col-lg-6 gy-3 mb-2 ">
    <YouTube
      className="w-100"
      style={{ maxHeight: "450px", width: "100%" }}
      videoId={getVideoId(blog?.video)}
      opts={{
        origin: "https://www.youtube.com",
        width: "100%",
        height: "450px",
      }}
    />

</div>  )}

          {blog?.image && (
                  <div className="col-lg-6 gy-3 mb-2  " >

            <img
              src={apiUrl + blog?.image}
              style={{ height: "450px", width: "100%" }}
              alt="blog-img"
            />
          </div>          )}

<div className="col-12 m-4 p-4">
            <h1>{blog?.title}</h1>
            <p style={{lineHeight: '2.5'}}>{blog?.content}</p>
       
</div>

      </div>
    </div>
  );
};

export default blog;
