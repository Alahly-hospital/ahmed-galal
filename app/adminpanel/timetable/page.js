"use client";
import React, { useEffect, useState } from "react";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteSweep } from "react-icons/md";
import "./timetable.scss";
import Api from "@/config/api";
import { notifyError, notifySuccess } from "@/components/toastify/toastify";
export default function timetable() {
  const [confrimedTable, setConfrimedTable] = useState([])
  async function confirmed(){
    try {
    const res =await Api.get('reservation/confirmed')
    setConfrimedTable(res.data)
    console.log(res);
    } catch (e) {
      let error = e?.response?.data?.message || e?.response?.data?.error;
        console.log(`error ${error}`)

      
    }

  } 
  const handleDeleteReservation = async (id) => {
    await Api.delete(`/reservation/${id}`)
      .then(() => {
        confirmed();
        notifySuccess("Reservation deleted !!");
      })
      .catch((e) => {
        let error = e?.response?.data?.message || e?.response?.data?.error;
        notifyError(error);
      });
  };

  useEffect(() => {
    confirmed();
    
  }, [])
 
  return (
    <div>
      <h1 className="text-center">مواعيد الأسبوع</h1>
      <table className="table table-bordered text-center">
        <thead>
          <tr>
            <th>الاسم</th>
            <th>رقم الهاتف</th>
            <th>موعد الحجز</th> 
              <th>حالة الحجز </th>
           
            <th>حذف</th>
          {/* <th>تعديل </th> */}
          </tr>
        </thead>
        <tbody>
          {confrimedTable.map((userReservation,id)=>(
             <tr key={id}>
            <td>{userReservation.name}</td>
            <td>{userReservation.phone}</td>
            <td>{userReservation?.date?.split("T")[0]}/{" "}
                {userReservation?.date?.split("T")[1]}</td>
            <td>{userReservation.status}</td>
            <td>
            <MdDeleteSweep
                      className="fs-2 ms-4 delete-icon"
                      onClick={() => handleDeleteReservation(userReservation._id)}
                    />
            </td>
            {/* <td>
              <GrUpdate className="fs-5 ms-4 update-icon" />
            </td> */}
          </tr>
          ))}
         
        </tbody>
      </table>
    </div>
  );
}
