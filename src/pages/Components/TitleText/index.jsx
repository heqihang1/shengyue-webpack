import React from 'react';
import './titleText.less';

export default function TitleText({ title, viceTitle, viceText,mark }) {
    return (
        <div styleName="titltTextContainer">
            {title && <section styleName="titltText">{title}</section>}
            {viceTitle && <article styleName="viceTitle">{viceTitle}</article>}
            {mark && <aside styleName="mark" />}
            {viceText && <aside styleName="viceText">{viceText}</aside>}
        </div>
    )
}
