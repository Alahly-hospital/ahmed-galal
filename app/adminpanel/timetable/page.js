'use client'
import React from 'react'

export default function timetable() {
  return (
    <div>
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
    </div>
  )
}
