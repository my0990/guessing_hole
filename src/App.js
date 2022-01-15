import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { Route, Routes, Link, Router } from 'react-router-dom';
import ImgInsert from './components/imgInsert';
import PlayScreen from './components/play_screen';
import PlayScreenTest from './components/play_screen_test';

function App() {
  

  return (
      <div className="App">
        <Routes>
          <Route path="/imgInsert"  element={<ImgInsert />} />
          <Route path="/playScreen"  element={<PlayScreen />} />
        </Routes>
      </div>
  );
}

export default App;
