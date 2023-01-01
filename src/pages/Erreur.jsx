import React from 'react';
import '../styles/erreur.css';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Error404 } from '../assets/fonts/404.svg'
import { ReactComponent as Error404Mobile } from '../assets/fonts/404Mobile.svg'


const Erreur = () => {
    return (
        <div className='container2'>
             
            <div className='error'>
                <Error404 id="Error404"/>
                <Error404Mobile id="Error404Mobile"/>
            </div>
            
            <div className='errexp'>Oups ! La page que vous demandez n'existe pas.</div>
                <NavLink to="/" className={(nav) => (nav.isActive ? "return" : "return return-active")}>
                Retourner sur la page d'accueil
                </NavLink>
        
        </div>
    );
};

export default Erreur;