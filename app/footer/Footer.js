import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./footer.scss"
const Footer = () => {
  return (
    <div className='footer'>
        <Row>
            <Col xs={6}>
                <h3>ارقام تليفون المركز للحجز </h3>
                <p>01022077474</p>
                <p>01121139030</p>
                <p>035554716</p>
                <h3>ارقام التواصل عن طريق الواتساب</h3>
                <p>01022077474</p>
            </Col>
            <Col xs={6}>
                <h3>العنوان</h3>
                <p>
                    29 شارع جلال حماد متفرع من جمال عبد الناصر-ميامى-الاسكندرية
                </p>
            </Col>
        </Row>
    </div>
  )
}

export default Footer