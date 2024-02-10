"use client";
import React, { useEffect, useState } from "react";
import "./blogs.scss";
import { Container, Dropdown, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Api from "@/config/api";
import apiUrl from "../../config/domains";
import YouTube from "react-youtube";
import data from "../../assets/data.json";
import Subscribe from "@/components/subscribe/Subscribe";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";


export default function blogs() {
  
  let logedin = useSelector ((state)=>state.user.value.logedin)

  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  async function getBlogs() {
    try {
      let res = await Api.get("/blogs");
      console.log(res.data);
      setBlogs(res.data);

    } catch (e) {
      let error = e?.response?.data?.message || e?.response?.data?.error;
      console.log(`error ${error}`);
    }
 
  }
  useEffect(() => {
    getBlogs();
  }, []);

  function getVideoId(url) {
    // const urlSearchParams = new URLSearchParams(new URL(url).search);
    // const videoId = urlSearchParams.get("v");
    // console.log(url);
    // return videoId;

    const videoId = url.split("/").pop().split("?")[0];
    console.log(videoId);
    return videoId;
  }
  let filterdData = blogs;
  if (search) {
    filterdData = filterdData.filter(
      (ele) => ele?.title?.includes(search) || ele?.content?.includes(search)
    );
  }
  if (select) {
    filterdData = filterdData.filter((ele) => ele?.category?.includes(select));
  }
console.log(filterdData);
  return (
    <>

      <div className="bg-img">
        <div className="bg-layer text-white  text-center p-4">
          <h1 className="pt-4 m-4 mt-4">المدونات</h1>
        </div>
      </div>

      <section className="section-color mb-4 pb-4">
        <Container>
          <h2 className="title pt-4">المدونات</h2>
          <div className="row  d-flex align-items-center justify-content-center">
            { logedin&&  <button
              className="w-25 btn  subscribe-btn rounded-5 text-white mb-4"
              onClick={() => setOpen(true)}
            >
              اشترك الان
            </button>}
          
          </div>
          <div className="row search-box w-80 m-auto">
            <div className="col-lg-6 mb-4  position-relative">
              <BiSearchAlt className="text-secondary icon fs-4"  />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-100 form-control"
                placeholder="ابحث عن مدونة"
              />
            </div>
            <div className="col-lg-6 mb-4 position-relative">
              <IoMdArrowDropdown className="text-secondary icon fs-4" />
              <select
                className="w-100 form-control pl-4"
                value={select}
                onChange={(e) => setSelect(e.target.value)}
              >
                <option value="">All</option>
                {data.map((ele) => (
                  <option value={ele} key={ele}>
                    {ele}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {filterdData.map((blog, id) => (
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
                      <Link className="text-decoration-none" href={`/blogs/${blog._id}`}> {blog.image ? (
                    <img
                      className="img w-100 rounded  mb-3 h-50 d-block"
                      width={400}
                      src={apiUrl + blog.image}
                      alt=""
                    />
                  ) : (
                    ""
                  )}      </Link>

                </div>
          
              </div>
              <div className="col-lg-6">
                <div className="about-info">
                  {/* <h2>{blog.title}</h2> */}
                  <Link href={`/blogs/${blog._id}`}>
                   <h2 className="blog-link">{blog.title}</h2> 
                  </Link>
                  <div className="  text-secondary mt-3">
                    <p className="">{blog.content}</p>
                  </div>
                </div>
              </div>
            </Row>
          ))}
        </Container>
      </section>
      <Footer />
      <Subscribe open={open} handleClose={handleClose} />
    </>
  );
}
