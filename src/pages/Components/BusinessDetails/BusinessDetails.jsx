import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import './BusinessDetails.less'

export default function BusinessDetails() {
  const location = useLocation();
  const detailsKey = location.state.detailsKey;  //number
  const [ refresh, setRefresh ] = useState(false)

  const headerContent = [
    {
      key: 1,
      title: '线下营销活动',
      tag: '拉近品牌与用户的距离',
      introduce: '我们提供一站式服务，全过程打通香港及内地线上线下营销策略；由前期策划到概念设计直至制作执行，均可为客户统筹执行；更引入各种互动技术，让展览更具沉浸感、互动感、提升参与者的体验感。'
    }, {
      key: 2,
      title: '科技感互动技术',
      tag: '赋能视觉展示',
      introduce: ''
    }
  ]
  const headerLi = headerContent.find(item => item.key === detailsKey)

  useEffect(() => {
    
  }, [refresh])

  return (
      <>
      <img styleName="headerImg" src="https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF" alt="" />
      <div styleName="container">

        <div styleName="headerNameBox">
          <div styleName="title">{headerLi.title}</div>
          <div styleName="tag">{headerLi.tag}</div>
          <div styleName="line1"></div>

          {/* start */}
          <div styleName="main">



          </div>
          {/* end */}

          <div styleName="line1 line2"></div>
        </div>

        <div class="wow rotateIn" data-wow-duration="2s">
          <div styleName="gradationEn">INTRODUCTION</div>
        </div>
        <div class="wow rollIn" data-wow-duration="2s">
          <div styleName="introduce">
            <div styleName="iBox">{headerLi.introduce}</div>
          </div>
        </div>
      </div>
    </>
  )
}