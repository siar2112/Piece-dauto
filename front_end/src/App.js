import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Piece from './pages/Piece';
import Navigation from './components/Navigation.js';
import Footer from "./components/Footer";
import Mecanique from "./pages/Mecanique";
import Achat from "./pages/Achat";

function App() {
  return (
      <div className="App">
        <Router>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Piece" element={<Piece/>}/>
                <Route path="/Mecanique" element={<Mecanique/>}/>
                <Route path="/Achat" element={<Achat/>}/>
            </Routes>
            <Footer/>
        </Router>
      </div>
  );
}

export default App;
