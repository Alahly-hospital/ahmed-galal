import React from "react";
import f from "../../../assets/ff.jpg";
import m from "../../../assets/mm.jpg";
import './reservationstatus.scss'
export default function reservationstatus() {
  return (
    <>
       <div className="row   ">
        <div className="col-lg-4 shadow rounded-5 ">
          <div className=" text-center">
            <img src={m.src} className="w-50 rounded-circle" />
          </div>

          <div className="">
            <div className="d-flex  justify-content-around">
              <h5>
              &nbsp;   20/10/2023 
              </h5>

              <h5> 0125****** </h5>
            </div>
            <div className="d-flex justify-content-around">
              <h5> rwan@gmail.con </h5> 
              <h5> روان  </h5>
            </div>

            <div className="d-flex justify-content-around">
              <h5>  لا يوجد تفاصيل </h5>

              <h5> أنثي  </h5>
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
