import React , {useEffect, useState} from 'react';
import './Popup.css'
import { useReward } from 'react-rewards';

interface type_popup  {
    show_popup:boolean;
    setShow_popup:React.Dispatch<React.SetStateAction<boolean>>;
    gpa:number;
    check_confetti:boolean;
    setCheck_confetti:React.Dispatch<React.SetStateAction<boolean>>;
}

const Popup = (props:type_popup):JSX.Element => {
    const { reward, isAnimating } = useReward('rewardId', 'confetti');

    const close_popup = ():void => {
        props.setShow_popup(false)
    }

    useEffect(():void => {
        if(props.show_popup === true && props.check_confetti === true){
            reward()
            props.setCheck_confetti(false)
        }
    });

    return(
        <div className='Popup'>
            <div className='Popup_inner'>
                <div className='close_outer'>
                    <button className='close' onClick={close_popup}>×</button>
                </div>
                <div>あなたのGPAは</div>
                <h1>{props.gpa.toFixed(2)}</h1>
                <a
                    href={'https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&text=%E7%A7%81%E3%81%AEGPA%E3%81%AF'+props.gpa.toFixed(2)+'%E3%81%A7%E3%81%99%E3%80%82%0a&hashtags=GPA%E8%A8%88%E7%AE%97%E3%81%97%E3%81%A6%E3%81%BF%E3%81%9F,%E7%AB%8B%E5%91%BD%E9%A4%A8%0ahttps%3A%2F%2Frits-gpa.vercel.app%2F'}
                    className = "tweet_button"
                    target="_blank"
                    rel="noreferrer noopener"
                ><i className='twitter_icon'></i> Tweet</a>
                <span id="rewardId" />
            </div>
        </div>
    )
}

export default Popup;