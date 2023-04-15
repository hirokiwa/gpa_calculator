import React from 'react';
import './Data.css';
import { calculateGpa } from '../../../function/calculatorGpa';

interface type_data {
    setShow_popup: React.Dispatch<React.SetStateAction<boolean>>;
    gpa:number;
    setGpa:React.Dispatch<React.SetStateAction<number>>;
    setCheck_confetti: React.Dispatch<React.SetStateAction<boolean>>;
    isBrank: boolean;
    setIsBrank:React.Dispatch<React.SetStateAction<boolean>>;
}

const Data = (props:type_data):JSX.Element => {

    const calculateHandler = () => {
        const calculatedGpa = calculateGpa();
        if (calculatedGpa < 0 || calculatedGpa > 5) {
            return
        }
        props.setGpa(calculatedGpa)
        props.setCheck_confetti(true)
        props.setShow_popup(true)
    }

    const Pressenter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            calculateHandler();
        }
    }

    return (
    <div className='Data' onKeyDown={Pressenter}>
        <button className='button' onClick={calculateHandler}>計算</button>
    </div>
  );
}

export default Data;