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

  return (
    <div className='Home'>
        <Header/>
        <Table/>
        <Data 
          setShow_popup = {setShow_popup}
          setCheck_confetti = {setCheck_confetti}
          gpa = {gpa}
          setGpa = {setGpa}
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
    </div>
  );
}

export default Home;