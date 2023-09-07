import React from 'react';
import "./gridContainer.less";
export default function GridContainer({ data }) {
    console.log(data);
    return (
        <div style={{
            gridTemplateAreas: data.gridState,
            display: 'grid'
        }}
            styleName="gridContainer"
        >
            {data.grid.map((v, i) => {
                return <div
                    style={{
                        gridArea: "grid" + (i + 1),
                        background: "#000",
                        ...v.itemStyle
                    }}
                    key={i}
                    styleName='gridItem'
                >
                    {v.title && <div styleName="title"
                        style={{
                            ...v?.titleStyle
                        }}
                    >{v.title}</div>}
                    {v.viceTitle && <div styleName="viceTitle"
                        style={{
                            ...v?.viceTitleStyle
                        }}

                    >{v.viceTitle}</div>}
                    {v.text && <div
                        styleName="text"
                        style={{
                            ...v.textStyle
                        }}
                        dangerouslySetInnerHTML={{ __html: v.text }}
                    ></div>}
                    {v.img && <img
                        style={{
                            ...v?.imgStyle
                        }}
                        src={v.img} />}
                </div>
            })}
        </div>
    )
}
