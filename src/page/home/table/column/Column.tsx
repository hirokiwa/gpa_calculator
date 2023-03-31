import React from 'react';
import './Column.css';
import Square from './square/Square';
import Times from './square/Times';
import Repeat from '../../../../function/Repeat';
import { changedSquareArray, squareData } from '../../../../@types/global';

interface type_column  {
  times: number;
  isBrank: boolean;
  setIsBrank: React.Dispatch<React.SetStateAction<boolean>>;
  currentTable: squareData[];
  setCurrentTable: React.Dispatch<React.SetStateAction<squareData[]>>;
  changeHistory: changedSquareArray[];
  setChangeHistory: React.Dispatch<React.SetStateAction<changedSquareArray[]>>;
  currentHistoryIndex: number;
  setCurrentHistoryIndex: React.Dispatch<React.SetStateAction<number>>;
}

function Column(props: type_column): JSX.Element {
  return (
    <tr>
      <Times times={props.times} />
      <Repeat numTimes={5}>
        {(index: number) => <Square
          id_number={5 * props.times + index}
          isBrank={props.isBrank}
          setIsBrank={props.setIsBrank}
          currentTable={props.currentTable}
          setCurrentTable={props.setCurrentTable}
          changeHistory={props.changeHistory}
          setChangeHistory={props.setChangeHistory}
          currentHistoryIndex={props.currentHistoryIndex}
          setCurrentHistoryIndex={props.setCurrentHistoryIndex}
        />}
      </Repeat>
    </tr>
  );
}

export default Column;