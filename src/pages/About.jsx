import React from 'react'
import CommonSection from '../shared/CommonSection'
import experienceImg from '../assets/images/experience.png'
import Subtitle from './../shared/Subtitle';
import { Col, Container, Row } from 'reactstrap'
export const About = () => {
  return (
    <>        
    <CommonSection title={"About us "} />
        <section>
            <Container>
                <Row>
                    <h1 className='d-flex align-items-center justify-content-center'>Our Mission</h1>
                    <p>Ease Travel is designed to make travel planning simple and stress-free. Our platform focuses on providing an intuitive and engaging user experience, allowing travelers to easily explore destinations, find accommodations, and plan their trips with ease. We believe that planning a journey should be as enjoyable as the trip itself, which is why our user-friendly interface and seamless navigation are built to enhance the process. Whether you're booking a weekend getaway or a long vacation, Ease Travel is here to simplify your travel experience.</p>
                </Row>
            </Container>

                        {/* ========== EXPERIENCE SECTION START ============ */}
                        <section>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="experience__content">
                     <Subtitle subtitle={'Experience'} />
                     <h2>With our all experience <br /> we will serve you</h2>
                     <p>Experience unparalleled travel convenience with our seasoned expertise. 
                     <br />With over 15 years of industry experience, we've curated seamless journeys for over 12,000 satisfied customers.
                     Join our community of 2,000 loyal clients who rely on us for their travel needs. 
                     Let us elevate your travel experience with our expertise and commitment to excellence.
                     </p>
                  </div>

                  <div className="counter__wrapper d-flex align-items-center gap-5">
                     <div className="counter__box">
                        <span>12k+</span>
                        <h6>Successful trip</h6>
                     </div>
                     <div className="counter__box">
                        <span>2k+</span>
                        <h6>Regular clients</h6>
                     </div>
                     <div className="counter__box">
                        <span>15</span>
                        <h6>Years experience</h6>
                     </div>
                  </div>
               </Col>
               <Col lg='6'>
               <div className="experience__img">
                     <img src={experienceImg} alt="" />
               </div>
               </Col>
            </Row>
         </Container>
      </section>
      {/* ========== EXPERIENCE SECTION END ============== */}
        </section>
    </>
    

  )
}

 