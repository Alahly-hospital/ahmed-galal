import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import img from "../../assets/Aboutdoctor.jpg";
import "./strongPoint.scss";
const Strongpoint = () => {
  return (
    <section className="strong-point p-4">


    <Container className="mt-4 mb-4">
      <h2 className="title">اهم ما يميزنا</h2>
      <Row>
        <Col md={6} sm={12}>
          <Card className="card-text p-4 mb-4 shadow  ">
            <h5>
                        <span className="primary-color fw-bold">  أحدث اجهزة المناظير عالية الوضوح</span>  بها أيضا خاصية الطيف الضوئى مما
            يتيح التشخيص المبكر لتغيرات الانسجة و الاورام
            </h5>

          </Card>
          <Card className="card-text  p-4 mb-4 shadow">
            <h5>
            <span className="primary-color fw-bold">
            جميع أنواع المناظير ماركة اوليمبس</span> اليابانى مناظير المعدة التشخيصية و
            العلاجية من عمر يوم مع منظار الرضع الى المناظير العلاجية
              </h5>
          </Card>

          <Card className="card-text  p-4 mb-4 shadow">
            <h5>

            <span className="primary-color fw-bold">
            أحدث جهاز لقياس كفاءة الكبد و مدى تأثير الدهون عليه </span>الخبرة و أستخدام
            أحدث التقنيات فى تشخيص و علاج أمراض الجهاز الهضمى و الكبد تحت أشراف
            د أحمد جلال
            </h5>
          </Card>
        </Col>
        <Col md={6} sm={12}>
          <img
            src={img.src}
            alt="Dr.Ahmed Galal"
            className="img-card"
            width="100%"
            height="500px"
          />
        </Col>
      </Row>
     
    </Container>
        </section>
  );
};

export default Strongpoint;
