'use client'
import React from 'react'

export default function timetable() {
  return (
    <div>
      <h1 class="text-center">مواعيد الأسبوع</h1>
<table class="table table-bordered text-center">
  <thead>
    <tr>
      <th>التاريخ</th>
      <th>السبت</th>
      <th>الأحد</th>
      <th>الإثنين</th>
      <th>الثلاثاء</th>
      <th>الأربعاء</th>
      <th>الخميس</th>
      <th>الجمعة</th>
    </tr>
  </thead>
  <tbody>
     <tr>
      <td>2023-09-01</td>
      <td>9:00 AM</td>
      <td>9:15 AM</td>
      <td>9:30 AM</td>
      <td>9:45 AM</td>
      <td>10:00 AM</td>
      <td>10:15 AM</td>
      <td>10:30 AM</td>
    </tr>
     <tr>
      <td>2023-09-02</td>
      <td>9:00 AM</td>
      <td>9:15 AM</td>
      <td>9:30 AM</td>
      <td>9:45 AM</td>
      <td>10:00 AM</td>
      <td>10:15 AM</td>
      <td>10:30 AM</td>
    </tr>
   </tbody>
</table>

    </div>
  )
}
