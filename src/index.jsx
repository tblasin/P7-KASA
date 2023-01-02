import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import RoutesPath from './RoutesPath';

// Création du système de routage entre les différentes pages du site web :

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
     <React.StrictMode>
      <RoutesPath/>
     </React.StrictMode>
    
);


