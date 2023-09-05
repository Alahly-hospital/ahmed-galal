"use client";
import React, { useState } from "react";
import "./userreservation.scss";
import NavbarHeader from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { MdDeleteSweep } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
export default function userreservation() {
  const [Data, setData] = useState(Array.from({ length: 10 }));

  return (
    <>
      <NavbarHeader />
      <div className="container user-reservation ">
        <div className="col w-100 mt-4 ">
          <div className="my-2 d-none d-lg-block ">
            <div className="w-100"> 
              <div className="row p-3 fw-bold">
                <div className="col-lg ">الاسم</div>
                <div className="col-lg">Category</div>
                {/* <div className="col-lg">Status</div> */}
                <div className="col-lg">ميعاد الحجز</div>
                <div className="col-lg" />
              </div>
            </div>
          </div>
          {Data.map((items, index) => (
            <div key={index} className="my-2  p-2 ">
              <div className="w-100">
                <div className="row user-reservation-bg p-3 mb-4">
                  <div className="col-6 d-md-block d-lg-none fw-bold ">
                    الاسم
                  </div>
                  {/* <div className="col-lg col-6 text-end d-block d-lg-none">
                      <button className=" rounded-btn btn Default-bg mb-2 hover-bg-color">
                        Published
                      </button>
                    </div> */}

                  <div className="col-lg col-md-12 mb-4">روان</div>

                  <div className="col-6 d-md-block d-lg-none  mb-2 fw-bold">
                    Categotry
                  </div>
                  <div className="col-6 d-md-block d-lg-none  mb-2 fw-bold">
                    Date & Time
                  </div>
                  <div className="col-lg col-6 ">Tech</div>
                  {/* <div className="col-lg d-none d-lg-block ">
                      <button className="rounded-btn btn Default-bg  hover-bg-color">
                        Published
                      </button>
                    </div> */}
                  <div className="col-lg col-6">
                    Monday , june 5th <br></br> 12:30pm{" "}
                  </div>
                  <div className="col-lg col-md-12 text-end">
<MdDeleteSweep className="fs-2 ms-4"/>   
<GrUpdate className="fs-5 ms-4"/>              
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* <button className="rounded-btn btn Disabled-bg">
                      Draft
                    </button> */}
        </div>
      </div>

      {/* <Footer/> */}
    </>
  );
}
