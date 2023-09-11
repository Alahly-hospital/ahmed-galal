"use client";
import React, { useEffect, useState } from "react";
import "./settings.scss";
import NavbarHeader from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
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
import { useDispatch, useSelector } from "react-redux";
import Api from "@/config/api";
import { notifyError, notifySuccess } from "@/components/toastify/toastify";
import { updateUserData } from "../../ApiHelper/user.api";
import {fetchUserData} from "../../redux/reducers/user.js"
import Image from 'next/image'
import apiUrl from "../../config/domains"

export default function Settings() {
  const dispatch = useDispatch();
  const [passwordchange, setPasswordchange] = useState(false);
  const [changeInput, setChangeInput] = useState(false);
  let user = useSelector((state) => state.user.value.data);
  function changeInInput() {
    setChangeInput(!changeInput);
  }
  function changePasseord() {
    setPasswordchange(!passwordchange);
  }
  const [userData, setUserData] = useState(
    {
      firstName: "",
      lastName: "",
      age: "",
      address: "",
      email: "",
      phone: "",
      image: "",
    }
  );
  useEffect(() => {
    setUserData(user);
  }, [user]);

  function updateInfo(values) {
    Api.patch("/user/data",values,{
      headers:{
        "Content-Type":"multipart/form-data"
      }
    })
    .then(()=>{
      // formik.resetForm()
      dispatch(fetchUserData())
      setChangeInput(false)
      notifySuccess("Account updated !!")
    })
    .catch((error)=>{
      let errorMsg = error?.response?.data?.message || error?.response?.data?.error
      notifyError(errorMsg)
    })  }

  

  let validationSchemaUserData = Yup.object({
    firstName: Yup.string()
      .min(3, "fname minlength 3")
      .max(10, "fname maxlength"),
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
    image: Yup.mixed().test(
      "fileType",
      "Image must be a valid image file",
      (value) => {
        if (!value) return true; // No file is also valid

        const acceptedFormats = ["image/jpeg", "image/png", "image/gif"];
        return acceptedFormats.includes(value.type);
      }
    ),
  });
  let validationSchemaPassword = Yup.object({
    oldPassword: Yup.string()
    .required("old Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,10}$/,
      "Password must contain at least one uppercase and one lowercase letter"
      ),
    newPassword: Yup.string()
    .required("New Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,10}$/,
      "Password must contain at least one uppercase and one lowercase letter"
      ),
      rePassword: Yup.string()
      .required("Confiming Password is required")
      .oneOf([Yup.ref("newPassword")], "password dosnot  match"),
    });
    let formikUserData = useFormik({
      initialValues: user,
      validationSchemaUserData,
      onSubmit: updateInfo,
    });

    let formikPassword = useFormik({
      initialValues: {
        newPassword: "",
        rePassword: "",
        oldPassword: "",
      },
      validationSchemaPassword,
      onSubmit: updatePassword,
    });
    
    const [selectImage, setSelectImage] = useState("");
    const [selectedFile, setSelectedFile] = useState();
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        formikUserData.setFieldValue("image", file);
        formikUserData.setFieldTouched("image", true);
        setSelectedFile(file);
        setSelectImage(URL.createObjectURL(file));
      }
    };
    function renderImage(){
      if(selectImage){
          return (
            <img
            src={selectImage}
            className=" rounded-circle"
            width={200}
            height={200}
          />
          )
      }else{
        if(user?.image){
          return( <img
          src={apiUrl+user?.image}
          className=" rounded-circle"
          width={200}
          height={200}
        />)
        }else{
         return( <div className="profile-container">
          <Image
            src={profile.src}
            width={200}
            height={200}
            alt="User Profile Photo"
            loading = 'lazy'
            className="profile-photo"
          />
          <div className="text-layer">Change Your Photo</div>
        </div>)
        }
      }
    }
    function updatePassword(values) {
      console.log(values.newPassword , values.rePassword)
      console.log(values.newPassword !== values.rePassword)
      if(values.newPassword !== values.rePassword){
        return notifyError("Password must be same")
      }
      Api.patch("/user/password",values)
      .then(()=>{
        // formik.resetForm()
        dispatch(fetchUserData())
        setChangeInput(false)
        notifySuccess("Account updated !!")
      })
      .catch((error)=>{
        let errorMsg = error?.response?.data?.message || error?.response?.data?.error
        notifyError(errorMsg)
      })
    }
    return (
      <>
      <NavbarHeader />
      <div className="container settings-page mt-4 pt-4 mb-4 pb-4">
        <h1>الاعدادات </h1>

        <div className="row">
          <label>
            <div className="  d-flex justify-content-center  cursor-pointer">
              {formikUserData.touched.image && formikUserData.errors.image ? (
                <div className="alert alert-danger">
                  {formikUserData.errors.image}
                </div>
              ) : null}
              <input
                type="file"
                id="image"
                name="image"
                style={{ display: "none" }}
                onChange={handleImageChange}
                onBlur={formikUserData.handleBlur}
                />

                {
                  renderImage()
                }
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
                <form onSubmit={formikUserData.handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mt-4">
                      {formikUserData.touched.firstName &&
                      formikUserData.errors.firstName ? (
                        <div className="alert alert-danger">
                          {formikUserData.errors.firstName}
                        </div>
                      ) : null}
                      <div className="input-with-icon">
                        <input
                          className="form-control"
                          type="text"
                          name="firstName"
                          id="firstName"
                          onBlur={formikUserData.handleBlur}
                          value={
                            formikUserData.values.firstName || userData?.firstName
                          }
                          onChange={formikUserData.handleChange}
                        />

                        <FaUserAlt className="icon primary-color" />
                      </div>
                    </div>

                    <div className="col-md-6 mt-4">
                      {formikUserData.touched.lastName &&
                      formikUserData.errors.lastName ? (
                        <div className="alert alert-danger">
                          {formikUserData.errors.lastName}
                        </div>
                      ) : null}
                      <div className="input-with-icon">
                        <input
                          className="form-control"
                          type="text"
                          name="lastName"
                          id="lastName"
                          onBlur={formikUserData.handleBlur}
                          value={
                            formikUserData?.values?.lastName || user?.lastName
                          }
                          onChange={formikUserData.handleChange}
                        />

                        <FaUserAlt className="icon primary-color" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    {" "}
                    <div className="col-md-6 mt-4">
                      {formikUserData.touched.age &&
                      formikUserData.errors.age ? (
                        <div className="alert alert-danger">
                          {formikUserData.errors.age}
                        </div>
                      ) : null}
                      <div className="input-with-icon">
                        <input
                          className="form-control"
                          type="number"
                          name="age"
                          id="age"
                          onBlur={formikUserData.handleBlur}
                          value={formikUserData.values.age || user?.age}
                          onChange={formikUserData.handleChange}
                        />

                        <AiTwotoneCalendar className="icon primary-color" />
                      </div>
                    </div>{" "}
                    <div className="col-md-6 mt-4">
                      {formikUserData.touched.email &&
                      formikUserData.errors.email ? (
                        <div className="alert alert-danger">
                          {formikUserData.errors.email}
                        </div>
                      ) : null}
                      <div className="input-with-icon">
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          id="email"
                          style={{ direction: "ltr", textAlign: "left" }}
                          onBlur={formikUserData.handleBlur}
                          value={formikUserData?.values?.email || user?.email}
                          onChange={formikUserData.handleChange}
                        />

                        <AiOutlineMail className="icon primary-color" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    {" "}
                    <div className="col-md-6 mt-4">
                      {formikUserData.touched.address &&
                      formikUserData.errors.address ? (
                        <div className="alert alert-danger">
                          {formikUserData.errors.address}
                        </div>
                      ) : null}
                      <div className="input-with-icon">
                        <input
                          className="form-control"
                          type="text"
                          name="address"
                          id="address"
                          required
                          onBlur={formikUserData.handleBlur}
                          value={formikUserData?.values?.address || user?.address}
                          onChange={formikUserData.handleChange}
                        />

                        <AiTwotoneHome className="icon primary-color" />
                      </div>
                    </div>
                    <div className="col-md-6 mt-4">
                      {formikUserData.touched.phone &&
                      formikUserData.errors.phone ? (
                        <div className="alert alert-danger">
                          {formikUserData.errors.phone}
                        </div>
                      ) : null}
                      <div className="input-with-icon">
                        <input
                          className="form-control"
                          type="number"
                          name="phone"
                          id="phone"
                          required
                          onBlur={formikUserData.handleBlur}
                          value={formikUserData.values.phone || user?.phone}
                          onChange={formikUserData.handleChange}
                        />

                        <AiFillPhone className="icon primary-color" />
                      </div>
                    </div>
                  </div>

                  <br></br>
                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="btn w-25 mx-auto d-block mt-4 settings-btn"
                    >
                      ارسال التعديلات
                    </button>
                  </div>
                </form>{" "}
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
              <form onSubmit={formikPassword.handleSubmit}>
                {" "}
                <div className="row">
                  {" "}
                  <div className="col-md-4 mt-4">
                    {formikPassword.touched.password &&
                    formikPassword.errors.password ? (
                      <div className="alert alert-danger">
                        {formikPassword.errors.password}
                      </div>
                    ) : null}

                    <div className="input-with-icon">
                      <input
                        className="form-control"
                        type="password"
                        name="oldPassword"
                        requried
                        id="oldPassword"
                        placeholder=" الرقم السري القديم   "
                        value={formikPassword.values.oldPassword}
                        onChange={formikPassword.handleChange}
                        onBlur={formikPassword.handleBlur}
                        style={{ direction: "ltr", textAlign: "left" }}
                      ></input>
                      <RiLockPasswordFill className="icon primary-color" />
                    </div>
                  </div>
                  <div className="col-md-4 mt-4">
                    {formikPassword.touched.password &&
                    formikPassword.errors.password ? (
                      <div className="alert alert-danger">
                        {formikPassword.errors.password}
                      </div>
                    ) : null}

                    <div className="input-with-icon">
                      <input
                        className="form-control"
                        type="password"
                        name="newPassword"
                        required
                        id="newPassword"
                        placeholder=" الرقم السري الجديد   "
                        value={formikPassword.values.newPassword}
                        onChange={formikPassword.handleChange}
                        onBlur={formikPassword.handleBlur}
                        style={{ direction: "ltr", textAlign: "left" }}
                      ></input>
                      <RiLockPasswordFill className="icon primary-color" />
                    </div>
                  </div>
                  <div className="col-md-4 mt-4">
                    {formikPassword.touched.rePassword &&
                    formikPassword.errors.rePassword ? (
                      <div className="alert alert-danger">
                        {formikPassword.errors.rePassword}
                      </div>
                    ) : null}

                    <div className="input-with-icon">
                      <input
                        className="form-control"
                        type="password"
                        name="rePassword"
                        id="rePassword"
                        required
                        placeholder=" اعادة ادخال الرقم السري  "
                        value={formikPassword.values.rePassword}
                        onChange={formikPassword.handleChange}
                        onBlur={formikPassword.handleBlur}
                        style={{ direction: "ltr", textAlign: "left" }}
                      ></input>
                      <RiLockPasswordFill className="icon primary-color" />
                    </div>
                  </div>{" "}
                </div>
                <div className="col-md-12">
                  <button
                    type="submit"
                    className="btn w-25 mx-auto d-block mt-4 settings-btn"
                  >
                    تغير كلمة السر
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
