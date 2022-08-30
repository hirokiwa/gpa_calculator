import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './page/home/Home';

function App() {
  return (
    <div className='App'>
      <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"></meta>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
