import './Table.css';
import React, { useState } from 'react';
import TableHead from './table_head/TableHead';
import Column from './column/Column';
import Repeat from '../../../function/Repeat';

const Table = () => {
    return (
    <div className='Table'>
        <div className='table_outer'>
            <table border={1} className="table">
                <TableHead/>
                <Repeat numTimes={6}>
                    {(index:number) => <div key={index}>
                        <Column times = {index}/>
                    </div>
                    }
                </Repeat>
            </table>
        </div>
    </div>
    );
}

export default Table;