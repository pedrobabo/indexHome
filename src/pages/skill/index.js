import React, { Component } from 'react'
import { Row, Col } from 'antd'

import './index.css'

export default class Skill extends Component {
  render() {
    return (
      <div className="full-high">
        <Row className="title-high">
          <Col span={24} className="full-high txt large-txt padt">技能栈</Col>
        </Row>
        <Row type="flex" justify="center" align="middle" className="cont-high padc">
          <Col span={4} className="full-high"></Col>
          <Col span={16} className="full-high">
            <div className="txt">掌握html、css、JavaScript基础，熟悉JQuery</div>
            <div className="txt">熟悉ES6新语法、less预处理、Ant Design UI库</div>
            <div className="txt">熟悉React框架，React-Router路由、了解redux数据管理</div>
            <div className="txt">
              熟悉npm、yarn包管理工具、webpack自动化构建工具、Git、SVN版本控制工具
            </div>
            <div className="txt">熟悉AMD（require.js）、commonJS、ES6 module规范</div>       
            <div className="txt">熟悉HTTP及相关网络协议</div>
            <div className="txt">了解Hybrid App开发模式</div>
            <div className="txt">了解Node.js</div>
            <div className="img-skill skill2"></div>
          </Col>
          <Col span={4} className="full-high"></Col>
        </Row>
      </div>
    );
  }
}
