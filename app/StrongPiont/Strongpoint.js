import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import img from "../../assets/strongPoint.jpeg"
import "./strongPoint.scss"
const Strongpoint = () => {
  return (
    <Container className='mt-4 mb-4'>
        <h2 className='title'>اهم ما يميزنا</h2>
        <Row>
            <Col md={6} sm={12}>
                <Card>
                   أحدث اجهزة المناظير عالية الوضوح بها أيضا خاصية الطيف الضوئى مما يتيح التشخيص المبكر لتغيرات الانسجة و الاورام
                </Card>
                <Card>
                    جميع أنواع المناظير ماركة اوليمبس اليابانى مناظير المعدة التشخيصية و العلاجية من عمر يوم مع منظار الرضع الى المناظير العلاجية   
                </Card>
            </Col>
            <Col md={6} sm={12}>
                    <img src={img.src} alt="Dr.Ahmed Galal" className='img-card' width="100%" height="500px"/>
            </Col>
        </Row>
    </Container>

  )
}

export default Strongpoint