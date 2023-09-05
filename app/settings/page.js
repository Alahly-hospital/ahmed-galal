'use client'
import React from 'react'
import './settings.scss'
import NavbarHeader from '/components/Navbar/Navbar'
import Footer from '/components/Footer/Footer'
import { useFormik } from "formik";
import profile from '../../assets/ff.jpg'
import * as Yup from "yup";
import { RiLockPasswordFill } from 'react-icons/ri'

export default function settings() {

  function updateInfo(values) {}
  let validationSchema = Yup.object({

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
     
      password: "",
      rePassword: "",
   
    },
    validationSchema,
    onSubmit: updateInfo,
  });
  return (
    <>
    <NavbarHeader/>
    <div className="container settings-page mt-4 pt-4 mb-4 pb-4">
          <h1>الاعدادات </h1>
          <form onSubmit={formik.updateInfo}>

    <div className="row">
         <div className='  d-flex justify-content-center   '>
        <img src={profile.src} className='w-25'/>
       </div>
      
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
                    required
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
                    required
                    style={{ direction: "ltr", textAlign: "left" }}
                  ></input>
                  <RiLockPasswordFill className="icon primary-color" />
                </div>
              </div>
            </div>
            </form>

            </div>
    <Footer/>
    </>
  )
}
