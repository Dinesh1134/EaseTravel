import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import galleryImages from './galleryimages'
import { Container, Col,Row } from 'reactstrap'
import Subtitle from '../../shared/Subtitle'

const MasonryImagesGallery = () => {
   return (
   <Container>
      <Row>
         <Col lg='12'>
                  <Subtitle subtitle={'Gallery'} />
                  <h2 className="gallery__title">Visit our customers tour gallery</h2>
             <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:1, 992:4}}>
                  <Masonry gutter='1rem'>
                   {
                       galleryImages.map((item, index) => (
                       <img className='masonry__img' src={item} key={index} alt="" 
                       style={{'width':'100%', 'display':'block', 'borderRadius':'10px'}}/>
                      ))
                   }
                  </Masonry>
             </ResponsiveMasonry>
         </Col>
      </Row>
   </Container>
   )
}

export default MasonryImagesGallery