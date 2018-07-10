import React, { Component } from 'react'
import Home from './pages/home'
import Introduce from './pages/introduction'
import Experience from './pages/experience'
import Skill from './pages/skill'
import Contact from './pages/contact'

import './component/swiper/swiper.min.css'
import './static/style/app.css'


export default class App extends Component {
  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide bg img1">
            <Home />
          </div>
          <div className="swiper-slide bg img2">
            <Introduce />
          </div>
          <div className="swiper-slide bg img4">
            <Skill />
          </div>
          <div className="swiper-slide bg img3">
            <Experience />
          </div>
          <div className="swiper-slide bg img5">
            <Contact />
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    )
  }
}

