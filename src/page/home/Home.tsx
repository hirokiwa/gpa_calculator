import React, { useState } from 'react';
import './Home.css';
import Table from './table/Table';
import Data from './data/Data';

const Home = () => {
    // const [gpa, setGpa] = useState<number>(0)
    // const calculate_gpa = () =>{
    //     let data = Array(30);
        
    //     for(let i = 0; i < 30; i++){
    //         data[i] = Array(2).fill(0);
    //         data[i][0] = document.getElementById("grade"+String(i));
    //         data[i][1] = document.getElementById("credit"+String(i));
    //     }
    
    //     for(let i = 0; i < 30; i++){
    //         console.log(data[i][0].value);
    //         console.log(data[i][1].value);
    //     }
    
    //     let sum_score = 0;
    //     let sum_credit = 0;
    //     // calculate
    //     for(let i = 0; i < 30; i++){
    //         sum_score = sum_score + data[i][0].value * data[i][1].value;
    //         sum_credit = sum_credit + Number(data[i][1].value);
    //     }
    
    //     let GPA = sum_score / sum_credit;
    //     GPA = Math.floor(gpa * Math.pow(10, 2)) / Math.pow(10, 2);
    //     this.setGpa = {GPA}
        
    //     console.log(sum_score);
    //     console.log(sum_credit);
    //     console.log(gpa);
    // }

  return (
    <div className='Home'>
        this is home
        <Table/>
        <Data/>
        <div id="content"></div>
        {/* <Popup text='Close Me'></Popup> */}
    </div>
  );
}

export default Home;