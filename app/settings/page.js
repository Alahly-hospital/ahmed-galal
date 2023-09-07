"use client";
import React, { use, useState } from "react";
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

export default function Settings() {
  const [passwordchange, setPasswordchange] = useState(false);
  const [changeInput, setChangeInput] = useState(false);
  function changeInInput() {
    setChangeInput(!changeInput);
  }
  function changePasseord() {
    setPasswordchange(!passwordchange);
  }
  const [userData, setUserData] = useState([
    {
      id: 1,
      fname: "روان",
      lname: "عبدالفتاح",
      age: "20",
      email: "rwanabdelfattah301@gmail.com",
      country: "اسكندرية",
      phone: "01226524775",
      gender: "انثي",
    },
  ]);

  function updateInfo(values) {}
  let validationSchema = Yup.object({
    fname: Yup.string().min(3, "fname minlength 3").max(10, "fname maxlength"),
    lname: Yup.string()

      .min(3, "lname minlength 3")
      .max(10, "lname maxlength"),
    age: Yup.number()

      .min(10, "Age must be at least 10")
      .max(100, "Age can't be more than 100"),
    email: Yup.string().email(),
    country: Yup.string()

      .min(3, "country minlength 3")
      .max(10, "country maxlength"),

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
      fname: "",
      lname: "",
      age: "",
      country: "",
      email: "",
      password: "",
      rePassword: "",
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
        <form onSubmit={formik.updateInfo}>
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

            {userData.map((user) => {
              return (
                <>
                  {!changeInput ? (
                    <>
                      <div className="col-md-6 mt-4  ">
                        <h6 className=" p-3 border-bottom">{user.fname}</h6>
                      </div>
                      <div className="col-md-6 mt-4   ">
                        <h6 className=" p-3 border-bottom ">{user.lname}</h6>
                      </div>
                      <div className="col-md-6 mt-4  ">
                        <h6 className=" p-3 border-bottom ">{user.age}</h6>
                      </div>
                      <div className="col-md-6 mt-4 ">
                        <h6 className=" p-3  border-bottom ">{user.country}</h6>
                      </div>
                      <div className="col-md-6 mt-4  ">
                        <h6 className=" p-3 border-bottom ">{user.email}</h6>
                      </div>
                      <div className="col-md-6 mt-4 ">
                        <h6 className=" p-3 border-bottom ">{user.phone}</h6>
                      </div>
                      <div className="col-md-12">
                        <button
                          className="btn w-25 mx-auto d-block mt-4 settings-btn"
                          onClick={changeInInput}
                        >
                          انقر لتعديل البيانات
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-md-6 mt-4">
                        {formik.touched.fname && formik.errors.fname ? (
                          <div className="alert alert-danger">
                            {formik.errors.fname}
                          </div>
                        ) : null}
                        <div className="input-with-icon">
                          <input
                            className="form-control"
                            type="text"
                            name="fname"
                            id="fname"
                            onBlur={formik.handleBlur}
                            value={formik.values.fname || user?.fname}
                            onChange={formik.handleChange}
                          />

                          <FaUserAlt className="icon primary-color" />
                        </div>
                      </div>

                      <div className="col-md-6 mt-4">
                        {formik.touched.lname && formik.errors.lname ? (
                          <div className="alert alert-danger">
                            {formik.errors.lname}
                          </div>
                        ) : null}
                        <div className="input-with-icon">
                          <input
                            className="form-control"
                            type="text"
                            name="lname"
                            id="lname"
                            onBlur={formik.handleBlur}
                            value={formik.values.lname || user?.lname}
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
                        {formik.touched.country && formik.errors.country ? (
                          <div className="alert alert-danger">
                            {formik.errors.country}
                          </div>
                        ) : null}
                        <div className="input-with-icon">
                          <input
                            className="form-control"
                            type="text"
                            name="country"
                            id="country"
                            onBlur={formik.handleBlur}
                            value={formik.values.country || user?.country}
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
                        <button className="btn w-25 mx-auto d-block mt-4 settings-btn">
                          ارسال التعديلات
                        </button>
                      </div>
                    </>
                  )}
                </>
              );
            })}

            <h3 className="mt-4 mb-4">تغير كلمة السر</h3>
            {!passwordchange ? (
              <div onClick={changePasseord} className="col-md-12">
                <button className="btn w-25 mx-auto d-block mt-4 settings-btn">
                  انقر لتغير الباسورد
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
                  <button className="btn w-25 mx-auto d-block mt-4 settings-btn">
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
