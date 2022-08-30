import React from 'react';
import './TableHead.css';

function Table_head() {
  return (
    <div className='Table_head'>
        <tr>
          <th className='left'></th>
          {/* <div className='day_outer'> */}
            <th className='day'>月</th>
            <th className='day'>火</th>
            <th className='day'>水</th>
            <th className='day'>木</th>
            <th className='day'>金</th>
          {/* </div> */}
        </tr>
    </div>
  );
}

export default Table_head;