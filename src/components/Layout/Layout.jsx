import React from 'react'
import { Header } from '../Header/Header'
import { Router } from '../../router/Router'
import { Footer } from '../Footer/Footer'

export const Layout = () => {
  return <>
  <Header/>
  <Router/>
  <Footer/>
  </>
}
