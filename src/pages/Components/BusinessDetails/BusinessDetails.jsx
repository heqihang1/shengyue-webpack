import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import './BusinessDetails.less'
import { WOW } from "wowjs"

export default function BusinessDetails() {
  const location = useLocation();
  const detailsKey = location.state.detailsKey;  //number

  let wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: false
  })

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
      introduce1: `随着展览活动对多元互动体验的需求溢增，团队利用 WebAR技术成功为多个项目提升参与者的体验，并获香港媒体的广泛报道。`,
      introduce2: 'WebAR是玩家在不用下载任何 APP的情况下，只需要扫二维码登入网上平台，便可以体验为该展览活动而设的视觉互动展品，团队亦可以就项目定制相应的互动体验。'
    }
  ]
  const headerLi = headerContent.find(item => item.key === detailsKey)

  useEffect(() => {
    wow.init()
  }, [])

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

        <div class="wow fadeInUp" data-wow-duration="3s">
          <div styleName="gradationEn">INTRODUCTION</div>
        </div>
        <div class="wow fadeInUp" data-wow-duration="4s">
          <div styleName="introduce">
            <div styleName="border_b leftTop"></div>
            <div styleName="border_b rightBottom"></div>
            <div styleName="iBox">
              {detailsKey !== 2 ? headerLi.introduce : headerLi.introduce1}<br />
              {detailsKey === 2 ? <div>{headerLi.introduce2}</div> : ''}
            </div>
          </div>
        </div>
      </div>



    </>
  )
}