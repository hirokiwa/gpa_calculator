import React from 'react';
import './Square.css';
interface Square_type  {
    id_number:number;
}

const Square = (props:Square_type):JSX.Element => {
  return (
    <td className='class_box'>
        <div>
            <div className='select_outer'>
                <select id={"grade"+props.id_number}>
                    <option value="" selected disabled>評価　</option>
                    <option value="5">A+</option>
                    <option value="4">A</option>
                    <option value="3">B</option>
                    <option value="2">C</option>
                    <option value="0">F</option>
                </select>
            </div>
        </div>
        <div>
            <div className='select_outer'>
                <select id={"credit"+props.id_number}>
                    <option value="" selected disabled>単位数</option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
        </div>
    </td>
  );
}

export default Square;