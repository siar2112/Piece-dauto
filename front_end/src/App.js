import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Navigation from './components/Navigation.js';
import Footer from "./components/Footer";

function App() {
  return (
      <div className="App">
        <Router>
            <Navigation/>
            <Routes>
            <Route path="/" element={<Home/>}/>
            </Routes>
            <Footer/>
        </Router>
      </div>
  );
}

export default App;
