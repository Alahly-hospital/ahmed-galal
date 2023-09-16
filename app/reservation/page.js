"use client";
import React, { useState } from "react";
import "./reservation.scss";
import { FaUserAlt } from "react-icons/fa";
import {AiFillPhone,AiOutlineArrowLeft,AiOutlineArrowRight,AiOutlineMail,AiTwotoneCalendar,} from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import NavbarHeader from "/components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { useFormik } from "formik";
import * as Yup from "yup";
import Api from "@/config/api";
import { useRouter } from "next/navigation";
import { notifyError, notifySuccess } from "@/components/toastify/toastify";
export default function reservation() {
  const router = useRouter();
  const [isTheUser, setisTheUser] = useState(false);
  function showForm() {
    setisTheUser(true);
  }
  function hideForm() {
    setisTheUser(false);
  } 
  async function handleUserReservation(values) {
    console.log(values);

    await Api.post('/reservation/user',values)
    .then(()=>{
      notifySuccess('You reserved Successfully !! 😊 ')
      userFormik.resetForm()
      router.push('/reservation/userreservation')
    })
    .catch((e)=>{
      let error=e?.response?.data?.message || e?.response?.data?.error
      notifyError(`Faild to Create Blog ${error} 😞`)

    })
  }
  let userValidationSchema = Yup.object({
    date: Yup.string().required("Reservation date is required"),
    notes: Yup.string(),
  });  
  let userFormik = useFormik({
    initialValues: {
      date: "",
      notes: "",
    },
    userValidationSchema,
    onSubmit: handleUserReservation,
  });


  async function handleSomeOneReservation(values) {
    await Api.post("/reservation", values)
      .then(() => {
        notifySuccess("You reserved Successfully !! 😊 ");
        SomeOneFormik.resetForm();
        router.push("/reservation/userreservation");
      })
      .catch((e) => {
        let error = e?.response?.data?.message || e?.response?.data?.error;
        notifyError(`Faild to Create Blog ${error} 😞`);
      });
  }
 
  let SomeOneValidationSchema = Yup.object({
    name: Yup.string()
      .required("name is required")
      .min(3, "name minlength 3")
      .max(20, "name maxlength"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(
        /^01[0125][0-9]{8}$/,
        "Please enter a valid Egyptian mobile phone number"
      ),
    age: Yup.number()
      .required("age is required")
      .min(10, "Age must be at least 10")
      .max(100, "Age can't be more than 100"),
    email: Yup.string().required("email is required").email(),
    date: Yup.string().required("Reservation date is required"),
    gender: Yup.string().required("Gender is required"),
    notes: Yup.string(),
  });
  let SomeOneFormik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      date: "",
      email: "",
      age: "",
      gender: "",
      notes: "",
    },
    SomeOneValidationSchema,
    onSubmit: handleSomeOneReservation,
  });

  return (
    <>
      <NavbarHeader />
      <div style={{ paddingBottom: "10px" }} className="container reservation">
        {isTheUser ? (
          <>
            <form className="form-border" onSubmit={SomeOneFormik.handleSubmit}>
              <h1 className="text-center mt-4 primary-color ">
                {" "}
                احجز موعدك الان{" "}
              </h1>
              <div className="row  d-flex align-content-center justify-content-center">
                <div className="col-md-4  mt-2 mb-2">
                  {SomeOneFormik.touched.name && SomeOneFormik.errors.name ? (
                    <div className="alert alert-danger">
                      {SomeOneFormik.errors.name}
                    </div>
                  ) : null}

                  <label htmlFor="" className="mb-2">
                    الاسم
                  </label>
                  <div className="input-with-icon">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={SomeOneFormik.values.name}
                      onChange={SomeOneFormik.handleChange}
                      onBlur={SomeOneFormik.handleBlur}
                    />
                    <FaUserAlt className="icon primary-color" />
                  </div>
                </div>{" "}
                <br />
                <br />
                <div className="col-md-4  mt-2 mb-2">
                  {SomeOneFormik.touched.phone && SomeOneFormik.errors.phone ? (
                    <div className="alert alert-danger">
                      {SomeOneFormik.errors.phone}
                    </div>
                  ) : null}

                  <label htmlFor="" className="mb-2">
                    رقم الهاتف{" "}
                  </label>

                  <div className="input-with-icon">
                    <input
                      className="form-control"
                      type="string"
                      name="phone"
                      id="phone"
                      required
                      value={SomeOneFormik.values.phone}
                      onChange={SomeOneFormik.handleChange}
                      onBlur={SomeOneFormik.handleBlur}
                    ></input>
                    <AiFillPhone className="icon fs-5 primary-color" />
                  </div>
                </div>
              </div>
              <div className="row d-flex align-content-center justify-content-center">
                <div className="col-md-4 mt-2 mb-2">
                  {SomeOneFormik.touched.date && SomeOneFormik.errors.date ? (
                    <div className="alert alert-danger">
                      {SomeOneFormik.errors.date}
                    </div>
                  ) : null}
                  <label htmlFor="" className="mb-2">
                    موعد الحجز
                  </label>
                  <input
                    aria-label="Default select example"
                    className="form-control"
                    value={SomeOneFormik.values.date}
                    onChange={SomeOneFormik.handleChange}
                    onBlur={SomeOneFormik.handleBlur}
                    type="datetime-local"
                    name="date"
                  />

                  <label htmlFor="" className="mb-2 mt-3">
                    العمر
                  </label>
                  {SomeOneFormik.touched.age && SomeOneFormik.errors.age ? (
                    <div className="alert alert-danger">
                      {SomeOneFormik.errors.age}
                    </div>
                  ) : null}

                  <div className="input-with-icon">
                    <input
                      className="form-control"
                      type="number"
                      name="age"
                      id="age"
                      value={SomeOneFormik.values.age}
                      onChange={SomeOneFormik.handleChange}
                      onBlur={SomeOneFormik.handleBlur}
                      required
                    ></input>
                    <AiTwotoneCalendar className="icon fs-5 primary-color " />
                  </div>
                </div>
                <div className="col-md-4  mt-2">
                  {SomeOneFormik.touched.email && SomeOneFormik.errors.email ? (
                    <div className="alert alert-danger">
                      {SomeOneFormik.errors.email}
                    </div>
                  ) : null}
                  <label htmlFor="" className="mb-2">
                    البريد الالكتروني
                  </label>

                  <div className="input-with-icon">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      id="email"
                      value={SomeOneFormik.values.email}
                      onChange={SomeOneFormik.handleChange}
                      onBlur={SomeOneFormik.handleBlur}
                      required
                    ></input>
                    <AiOutlineMail className="icon fs-5 primary-color " />
                  </div>
                  <div className="mt-4 pt-3">
                    {SomeOneFormik.touched.gender &&
                    SomeOneFormik.errors.gender ? (
                      <div className="alert alert-danger">
                        {SomeOneFormik.errors.gender}
                      </div>
                    ) : null}
                    <div className=" mb-1 ">
                      <input
                        className="form-check-input m-1"
                        type="radio"
                        name="gender"
                        id="exampleRadios1"
                        value="female"
                        checked={SomeOneFormik.values.gender == "female"}
                        onChange={SomeOneFormik.handleChange}
                        onBlur={SomeOneFormik.handleBlur}
                      />
                      <label
                        className="form-check-label "
                        htmlFor="exampleRadios1"
                      >
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
                        checked={SomeOneFormik.values.gender == "male"}
                        onChange={SomeOneFormik.handleChange}
                        onBlur={SomeOneFormik.handleBlur}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios2"
                      >
                        ذكر
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex align-content-center justify-content-center">
                <div className="col-8">
                  
                  <label htmlFor="" className="mb-2">
                    اضافة اي تفاصيل{" "}
                  </label>

                  <div className="input-with-icon">
                    <textarea
                      class="form-control "
                      id="notes"
                      name="notes"
                      rows="4"
                      value={SomeOneFormik.values.notes}
                      onChange={SomeOneFormik.handleChange}
                      onBlur={SomeOneFormik.handleBlur}
                    ></textarea>
                    <BsFillPencilFill className="icon-text-area fs-5 primary-color " />
                  </div>
                </div>
              </div>
              <div
                className="row d-flex align-content-center justify-content-center"
                style={{ paddingBottom: "10px" }}
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

              <div className="row  " style={{ paddingBottom: "30px" }}>
                <div className="col-4">
                  <button
                    type="button"
                    className="btn form-control primary-color   mt-4"
                    onClick={hideForm}
                  >
                    <AiOutlineArrowRight className="ms-2" />
                    العودة
                  </button>
                </div>
              </div>
            </form>
          </>
        ) : (
          <>
            <form className="form-border" onSubmit={userFormik.handleSubmit}>
              <h1 className="text-center mt-4 primary-color ">
                {" "}
                احجز موعدك الان{" "}
              </h1>
              <div className="row d-flex align-content-center justify-content-center">
                <div className="col-md-4 mt-2 mb-2">
                  {userFormik.touched.date && userFormik.errors.date ? (
                    <div className="alert alert-danger">
                      {userFormik.errors.date}
                    </div>
                  ) : null}
                  <label htmlFor="" className="mb-2">
                    موعد الحجز
                  </label>
                  <input
                    aria-label="Default select example"
                    className="form-control"
                    value={userFormik.values.date}
                    onChange={userFormik.handleChange}
                    onBlur={userFormik.handleBlur}
                    type="datetime-local"
                    name="date"
                  />
                </div>
              </div>
              <div className="row d-flex align-content-center justify-content-center">
                <div className="col-8">
                {userFormik.touched.name && userFormik.errors.name ? (
                    <div className="alert alert-danger">
                      {userFormik.errors.name}
                    </div>
                  ) : null}
                  <label htmlFor="" className="mb-2">
                    اضافة اي تفاصيل{" "}
                  </label>

                  <div className="input-with-icon">
                    <textarea
                      class="form-control "
                      id="notes"
                      name="notes"
                      rows="4"
                      value={userFormik.values.notes}
                      onChange={userFormik.handleChange}
                      onBlur={userFormik.handleBlur}
                    ></textarea>
                    <BsFillPencilFill className="icon-text-area fs-5 primary-color " />
                  </div>
                </div>
              </div>
              <div
                className="row d-flex align-content-center justify-content-center"
                style={{ paddingBottom: "50px" }}
              >
                <div className="col-md-4">
                  <button
                    type="submit"
                    className="btn form-control primary-bg text-white mt-4"
                  >
                    احجز الان{" "}
                  </button>
                </div>
                <div className="col-md-4">
                  <button
                    type="button"
                    className="btn form-control primary-bg text-white mt-4"
                    onClick={showForm}
                  >
                    للحجز لشخص اخر <AiOutlineArrowLeft />
                  </button>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
      <Footer className="fixed-bottom" />
    </>
  );
}
