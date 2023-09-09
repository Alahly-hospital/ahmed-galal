import React from 'react'
import { Container, Row } from 'react-bootstrap'
import photo from "../../assets/bg2.jpg";
import'./blogs.scss'
export default function Blogs() {
  return (
    <div>
    <section className=" mb-4 pb-4">
      <Container>
        <h2 className="title pt-4">المدونات</h2>
        <Row className="blogs-section ">
          <div class="col-6">
               <img class="img w-100 img-thumbnail" src={photo.src} alt="" />  
              <h2>العنوان</h2>
              <div class="  text-secondary mt-3">
                <p class="">
                  المدونةالمدونةالمدةالمدونةالمدونةالمدونةالمدونةالمدونةالمدونةالمدونة
                </p>
           </div>
         
          </div>

          <div class="col-lg-6">
               <img class="w-100 img-thumbnail" src={photo.src} alt="" />  
              <h2>العنوان</h2>
              <div class="  text-secondary mt-3">
                <p>
                  المدونةالمدونةالمدةالمدونةالمدونةالمدونةالمدونةالمدونةالمدونةالمدونة
                  المدونةالمدونةالمدةالمدونةالمدونةالمدونةالمدونةالمدونةالمدونةالمدونة
                  المدونةالمدونةالمدةالمدونةالمدونةالمدونةالمدونةالمدونةالمدونةالمدونة
                  المدونةالمدونةالمدةالمدونةالمدونةالمدونةالمدونةالمدونةالمدونةالمدونة
                </p>
           </div>
         
          </div>
        </Row>
      </Container>
    </section></div>
  )
}
