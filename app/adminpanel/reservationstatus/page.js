"use client";
import React, { useEffect, useState } from "react";
import f from "../../../assets/ff.jpg";
import m from "../../../assets/mm.jpg";
import "./reservationstatus.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaUserAlt } from "react-icons/fa";
import Api from "@/config/api";
export default function reservationstatus() {
  const [changeTime, setChangeTime] = useState(false);
  const [userData, setUserData] = useState([])
  async function ReservationData(){
    try {
      const res = await Api.get(`/reservation`) 
      // const data = data.json(res)
      setUserData(res.data)
      console.log(res.data);      
      } catch (e) {
        let error = e?.response?.data?.message || e?.response?.data?.error;
        console.log(`error ${error}`);
        
      }
  
    }
    useEffect(() => {
      ReservationData();
    }, [])
    
  
  function reservationTime() {
    setChangeTime(!changeTime);
  }
  function handleTime(values) {
    console.log(values);
    formik.resetForm();
  }
  let validationSchema = Yup.object({
    time: Yup.string().required("time is required"),
  });

  let formik = useFormik({
    initialValues: {
      time: "",
    },
    validationSchema,
    onSubmit: handleTime,
  });

  return (
    <>
    
{
userData.map((user,id)=>(  <div className="row mt-4  ">
        <div className="col-lg-4 col-md-6 shadow rounded-5 ">
          <div className=" text-center">
            <img src={m.src} className="w-50 rounded-circle" />
          </div>
    <div className="" ket={id}>
            <div className="d-flex  justify-content-around">
              <p className="fs-5">&nbsp; {user.date}</p>

              <p className="fs-5"> {user.phone}</p>
            </div>
            <div className="d-flex justify-content-around">
              <p className="fs-5">{user.email} </p>
              <p> روان </p>
            </div>

            <div className="d-flex justify-content-around">
              <p className="fs-5">{user.details}</p>

              <p className="fs-5">{user.gender}</p>
            </div>

            <div className="  text-center mb-4  ">
              <button className="btn   ms-2 confirm-btn  ">الموعد متاح</button>
              {changeTime ? (
                <div className="text-center">
                  <form action="" onSubmit={formik.handleSubmit}>
                    <div className="input-with-icon responsive-input mt-4">
                      <input
                        type="date"
                        id="time"
                        name="time"
                        className="form-control"
                        value={formik.values.time}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn   form-control text-center text-white mt-4 primary-bg p-2   "
                    >
                      ارسال الموعد
                    </button>
                  </form>
                </div>
              ) : (
                <button
                  className="btn  ms-2  time-btn "
                  onClick={reservationTime}
                >
                  تحديد موعد
                </button>
              )}
            </div>
          </div>
    </div>
      </div>))}
        
    
    </>
  );
}
