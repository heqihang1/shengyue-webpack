import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import GridContainer from "./GridContainer/GridContainer";
import {
  SCIENCE,
  MARKETING,
  EXPAND,
  FILMANDTELEVISION,
  MIND,
  MEDIA
} from "./const";
import './BusinessDetails.less';
import { WOW } from "wowjs"
const data = {
  "SCIENCE": SCIENCE,
  "MARKETING": MARKETING,
  "EXPAND": EXPAND,
  "FILMANDTELEVISION": FILMANDTELEVISION,
  "MIND": MIND,
  "MEDIA": MEDIA
}
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
      code: 'MARKETING',
      introduce: '我们提供一站式服务，全过程打通香港及内地线上线下营销策略；由前期策划到概念设计直至制作执行，均可为客户统筹执行；更引入各种互动技术，让展览更具沉浸感、互动感、提升参与者的体验感。'
    }, {
      key: 2,
      title: '科技感互动技术',
      tag: '赋能视觉展示',
      code: 'SCIENCE',
      introduce1: `随着展览活动对多元互动体验的需求溢增，团队利用 WebAR技术成功为多个项目提升参与者的体验，并获香港媒体的广泛报道。`,
      introduce2: 'WebAR是玩家在不用下载任何 APP的情况下，只需要扫二维码登入网上平台，便可以体验为该展览活动而设的视觉互动展品，团队亦可以就项目定制相应的互动体验。'
    },
    {
      key: 3,
      title: '科技感互动技术',
      tag: '赋能视觉展示',
      code: 'EXPAND',
      introduce: `近年，各种大型项目都使用到扩展现实(XR)技术，例如北京冬奥开闭幕式、电视台的元旦及春晚直播等，来提高观众对项目的视觉体验。而该技术开始发展到影视的虚拟拍摄上，很多好莱坞电影都广泛应用。`

    },
    {
      key: 4,
      title: '专业的影视制作团队',
      tag: '为您量身定制视频内容',
      code: 'FILMANDTELEVISION',
      introduce: `10年+广告和电影制作经验；根据客户的需求及特点，定制视频内容，并深耕香港视觉行业，为客户打造适合香港人群的视频内容；提升品牌知名度及产品销售量。`,
    },
    {

      key: 5,
      title: '事件及节点营销，触达互联网用户心智',
      tag: '提升客户企业知名度',
      code: 'MIND',
      introduce: `我们为客户提供全网营销策略，服务包括SEO/SEM优化，关键词研究、构建网上商城、社交媒体运营、网络广告投放策略推广等。全方位打造国内外高流量、高知名度的渠道。`,
    }, {
      key: 6,
      title: '建立社交媒体口碑矩阵',
      tag: '树立客户企业产品正面形象',
      code: 'MEDIA',
      introduce: `KOL营销比明星硬广告更贴地更有说服力，并且用户消费前习惯于在社交媒体如小红书、抖音、大众点评等查看产品评价。我们会根据企业需求筛选适合的香港地区及大陆地区的KOL分别产出符合地区网民口味的内容，利用KOL的影响力能在短时间内传播品牌资讯，覆盖更多用户圈层，辐射小众文化与大众圈层，提升品牌声量；除了可推广产品及服务，同时增加品牌正面形象与品牌口碑。`,
    }
  ]
  const headerLi = headerContent.find(item => item.key === detailsKey)

  useEffect(() => {
    wow.init()
  }, [])

  return (
    <>
      <img styleName="headerImg" src="https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF" alt="" />
      <div styleName="container" className="container">

        <div styleName="headerNameBox">
          <div styleName="title">{headerLi.title}</div>
          <div styleName="tag">{headerLi.tag}</div>
          <div styleName="line1"></div>

          {/* start */}
          <div styleName="main">
            <GridContainer data={data[headerLi.code]}/>
          </div>
          {/* end */}

          <div styleName="line1 line2"></div>
        </div>

        <div class="wow fadeInUp" data-wow-duration="3s">
          <div styleName="gradationEn">INTRODUCTION</div>
        </div>
        <div class="wow fadeInUp" data-wow-duration="4s">
          <div styleName="introduce">
            <div styleName="border_b rightBottom"></div>
            <div styleName="iBox">
              <div styleName="border_b leftTop"></div>
              {detailsKey !== 2 ? headerLi.introduce : headerLi.introduce1}<br />
              {detailsKey === 2 ? <div>{headerLi.introduce2}</div> : ''}
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .container{
            &::after{
              position: absolute;
              content: '';
              display: block;
              height: 1px;
              width: 80%;
              background: #E9C580;
              bottom:0;
              left: 50%;
              transform: translateX(-50%);
            }
          }
        `}
      </style>



    </>
  )
}