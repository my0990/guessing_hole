import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import ImgInsert from './components/imgInsert';
import PlayScreen from './components/play_screen';

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="imgInsert" exact element={<ImgInsert />} />
        <Route path="playScreen" exact element={<PlayScreen />} />
      </Routes>
      app페이지
      <Link to='/imgInsert'>
        <div>imgInsert</div>
      </Link>
      <Link to='/playScreen'>
        <div>play_screen</div>
      </Link>
    </div>
  );
}

export default App;
