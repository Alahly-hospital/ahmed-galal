"use client";
import React, { useEffect, useState } from "react";
import f from "../../../assets/ff.jpg";
import m from "../../../assets/mm.jpg";
import "./reservationstatus.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import Api from "@/config/api";
import { notifyError, notifySuccess } from "@/components/toastify/toastify";

export default function reservationstatus() {
  const [changeTime, setChangeTime] = useState(false);
  const [userData, setUserData] = useState([])

  async function ReservationData(){
    try {
      const res = await Api.get(`/reservation/waiting`) 
        setUserData(res.data)
      } catch (e) {
        let error = e?.response?.data?.message || e?.response?.data?.error;
        console.log(`error ${error}`)
        notifyError(error)
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
    date: Yup.string().required("date is required"),
  });

  let formik = useFormik({
    initialValues: {
      date: "",
    },
    validationSchema,
    onSubmit: handleTime,
  });
async function acceptReservation(id){
     await Api.post(`/reservation/confirm`,{id}) 
     .then(()=>{
      notifySuccess("Reservation Confirmed !!")
      ReservationData()
     })
     .catch((e)=>{
       let error = e?.response?.data?.message || e?.response?.data?.error;
       console.log(`error ${error}`)
       notifyError(error)
     })
}
  return (
    <>
      <div className="row mt-4  ">
       
{userData.length? userData.map((user,id)=>( 
<div className="col-md-4   " key={id}>
  <div className="shadow rounded-5">
          <div className=" text-center ">
            <img src={m.src} className="w-50 rounded-circle" />
          </div>
    <div className="">
            <div className="d-flex  justify-content-around">
              <p className="fs-5">  {user?.date?.split("T")[0]} /{user?.date?.split("T")[1]}</p>

              <p className="fs-5"> {user.phone}</p>
            </div>
            <div className="d-flex justify-content-around">
              <p className="fs-5">{user.email} </p>
              
            </div>
            <div className="d-flex justify-content-around">
            <p className="fs-5">{user.name} </p>              
            </div>
            


            <div className="d-flex justify-content-around">
 
              <p className="fs-5">{user.gender}</p>
            </div>
            <div className="d-flex justify-content-around">
              <p className="fs-5">{user.notes}</p>

             </div>

            <div className="  text-center mb-4  ">
              <button className="btn   ms-2 confirm-btn  mb-4  " onClick={(()=>acceptReservation(user._id))} >الموعد متاح</button>
              {changeTime ? (
                <div className="text-center">
                  <form action="" onSubmit={formik.handleSubmit}>
                    <div className="input-with-icon responsive-input m-4">
                      <input
                        type="datetime-local"
                        id="date"
                        name="date"
                        className="form-control"
                        value={formik.values.date}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn text-center text-white mt-2 primary-bg p-2   mb-3 form-control w-50"
                    >
                      ارسال الموعد
                    </button>
                  </form>
                </div>
              ) : (
                <button
                  className="btn  ms-2  time-btn  mb-4"
                  onClick={reservationTime}
                >
                  تحديد موعد
                </button>
              )}
            </div>
          </div>
   </div>
   </div>
   ))
    :
    <h5 className="text-center">
        No Reservations yet 
    </h5> 
  }
      </div>
    </>
  );
}
