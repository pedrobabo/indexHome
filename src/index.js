import React from 'react'
import ReactDOM from 'react-dom'

import './static/style/index.css'
import App from './App'
import Swiper from 'swiper'

ReactDOM.render(<App />, document.getElementById('root'))

//swiper初始化
const mySwiper = new Swiper ('.swiper-container', {
	speed:500,
	direction : 'vertical',
	mousewheel: true,
	pagination: {
		el: '.swiper-pagination',
		clickable :true,
	},
})
/**
 * 模块热更新 
 */
if (module.hot) {
	module.hot.accept(); 
}