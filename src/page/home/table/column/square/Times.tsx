import React from 'react';
import './Times.css'

interface type_column  {
  times: number;
}

const Times = (props:type_column):JSX.Element => {
    if(props.times !== 5){
        return (
            <td>{props.times+1}</td>
          )
    }else{
        return (
            <td>他</td>
          )
    }
}

export default Times;