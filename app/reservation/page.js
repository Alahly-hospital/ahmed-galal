"use client";
import React from "react";
import "./reservation.scss";
import { FaUserAlt } from "react-icons/fa";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import NavbarHeader from "@/components/navbar/Navbar";
import Footer from "../footer/Footer";

export default function reservation() {
  return (
    <>
      <NavbarHeader />
      <div className="container reservation">
        <form className="form-border">
          {" "}
          <h1 className="text-center mt-4 primary-color "> احجز موعدك الان </h1>
          <div className="row  d-flex align-content-center justify-content-center">
            <div className="col-md-4">
              <label htmlFor="" className="mb-2">
                الاسم
              </label>
              <div className="input-with-icon">
                <input
                  className="form-control"
                  type="text"
                  name=""
                  id=""
                  required
                />
                <FaUserAlt className="icon primary-color" />
              </div>
            </div>{" "}
            <br />
            <br />
            <div className="col-md-4">
              <label htmlFor="" className="mb-2">
                رقم الهاتف{" "}
              </label>

              <div className="input-with-icon">
                <input
                  className="form-control"
                  type="number"
                  name=""
                  id=""
                  required
                ></input>
                <AiFillPhone className="icon fs-5 primary-color" />
              </div>
            </div>
          </div>
          <div className="row d-flex align-content-center justify-content-center">
            <div className="col-md-4 mt-4 mb-4">
              <label htmlFor="" className="mb-2">
                موعد الحجز
              </label>
              <Form.Select
                aria-label="Default select example"
                className="form-control"
              >
                <option>اختر موعدك </option>
                <option value="10pm">10 صباحا </option>
                <option value="11pm">11 صباحا </option>
                <option value="12pm">12 ظهرا</option>
              </Form.Select>
            </div>
            <div className="col-md-4 mt-4">
              <label htmlFor="" className="mb-2">
                البريد الالكتروني
              </label>

              <div className="input-with-icon">
                <input
                  className="form-control"
                  type="email"
                  name=""
                  id=""
                  required
                ></input>
                <AiOutlineMail className="icon fs-5 primary-color " />
              </div>
            </div>
          </div>
          <div className="row d-flex align-content-center justify-content-center">
            <div className="col-8">
              <label htmlFor="" className="mb-2">
                اضافة اي تفاصيل{" "}
              </label>

              <div className="input-with-icon">
                <textarea class="form-control " id="" rows="4"></textarea>
                <BsFillPencilFill className="icon-text-area fs-5 primary-color " />
              </div>
            </div>
          </div>
          <div
            className="row d-flex align-content-center justify-content-center"
            style={{ paddingBottom: "100px" }}
          >
            <div className="col-8">
              <button
                type="submit"
                className="btn form-control primary-bg text-white mt-4"
              >
                احجز الان{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
