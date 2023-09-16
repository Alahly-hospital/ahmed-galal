"use client";
import React, { useEffect, useState } from "react";
import "./blogs.scss";
import { Container, Dropdown, Row } from "react-bootstrap";
import NavbarHeader from "../../components/Navbar/Navbar";
import Scrolltop from "../../components/Scrolltop/Scrolltop";
import Footer from "../../components/Footer/Footer";
import Api from "@/config/api";
import apiUrl from "../../config/domains";
import YouTube from "react-youtube";
import data from "../../assets/data.json";
import Subscribe from "@/components/subscribe/Subscribe";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

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
  function getVideoId(url) {
    const urlSearchParams = new URLSearchParams(new URL(url).search);
    const videoId = urlSearchParams.get("v");
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
              <div class="col-lg-6">
                <div>
                  {blog.video ? (
                    <YouTube
                      className=" w-100"
                      height={315}
                      videoId={getVideoId(blog.video)}
                      opts={{ origin: "https://www.youtube.com" }}
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
              <div class="col-lg-6">
                <div class="about-info">
                  <h2>{blog.title}</h2>
                  <div class="  text-secondary mt-3">
                    <p class="">{blog.content}</p>
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
