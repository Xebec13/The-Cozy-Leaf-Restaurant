import React from 'react'
import './App.css'


import {Nav,Footer,Header,Gallery,Reservation,Promotions,AboutUs} from './components'

const App = () => {
  return (
    <div>
      <Nav/>
      <Header/>
      <Promotions/>
      <AboutUs/>
      <Reservation/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default App
