"use client";
import React from "react";
import "./contact.scss";
import { MdLocationOn  } from "react-icons/md";
import {  BsFillTelephoneFill } from "react-icons/bs";
import {  BiMessageRoundedDetail } from "react-icons/bi";
import {  BsFacebook ,BsYoutube } from "react-icons/bs";

export default function contac() {
  return (
    <>
      <div className="bg-img ">
        <div className="bg-layer   text-white text-center   p-4">
          <h1 className="pt-4 m-4">للحجز أو الاستفسار تواصل معنا الان </h1>
          <div>
            <h1>01022077474</h1>

            <h1>01121139030</h1>

            <h1> 035554716</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className="text-center pt-4 secondary-color">تواصل معنا</h1>
        <div className="row d-flex align-content-center justify-content-around">
        <div className="col-md-3 text-center contact-bg rounded p-3 m-2 shadow">
        <BiMessageRoundedDetail className="fs-1 mb-3 secondary-color"/>
            <h4 className="secondary-color">تواصل معنا</h4>
            <h5><BsFacebook/> <BsYoutube/></h5>
                </div>
        
          <div className="col-md-3  text-center contact-bg rounded p-3 m-2 shadow">
          <BsFillTelephoneFill className="fs-2 mb-3 secondary-color text-center" />
            <h4 className="secondary-color">أرقام الهاتف</h4>
            <h5>01022077474</h5>
            <h5>01121139030</h5>
            <h5> 035554716</h5>
          </div>
          <div className="col-md-3 text-center contact-bg rounded p-3 m-2 shadow">
            <i className="fas fa-location-dot"></i>
            <MdLocationOn className="fs-1 mb-3 secondary-color"/>  
            <h4 className="secondary-color">العنوان</h4>
            <h5>المركز : ٢٩ شارع جلال حماد ناصية شارع جمال عبد الناصر
اول شارع بعد ميدان جيهان ميامى الاسكندرية</h5>
          </div>
         
        
        </div>

        <div>
          <h1 className="text-center pt-4 secondary-color fw-bold">
            مركز الدكتور
          </h1>
          <h1 className="text-center pt-4  ">أحمد جلال</h1>
          <div className="row w-100 m-1  " style={{paddingTop:'100px'}}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d54578.263520222295!2d30.01013466010744!3d31.244506804050435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d31.2263465!2d29.9608076!4m3!3m2!1d31.2626268!2d29.9941215!5e0!3m2!1sar!2seg!4v1692981381844!5m2!1sar!2seg"
              width={600}
              height={450}
              style={{ border: "0" }}
              allowfullscreen=""
              loading={"lazy"}
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
