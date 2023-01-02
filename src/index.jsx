import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import RoutesPath from './RoutesPath';

// Création du lien d'accès à RoutesPath qui gère le routage de nos pages web :

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
     <React.StrictMode>
      <RoutesPath />
     </React.StrictMode>
    
);


