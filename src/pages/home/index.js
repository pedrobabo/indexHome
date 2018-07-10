import React, { Component } from 'react'
import { Row, Col ,Avatar} from 'antd'

import img from '../../static/images/habo.jpg'
import './index.css'

export default class Home extends Component {
	render() {
		return (
			<Row className="full-high">
              <Col span={4} className="full-high">
                <a href="https://github.com/pedrobabo">
                  <Avatar size="large" src={img} className="mar hover" />
                </a>
              </Col>
              <Col span={16} className="full-high">
              	<Row type="flex" justify="center" align="middle" className="full-high">	
              		<Col span={16} className="center-wh">
              			<div className="avatar"></div>
              			<div className="txt large-txt">Hi,There!</div>
              			<div className="txt large-txt">Sharp tools make good work,just do it</div>
              			<div className="txt">我叫陈基荣</div>
              			<div className="txt">一名前端开发工程师</div>
              			<div className="txt">1531322013@qq.com</div>
              		</Col>
              	</Row>
              </Col>
              <Col span={4} className="full-high"></Col>
            </Row>
		);
	}
}
