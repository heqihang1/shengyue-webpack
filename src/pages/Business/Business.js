import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styles from './Business.less'
import { WOW } from "wowjs"

export default function Business() {

  let wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: false
  })

  const navigate = useNavigate();
  const list = [
    { key: 1, name: '活动策划及过程', enName: 'EVENTS MANAGMENT' },
    { key: 2, name: '网络增强现实技术', enName: 'AUGMENTED REALITY' },
    {key:3, name:'扩展现实技术', enName:'EXTENDED REALIYY'},
    {key:4, name:'影视制作', enName:'VIDEO PRODUTION'},
    {key:5, name:'全网数码营销', enName:'DIGITAL MARKETING'},
    {key:6, name:'网红营销', enName:'INFIUENCER MARKETING'},
  ]

  // const lineList = [
  //   { key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }
  // ]

  useEffect(() => {
    wow.init()
  }, [])

  return (
    <div className={styles.container}>
      <div>
        {list.map(item => {
          return (
            <div key={item.key} className={styles.box}>
              {/* <div>
                {lineList.map(l => (
                  <div key={l.key} className={styles.line}></div>
                ))}
              </div> */}
              <div style={{
                position:"absolute",
                top:"0",
                zIndex:0,
                width:"100%",
                height:"7.6rem"
              }}>
                <video 
                style={{
                  width:"100%",
                  height:"100%"
                }}
                src="https://www.apple.com.cn/105/media/ww/apple-watch-ultra/2022/4d9e62e1-fe94-4bb9-abbe-0b8c9626a304/anim/hero-2/large.mp4"
                ></video>
              </div>
              <div 
                style={{
                  position:"relative",
                  marginBottom:"0.3rem"
                }}
              >
                <span className={styles.enNames}>{item.enName}</span>
                <span
                  className={styles.details}
                  onClick={() => navigate('/Business/details', {
                    state: { detailsKey: item.key }
                  })}
                >
                  {'了解详情 >'}
                </span>
              </div>
              <div className={styles.name}  style={{
                  position:"relative"
                }}>{item.name}</div>
            </div>
          )
        })}
      </div>

    </div>
  )
}