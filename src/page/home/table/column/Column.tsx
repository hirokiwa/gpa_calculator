import React from 'react';
import './Column.css';
import Square from './square/Square';
import Times from './square/Times';
import Repeat from '../../../../function/Repeat';

type type_column = {
    times: number;
  }

function Column(props:type_column) {
  return (
    <tr>
        {/* <td>{props.times+1}</td> */}
        <Times times = {props.times}/>
        <Repeat numTimes={5}>
            {(index:number) => <Square id_number = {5*props.times+index}/>}
        </Repeat>
    </tr>
  );
}

export default Column;