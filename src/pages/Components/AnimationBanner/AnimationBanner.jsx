
import React, { useEffect, useState } from 'react';
import { imagesConfig } from "@/i18n/config.js";
import PropTypes from 'prop-types';
import "./animationBanner.less";
// 渐变距离的值
const number = 200;
function AnimationBanner({
    animationPosition,
    style,
    startImg,
    endImg
}) {
    const companyRef = React.useRef()
    const companyRef2 = React.useRef()
    const [aboutScrollData, setAboutScrollData] = React.useState({
        scrXY: 1,
        companyOpacity: 0,
        opacity: true,
        opacityBoole: true,
        culture: true,
    })
    const [fixed, setFixed] = useState(false) // 开始动画
    const { img: { aboutusBanner, company } } = imagesConfig()
    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollVal = scrollTop - companyRef.current.offsetTop
        const topHeight = companyRef.current.offsetHeight; // 放大的盒子
        if (scrollVal > 0) {
            setFixed(true)
            const bigData = 1.4 // 1.40 为缩放的最大值
            // 计算值 开始触发滚动事件
            if ((scrollVal + window.innerHeight + number) <= topHeight) {
                const val = (scrollVal * bigData / (topHeight - window.innerHeight - number)) * 100
                setAboutScrollData((pre) => {
                    return { ...pre, scrXY: val > 1 ? val : 1 }
                })
            }
            // 滚动值在200区间时 透明度计算
            if ((topHeight - window.innerHeight - number) <= scrollVal
                && scrollVal <= (topHeight - window.innerHeight)) {
                const val = (scrollVal - (topHeight - window.innerHeight - number)) / 2;
                setAboutScrollData((pre) => {
                    return {
                        ...pre,
                        companyOpacity: (Math.floor(val) / 100) > 0.9 ? 1 : (Math.floor(val) / 100),
                        opacity: false,
                        opacityBoole: true,
                    }
                })
            }
            if ((topHeight - window.innerHeight - number) >= scrollVal) {
                setAboutScrollData((pre) => {
                    return {
                        ...pre,
                        companyOpacity: 0,
                        opacityBoole: true,
                    }
                })
            }
            // 超出 200 时
            if (scrollVal >= (topHeight - window.innerHeight)) {
                setAboutScrollData((pre) => {
                    return {
                        ...pre,
                        opacityBoole: false
                    }
                })
            }
        } else {
            setFixed(false)
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
        <section
            ref={companyRef}
            styleName="animationBannerContainer"
            style={{ ...style }}
        >
            <section styleName="animationScroll"
                style={{
                    position:fixed ? 'fixed' : 'relative',
                    display: aboutScrollData.opacityBoole ? "block" : "none",
                    transform: `matrix(${aboutScrollData.scrXY},0,0,${aboutScrollData.scrXY},0,0)`,
                    opacity: aboutScrollData.opacity ? 1 : 1 - aboutScrollData.companyOpacity,
                    transformOrigin: `${animationPosition[0]} ${animationPosition[1]}`,
                }}
            >
                <img src={aboutusBanner} alt="" />
            </section>
            {/* shengyuee */}
            <div ref={companyRef2}
                styleName="salesScroll"
                style={{
                    opacity: aboutScrollData.opacityBoole ? aboutScrollData.companyOpacity : 1,
                    ...textObj
                }}>
                <section>
                    <img src={company} alt="" />
                </section>
            </div>
        </section>
    )
}
AnimationBanner.propTypes = {
    animationPosition: PropTypes.array,
    style: PropTypes.object,
    startImg: PropTypes.shape({
        backgroundImg: PropTypes.string,
        contentImg: PropTypes.string,
        style: PropTypes.object
    }),
    endImg: PropTypes.shape({
        backgroundImg: PropTypes.string,
        contentImg: PropTypes.string,
        animationDirection: PropTypes.string,
        style: PropTypes.object
    })
}
AnimationBanner.defaultProps = {
    animationPosition: ['45%', 'center'],
    startImg: {
        backgroundImg: '',
        contentImg: '',
        style: {}
    },
    endImg: {
        backgroundImg: '',
        contentImg: '',
        animationDirection: '',
        style: {}
    }
}

export default AnimationBanner