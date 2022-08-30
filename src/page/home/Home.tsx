import React, { useState } from 'react';
import './Home.css';
import Table from './table/Table';
import Data from './data/Data';
import Popup from './popup/Popup';

const Home = () => {
  const [show_popup, setShow_popup] = useState<boolean>(false)
  const [gpa, setGpa] = useState<number>(-999)

  return (
    <div className='Home'>
        this is home
        <Table/>
        <Data 
          setShow_popup = {setShow_popup}
          gpa = {gpa}
          setGpa = {setGpa}
        />
        <div id="content"></div>
        {/* <Popup text='Close Me'></Popup> */}
        {show_popup ? 
          <Popup 
            setShow_popup = {setShow_popup}
            gpa = {gpa}
          />
          : null
        }
    </div>
  );
}

export default Home;