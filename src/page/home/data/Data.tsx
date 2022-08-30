import React, {useState} from 'react';
import './Data.css';

function Data() {
    const [gpa, setGpa] = useState<number>()

    const Gpa = () =>{
        let data = Array(30);
        
        for(let i = 0; i < 30; i++){
            data[i] = Array(2).fill(0);
            data[i][0] = document.getElementById("grade"+String(i));
            data[i][1] = document.getElementById("credit"+String(i));
        }
    
        for(let i = 0; i < 30; i++){
            console.log(data[i][0].value);
            console.log(data[i][1].value);
            if(data[i][0].value !== data[i][1].value){
                if((data[i][0].value === "") || (data[i][1].value === "")){
                    console.log("error")
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

        if(sum_credit === 0){
            alert('正しく入力してください。')
            return
        }
    
        let GPA = sum_score / sum_credit;
        GPA = Math.floor(GPA * Math.pow(10, 2)) / Math.pow(10, 2);
        
        console.log(sum_score);
        console.log(sum_credit);
        console.log(GPA);
        console.log("gpa");
    
        setGpa(GPA)
    }

  return (
    <div className='Data'>
        Data
        <button className='button' onClick={Gpa}>計算</button>
        {gpa}
    </div>
  );
}

export default Data;