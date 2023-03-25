import React from 'react';
import './Column.css';
import Square from './square/Square';
import Times from './square/Times';
import Repeat from '../../../../function/Repeat';

interface type_column  {
  times: number;
  isBrank: boolean;
  setIsBrank:React.Dispatch<React.SetStateAction<boolean>>;
}

const Column = (props:type_column):JSX.Element => {
  return (
    <tr>
        <Times times = {props.times}/>
        <Repeat numTimes={5}>
        {(index: number) => <Square
          id_number={5 * props.times + index}
          isBrank={props.isBrank}
          setIsBrank={props.setIsBrank}
        />}
        </Repeat>
    </tr>
  );
}

export default Column;