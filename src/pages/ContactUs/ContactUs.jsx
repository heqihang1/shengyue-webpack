import React from 'react';
import TitleText from '../Components/TitleText';
import { t } from 'i18next';
import { Input } from 'antd';
import "./contactUs.less";

export default function contactUs() {

    return (
        <div styleName="contactUsContainer">
            <div styleName="contactTopText">
                <TitleText
                    title={'CONTACT'}
                    viceText={t('contactUs.contact')}
                />
            </div>

            <div styleName="contactUsContent">

            </div>
            <div styleName="contactUsGet">
                <TitleText
                    title={'GET'}
                    viceText={t('contactUs.introduce')}
                />
                <div styleName="contactUsInput" className='contactUsInput'>
                    <Input placeholder={t("contactUs.mail")}
                        style={{
                            width: '60%', height: '0.8rem', borderRadius: '0.6rem',
                            background: '#ddd',
                            fontSize:'18px',
                            paddingLeft:"18px"
                        }}
                    />
                    <div styleName="inputButton">-{">"}</div>
                </div>
                <style>{`
                .contactUsInput{
                    .ant-input:focus, .ant-input:hover{
                        border-color: transparent
                    }
                }
                `}</style>
            </div>
        </div>
    )
}
