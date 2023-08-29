import React, { useRef, useEffect, history, useReducer } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { I18nextProvider, useTranslation } from 'react-i18next';
import Provider from "./reducer/useContent";
import Nav from "./Nav";
import WebFooter from './pages/Components/WebFooter/Footer';
import AboutUs from "./pages/AboutUs"
import routesList from "./Route/Routes";
import "./i18n/config";
import "antd/dist/antd.css";
// import 'animate.css'
import { WOW } from "wowjs"
import "../node_modules/wowjs/css/libs/animate.css"


export default () => {
  const cssPrefix = CSS_PREFIX;

  useEffect(() => {
    let wow = new WOW({
      boxClass: 'wow',    //需要执行动画元素的 class
      animateClass: 'animated', //animatedcss动画的 class
      offset: 0,     //距离可视区域多少开始执行动画
      mobile: true,  //是否在移动设备上执行动画
      live: false    //异步加载的内容是否有效
    })
    wow.init()
  }, [])

  return (
    <I18nextProvider>
      <Provider>
        <div className={`${cssPrefix}`} style={{ overflow: 'hidden', position: 'relative' }}>
          <BrowserRouter>
            <Nav />
            <Routes >
              <Route path={`*`} exact={true} element={<AboutUs />} />
              {routesList.map((v, i) => {
                return <Route path={v.url} exact={true} element={v.element} key={v.key} />
              })}
            </Routes>
            <WebFooter />
          </BrowserRouter>
        </div>
      </Provider>
    </I18nextProvider>
  );
};
