import React from 'react';
import './Data.css';
import { useReward } from 'react-rewards';
import Reset from '../../../function/Reset';

interface type_data {
    setShow_popup: React.Dispatch<React.SetStateAction<boolean>>;
    gpa:number;
    setGpa:React.Dispatch<React.SetStateAction<number>>;
    setCheck_confetti: React.Dispatch<React.SetStateAction<boolean>>;
    isBrank: boolean;
    setIsBrank:React.Dispatch<React.SetStateAction<boolean>>;
}

const Data = (props:type_data):JSX.Element => {
    // const [gpa, setGpa] = useState<number>()
    const { reward, isAnimating } = useReward('rewardId', 'confetti');

    const Gpa = () =>{
        let data = Array(30);
        
        for(let i = 0; i < 30; i++){
            data[i] = Array(2).fill(0);
            data[i][0] = document.getElementById("grade"+String(i));
            data[i][1] = document.getElementById("credit"+String(i));
        }
    
        for(let i = 0; i < 30; i++){
            if(data[i][0].value !== data[i][1].value){
                if((data[i][0].value === "") || (data[i][1].value === "")){
                    alert('正しく入力してください。')
                    return
                }
            }
        }
    
        let sum_score = 0;
        let sum_credit = 0;
        // calculate
        for(let i = 0; i < 30; i++){
            sum_score = sum_score + data[i][0].value * data[i][1].value;
            sum_credit = sum_credit + Number(data[i][1].value);
        }

        let GPA = 0;

        if(sum_credit !== 0){
            GPA = sum_score / sum_credit;
            GPA = Math.floor(GPA * Math.pow(10, 2)) / Math.pow(10, 2);
        }
    
        props.setGpa(GPA)
        props.setCheck_confetti(true)
        props.setShow_popup(true)
}
    const Pressenter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            Gpa()
        }
    }

    const resetHandler = () => {
        if (!window.confirm('リセットしますか？')) {
            return
        }
        Reset()
        props.setIsBrank(true);
    }

  return (
    <div className='Data' onKeyPress={(e) => Pressenter}>
          {/* <span id="rewardId" /> */}
        <button className='buttonSmall' disabled={props.isBrank} onClick={resetHandler}>リセット</button>
        <button className='button' onClick={Gpa}>計算</button>
    </div>
  );
}

export default Data;