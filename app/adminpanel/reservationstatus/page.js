import React from 'react'
import f from'../../../assets/ff.jpg'
import m from'../../../assets/mm.jpg'

export default function reservationstatus() {
  return (
    <>   <div className="row shadow rounded-5">
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
<button className="btn primary-sidebar-bg ms-2  text-white">متاح</button>
<button className="btn bg-danger ms-2  text-white ">غير متاح</button>
</div>

  </div></>
  )
}
