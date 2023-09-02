"use client";
import React from "react";
import "./About.scss";
import img1 from '../../assets/Aboutdoctor.jpg'
// import { Carousel } from "@material-tailwind/react";
export default function About() {
  return (
    <>
      <div className="about-container container  pt-4 mb-4">
        <div className="row d-flex align-content-center justify-content-center" >
          <div className="col-md-4">
            <h3 className="secondary-color"> دكتور احمد جلال محمد </h3>
            <ul>
              <li>دكتوراة امراض باطنة</li>
              <li>استشارى اول أمراض الجهاز الهضمي -الكبدوالمناظير</li>
              <li>
                زمالة أمراض الجهاز الهضمي -الكبدوالمناظير التشخيصية و العلاجية
              </li>
              <li>زميل الجمعية الأميركية لمناظير الجهاز الهضمى</li>
              <li>
 الحاصل على منحة الجمعية الاوربية لمناظير الجهاز الهضمى 2014 </li>
            </ul>
          </div>

          <div className="col-lg-4">
            <img src={img1.src} className="w-100 " alt="دكتور أحمد جلال" />

          </div>
        </div>
      </div>
    </>
  );
}
