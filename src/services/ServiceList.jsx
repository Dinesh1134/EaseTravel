import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Calculate Weather`,
      desc: `Stay ahead of the forecast with our precise weather calculations, ensuring you're prepared for any outdoor adventure.`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `Experience the essence of every destination with our expert tour guides, who bring history, culture, and local insights to life.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Customization',
      desc: `Tailor your journey to perfection with our customizable tours, designed to match your preferences and interests seamlessly`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>
}

export default ServiceList