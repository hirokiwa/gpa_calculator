import React, { useState } from 'react';
import './Home.css';
import Table from './table/Table';
import Data from './data/Data';
import Popup from './popup/Popup';
import Header from '../header/Header';

const Home = ():JSX.Element => {
  const [show_popup, setShow_popup] = useState<boolean>(false)
  const [gpa, setGpa] = useState<number>(-999)
  const [check_confetti, setCheck_confetti] = useState<boolean>(false)
  const [isBrank, setIsBrank] = useState<boolean>(true)

  return (
    <div className='Home'>
        <Header/>
        <h1 className='discription'>立命館大学専用のGPA計算ツールです。</h1>
        <Table
          isBrank = {isBrank}
          setIsBrank = {setIsBrank}
        />
        <Data 
          setShow_popup = {setShow_popup}
          setCheck_confetti = {setCheck_confetti}
          gpa = {gpa}
          setGpa={setGpa}
          isBrank = {isBrank}
          setIsBrank = {setIsBrank}
        />
        <div id="content"></div>
        {show_popup ? 
          <Popup 
            show_popup = {show_popup}
            setShow_popup = {setShow_popup}
            gpa = {gpa}
            check_confetti ={check_confetti}
            setCheck_confetti = {setCheck_confetti}
          />
          : null
      }
      {/* <button onClick={useReset}>リセット</button> */}
    </div>
  );
}

export default Home;