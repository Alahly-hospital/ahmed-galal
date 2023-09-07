"use client";
import React from "react";
import "./login.scss";
import logo from "../../assets/Logo.png";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useFormik } from "formik";
import * as Yup from "yup";
import NavbarHeader from "/components/navbar/Navbar";
import Api from './../../config/api';

export default function login() {
  
  function handleLogin(values) {
    Api.post("/auth/login",values)
    .then(()=>{
      
    })
  }

  let validationSchema = Yup.object({
    email: Yup.string().required("email is required").email(),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,10}$/,
        "Password must contain at least one uppercase and one lowercase letter"
      ),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleLogin,
  });

  return (
    <>
      <NavbarHeader />

      <div className="login-page">
        <div className="bg">
          <div className="container">
            <div className="row  min-vh-100 d-flex align-items-center ">
              <div className="col-md-6 ">
                <h1 className=" fw-bold "> تسجل الدخول : </h1>
                <h6 className="   text-secondary mt-4 mb-4">
                  ادخل الي حسابك بادخال البريد الالكتروني و كلمة المرور
                </h6>
                <form action="" onSubmit={formik.handleSubmit}>
                  <label htmlFor="name mt-4" className="mb-2">
                    البريد الالكتروني
                  </label>
                  <div className="col-md-6 ">
                    {" "}
                    {formik.touched.email && formik.errors.email ? (
                      <div className="alert alert-danger">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>

                  <div className="position-relative d-flex align-items-center ">
                    <div className="input-with-icon responsive-input">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        style={{direction:'ltr' ,textAlign:'left'}}
                      />
                      <FaUserAlt className="icon primary-color" />
                    </div>
                  </div>

                  <label htmlFor="password" className="mb-2">
                    كلمة المرور{" "}
                  </label>
                  <div className="col-md-6 ">
                    {formik.touched.password && formik.errors.password ? (
                      <div className="alert alert-danger">
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </div>

                  <div className="position-relative d-flex align-items-center">
                    <div className="input-with-icon  responsive-input ">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className=" form-control  "
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        style={{direction:'ltr' ,textAlign:'left'}}
                      />
                      <RiLockPasswordFill className="icon primary-color" />
                    </div>
                  </div>

                  <button type="submit" className="btn responsive-input form-control text-center text-white mt-4 primary-bg p-2   ">
                    تسجيل الدخول
                  </button>
                  <p className="mt-4 ">
                    لا يوجد لديك حساب ؟
                    <Link
                      href={"/register"}
                      className="span-color text-decoration-none"
                      prefetch
                    >
                      انشئ حسابك الان !
                    </Link>
                  </p>
                </form>
              </div>
              <div className="col-md-6 text-center">
                <img src={logo.src} className="w-75 img" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
