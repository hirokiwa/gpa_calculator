import React from 'react';
import './Data.css';
import { useReward } from 'react-rewards';
import { squareData } from '../../../@types/global';
import getAllSquareData from '../../../function/getAllSquareData';

interface type_data {
    setShow_popup: React.Dispatch<React.SetStateAction<boolean>>;
    gpa:number;
    setGpa:React.Dispatch<React.SetStateAction<number>>;
    setCheck_confetti: React.Dispatch<React.SetStateAction<boolean>>;
    isBrank: boolean;
    setIsBrank:React.Dispatch<React.SetStateAction<boolean>>;
}

const Data = (props:type_data):JSX.Element => {
    const { reward, isAnimating } = useReward('rewardId', 'confetti');

    const Gpa = () =>{

        const acquiredData = getAllSquareData()

        for(let i = 0; i < acquiredData.length; i++){
            if(acquiredData[i].grade !== acquiredData[i].credit){
                if((acquiredData[i].grade === -1) || (acquiredData[i].credit === -1)){
                    alert('正しく入力してください。')
                    return
                }
            }
        }
        
        const filterdData = acquiredData.filter((data) => {
            return data.credit !== -1 && data.grade !== -1
        })
        
        let sum_score = 0;
        let sum_credit = 0;
        
        filterdData.forEach((data) => {
            sum_score = sum_score + data.credit * data.grade;
            sum_credit = sum_credit + data.credit;
        })

        const GPA = sum_credit !== 0
            ? (() => {
                const quotient = sum_score / sum_credit;
                return Math.floor(quotient * Math.pow(10, 2)) / Math.pow(10, 2);
            }) : 0;
        
        props.setGpa(GPA)
        props.setCheck_confetti(true)
        props.setShow_popup(true)
    }

    const Pressenter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            Gpa()
        }
    }

    return (
    <div className='Data' onKeyPress={(e) => Pressenter}>
        <button className='button' onClick={Gpa}>計算</button>
    </div>
  );
}

export default Data;