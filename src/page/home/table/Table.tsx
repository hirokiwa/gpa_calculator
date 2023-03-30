import './Table.css';
import React, { FC, useState } from 'react';
import TableHead from './table_head/TableHead';
import Column from './column/Column';
import Repeat from '../../../function/Repeat';
import ControlBar from '../../../componrnt/controlBar/ControlBar';

interface Props {
    isBrank:boolean;
    setIsBrank:React.Dispatch<React.SetStateAction<boolean>>;
}

const Table: FC<Props> = ({ isBrank, setIsBrank }): JSX.Element => {
    const [currentTable, setCurrentTable] = useState<boolean>(true)

    return (
    <div className='Table'>
            <div className='table_outer'>
                <ControlBar
                    isBrank={isBrank}
                    setIsBrank={setIsBrank}
                />
            <table className="table">
                <TableHead/>
                <Repeat numTimes={6}>
                    {(index:number) => <div key={index}>
                            <Column
                                times={index}
                                isBrank={isBrank}
                                setIsBrank={setIsBrank}
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