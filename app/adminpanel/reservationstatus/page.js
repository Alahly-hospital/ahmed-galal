import React from "react";
import f from "../../../assets/ff.jpg";
import m from "../../../assets/mm.jpg";
import './reservationstatus.scss'
export default function reservationstatus() {
  return (
    <>
       <div className="row  rounded-5">
        <div className="col-lg-5 shadow rounded-5 ">
          <div className=" text-center">
            <img src={m.src} className="w-50 rounded-circle" />
          </div>

          <div className="">
            <div className="d-flex  justify-content-around">
              <h5>
                 موعد الحجز &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </h5>

              <h5> الهاتف &nbsp;&nbsp;</h5>
            </div>
            <div className="d-flex justify-content-around">
              <h5> البريد الالكتروني</h5> <h5> الاسم &nbsp;&nbsp;&nbsp;</h5>
            </div>

            <div className="d-flex justify-content-around">
              <h5> تفاصيل عن الحجز</h5>

              <h5> النوع &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
            </div>

            <div className="  d-flex justify-content-center mb-4 ">
              <button className="btn   ms-2 confirm-btn">
                متاح
              </button>
              <button className="btn  ms-2  reject-btn ">
                غير متاح
              </button>
            </div>
          </div>
 
        </div>
      </div>
    </>
  );
}
