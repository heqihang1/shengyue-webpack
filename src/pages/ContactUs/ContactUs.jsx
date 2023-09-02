import React from 'react';
import TitleText from '../Components/TitleText';
import { t } from 'i18next';
import { Input } from 'antd';
import "./contactUs.less";

export default function contactUs() {
    const list = ["赵经理", "昇月的超级业务", "189  9893 1211"]
    return (
        <div styleName="contactUsContainer">
            <div styleName="contactTopText">
                <TitleText
                    title={'CONTACT'}
                    viceText={t('contactUs.contact')}
                />
            </div>

            <div styleName="contactUsContent">
                <div styleName="contactUsText">
                    {list.map((v,i)=>{
                        return v + '\n'
                    })}
                    <div style={{
                        width:"1.5rem",
                        height:"1.5rem"
                    }}>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            <div styleName="contactUsGet">
                <div style={{
                    minHeight:"2rem",
                    marginBottom:"1.57rem"
                }}>
                    <TitleText
                        title={'GET'}
                        viceText={t('contactUs.introduce')}
                    />
                </div>
                <div styleName="contactUsInput" className='contactUsInput'>
                    <Input placeholder={t("contactUs.mail")}
                        style={{
                            width: '70%', height: '0.8rem', borderRadius: '0.6rem',
                            background: '#1D1D1D',
                            fontSize:'18px',
                            paddingLeft:"0.9rem",
                            color: "#fff",
                        }}
                    />
                    <div styleName="inputButton">→</div>
                </div>
                <style>{`
                .contactUsInput{
                    .ant-input {
                        border-color:#1D1D1D
                
                    }
                    .ant-input:focus, .ant-input:hover{
                        border-color: transparent;
                        box-shadow: 0 0 0 0;
                    }
                }
                `}</style>
            </div>
        </div>
    )
}
