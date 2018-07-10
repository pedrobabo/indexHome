import React, { Component } from 'react'
import { Row, Col } from 'antd'

import './index.css'

export default class Introduce extends Component {
	render() {
		return (
      <div className="full-high">
        <Row className="title-high">
          <Col span={24} className="full-high txt large-txt padt">关于我</Col>
        </Row>
  			<Row type="flex" justify="center" align="middle" className="cont-high padc">
          <Col span={8} className="full-high">
            <div className="img-base edu"></div>
            <div className="txt">今年27岁</div>
            <div className="txt">毕业于成都理工大学</div>
            <div className="txt">信息工程专业</div>
            <div className="txt">现居成都</div>
          </Col>
          <Col span={8} className="full-high">
          	<div className="img-base snow"></div>
            <div className="txt">近三年前端开发经验</div>
            <div className="txt">熟悉前端组件化、模块化、自动化开发</div>
            <div className="txt">良好的自我学习能力，关注web前沿发展</div>
            <div className="txt">团队协作，追求高效</div>
          </Col>
          <Col span={8} className="full-high">
            <div className="img-base go"></div>
            <div className="txt">希望在以后的工作中继续不断提升自己</div>
            <div className="txt">书山有路勤为径</div>
            <div className="txt">学海无涯苦作舟</div>
            <div className="txt">加油！</div>
          </Col>
        </Row>
      </div>
		);
	}
}
