import React from 'react';
import './Popup.css'

type type_popup = {
    setShow_popup:any;
    gpa:number;
}

const Popup = (props:type_popup) => {
    const close_popup = () => {
        props.setShow_popup(false)
    }

    return(
        <div className='Popup'>
            <div className='Popup_inner'>
                <div className='close_outer'>
                    <button className='close' onClick={close_popup}>×</button>
                </div>
                <div>あなたのGPAは</div>
                <h1>{props.gpa}</h1>
                <a
                    href={'https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&text=私のGPAはたぶん'+props.gpa+'です！！&hashtags=GPA計算ツール&hashtags=立命館'}
                    className = "tweet_button"
                ><i className='twitter_icon'></i> Tweet</a>
            </div>
        </div>
    )
}

export default Popup;