import React from 'react'
// import { imagesConfig } from "@/i18n/config.js";
import img from "@/assets/logo-light.png";
import './footer.less';
import { useNavigate } from "react-router-dom";
import { t } from 'i18next';
export default function Footer() {
  // const { img: {  } } = imagesConfig()
  const navigate = useNavigate();
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
  return (
    <div styleName="footerContainer">
      <div styleName="footerLoge">
        <img src={img} alt="" />
      </div>
      <div>
        <div styleName="footerList">
          {
            navs.map((v,i)=>{
              return <span 
              key={i}
              onClick={()=>{
                navigate(v.path);
              }}>
                {v.name}
              </span>
            })
          }
        </div>
        <div styleName="footerCompany">
          {t("footer.companyName")}
          <br/>
          {t("footer.phone")}: {"(0755) 8695 9281"} {t("footer.mail")}: INFO@BAOERFEIYANG.CN
          <br/>
          {t("footer.address")}
          <br/>
          <br/>
          粤ICP备14007045号-1 © SHENGYUE
        </div>
        <div></div>
      </div>
    </div>
  )
}
