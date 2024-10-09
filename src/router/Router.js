import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Tours } from '../pages/Tours'
import { TourDetails } from '../pages/TourDetails'
import { Login } from '../pages/Login'
import  Register  from '../pages/Register'
import { SearchResultList } from '../pages/SearchResultList'
import ThankYou from '../pages/ThankYou'
import Profile from '../components/Profile/Profile'
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery'
export const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to = '/home' />}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/tour/:id' element={<TourDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/thank-you' element={<ThankYou/>}/>
        <Route path='/tour/search' element={<SearchResultList/>}/>
        <Route path='/gallery' element={<MasonryImagesGallery/>}/>
        <Route path='/profile' element={<Profile/>}/>
    </Routes>
  )
}
