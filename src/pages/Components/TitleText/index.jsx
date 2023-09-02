import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import './titleText.less';

export default function TitleText({ title, viceTitle, viceText, mark, style }) {
    return (
        <div styleName="titltTextContainer" style={style}>
            <OverPack
                playScale={0.2}
            >
                <QueueAnim
                    key={"titltText2"}
                    type={'bottom'}
                    leaveReverse={true}
                >
                    {title && <section key={"titltText"} styleName="titltText">{title}</section>}
                </QueueAnim>
                <QueueAnim
                    key={"viceTitle2"}
                    type={'bottom'}
                    leaveReverse={true}
                >
                    {viceTitle && <article key={"viceTitle"} styleName="viceTitle">{viceTitle}</article>}
                </QueueAnim>
                <QueueAnim
                    key={"mark2"}
                    type={'bottom'}
                    leaveReverse={true}
                >
                    {mark && <aside key={"mark"} styleName="mark" />}
                </QueueAnim>
                <QueueAnim
                    key={"viceText2"}
                    type={'bottom'}
                    leaveReverse={true}
                >
                    {viceText && <aside key={"viceText"} styleName="viceText">{viceText}</aside>}
                </QueueAnim>
            </OverPack>
        </div>
    )
}
