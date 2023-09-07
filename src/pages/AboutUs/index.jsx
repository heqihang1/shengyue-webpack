import React, { useEffect } from 'react';
import TitleText from '../Components/TitleText';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import AnimationBanner from '../Components/AnimationBanner/AnimationBanner';
import { t } from 'i18next';
import './aboutUs.less';

export default function AboutUs() {

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
    return (
        <div styleName='aboutUsContContainer'>
            <AnimationBanner />
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
                                type={i <= 7 ? 'top' : 'bottom'}
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
