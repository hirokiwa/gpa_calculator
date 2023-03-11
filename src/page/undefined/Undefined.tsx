import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import './Undefined.css';

const Undefined = ():JSX.Element => {
    return (
        <>
            <Header />
            <h2 className='undefinedMessage'>お探しのページは見つかりません。</h2>
            <Link to={"/"} className='button'>
                GPAを計算する
            </Link>
        </>
    );
}

export default Undefined;