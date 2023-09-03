"use client";
import React, { use, useEffect, useState } from "react";
import "./adminpanel.scss";
import doctor from "../../assets/doctor.jpg";
import { BsFillPencilFill, BsPencilFill } from "react-icons/bs";
import { BiCloudUpload } from "react-icons/bi";
import { MdContentPaste } from "react-icons/md";
import f from'../../assets/ff.jpg'
import m from'../../assets/mm.jpg'

export default function AdminPanel() {
  // const [upload, setUpload] = useState(false);
  const [selectImage, setSelectImage] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const handleUpload=async()=>{
    // setUpload(true)
    try{
      if(!selectedFile) return ; 
        const formData = new FormData()
        formData.append('myImage' , selectedFile)
        const {data} =await axios.post('/api/image' , formData)
        console.log(data);
      }
      catch(error){
        console.log(error.response?.data);
    }
    // setUpload(false)
  }
  useEffect(() => {
    const setFullHeight = () => {
      const elements = document.querySelectorAll(".js-fullheight");
      elements.forEach((element) => {
        element.style.height = window.innerHeight + "px";
      });
    };

    const handleResize = () => {
      setFullHeight();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

    setFullHeight();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <div>
      <div className="wrapper d-flex align-items-stretch">
        <nav
          id="sidebar"
          className={`order-last ${isSidebarActive ? "active" : ""}`}
          style={{ backgroundImage: "url(images/bg_1.jpg)" }}
        >
          <div className="custom-menu">
            <button
              type="button"
              id="sidebarCollapse"
              className="btn btn-primary"
              onClick={toggleSidebar}
            ></button>
          </div>
          <div className="sidebar mt-4">
            <h1>
              <a href="index.html" className="logo primary-sidebar">
                دكتور احمد جلال{" "}
                <span>استشارى اول أمراض الجهاز الهضمي -الكبدوالمناظير"</span>
              </a>
            </h1>
            <div className=" d-flex align-items-center justify-content-center mb-4">
              <img
                className="  rounded-circle w-75 shadow "
                height={190}
                src={doctor.src}
                alt="Doctor"
              />
            </div>

            <ul className="list-unstyled components mb-5">
              <li>
                <a href="/">
                  <span className="fa fa-sticky-note mr-3" /> طلبات الحجز
                </a>
              </li>
              <li className="active">
                <a href="#">
                  <span className="fa fa-home mr-3" /> مواعيد الحجز
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-user mr-3" /> المدونات
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div
          id="content"
          className={`sidebar p-4 p-md-5 pt-5 ${
            isSidebarActive ? "active" : ""
          }`}
        >
          <h1 class="text-center">مواعيد الاسبوع</h1>
          <table class="table table-bordered text-center">
            <thead>
              <tr>
                <th>الموعد</th>
                <th>السبت</th>
                <th>الاحد</th>
                <th>الاتنين</th>
                <th>الثلاثاء</th>
                <th>الاربعاء</th>
                <th>الخميس</th>
                <th>الجمعة</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> </td>
                <td>9:00 AM</td>
                <td>9:00 AM</td>
                <td>9:00 AM</td>
                <td>9:00 AM</td>
                <td>9:00 AM</td>
                <td>9:00 AM</td>
                <td>9:00 AM</td>
              </tr>
            </tbody>
          </table>
          <div className="container reservation m-4">
            <form className="form-shap shadow">
              <h1 className="text-center mt-4 primary-sidebar ">أنشاء مدونة</h1>
              <div className="row  d-flex align-content-center justify-content-center m-4 ">
                <div className="col-12">
                  <div className="input-with-icon">
                    <input
                      className="form-control"
                      type="text"
                      name=""
                      id=""
                      placeholder="العنوان"
                      required
                    />
                    <BsPencilFill className="icon primary-sidebar" />
                  </div>
                </div>
                <div className="col-12">
                  <br />
                  <div className="input-with-icon">
                    <textarea
                      class="form-control "
                      id=""
                      rows="4"
                      placeholder="محتوي المدونة"
                    ></textarea>
                    <MdContentPaste className="icon-text-area fs-5 primary-sidebar " />
                  </div>
                </div>

                <label>
                  <div className="col-12">
                    <input type="file" hidden 
                    onChange={({target})=>{
                      if(target.files){
                        const file = target?.files[0];
                        setSelectImage(URL.createObjectURL(file))
                        setSelectedFile(file)
                      }
                    }}
                    />
                    <div className="col-12  fs-1 primary-sidebar cursor-pointer text-center form-control mt-4">
                      {selectImage ? <img src={selectImage} className="w-100"/> :<> <h2 className="text-secondary"> اختر صورة </h2>
                      <BiCloudUpload /></>}
                     
                    </div>
                  </div>
                </label>

                <div className="col-6" style={{ marginBottom: "70px" }}>
                  <button
                  disabled={!selectedFile}
                  onClick={handleUpload}
                  type="submit"
                  className="btn form-control primary-sidebar-bg text-white mt-4"
                  >
                    انشئ المدونة
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="row shadow rounded-5">
            <div className="col-lg-12  rounded d-flex">
              <div className="col-lg-2">
                            <img src={m.src}  className="w-100 rounded-circle border-2"/>

              </div>
              
              <div className="col-lg-3 mt-4 pt-4">
                <h5> الاسم</h5>
                <h5> الهاتف</h5>
              
               </div>

    <div className="col-lg-3  mt-4 pt-4">
              
                <h5> البريد الالكتروني</h5>
                <h5> موعد الحجز </h5>
               
               </div>
               <div className="col-lg-3  mt-4 pt-4">
         
              <h5>   النوع</h5>
              <h5>   اي تفاصيل عن الحجز</h5>
             </div>            


            </div>
            <div className="col-lg-12  d-flex justify-content-center mb-3">
  <button className="btn primary-sidebar-bg m-2  text-white">متاح</button>
  <button className="btn bg-danger m-2  text-white ">غير متاح</button>
</div>
   
          </div>
        </div>
      </div>
    </div>
  );
}
