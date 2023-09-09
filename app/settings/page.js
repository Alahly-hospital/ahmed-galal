"use client";
import React, { useEffect, useState } from "react";
import "./settings.scss";
import NavbarHeader from "/components/Navbar/Navbar";
import Footer from "/components/Footer/Footer";
import { useFormik } from "formik";
import profile from "../../assets/ff.jpg";
import * as Yup from "yup";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import {
  AiFillPhone,
  AiOutlineMail,
  AiTwotoneCalendar,
  AiTwotoneHome,
} from "react-icons/ai";
import { useDispatch , useSelector } from 'react-redux';
import Api from "@/config/api";
import { notifyError ,notifySuccess } from "@/components/toastify/toastify";
import {updateUserData} from "../../ApiHelper/user.api"

export default function Settings() {

  const dispatch = useDispatch()
  const [passwordchange, setPasswordchange] = useState(false);
  const [changeInput, setChangeInput] = useState(false);
  let user = useSelector((state)=>state.user.value.data)
  function changeInInput() {
    setChangeInput(!changeInput);
  }
  function changePasseord() {
    setPasswordchange(!passwordchange);
  }
  const [userData, setUserData] = useState();
  useEffect(()=>{
    setUserData(user)
  },[user])

  function updateInfo(values) {
    console.log(values)
    updateUserData(values,formik.resetForm)
  }


  let validationSchema = Yup.object({
    firstName: Yup.string().min(3, "fname minlength 3").max(10, "fname maxlength"),
    lastName: Yup.string()

      .min(3, "lname minlength 3")
      .max(10, "lname maxlength"),
    age: Yup.number()

      .min(10, "Age must be at least 10")
      .max(100, "Age can't be more than 100"),
    email: Yup.string().email(),
    address: Yup.string()

      .min(3, "address minlength 3")
      .max(10, "address maxlength"),

    phone: Yup.string().matches(
      /^01[0125][0-9]{8}$/,
      "Please enter a valid Egyptian mobile phone number"
    ),
    password: Yup.string()
      .required("New Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,10}$/,
        "Password must contain at least one uppercase and one lowercase letter"
      ),
    rePassword: Yup.string()
      .required("Confiming Password is required")
      .oneOf([Yup.ref("password")], "password dosnot  match"),
  });

  let formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      country: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: updateInfo,
  });
  const [selectImage, setSelectImage] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  return (
    <>
      <NavbarHeader />
      <div className="container settings-page mt-4 pt-4 mb-4 pb-4">
        <h1>الاعدادات </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <label>
              <div className="  d-flex justify-content-center  cursor-pointer">
                <input
                  type="file"
                  hidden
                  onChange={({ target }) => {
                    if (target.files) {
                      const file = target?.files[0];
                      setSelectImage(URL.createObjectURL(file));
                      setSelectedFile(file);
                    }
                  }}
                />

                {selectImage ? (
                  <img
                    src={selectImage}
                    className=" rounded-circle"
                    width={200}
                    height={200}
                  />
                ) : (
                  <>
                    {" "}
                    <div className="profile-container">
                      <img
                        src={profile.src}
                        width={200}
                        height={200}
                        alt="User Profile Photo"
                        className="profile-photo"
                      />
                      <div className="text-layer">Change Your Photo</div>
                    </div>
                  </>
                )}
              </div>
            </label>

                <>
                  {!changeInput ? (
                    <>
                      <div className="col-md-6 mt-4  ">
                        <h6 className=" p-3 border-bottom">{userData?.firstName}</h6>
                      </div>
                      <div className="col-md-6 mt-4   ">
                        <h6 className=" p-3 border-bottom ">{userData?.lastName}</h6>
                      </div>
                      <div className="col-md-6 mt-4  ">
                        <h6 className=" p-3 border-bottom ">{userData?.age}</h6>
                      </div>
                      <div className="col-md-6 mt-4 ">
                        <h6 className=" p-3  border-bottom ">{userData?.address}</h6>
                      </div>
                      <div className="col-md-6 mt-4  ">
                        <h6 className=" p-3 border-bottom ">{userData?.email}</h6>
                      </div>
                      <div className="col-md-6 mt-4 ">
                        <h6 className=" p-3 border-bottom ">{userData?.phone}</h6>
                      </div>
                      <div className="col-md-12">
                        <button
                          className="btn w-25 mx-auto d-block mt-4 settings-btn"
                          onClick={changeInInput}
                        >
                           تعديل البيانات
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-md-6 mt-4">
                        {formik.touched.firstName && formik.errors.firstName ? (
                          <div className="alert alert-danger">
                            {formik.errors.firstName}
                          </div>
                        ) : null}
                        <div className="input-with-icon">
                          <input
                            className="form-control"
                            type="text"
                            name="firstName"
                            id="firstName"
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName || user?.firstName}
                            onChange={formik.handleChange}
                          />

                          <FaUserAlt className="icon primary-color" />
                        </div>
                      </div>

                      <div className="col-md-6 mt-4">
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
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName || user?.lastName}
                            onChange={formik.handleChange}
                          />

                          <FaUserAlt className="icon primary-color" />
                        </div>
                      </div>

                      <div className="col-md-6 mt-4">
                        {formik.touched.age && formik.errors.age ? (
                          <div className="alert alert-danger">
                            {formik.errors.age}
                          </div>
                        ) : null}
                        <div className="input-with-icon">
                          <input
                            className="form-control"
                            type="text"
                            name="age"
                            id="age"
                            onBlur={formik.handleBlur}
                            value={formik.values.age || user?.age}
                            onChange={formik.handleChange}
                          />

                          <AiTwotoneCalendar className="icon primary-color" />
                        </div>
                      </div>
                      <div className="col-md-6 mt-4">
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
                            style={{ direction: "ltr", textAlign: "left" }}
                            onBlur={formik.handleBlur}
                            value={formik.values.email || user?.email}
                            onChange={formik.handleChange}
                          />

                          <AiOutlineMail className="icon primary-color" />
                        </div>
                      </div>
                      <div className="col-md-6 mt-4">
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
                            onBlur={formik.handleBlur}
                            value={formik.values.address || user?.address}
                            onChange={formik.handleChange}
                          />

                          <AiTwotoneHome className="icon primary-color" />
                        </div>
                      </div>
                      <div className="col-md-6 mt-4">
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
                            onBlur={formik.handleBlur}
                            value={formik.values.phone || user?.phone}
                            onChange={formik.handleChange}
                          />

                          <AiFillPhone className="icon primary-color" />
                        </div>
                      </div>
                      <br></br>
                      <div className="col-md-12">
                        <button type="submit" className="btn w-25 mx-auto d-block mt-4 settings-btn">
                          ارسال التعديلات
                        </button>
                      </div>
                    </>
                  )} 
                </>

            <h3 className="mt-4 mb-4">تغير كلمة السر</h3>
            {!passwordchange ? (
              <div onClick={changePasseord} className="col-md-12">
                <button className="btn w-25 mx-auto d-block mt-4 settings-btn">
                 لتغير الباسورد
                </button>
              </div>
            ) : (
              <>
                <div className="col-md-6 mt-4">
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
                      placeholder=" كلمة السري الجديدة   "
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      style={{ direction: "ltr", textAlign: "left" }}
                    ></input>
                    <RiLockPasswordFill className="icon primary-color" />
                  </div>
                </div>
                <div className="col-md-6 mt-4">
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
                      placeholder=" اعادة ادخال الرقم السري  "
                      value={formik.values.rePassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      style={{ direction: "ltr", textAlign: "left" }}
                    ></input>
                    <RiLockPasswordFill className="icon primary-color" />
                  </div>
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn w-25 mx-auto d-block mt-4 settings-btn">
                    تغير كلمة السر
                  </button>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
