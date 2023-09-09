import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import photo from "../../assets/bg2.jpg";
import "./blogs.scss";
import Link from "next/link";
import Api from "@/config/api";
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  async function getBlogs() {
    try {
      let res = await Api.get("/blogs");
      let data = data.json(res);
      setBlogs(data);
      console.log(data);
    } catch (e) {
      let error = e?.response?.data?.message || e?.response?.data?.error;
      console.log(`error ${error}`);
      
    }
  }
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div>
      <section className=" mb-4 pb-4">
        <Container>
          <h2 className="title pt-4">المدونات</h2>
          {blogs.slice(0, 2).map((blog, id) => {
            <Row className="blogs-section " key={id}>
              <div class="col-lg-6">
                <iframe
                  className="w-100"
                  height="315"
                  src={blog.video}
                  frameborder="0"
                  allowfullscreen
                ></iframe>
                <img
                  className="img w-100 img-thumbnail"
                  src={blog.image.src}
                  alt=""
                />
                <h2>{blog.title}</h2>
                <div className="  text-secondary mt-3">
                  <p className="">{blog.content}</p>
                </div>
              </div>
            </Row>;
          })}

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
