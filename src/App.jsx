import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Authentication from './components/Authentication/Authentication';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path="/*" element={true ? <HomePage /> : <Authentication />} />
      </Routes>
    </div>

  );
}

export default App;
