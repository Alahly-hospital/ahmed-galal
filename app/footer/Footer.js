"use client"
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./footer.scss"
const Footer = () => {
  return (
    <>

        <div className='footer'>
        <Row>
            <Col md={4}>
                <h3>ارقام تليفون المركز للحجز : </h3>
                <ul className='m-4'>
                    <li>01022077474</li>
                    <li>01121139030</li>
                    <li>035554716</li>
                </ul>
              
            </Col>
            <Col md={4}>
                
                <h3>ارقام التواصل عن طريق الواتساب :  </h3>
                <ul className='m-4'>
                    <li>01022077474</li>
                </ul>
            </Col>
            <Col md={4}>
                <h3>العنوان : </h3>
                <ul className='m-4'>
                    <li>                    29 شارع جلال حماد متفرع من جمال عبد الناصر-ميامى-الاسكندرية
</li>
                </ul>
               
            </Col>
        </Row>
       
    </div> <Row className='text-center footter-copyright'>
         <p className='mt-2'> Copyright | DR : Ahemd Galal &copy;</p>
        </Row>
        </>
  )
}

export default Footer