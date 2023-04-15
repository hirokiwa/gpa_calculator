import React , {useEffect, useState} from 'react';
import './Popup.css'
import { useReward } from 'react-rewards';
import ScoreBare from './ScoreBar';
import styled from 'styled-components';

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
                    <CancelButton
                        onClick={close_popup}
                    >
                        <span
                            className="material-symbols-outlined"
                            style={{
                                color: "black",
                            }}
                        >
                            close
                        </span>
                    </CancelButton>
                </div>
                <div style={{marginTop:"3em"}}>あなたのGPAは</div>
                <ScoreBare
                    gpa = {props.gpa}
                />
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

const CancelButton = styled.button`
    display: flex;
    position: absolute;
    background-color: transparent;
    border: none;
    margin-bottom: 0rem;
    border-radius: 50%;
    text-align: center;
    width: 2.5rem;
    height: 2.5rem;
    background-color: #edebeb;
    justify-content: center;
    align-items: center;
    top: 1em;
    right: 1em;
    :hover{
        background-color: #e2e2e2;
    }
`