import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import React, { useContext } from "react";
import { Context } from "@/reducer/useContent";
// 文字
import en_US from './en.json';
import zh_CN from './zh.json';
import zh_HK from './zhHk.json';
// 圖片
import zhImg from "./zhImg"
import zhHkImg from "./zhHkImg"

const resources = {
  // en: {
  //   translation: en_US,
  // },
  zh: {
    translation: zh_CN,
  },
  zhhk: {
    translation: zh_HK,
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh',
  fallbackLng: 'zhhk',
  interpolation: {
    escapeValue: false,
  },
});

// 根据语言切换图片
const imagesConfig = (props) => {
  const { language, setLanguage } = useContext(Context)
  const images = {
    "zh": zhImg,
    'zhhk': zhHkImg,
  }
  return {
    setLanguage,
    img: images[language]
  }
}


export {
  imagesConfig,
}
export default i18n;