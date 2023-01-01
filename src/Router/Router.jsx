import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header/Header';
import About from './pages/About';
import Erreur from './pages/Erreur';
import Logement from './pages/Logement';
import Footer from './components/Footer/Footer';
import './styles/index.css';

// Création du système de routage entre les différentes pages du site web :

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
     <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Erreur />} />
        <Route path='/logement/:id' element={<Logement />} /> 
        
      </Routes>
      <Footer />
      </BrowserRouter>

);


