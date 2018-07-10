import React, { Component } from 'react'
import { Row, Col, Tooltip, Icon } from 'antd'

import './index.css'

export default class Contact extends Component {
	render() {
		return (
      <div className="full-high">
  			<Row type="flex" justify="center" align="middle" className="cont-high padc">
          <Col span={8} className="full-high padrl">
            <div className="txt large-txt marb">小作品</div>
            <div className="txt marb info-txt">
              (React全家桶+Ant Design+webpack构建的综合运用)
            </div>
            <div className="txt marb happy-txt">快乐时光</div>
            <a href="https://pedrobabo.github.io/happy-time/">
              <div className="img-demo happy-time hover"></div>
            </a>
            <div className="txt marb spa-txt">antd后台管理系统</div>
            <a href="https://pedrobabo.github.io/antd-admin/">
              <div className="img-demo react-spa hover"></div>
            </a>
            <Row className="pad-icon">
              <Col span={4} offset={2}>
                <a href="https://github.com/pedrobabo">
                  <Icon type="github" style={{ fontSize: 20,color:'#000'}} />
                </a>                    
              </Col>
              <Col span={4} offset={2}>
                <Tooltip placement="top" title="1531322013@qq.com">
                  <Icon className="hover" type="mail" style={{ fontSize: 20}} />
                </Tooltip>
              </Col>
              <Col span={4} offset={2}>
                <Tooltip placement="top" title="18782936964">
                  <Icon className="hover" type="mobile" style={{ fontSize: 20}} />
                </Tooltip>
              </Col>
              <Col span={4} offset={2}>
                <a href="https://www.zhihu.com/">
                  <Icon type="zhihu" style={{ fontSize: 20,color:'#000'}} />
                </a>
              </Col>
            </Row>
          </Col>
          <Col span={8} className="full-high"></Col>
          <Col span={8} className="full-high"></Col>
        </Row>
        <Row className="foot-high">
          <Col span={24} className="full-high">
            <div className="txt foot-txt">Copyright © 2016 - 2018 Jirong Chen. All Rights Reserved.</div>
          </Col>
        </Row>
      </div>
		);
	}
}