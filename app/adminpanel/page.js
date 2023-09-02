'use client'
import React, { useEffect, useState } from 'react';
import './adminpanel.scss';
import { BiSolidRightArrowSquare ,BiBars} from 'react-icons/bi';
import doctor from'../../assets/doctor.jpg'
import { BsFillPencilFill, BsPencilFill } from 'react-icons/bs';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import Form from "react-bootstrap/Form";
import { MdContentPaste } from 'react-icons/md';


export default function AdminPanel() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  useEffect(() => {
    const setFullHeight = () => {
      const elements = document.querySelectorAll('.js-fullheight');
      elements.forEach((element) => {
        element.style.height = window.innerHeight + 'px';
      });
    };

    const handleResize = () => {
      setFullHeight();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

    setFullHeight();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <div>
      <div className="wrapper d-flex align-items-stretch">
        <nav id="sidebar" className={`order-last ${isSidebarActive ? 'active' : ''}`} style={{ backgroundImage: 'url(images/bg_1.jpg)' }}>
          <div className="custom-menu">
            <button type="button" id="sidebarCollapse" className="btn btn-primary" onClick={toggleSidebar}>
  
            </button>
          </div>
          <div className="sidebar mt-4">
            <h1><a href="index.html" className="logo primary-sidebar">دكتور احمد جلال <span>استشارى اول أمراض الجهاز الهضمي -الكبدوالمناظير"</span></a></h1>
            <div className=' d-flex align-items-center justify-content-center mb-4'>
<img className='  rounded-circle w-75 shadow ' height={190} src={doctor.src} alt="Doctor"  />
</div>

            <ul className="list-unstyled components mb-5">  
            <li>
                <a href="#"><span className="fa fa-sticky-note mr-3" /> طلبات الحجز</a>
              </li>
              <li className="active">
                <a href="#"><span className="fa fa-home mr-3" /> مواعيد الحجز</a>
              </li>
              <li>
                <a href="#"><span className="fa fa-user mr-3" /> المدونات</a>
              </li>
            
            </ul>
            {/* <div className="mb-5 px-4">
              <h3 className="h6 mb-3">تابع لمزيد من الاخبار</h3>
              <form action="#" className="subscribe-form">
                <div className="form-group d-flex">
                  <div className="icon"><span className="icon-paper-plane" /></div>
                  <input type="text" className="form-control" placeholder="ادخل ايميلك لمزيد من المتابعة" />
                </div>
              </form>
            </div> */}
          </div>
        </nav>
        <div id="content" className={`sidebar p-4 p-md-5 pt-5 ${isSidebarActive ? 'active' : ''}`}>
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
        <form className="form-border">
          <h1 className="text-center mt-4 primary-color ">أنشاء مدونة</h1>
          <div className="row  d-flex align-content-center justify-content-center m-4 ">
            <div className="col-12">
           
              <div className="input-with-icon">
                <input
                  className="form-control"
                  type="text"
                  name=""
                  id=""
                  placeholder='العنوان'
                  required
                />
                <BsPencilFill className="icon primary-color" />
              </div>
            </div>
            <div className="col-12">
   <br />
 <div className="input-with-icon">
  <textarea class="form-control " id="" rows="4" placeholder='محتوي المدونة'></textarea>
  <MdContentPaste className="icon-text-area fs-5 primary-color " />
</div>
</div>

<div className="col-12" style={{marginBottom:"70px"}}>
              <button
                type="submit"
                className="btn form-control primary-bg text-white mt-4"
              >
              انشئ المدونة{" "}
              </button>
            </div>
         
         
          </div>
        </form>
      </div>
        </div>
      </div>
    </div>
  );
}
