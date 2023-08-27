"use client"
import React from 'react'
import './reservation.scss'
import { FaUserAlt } from 'react-icons/fa'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import { BsFillPencilFill } from 'react-icons/bs'
export default function reservation() {
  return (
    <>

    <div className='container reservation'>

    
    <form className='form-border'>    <h1 className='text-center mt-4 primary-color '> احجز موعدك الان </h1>

        <div className='row  d-flex align-content-center justify-content-center'>
            <div className='col-md-4'>
                <label htmlFor="">الاسم</label>
                <div className="input-with-icon">
      <input className='form-control' type="text" name="" id=""  required />
      <FaUserAlt className='icon primary-color'/>
         </div>               
            </div> <br/><br/>
            <div className='col-md-4'>
            <label htmlFor="">رقم الهاتف </label>

                <div className="input-with-icon">
                <input className='form-control' type="number" name="" id=""  required></input>
      <AiFillPhone className='icon fs-5 primary-color'/>
         </div>    
            </div>
            {/* <div className='col-md-4 border-2 shadow p-4'>
                <h5>مواعيد العمل </h5>
                <div className='d-flex justify-content-between border-bottom'>
                  <p>الاحد</p>
                <p>12 ظهرا الي 10 مساء</p>  
                </div>
                <div className='d-flex justify-content-between border-bottom'>
                  <p>الاحد</p>
                <p>12 ظهرا الي 10 مساء</p>  
                </div>
                <div className='d-flex justify-content-between border-bottom'>
                  <p>الاحد</p>
                <p>12 ظهرا الي 10 مساء</p>  
                </div><div className='d-flex justify-content-between  '>
                  <p>الاحد</p>
                <p>12 ظهرا الي 10 مساء</p>  
                </div>
                
                
        </div> */}
        </div>

        <div className='row d-flex align-content-center justify-content-center'>
            <div className='col-md-4 mt-4'>
            <label htmlFor="">موعد الحجز</label>

                <input className='form-control' type="date" name="" id="" placeholder="تاريخ الحجز" required></input> 
            </div>
            <div className='col-md-4 mt-4'>
            <label htmlFor="">البريد الالكتروني</label>

                <div className="input-with-icon">
                <input className='form-control' type="email" name="" id=""   required></input> 
      <AiOutlineMail className='icon fs-5 primary-color '/>
         </div> 
            
            </div>
        </div>

        <div className='row d-flex align-content-center justify-content-center'>
            <div className='col-8'>
            <label htmlFor="">اضافة اي تفاصيل </label>

            <div className="input-with-icon">
            <textarea class="form-control " id=""  rows="4"  ></textarea>
      <BsFillPencilFill className='icon-text-area fs-5 primary-color '/>
         </div>
            </div>
         
        </div>
        <div className='row d-flex align-content-center justify-content-center'  style={{paddingBottom:'100px'}}>
            <div className='col-8'>
            <button type='submit' className='btn form-control primary-bg text-white mt-4'>احجز الان </button>
            </div>
         
        </div>
    </form>
</div>
    </>
  )
}
