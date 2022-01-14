import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import ImgInsert from './components/imgInsert';

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/imgInsert" element={<ImgInsert />} />
      </Routes>
      app페이지
      <Link to='/imgInsert'>
        <div>imgInsert</div>
      </Link>
    </div>
  );
}

export default App;
