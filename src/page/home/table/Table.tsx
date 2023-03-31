import './Table.css';
import React, { FC, useEffect, useState } from 'react';
import TableHead from './table_head/TableHead';
import Column from './column/Column';
import Repeat from '../../../function/Repeat';
import ControlBar from '../../../componrnt/controlBar/ControlBar';
import getAllSquareData from '../../../function/getAllSquareData';
import { changedSquare, changedSquareArray, squareData } from '../../../@types/global';

interface Props {
    isBrank:boolean;
    setIsBrank:React.Dispatch<React.SetStateAction<boolean>>;
}

const Table: FC<Props> = ({ isBrank, setIsBrank }): JSX.Element => {
    const [initialState, setInitialState] = useState<squareData[]>([]);
    const [currentTable, setCurrentTable] = useState<squareData[]>([]);
    const [changeHistory, setChangeHistory] = useState<changedSquareArray[]>([]);
    const [currentHistoryIndex, setCurrentHistoryIndex] = useState<number>(-1);

    useEffect(() => {
        const getAll = getAllSquareData()
        setInitialState(getAll)
        setCurrentTable(getAll)
    }, [])

    return (
        <div className='Table'>
            <div className='table_outer'>
                <ControlBar
                    isBrank={isBrank}
                    setIsBrank={setIsBrank}
                    changeHistory={changeHistory}
                    setChangeHistory={setChangeHistory}
                    currentHistoryIndex={currentHistoryIndex}
                    setCurrentHistoryIndex={setCurrentHistoryIndex}
                    currentTable={currentTable}
                    setCurrentTable={setCurrentTable}
                />
            <table className="table">
                <TableHead/>
                <Repeat numTimes={6}>
                    {(index:number) => <div key={index}>
                        <Column
                            times={index}
                            isBrank={isBrank}
                            setIsBrank={setIsBrank}
                            currentTable={currentTable}
                            setCurrentTable={setCurrentTable}
                            changeHistory={changeHistory}
                            setChangeHistory={setChangeHistory}
                            currentHistoryIndex={currentHistoryIndex}
                            setCurrentHistoryIndex={setCurrentHistoryIndex}
                        />
                    </div>
                    }
                </Repeat>
            </table>
        </div>
    </div>
    );
}

export default Table;