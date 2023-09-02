import pin from  "@/assets/images/zh/pingpai.png"
// 线下营销活动
const MARKETING = {
    gridState:`"grid1 grid2""grid3 grid4""grid5 grid4"`,
    grid:[
        {
            title:"丰富的策展经验",
        },
        {
            // title:"WebAR技术",
            img:pin,
        },
        {
            img:pin,
        },
        {
            title:"一站式服务",
            img:pin,
            imgStyle:{
                height: "50%"
            },
            itemStyle:{
                height:"auto"  
            }
        },
        {
            title:"各种互动技术",
            viceTitle:"让展览",
            text:"更具沉浸感\n互动感",
            itemStyle: {
                paddingLeft: '0.55rem',
                paddingTop:'0.9rem',
                display:"block",
                background: "linear-gradient( #000 0% 80%, rgba(164, 122, 64, 0.4))"
            },
            titleStyle: {
                fontSize:"0.42rem"
            },
        }
    ]
}
const SCIENCE = {
    gridState:`"grid1 grid2""grid1 grid3""grid4 grid5"`,
    grid:[
        {
            title:"WebAR技术",
            img:pin,
            imgStyle:{
                height: "50%"
            },
            itemStyle:{
              height:"auto"  
            }
        },
        {
            // title:"WebAR技术",
            img:pin,
        },
        {
            viceTitle:"多元化互动",
            text:"提升用户体验",
            viceTitleStyle:{
                fontSize:'0.6rem',
                marginBottom:"0.1rem"
            },
            itemStyle: {
                paddingLeft: '0.55rem',
                paddingTop:'1.52rem',
                display:"block",
            },
        },
        {
            // title:"WebAR技术",
            img:pin,
        },
        {
            // title:"WebAR技术",
            img:pin,
        }
    ]
}
const EXPAND = {
    gridState:`"grid1 grid2""grid3 grid2""grid4 grid4"`,
    grid:[
        {
            img:pin,
        },
        {
            title:"扩展现实(XR)技术",
            img:pin,
            itemStyle:{
                height:"auto"  
            },
            imgStyle:{
                height: "50%"
            }
        },
        {
            viceTitle:"沉浸式体验",
            text:"丰富项目的视觉",
            viceTitleStyle:{
                fontSize:'0.6rem',
                marginBottom:"0.1rem"
            },
            itemStyle:{
                display:"block",
                paddingLeft: '0.55rem',
                paddingTop:'1.52rem',
            }
        },
        {
            // title:"WebAR技术",
            img:pin,
        },
    ]
}
const FILMANDTELEVISION = {
    gridState:`"grid1 grid2""grid3 grid4""grid5 grid5"`,
    grid:[
        { 
            title:"10年+",
            viceTitle:"广告电影制作经验",
            itemStyle:{
                display:"block",
                paddingLeft: '0.55rem',
                paddingTop:'1.52rem',
            },
            viceTitleStyle:{
                fontSize:'0.6rem',
                fontWeight: 200,
            }
        },
        {
            // title:"WebAR技术",
            img:pin,
        },
        {
            // title:"WebAR技术",
            img:pin,
        },
        {
            viceTitle:"提升品牌知名度",
            text:"及产品销售量",
            itemStyle:{
                display:"block",
                paddingLeft: '0.55rem',
                paddingTop:'1.52rem',
                fontSize:"0.6rem"
            },
        },
        
        {
            // title:"WebAR技术",
            img:pin,
        }
    ]
}
const MIND = {
    gridState:`"grid1 grid1""grid2 grid3""grid4 grid5"`,
    grid:[
        {
            img:pin,
        },
        { 
            viceTitle:"为您提供",
            text:"全网营销策略",
            itemStyle:{
                display:"block",
                paddingLeft: '0.55rem',
                paddingTop:'0.96rem',
            },
            viceTitleStyle:{
                fontWeight:200,
                marginBottom:"0.2rem"
            }
        },
        {
            // title:"WebAR技术",
            img:pin,
        },
        
        {
            // title:"WebAR技术",
            img:pin,
        },
        {
            viceTitle:"全方位打造国内外",
            text:"高流量\n高知名度的渠道",
            viceTitleStyle:{
                fontWeight: 200,
                fontSize:"0.6rem"
            },
            itemStyle:{
                display:"block",
                paddingLeft: '0.55rem',
                paddingTop:'0.98rem',
            },
        },
    ]
}
const MEDIA = {
    gridState:`"grid1 grid2""grid3 grid3""grid4 grid5"`,
    grid:[
        {
            viceTitle:"与多平台",
            text:"网红、达人合作",
            viceTitleStyle:{
                fontWeight:200
            },
            itemStyle:{
                display:"block",
                paddingLeft: '0.55rem',
                paddingTop:'0.94rem',
            }
        },
        {
            // title:"WebAR技术",
            img:pin,
        },
        {
            // title:"WebAR技术",
            img:pin,
        },
        {
            viceTitle:"直接快速",
            text:"触达更多更广\n受众圈层",
            viceTitleStyle:{
                fontSize:"0.6rem",
                fontWeight:200,
                marginBottom:"0.2rem"
            },
            textStyle:{
                fontWeight:400
            },
            itemStyle:{
                display:"block",
                paddingLeft: '0.55rem',
                paddingTop:'0.94rem',
            }
        },
        
        {
            // title:"WebAR技术",
            img:pin,
        }
    ]
}

export {
    SCIENCE,
    MARKETING,
    EXPAND,
    FILMANDTELEVISION,
    MIND,
    MEDIA
}