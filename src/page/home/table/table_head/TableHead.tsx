import React from 'react';
import './TableHead.css';

const Table_head = ():JSX.Element => {
  return (
    <div className='Table_head'>
        <tr>
          <th className='left'></th>
            <th className='day'>月</th>
            <th className='day'>火</th>
            <th className='day'>水</th>
            <th className='day'>木</th>
            <th className='day'>金</th>
        </tr>
    </div>
  );
}

export default Table_head;