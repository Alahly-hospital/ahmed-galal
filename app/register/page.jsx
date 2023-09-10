"use client";
import React from "react";
import "./register.scss";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import {
  AiFillPhone,
  AiOutlineMail,
  AiTwotoneCalendar,
  AiTwotoneHome,
} from "react-icons/ai";
import Link from "next/link";
import NavbarHeader from "/components/navbar/Navbar";
import { useFormik } from "formik";
import * as Yup from "yup";
import Api from "../../config/api"
import { useRouter } from "next/navigation";
import { notifyError ,notifySuccess } from "@/components/toastify/toastify";

 function Register() {
  const router = useRouter();


  function handleRegister(values) {
    delete values.country
    delete values.rePassword
    delete values.gender

    Api.post("/auth/register",values)
    .then(()=>{
      router.push('/login');
      formik.resetForm();
      notifySuccess("Account created !! 😊 ")
    })
    .catch((error)=>{
      let errorMsg = error?.response?.data?.message || error?.response?.data?.error
      console.log(errorMsg)
      notifyError(`${errorMsg} 😞 `)
    })
  }


  let validationSchema = Yup.object({
    firstName: Yup.string()
      .required("fname is required")
      .min(3, "fname minlength 3")
      .max(10, "fname maxlength"),
      lastName: Yup.string()
      .required("lname is required")
      .min(3, "lname minlength 3")
      .max(10, "lname maxlength"),
    age: Yup.number()
      .required("age is required")
      .min(10, "Age must be at least 10")
      .max(100, "Age can't be more than 100"),
    email: Yup.string().required("email is required").email(),
    address: Yup.string()
      .required("country is required")
      .min(3, "country minlength 3")
      .max(10, "country maxlength"),
    password: Yup.string()
      .required("Password is required"),
      // .matches(
      //   /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,10}$/,
      //   "Password must contain at least one uppercase and one lowercase letter"
      // ),
    rePassword: Yup.string()
      .required("rePassword is required"),
      // .oneOf([Yup.ref("password")], "password dosnot  match"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(
        /^01[0125][0-9]{8}$/,
        "Please enter a valid Egyptian mobile phone number"
      ),

    gender: Yup.string().required("Gender is required"), // Add gender field and validation
  });

  let formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      address: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      gender: "",
    },
    validationSchema,
    onSubmit: handleRegister,
  });
  return (
    <>
      <NavbarHeader />

      <div className="register-page">
        <div className="container">
          <h1>أنشء حسابك الان :</h1>
          <h6 className="text-secondary">
            {" "}
            ادخل بياناتك بشكل صحيح للحصول علي افضل تجربة داخل الموقع
          </h6>
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-md-4 mt-4">
                {formik.touched.fname && formik.errors.fname ? (
                  <div className="alert alert-danger">
                    {formik.errors.fname}
                  </div>
                ) : null}

                <div className="input-with-icon">
                  <input
                    className="form-control"
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="الاسم الاول"
                    required
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    
                  />
                  <FaUserAlt className="icon primary-color" />
                </div>
              </div>
              <br />
              <br />
              <div className="col-md-4 mt-4">
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="alert alert-danger">
                    {formik.errors.lastName}
                  </div>
                ) : null}

                <div className="input-with-icon">
                  <input
                    className="form-control"
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="الاسم الاخير"
                    value={formik.values.lastName}
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
                {formik.touched.age && formik.errors.age ? (
                  <div className="alert alert-danger">{formik.errors.age}</div>
                ) : null}

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
                {formik.touched.email && formik.errors.email ? (
                  <div className="alert alert-danger">
                    {formik.errors.email}
                  </div>
                ) : null}

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
                    style={{ direction: "ltr", textAlign: "left" }}
                  ></input>
                  <AiOutlineMail className="icon fs-5 primary-color " />
                </div>
              </div>
            </div>

            <div className="row ">
              <div className="col-md-4 mt-4">
                {formik.touched.address && formik.errors.address ? (
                  <div className="alert alert-danger">
                    {formik.errors.address}
                  </div>
                ) : null}

                <div className="input-with-icon">
                  <input
                    className="form-control"
                    type="text"
                    name="address"
                    id="address"
                    placeholder="مقر السكن"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />
                  <AiTwotoneHome className="icon primary-color" />
                </div>
              </div>
              <br />
              <br />
              <div className="col-md-4 mt-4">
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="alert alert-danger">
                    {formik.errors.phone}
                  </div>
                ) : null}

                <div className="input-with-icon">
                  <input
                    className="form-control"
                    type="text"
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
                {formik.touched.password && formik.errors.password ? (
                  <div className="alert alert-danger">
                    {formik.errors.password}
                  </div>
                ) : null}

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
                    style={{ direction: "ltr", textAlign: "left" }}
                  ></input>
                  <RiLockPasswordFill className="icon primary-color" />
                </div>
              </div>
              <div className="col-md-4 mt-4">
                {formik.touched.rePassword && formik.errors.rePassword ? (
                  <div className="alert alert-danger">
                    {formik.errors.rePassword}
                  </div>
                ) : null}

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
                    style={{ direction: "ltr", textAlign: "left" }}
                  ></input>
                  <RiLockPasswordFill className="icon primary-color" />
                </div>
              </div>
            </div>
            <div className="mt-3">
               <div className="col-md-8">
              {formik.touched.gender && formik.errors.gender ? (
                <div className="alert alert-danger">{formik.errors.gender}</div>
              ) : null}
               </div>

              <div className=" mb-1 ">
                <input
                  className="form-check-input m-1"
                  type="radio"
                  name="gender"
                  id="exampleRadios1"
                  value="female"
                  
                  checked={formik.values.gender == "female"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label className="form-check-label " htmlFor="gender1">
                  أثني
                </label>
              </div>
              <div className="">
                <input
                  className="form-check-input m-1"
                  type="radio"
                  name="gender"
                  id="exampleRadios2"
                  value="male"
                  checked={formik.values.gender == "male"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  ذكر
                </label>
              </div>
            </div>

            <div className="row" style={{ paddingBottom: "100px" }}>
              <div className="col-md-8">
                <button
                  type="submit"
                  className="btn form-control primary-bg text-white mt-4"
                >
                  أنشء حسابك الان
                </button>
                <p className=" mt-4">
         يوجد لديك حساب بالفعل           &nbsp;  
                  <Link
                    href={"/login"}
                    className="text-decoration-none span-color"
                    prefetch
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

export default Register
