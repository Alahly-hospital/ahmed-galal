"use client";
import React from "react";
import "./register.scss";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillPencilFill } from "react-icons/bs";
import {
    AiFillPhone,
    AiOutlineMail,
    AiTwotoneCalendar,
    AiTwotoneHome,
    } from "react-icons/ai";
    import Link from "next/link";
    import {useFormik } from "formik";
import * as Yup from "yup";
import NavbarHeader from "/components/navbar/Navbar";
import Footer from "../footer/Footer";

    export default function register() {

         function handleRegister(values) {
            
          }
          let validationSchema = Yup.object({
            fname: Yup.string().required("fname is required").min(3, "fname minlength 3").max(10, "fname maxlength"),
            lname: Yup.string().required("lname is required").min(3, "lname minlength 3").max(10, "lname maxlength"),
            age: Yup.number().required("age is required").min(10, "Age must be at least 10").max(100, "Age can't be more than 100"),
            email: Yup.string().required("email is required").email(),
            country: Yup.string().required("country is required").min(3, "country minlength 3").max(10, "country maxlength"),
            password: Yup.string().required("Password is required").matches(/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,10}$/, "Password must contain at least one uppercase and one lowercase letter"),
            rePassword: Yup.string().required("rePassword is required").oneOf([Yup.ref('password')], "password dosnot  match"),
            phone: Yup.string().required("phone is required").matches(/^01[0125][0-9]{8}$/, "phone must be egyption number"),
          });
        
          
          let formik = useFormik({
            initialValues: {
              name: "",
              email: "",
              password: "",
              rePassword: "",
              phone: ""
            },
            // validate,
            validationSchema,
            onSubmit: handleRegister
          });
    return (
        <>
            <NavbarHeader/>

        <div className="register-page">
            <div className="container">
            <h1>أنشء حسابك الان :</h1>
            <h6 className="text-secondary">
                {" "}
                ادخل بياناتك بشكل صحيح للحصول علي افضل تجربة داخل الموقع
            </h6>
            <form
            onSubmit={formik.handleSubmit}>
                <div className="row">
                <div className="col-md-4">
                    <div className="input-with-icon">
                    <input
                        className="form-control"
                        type="text"
                        name="fname"
                        id="fname"
                        placeholder="الاسم الاول"
                        required
                        value={formik.values.fname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FaUserAlt className="icon primary-color" />
                    </div>
                </div>{" "}
                <br />
                <br />
                <div className="col-md-4">
                    <div className="input-with-icon">
                    <input
                        className="form-control"
                        type="text"
                        name="lname"                        
                        id="lname"
                        placeholder="الاسم الاخير"
                        value={formik.values.lname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    ></input>
                    <FaUserAlt className="icon primary-color" />
                    </div>
                </div>
                </div>

                <div className="row">
                <div className="col-md-4 mt-4">
                    <div className="input-with-icon">
                    <input
                        className="form-control"
                        type="number"
                        name="age"
                        id="age"
                        placeholder="العمر  "
                        value={formik.values.age}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    ></input>
                    <AiTwotoneCalendar className="icon fs-5 primary-color " />
                    </div>
                </div>
                <div className="col-md-4 mt-4">
                    <div className="input-with-icon">
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="البريد الالكتروني  "
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    ></input>
                    <AiOutlineMail className="icon fs-5 primary-color " />
                    </div>
                </div>
                </div>

                <div className="row mt-4">
                <div className="col-md-4">
                    <div className="input-with-icon">
                    <input
                        className="form-control"
                        type="text"
                        name="country"
                        id="country"
                        placeholder="مقر السكن"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                    <AiTwotoneHome className="icon primary-color" />
                    </div>
                </div>
                <br />
                <br />
                <div className="col-md-4">
                    <div className="input-with-icon">
                    <input
                        className="form-control"
                        type="number"
                        name="phone"                        
                        id="phone"
                        placeholder=" رقم الهاتف"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    ></input>
                    <AiFillPhone className="icon fs-5 primary-color" />
                    </div>
                </div>
                </div>

                <div className="row">
                <div className="col-md-4 mt-4">
                    <div className="input-with-icon">
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="الرقم السري   "
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    ></input>
                    <RiLockPasswordFill className="icon primary-color" />
                    </div>
                </div>
                <div className="col-md-4 mt-4">
                    <div className="input-with-icon">
                    <input
                        className="form-control"
                        type="password"
                        name="rePassword"
                        id="rePassword"
                        placeholder=" تأكيدالرقم السري  "
                        value={formik.values.rePassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    ></input>
                    <RiLockPasswordFill className="icon primary-color" />
                    </div>
                </div>
                </div>

                <div className="row" style={{ paddingBottom: "100px" }}>
                <div className="col-8">
                    <button
                    type="submit"
                    className="btn form-control primary-bg text-white mt-4"
                    >
                    {" "}
                    أنشء حسابك الان{" "}
                    </button>
                    <p className=" mt-4">
                    {" "}
                    يوجد لديك حساب بالفعل{" "}
                    <Link
                        href={"login"}
                        className="text-decoration-none span-color"
                    >
                        أدخل الي حسابك !
                    </Link>
                    </p>
                </div>
                </div>
            </form>
            </div> 
        </div>
         </>
    );
}
