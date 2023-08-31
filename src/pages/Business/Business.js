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
    // {key:1, name:'扩展现实技术', enName:'EXTENDED REALIYY'},
    // {key:1, name:'影视制作', enName:'VIDEO PRODUTION'},
    // {key:1, name:'全网数码营销', enName:'DIGITAL MARKETING'},
    // {key:1, name:'网红营销', enName:'INFIUENCER MARKETING'},
  ]

  const lineList = [
    { key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }
  ]

  useEffect(() => {
    wow.init()
  }, [])

  return (
    <div className={styles.container}>
      <div>
        {list.map(item => {
          return (
            <div key={item.key} className={styles.box}>
              <div>
                {lineList.map(l => (
                  <div key={l.key} className={styles.line}></div>
                ))}
              </div>
              <div>
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
              <div className={styles.name}>{item.name}</div>
            </div>
          )
        })}
      </div>

    </div>
  )
}