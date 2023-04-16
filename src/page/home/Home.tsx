import React, { useState } from 'react';
import './Home.css';
import Table from './table/Table';
import Data from './data/Data';
import Popup from './popup/Popup';
import Header from '../../componrnt/header/Header';
import DisableScroll from '../../componrnt/DisabledScroll';

const Home = ():JSX.Element => {
  const [show_popup, setShow_popup] = useState<boolean>(false)
  const [gpa, setGpa] = useState<number>(-999)
  const [check_confetti, setCheck_confetti] = useState<boolean>(false)
  const [isBrank, setIsBrank] = useState<boolean>(true)

  window.addEventListener("beforeunload", (event) => {
    event.returnValue = "このサイトを離れますか?";
  });

  const keyDownHandler = (event:React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "Escape":
        setShow_popup(false);
        break;
    }
  }

  return (
    <div
      className='Home'
      onKeyDown={keyDownHandler}
    >
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
          <>
            <Popup 
              show_popup = {show_popup}
              setShow_popup = {setShow_popup}
              gpa = {gpa}
              check_confetti ={check_confetti}
              setCheck_confetti = {setCheck_confetti}
            />
            <DisableScroll/>
          </>
          : null
      }
    </div>
  );
}

export default Home;