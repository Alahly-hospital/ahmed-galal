"use client"

import { fetchAllUsers } from '@/redux/reducers/user'
import { format } from 'date-fns'
import React ,{useEffect }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./users.scss"
import Api from '@/config/api'
import { notifyError, notifySuccess } from '@/components/toastify/toastify'

const page = () => {
    const dispatch =useDispatch()
    const users= useSelector((state)=>state.user.value.users)
    console.log(users);
    useEffect(()=>{
        dispatch(fetchAllUsers())
    },[])

    function toggleAdmin(_id,isAdmin){
        Api.post("/user/toggleAdmin",{_id,isAdmin:!isAdmin})
        .then(()=>{
            dispatch(fetchAllUsers())
            notifySuccess("User previlage Updated !!")
        })
        .catch((err)=>{
            let errMsg = err?.response?.data?.error  || err?.response?.data?.message
            console.log(err.response);
            notifyError(errMsg)
        })
    } 

    return (
        <>
        
        <h1 className="text-center">المستخدمين</h1>
      <table className="table table-bordered text-center">
        <thead>
          <tr>
            <th>الاسم</th>
            <th>رقم الهاتف</th>
            <th>النوع</th>
            <th>الصلاحية</th>
            {/* <th>التاريخ</th> */}
          </tr>
        </thead>
        <tbody>
          {users.map((user,id)=>(
             <tr key={id}>
            <td>{`${user.firstName} ${user.lastName}`}</td>
            <td>{user.phone}</td>
            <td>{user.gender}</td>
            <td>
              <button 
                  className='admin-btn' 
                  style={{backgroundColor:user.isAdmin?"green":"gray"}}
                  onClick={()=>toggleAdmin(user?._id,user?.isAdmin)}    
                  >
              {user.isAdmin?"ادمن":"مستخدم"}
              </button></td>
            {/* <td>{user.date }</td> */}
            {/* <td>
              <GrUpdate className="fs-5 ms-4 update-icon" />
            </td> */}
          </tr>
          ))}
         
        </tbody>
      </table>
        </>
  )
}

export default page