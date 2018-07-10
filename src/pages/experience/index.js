import React, { Component } from 'react'
import { Row, Col, Timeline, Icon} from 'antd'

import './index.css'

export default class Experience extends Component {
	render() {
		return (
			<Row type="flex" justify="center" align="middle" className="full-high padc">
        <Col span={6} className="full-high"></Col>
        <Col span={12} className="full-high padrl">
          <div className="txt large-txt timeline-txt marb">经历</div>
          <Timeline>
            <Timeline.Item dot={<Icon spin={true} type="clock-circle" style={{ fontSize: '20px' }} />} color="yellow">
              <div className="txt timeline-txt">2015.08~2018.04</div>
              <div className="txt timeline-txt">四川久远银海软件股份有限公司</div>
              <div className="txt timeline-txt">成都事业部 | 前端开发工程师</div>
              <div className="txt timeline-txt">
                负责成都社保项目的前端静态页开发
              </div>
              <div className="txt timeline-txt">
                配合后台人员实现PC端和定制平板端的前端界面效果与功能
              </div>
              <div className="txt timeline-txt">
                同期工作之余继续学习新技术，提升自己
              </div>
            </Timeline.Item>
            <Timeline.Item dot={<Icon spin={true} type="clock-circle" style={{ fontSize: '20px' }} />} color="blue">
              <div className="txt timeline-txt">2014.07~2015.04</div>
              <div className="txt timeline-txt">成都天网科技发展有限公司</div>
              <div className="txt timeline-txt">项目部 | 网络工程师</div>
              <div className="txt timeline-txt">主要负责公司项目前期的投标准备、项目实施以及后期维护等工作
              </div>
              <div className="txt timeline-txt">
                工作之余也自己学着做网页demo
              </div>
            </Timeline.Item>
            <Timeline.Item dot={<Icon spin={true} type="clock-circle" style={{ fontSize: '20px' }} />} color="green">
              <div className="txt timeline-txt">2010.09~2014.06</div>
              <div className="txt timeline-txt">成都理工大学 | 本科 | 信息工程</div>
              <div className="txt timeline-txt">大学期间自学html、css、js基础知识</div>
            </Timeline.Item>
          </Timeline>
        </Col>
        <Col span={6} className="full-high"></Col>
      </Row>
		);
	}
}