"use client";
import React, { useEffect, useState } from "react";
import "./userreservation.scss";
import NavbarHeader from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import { MdDeleteSweep } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import Api from "@/config/api";
import { notifyError, notifySuccess } from "@/components/toastify/toastify";

export default function userreservation() {
  const [reservations, setReservations] = useState([]);
  async function getUserReservation() {
    try {
      const res = await Api.get(`/reservation`);
      setReservations(res.data);
      console.log(res.data);
    } catch (e) {
      let error = e?.response?.data?.message || e?.response?.data?.error;
      notifyError(error);
    }
  }
  const [editedReservation, setEditedReservation] = useState(null);

  useEffect(() => {
    getUserReservation();
  }, []);

  const handleDeleteReservation = async (id) => {
    await Api.delete(`/reservation/${id}`)
      .then(() => {
        getUserReservation();
        notifySuccess("Reservation deleted !!");
      })
      .catch((e) => {
        let error = e?.response?.data?.message || e?.response?.data?.error;
        notifyError(error);
      });
  };

  const handleEditClick = (reservation) => {
    setEditedReservation(reservation);
  };

  const handleUpdateReservation = async () => {
    await Api.patch("/reservation", editedReservation)
      .then(() => {
        getUserReservation();
        notifySuccess("Reservation updated !!");
      })
      .catch((e) => {
        let error = e?.response?.data?.message || e?.response?.data?.error;
        notifyError(error);
      });
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
                <div className="col-lg">النوع</div>
                <div className="col-lg">رقم الهاتف</div>
                <div className="col-lg">ميعاد الحجز</div>
                <div className="col-lg"> حالة الحجز</div>
                <div className="col-lg" />
              </div>
            </div>
          </div>
          {reservations.map((reservation, id) => (
            <div key={id} className="my-2 p-2">
              <div className="w-100">
                <div className="row user-reservation-bg p-3 mb-4">
                  <div className="col-6 d-md-block d-lg-none fw-bold">
                    الاسم
                  </div>
                  <div className="col-6 d-md-block d-lg-none fw-bold">
                    الهاتف
                  </div>
                  <div className="col-lg col-6 mb-4">{reservation.name}</div>
                  <div className="col-lg col-6 text-end d-block d-lg-none">
                    {reservation.phone}
                  </div>
                  <div className="col-6 d-md-block d-lg-none  mb-2 fw-bold">
                    العمر
                  </div>
                  <div className="col-6 d-md-block d-lg-none  mb-2 fw-bold">
                    الميعاد
                  </div>
                  <div className="col-lg col-6 ">{reservation.age}</div>{" "}
                  <div className="col-lg col-6">
                    {reservation?.date?.split("T")[0]}/{" "}
                    {reservation?.date?.split("T")[1]}
                  </div>
                  <div className="col-6 d-md-block d-lg-none  mb-2 mt-2 fw-bold">
                    النوع
                  </div>
                  <div className="col-lg  ">{reservation.gender}</div>
                  <div className="col-lg d-none d-lg-block ">
                    {reservation.phone}
                  </div>
                  <div className="col-12 d-md-block d-lg-none  mb-2   mt-2  fw-bold">
                    حالة الحجز
                  </div>
                  <div className="col-lg col-6  mb-2 ">
                    {reservation.status === "waiting" ? (
                      <div style={{ color: "red" }}>
                        {" "}
                        في انتظار الموافقة ...
                      </div>
                    ) : (
                      <div style={{ color: "green" }}>تم تأكيد الموعد</div>
                    )}
                  </div>
                  <div className="col-lg col-md-12 text-end">
                    <MdDeleteSweep
                      className="fs-2 ms-4 delete-icon"
                      onClick={() => handleDeleteReservation(reservation._id)}
                    />
                    {reservation.status == "waiting" && (
                      <GrUpdate
                        className="fs-5 ms-4 update-icon"
                        onClick={() => handleEditClick(reservation)}
                      />
                    )}
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
                  required
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
                  required
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
                  name="phone"
                  required
                  value={editedReservation.phone}
                  onChange={(e) =>
                    setEditedReservation({
                      ...editedReservation,
                      phone: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-lg-4 form-group">
                <label>ميعاد الحجز : </label>
                <input
                  className="form-control mt-3 mb-3"
                  type="datetime-local"
                  required
                  name="date"
                  value={editedReservation.date}
                  onChange={(e) =>
                    setEditedReservation({
                      ...editedReservation,
                      date: e.target.value,
                    })
                  }
                />
              </div>
              <button
                onClick={handleUpdateReservation}
                className="btn update-btn ms-2"
              >
                تحديث البيانات{" "}
              </button>
              <button
                onClick={() => setEditedReservation(null)}
                className="cancle-btn btn ms-2"
              >
                الغاء{" "}
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
