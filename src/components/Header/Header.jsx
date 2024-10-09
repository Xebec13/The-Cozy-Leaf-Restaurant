import React from 'react'
import './header.css'


import {data,images} from '../../constants/index'



const Header = () => {
  return (
    <section className="cozy-leaf__header-container">
      <div className="cozy-leaf__header-photo">
        <img src={images.promoPhoto} alt="restaurant" />
      </div>
      <div className="cozy-leaf__header-info">
        <h1>{data.restaurantInfo[0].title}</h1>
        <p>{data.restaurantInfo[0].info}</p>
        <div className="cozy-leaf__header-end">
        <img src={images.leaf1} alt="leaf-1" />
      </div>
      </div>
    </section>
  )
}

export default Header