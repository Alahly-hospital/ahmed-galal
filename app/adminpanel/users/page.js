"use client"

import { fetchAllUsers } from '@/redux/reducers/user'
import { format } from 'date-fns'
import React ,{useEffect }from 'react'
import { useDispatch, useSelector } from 'react-redux'

const page = () => {
    const dispatch =useDispatch()
    const users= useSelector((state)=>state.user.value.users)
    console.log(users);
    useEffect(()=>{
        dispatch(fetchAllUsers())
    },[])

    return (
        <>
        
        <h1 class="text-center">المستخدمين</h1>
      <table class="table table-bordered text-center">
        <thead>
          <tr>
            <th>الاسم</th>
            <th>رقم الهاتف</th>
            <th>النوع</th>
            {/* <th>التاريخ</th> */}
          </tr>
        </thead>
        <tbody>
          {users.map((user,id)=>(
             <tr key={id}>
            <td>{`${user.firstName} ${user.lastName}`}</td>
            <td>{user.phone}</td>
            <td>{user.gender}</td>
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