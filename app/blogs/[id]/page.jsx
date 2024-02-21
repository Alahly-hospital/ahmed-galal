"use client";
import { useEffect, useState } from "react";
import Api from "@/config/api";
import YouTube from "react-youtube";
import apiUrl from "../../../config/domains";

const blog = ({ params }) => {
  const [blog, setBlog] = useState(null);
  const [blogContent, setBlogContent] = useState(null);
  const [blogs, setBlogs] = useState([]);

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
  async function getBlogContent() {
    try {
      let res = await Api.get(`/blog-content/${params.id}`);
      let data = res?.data;
      console.log(data);
      setBlogContent(data);
    } catch (e) {
      let error = e?.response?.data?.message || e?.response?.data?.error;
      console.log(`error ${error}`);
    }
  }
  useEffect(() => {
    getBlogs();
    getBlogContent();
  }, []);
  
  useEffect(() => {
    const blog = blogs.find((ele) => ele._id == id);
  }, []);
  function getVideoId(url) {
    if (!url) return null;

    const videoId = url.split("/").pop().split("?")[0];
    return videoId;
  }
  return (

    <div className="container blog-details mt-4 mb-4 ">
           <h1 className="text-center">{blog?.title}</h1>
           <div className="row  d-flex flex-column align-items-center text-center">
            
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
  </div>
)
}

 {blog?.image && (
  <div className="col-lg-6 gy-3 mb-2  ">
    <img
      src={apiUrl + blog?.image}
      style={{ height: "450px", width: "100%" }}
      alt="blog-img"
    />
  </div>
)
}
 {blog?.content &&   <p style={{ lineHeight: "2.5" }}>{blog?.content}</p>} 

           </div>
           
              {blogContent?.map((blogCont , index)=>(
    <div key={index}> 

         <div className="row  d-flex flex-column align-items-center text-center">
        {blogCont?.type === "video" && (
          <div className="col-lg-6 gy-3 mb-2 ">
            <YouTube
              className="w-100"
              style={{ maxHeight: "450px", width: "100%" }}
              videoId={getVideoId(blogCont?.video)}
              opts={{
                origin: "https://www.youtube.com",
                width: "100%",
                height: "450px",
              }}
            />
          </div>
        )}
        {blogCont?.type === "content" && (
          <p style={{ lineHeight: "2.5" }}>{blogCont?.content}</p>
        )}
        {blogCont?.type === "image" && (
          <div className="col-lg-6 gy-3 mb-2  ">
            <img
              src={apiUrl + blogCont?.image}
              style={{ height: "450px", width: "100%" }}
              alt="blog-img"
            />
          </div>
        )}
      </div>
      <div className="row">
        <div className="col-12 m-4 p-4 rtl">
          {blogCont?.type === "subtitle" && <h3>{blogCont?.subtitle}</h3>}

          {blogCont?.type === "list" && (
            <ul>
              {blogCont?.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>      
        </div>

      ))}
      
 
     
    </div>     
  
  );
};

export default blog;

{
  /* {blog?.content &&   <p style={{ lineHeight: "2.5" }}>{blog?.content}</p>} */
}
