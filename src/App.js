import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios'
import NavBar from './components/NavBar';
import WeatherPanel from './components/WeatherPanel';
import About from './pages/About';
import Use from './pages/Use';



function App() {
// const url ="https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=895284fb2d2c50a520ea537456963d9c"




  return (
    <div className="App">
      <Routes>
        <Route path = "home" element={<div><NavBar />, <WeatherPanel /></div>}/>
        <Route path = "about" element={<div><About /></div>}/>
        <Route path = "use" element={<div><Use /></div>}/>
        </Routes>
      
      
    </div>
    
  );
}

export default App;
