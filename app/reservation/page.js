"use client";
import React from "react";
import "./reservation.scss";
import { FaUserAlt } from "react-icons/fa";
import { AiFillPhone, AiOutlineMail, AiTwotoneCalendar } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import NavbarHeader from "/components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { useFormik } from "formik";
import * as Yup from "yup";
import Api from "@/config/api";
import { useRouter } from "next/navigation";
import { notifyError, notifySuccess } from "@/components/toastify/toastify";
export default function reservation() {
  const router= useRouter()
 async function handleReservation(values) {
      await Api.post('/reservation',values)
      .then(()=>{
        notifySuccess('You reserved Successfully !! 😊 ')
        formik.resetForm()
        router.push('/reservation/userreservation')
      })
      .catch((e)=>{
        let error=e?.response?.data?.message || e?.response?.data?.error
        notifyError(`Faild to Create Blog ${error} 😞`)

      })
  }
  let validationSchema = Yup.object({
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

  let formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      date: "",
      email: "",
      age: "",
      gender: "",
      notes: "",
    },
    validationSchema,
    onSubmit: handleReservation,
  });
  return (
    <>
      <NavbarHeader />
      <div className="container reservation">
        <form className="form-border" onSubmit={formik.handleSubmit}>
          <h1 className="text-center mt-4 primary-color "> احجز موعدك الان </h1>
          <div className="row  d-flex align-content-center justify-content-center">
            <div className="col-md-4  mt-2 mb-2">
              {formik.touched.name && formik.errors.name ? (
                <div className="alert alert-danger">{formik.errors.name}</div>  
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
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FaUserAlt className="icon primary-color" />
              </div>
            </div>{" "}
            <br />
            <br />
            <div className="col-md-4  mt-2 mb-2">
              {formik.touched.phone && formik.errors.phone ? (
                <div className="alert alert-danger">{formik.errors.phone}</div>
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
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></input>
                <AiFillPhone className="icon fs-5 primary-color" />
              </div>
            </div>
          </div>
          <div className="row d-flex align-content-center justify-content-center">
            <div className="col-md-4 mt-2 mb-2">
              {formik.touched.date &&
              formik.errors.date ? (
                <div className="alert alert-danger">
                  {formik.errors.date}
                </div>
              ) : null}
              <label htmlFor="" className="mb-2">
                موعد الحجز
              </label>
              <input
                aria-label="Default select example"
                className="form-control"
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="datetime-local"
                name="date"
              />
                

              <label htmlFor="" className="mb-2 mt-3">
                العمر
              </label>
              {formik.touched.age && formik.errors.age ? (
                <div className="alert alert-danger">{formik.errors.age}</div>
              ) : null}

              <div className="input-with-icon">
                <input
                  className="form-control"
                  type="number"
                  name="age"
                  id="age"
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                ></input>
                <AiTwotoneCalendar className="icon fs-5 primary-color " />
              </div>
            </div>
            <div className="col-md-4  mt-2">
              {formik.touched.email && formik.errors.email ? (
                <div className="alert alert-danger">{formik.errors.email}</div>
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
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                ></input>
                <AiOutlineMail className="icon fs-5 primary-color " />
              </div>
              <div className="mt-4 pt-3">
                {formik.touched.gender && formik.errors.gender ? (
                  <div className="alert alert-danger">
                    {formik.errors.gender}
                  </div>
                ) : null}
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
                  <label className="form-check-label " htmlFor="exampleRadios1">
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
                  value={formik.values.notes}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></textarea>
                <BsFillPencilFill className="icon-text-area fs-5 primary-color " />
              </div>
            </div>
          </div>
          <div
            className="row d-flex align-content-center justify-content-center"
            style={{ paddingBottom: "40px" }}
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
