import React , {useEffect, useState} from 'react';
import './Popup.css'
import { useReward } from 'react-rewards';

type type_popup = {
    show_popup:boolean;
    setShow_popup:any;
    gpa:number;
    check_confetti:boolean;
    setCheck_confetti:any;
}

const Popup = (props:type_popup) => {
    const { reward, isAnimating } = useReward('rewardId', 'confetti');

    const close_popup = () => {
        props.setShow_popup(false)
    }

    useEffect(() => {
        console.log(props.show_popup)
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
                    href={'https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&text=%E7%A7%81%E3%81%AEGPA%E3%81%AF'+props.gpa.toFixed(2)+'%E3%81%A7%E3%81%99%E3%80%82'}
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