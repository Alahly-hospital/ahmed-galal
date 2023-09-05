"use client";
import React, { useState } from "react";
import "./userreservation.scss";
import NavbarHeader from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { MdDeleteSweep } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";

export default function userreservation() {
  const [reservations, setReservations] = useState([
    {
      id: 1,
      name: "روان",
      age: 20,
      phoneNumber: "0122**********",
      dateTime: "Monday, June 5th, 12:30pm",
    },
    {
      id: 2,
      name: "روان",
      age: 20,
      phoneNumber: "0122**********",
      dateTime: "Monday, June 5th, 12:30pm",
    },
  ]);

  const [editedReservation, setEditedReservation] = useState(null);

  const handleDeleteReservation = (id) => {
    const updatedReservations = reservations.filter(
      (reservation) => reservation.id !== id
    );
    setReservations(updatedReservations);
  };

  const handleEditClick = (reservation) => {
    setEditedReservation(reservation);
  };

  const handleUpdateReservation = () => {
    const updatedReservations = reservations.map((reservation) =>
      reservation.id === editedReservation.id ? editedReservation : reservation
    );
    setReservations(updatedReservations);
    setEditedReservation(null);
  };

  return (
    <>
      <NavbarHeader />
      <h2 className="title pt-4 mt-4">حجوزاتي</h2>
      <div className="container user-reservation">
        <div className="col w-100 mt-4">
          <div className="my-2 d-none d-lg-block ">
            <div className="w-100">
              <div className="row p-3 fw-bold">
                <div className="col-lg ">الاسم</div>
                <div className="col-lg">العمر</div>
                <div className="col-lg">رقم الهاتف</div>
                <div className="col-lg">ميعاد الحجز</div>
                <div className="col-lg" />
              </div>
            </div>
          </div>
          {reservations.map((reservation) => (
            <div key={reservation.id} className="my-2 p-2">
              <div className="w-100">
                <div className="row user-reservation-bg p-3 mb-4">
                  <div className="col-6 d-md-block d-lg-none fw-bold">
                    الاسم
                  </div>
                  <div className="col-lg col-6 text-end d-block d-lg-none">
                    {reservation.phoneNumber}
                  </div>
                  <div className="col-lg col-md-12 mb-4">
                    {reservation.name}
                  </div>
                  <div className="col-6 d-md-block d-lg-none  mb-2 fw-bold">
                    العمر
                  </div>
                  <div className="col-6 d-md-block d-lg-none  mb-2 fw-bold">
                    الميعاد
                  </div>
                  <div className="col-lg col-6 ">{reservation.age}</div>
                  <div className="col-lg d-none d-lg-block ">
                    {reservation.phoneNumber}
                  </div>
                  <div className="col-lg col-6">{reservation.dateTime}</div>
                  <div className="col-lg col-md-12 text-end">
                    <MdDeleteSweep
                      className="fs-2 ms-4 delete-icon"
                      onClick={() => handleDeleteReservation(reservation.id)}
                    />
                    <GrUpdate
                      className="fs-5 ms-4 update-icon"
                      onClick={() => handleEditClick(reservation)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {editedReservation && (
          <div className="edit-form  mb-4">
            <h3>تعديل بيانات الحجز</h3>
            <form>
              <div className="col-lg-4 form-group">
                <label>الاسم : </label>
                <input
                  className="form-control mt-3 mb-3"
                  type="text"
                  name="name"
                  value={editedReservation.name}
                  onChange={(e) =>
                    setEditedReservation({
                      ...editedReservation,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-lg-4 form-group">
                <label>العمر : </label>
                <input
                  className="form-control mt-3 mb-3"
                  type="text"
                  name="age"
                  value={editedReservation.age}
                  onChange={(e) =>
                    setEditedReservation({
                      ...editedReservation,
                      age: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-lg-4 form-group">
                <label>رقم الهاتف : </label>
                <input
                  className="form-control mt-3 mb-3"
                  type="text"
                  name="phoneNumber"
                  value={editedReservation.phoneNumber}
                  onChange={(e) =>
                    setEditedReservation({
                      ...editedReservation,
                      phoneNumber: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-lg-4 form-group">
                <label>ميعاد الحجز : </label>
                <input
                  className="form-control mt-3 mb-3"
                  type="text"
                  name="dateTime"
                  value={editedReservation.dateTime}
                  onChange={(e) =>
                    setEditedReservation({
                      ...editedReservation,
                      dateTime: e.target.value,
                    })
                  }
                />
              </div>
              <button onClick={handleUpdateReservation} className="btn update-btn ms-2">تحديث البيانات </button>
              <button onClick={() => setEditedReservation(null)} className="cancle-btn btn ms-2">الغاء </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
