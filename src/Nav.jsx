import React, { useRef, useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo-light.png"
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

// 端口好后缀
// const hostObj = {
//   cn: 'baoerfeiyang.cn',
//   hk: 'biofuture.hk'
// }

export default () => {
  const { i18n } = useTranslation();
  const [languagePage, setLanguagePage] = useState((window.location.host).includes(".hk") ? "zhhk" : "zh")
  const navs = [
    {
      path: "/AboutUs",
      name: t("header.aboutUs"),
      id: "aboutUs",
    },
    {
      path: "/Business",
      name: t("header.business"),
      id: "business"
    },
    {
      path: "/contactUs",
      name: t("header.contactUs"),
      id: "contactUs"
    },
  ];
  const language = [
    //   {
    //   text: "简",
    //   code: "zh"
    // }, {
    //   text: "繁",
    //   code: "zhhk"
    // }, {
    //   text: "EN",
    //   code: 'en'
    // }
  ]

  const navigate = useNavigate();
  const getLang = async (val) => {
    await i18n.changeLanguage(val);
  };
  const navSelected = useMemo(() => {
    window.scrollTo(0, 0)
    return window.location.pathname
  }, [window.location.href])

  // 切换url地址
  useEffect(() => {
    setLanguagePage('zh')
  }, [])
  return (
    <>
      <header>
        <ul className="nav">
          <img src={logo} alt="" />
          <div className="navBox">
            {navs.map((item, index) => (
              <li
                key={index}
                className={navSelected === item?.path || (navSelected === '/' && index === 0) ?
                  "highlightNav" :
                  ""}
                onClick={() => {
                  navigate(item.path);
                }}
              >
                {item.name}
              </li>
            ))}
          </div>
        </ul>
        <div className="rightText">
          {language.map((v, index) => {
            return <div key={v.code}
              className={v.code === languagePage ? "highLanguage" : ""}
              onClick={() => {
                setLanguagePage(v.code)
              }}
            >{v.text}</div>
          })}
        </div>
        <div className="navBj" />
      </header>
      <style jsx>{`
        .nav {
          display: flex;
          padding: 0 300px;
          align-items: center;
          justify-content: space-between;
          font-family: MiSans-Bold, MiSans;
          position: fixed;
          width: 100%;
          height: 120px;
          z-index: 10;
          .highlightNav{
            font-weight: 700;
          }
          .navBox{
            display: flex;
            font-size: 18px;
          }
          li {
            margin-left: 60px;
            list-style-type: none;
            color: #fff;
            &:hover {
              cursor: pointer;
              font-weight: 700;
            }
          }
          >img{
            min-width: 100px;
            height: 120px;
            marginRight: 5em;
          }
        }
        .navBj{
          height:120px;
          background-color:#0F0F0F;
          width:100%;
          z-index: 8;
          position: fixed;
        }
        .rightText{
          position: fixed;
          display: flex;
          z-index: 10;
          right: 8%;
          height: 120px;
          align-items: center;
          div{
            margin-left:20px;
            width: 0.3rem;
            height: 0.3rem;
            background: #fff;
            text-align: center;
            line-height: 0.3rem;
            border-radius: 100%;
            cursor: pointer;
            color:#fff
          }
          .highLanguage{
            background: #000;
            color:#fff
          }
        }
       
      `}</style>
    </>
  );
};
