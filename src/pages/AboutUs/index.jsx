import React, { useEffect } from 'react';
import './aboutUs.less';
import { imagesConfig } from "@/i18n/config.js";
import TitleText from '../Components/TitleText';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

export default function AboutUs() {
    const companyRef = React.useRef()
    const companyRef2 = React.useRef()
    const companyRef3 = React.useRef()
    const [fixed, setFixed] = React.useState(false)
    const [aboutScrollData, setAboutScrollData] = React.useState({
        scrXY: 1,
        companyOpacity: 0,
        opacity: true,
        culture: true,
    })
    const { img: { aboutusBanner, company } } = imagesConfig()
    const text = React.useMemo(() => {
        return [
            {
                title: '公司文化',
                viceText: '公司文化 \n 公司文化\n公司文化公司文化公司文化公司文化 \n公司文化公司文化公司文化公司文化 \n公司文化公司文化公司文化公司文化 \n公司文化 \n公司文化 \n公司文化 \n公司文化 \n公司文化 \n',
                mark: true
            },
            {
                title: '公司理念',
                viceTitle: 'COMPANY PHILOSOPHY',
                viceText: '公司文化公司文化公司文化公司文化 \n 公司文化\n公司文化公司文化公司文化公司文化 \n公司文化公司文化公司文化公司文化 \n',
                mark: true
            },
            {
                title: '业务平台',
                viceTitle: 'COMPANY PHILOSOPHY',
                mark: true
            }
        ]
    }, [])
    const list = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",]
    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const topHeight = companyRef.current.offsetHeight; // 放大的盒子
        const topHeight2 = companyRef2.current.offsetHeight; // 滚动的整个盒子
        const topHeight3 = companyRef3.current.offsetHeight; // 文本内容
        const topHeight4 = topHeight2 - topHeight3
        // 计算值 开始触发滚动事件
        if ((scrollTop - 50) >= topHeight) {
            // companyRef3.current.offsetHeight
            if ((topHeight2 + topHeight) >= scrollTop && scrollTop <= topHeight4) {
                const val = ((scrollTop - 50) - topHeight) / 10
                setAboutScrollData((pre) => {
                    return { ...pre, scrXY: val > 1 ? val : 1 }
                })
            }
            // 滚动到达底部开始展示文字
            if ((scrollTop + 100) >= topHeight4) {
                const val = ((scrollTop + 100) - topHeight4) // 拿到额外计算的值
                const rote = Math.floor(val / topHeight3 * 1000) / 1000
                setAboutScrollData((pre) => {
                    return { ...pre, companyOpacity: rote > 1 ? 1 : rote, opacity: false }
                })
            } else {
                setAboutScrollData((pre) => {
                    return { ...pre, opacity: true, companyOpacity: 0 }
                })
            }
        }

        // 滚动到达文件图片
        if (scrollTop >= topHeight) {
            // 文件定位到顶部
            setFixed(true)
        } else {
            setAboutScrollData((pre) => {
                return { ...pre, scrXY: 1 }
            })
            setFixed(false)
        }
        // 结束第一次的滚动动画
        if (topHeight2 <= (scrollTop + 100)) {

            setAboutScrollData((pre) => {
                return {
                    ...pre,
                    culture: false
                }
            })
        } else {
            setAboutScrollData((pre) => {
                return {
                    ...pre,
                    culture: true
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
    const textObj = aboutScrollData.culture ? {
        position: 'fixed', top: "0.6rem"
    } : { position: 'absolute', bottom: 0 }
    return (
        <div styleName='aboutUsContContainer'>
            <section ref={companyRef}>
                <img src={aboutusBanner} alt="" />
            </section>
            <div styleName="aboutScrollContainer" ref={companyRef2}>
                <section styleName="aboutScroll" style={{
                    position: fixed ? 'fixed' : 'relative',
                    transform: `matrix(${aboutScrollData.scrXY},0,0,${aboutScrollData.scrXY},0,0)`,
                    opacity: aboutScrollData.opacity ? 1 : 1 - aboutScrollData.companyOpacity
                }}>
                    <img src={company} alt="" />
                </section>
                <section styleName="cultureContainer" ref={companyRef3} style={{
                    opacity: aboutScrollData.companyOpacity,
                    ...textObj
                }}>
                    <span styleName='culture'>
                        COMPANY CULTURE
                    </span>
                    {text.map((v, index) => {
                        return <TitleText key={index} {...v} />
                    })}
                </section>
            </div>
            <div styleName='aboutList'>
                <OverPack
                    playScale={0.3}
                    className='aboutList'
                >
                    {
                        list.map((v, i) => {
                            return <QueueAnim
                                key={"QueueAnim" + i}
                                type={i <= 10 ? 'top' : 'bottom'}
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
