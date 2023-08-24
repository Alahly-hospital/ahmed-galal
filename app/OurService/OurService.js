import React from 'react'
import "./ourService.scss"
import { Col, Container, Row } from 'react-bootstrap'

const OurService = () => {
  return (
    <Container>
        <h2 className="title">خدماتنا </h2>
        <Row className='justify-content-center'>
            <Col lg={3} md={4} sm={6} xs={12} className='ourServices-card'>أحدث اجهزة المناظير عالية الوضوح بها أيضا خاصية الطيف الضوئى و خاصية التكبير مما يتيح التشخيص المبكر لتغيرات الانسجة و الاورام</Col>
            <Col lg={3} md={4} sm={6} xs={12} className='ourServices-card'>مناظير المعدة و القولون التشخيصية و العلاجية (يوجد مناظير الكبار و الاطفال من عمر يوم)</Col>
            <Col lg={3} md={4} sm={6} xs={12} className='ourServices-card'>مناظير القنوات المرارية للصفراء الانسدادية و اورام البنكرياس السونار بالمنظار لاخذ عينات اورام و التهابات البنكرياس و تفريغ اكياس البنكرياس بدون جراحة</Col>
            <Col lg={3} md={4} sm={6} xs={12} className='ourServices-card'>المنظار الجاسوس spy glass لتفتيت حصوات القنوات المرارية الكبيرة بالليزر و اخذ عينات من داخل القناة المرارية بالكبد</Col>
            <Col lg={3} md={4} sm={6} xs={12} className='ourServices-card'>تركيب جميع انواع بالونات المعدة</Col>
            <Col lg={3} md={4} sm={6} xs={12} className='ourServices-card'>تقشير اورام الجهاز الهضمى السطحية و الحميدة</Col>
            <Col lg={3} md={4} sm={6} xs={12} className='ourServices-card'>عمليات قطع عضلة المرئ بالمنظار POEM لمرضى الاكاليزيا</Col>
            <Col lg={3} md={4} sm={6} xs={12} className='ourServices-card'>جهاز الكى والارجون ماركة ERBE الالمانية بالتكنولوجيا الألمانية </Col>
            <Col lg={3} md={4} sm={6} xs={12} className='ourServices-card'>أحدث جهاز لقياس كفاءة الكبد و مدى تأثير الدهون عليه
الخبرة و أستخدام أحدث التقنيات فى تشخيص و علاج أمراض الجهاز الهضمى و الكبد</Col>
            <Col lg={3} md={4} sm={6} xs={12} className='ourServices-card'>أحدث اجهزة المناظير عالية الوضوح بها أيضا خاصية الطيف الضوئى مما يتيح التشخيص المبكر لتغيرات الانسجة و الاورام</Col>
            <Col lg={3} md={4} sm={6} xs={12} className='ourServices-card'>جميع أنواع المناظير ماركة اوليمبس اليابانى مناظير المعدة التشخيصية و العلاجية من عمر يوم مع منظار الرضع الى المناظير العلاجية</Col>
        </Row>
    </Container>
  )
}

export default OurService