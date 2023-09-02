import React, { useEffect } from 'react';
import './aboutUs.less';
import { imagesConfig } from "@/i18n/config.js";
import TitleText from '../Components/TitleText';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { t } from 'i18next';

export default function AboutUs() {
    const companyRef = React.useRef()
    const companyRef2 = React.useRef()
    const [fixed, setFixed] = React.useState(false)
    const [aboutScrollData, setAboutScrollData] = React.useState({
        scrXY: 1,
        companyOpacity: 0,
        opacity: true,
        opacityBoole: true,
        culture: true,
    })
    const { img: { aboutusBanner, company } } = imagesConfig()
    const text = React.useMemo(() => {
        return [
            {
                title: t("aboutUs.routesList"),
                viceText: t("aboutUs.content"),
                mark: true
            },
            {
                title: t("aboutUs.companyPhilosophy"),
                viceTitle: 'COMPANY PHILOSOPHY',
                viceText: t("aboutUs.companyText"),
                mark: true
            },
            {
                title: t("aboutUs.business"),
                viceTitle: 'COMPANY PHILOSOPHY',
                mark: true
            }
        ]
    }, [])
    const list = ["", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const topHeight = companyRef.current.offsetHeight; // 放大的盒子
        const bigData = 1.4 // 1.40 为缩放的最大值
        // 计算值 开始触发滚动事件
        if ((scrollTop + window.innerHeight + 200) <= topHeight) {
            const val = (scrollTop * bigData / (topHeight - window.innerHeight - 200)) * 100
            setAboutScrollData((pre) => {
                return { ...pre, scrXY: val > 1 ? val : 1 }
            })
        }
        // 滚动值在200区间时 透明度计算
        if ((topHeight - window.innerHeight - 200) <= scrollTop
            && scrollTop <= (topHeight - window.innerHeight)) {
            const val = (scrollTop - (topHeight - window.innerHeight - 200)) / 2;
            setFixed(true)
            setAboutScrollData((pre) => {
                return {
                    ...pre,
                    companyOpacity: (Math.floor(val) / 100) > 0.9 ? 1 : (Math.floor(val) / 100),
                    opacity: false,
                    opacityBoole: true,
                }
            })
        }
        // 超出 200 时
        if (scrollTop >= (topHeight - window.innerHeight)) {
            setAboutScrollData((pre) => {
                return {
                    ...pre,
                    opacityBoole: false
                }
            })
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    const textObj = aboutScrollData.opacityBoole ? {
        position: 'fixed', bottom: "0rem"
    } : { position: 'absolute', bottom: 0 }
    return (
        <div styleName='aboutUsContContainer'>
            <section ref={companyRef} styleName="aboutScrollContainer">
                <section styleName="aboutScroll"
                    style={{
                        display: aboutScrollData.opacityBoole ? "block" : "none",
                        transform: `matrix(${aboutScrollData.scrXY},0,0,${aboutScrollData.scrXY},0,0)`,
                        opacity: aboutScrollData.opacity ? 1 : 1 - aboutScrollData.companyOpacity
                    }}
                >
                    <img src={aboutusBanner} alt="" />
                </section>
                {/* shengyuee */}
                <div ref={companyRef2}
                    styleName="salesScroll"
                    style={{
                        opacity:aboutScrollData.opacityBoole ? aboutScrollData.companyOpacity : 1,
                        ...textObj
                    }}>
                    <section>
                        <img src={company} alt="" />
                    </section>

                </div>
            </section>
            <section styleName="cultureContainer" style={{
            }}>
                <OverPack
                    playScale={0.3}
                >
                    <QueueAnim
                        key={"QueueAnim"}
                        type={'bottom'}
                    // delay={100}
                    >
                        <span styleName='culture' key={"QueueAnim"} >
                            COMPANY CULTURE
                        </span>
                    </QueueAnim>
                </OverPack>
            
                {text.map((v, index) => {
                    return <TitleText key={index} {...v} style={{
                        marginBottom: index === 2 ? "52px" :"184px"
                    }}/>
                })}
            </section>
            <div styleName='aboutList'>
                <OverPack
                    playScale={0.3}
                    className='aboutList'
                >
                    {
                        list.map((v, i) => {
                            return <QueueAnim
                                key={"QueueAnim" + i}
                                type={i <= 9 ? 'top' : 'bottom'}
                            // delay={100}
                            >
                                <div key={i} styleName="aboutItem">
                                    <img src="" alt="" />
                                </div>
                            </QueueAnim>
                        })
                    }

                </OverPack>
                <style>
                    {`
                        .aboutList{
                            display: flex;
                            flex-wrap: wrap;
                        }
                    `}
                </style>
            </div>
        </div>
    )
}
