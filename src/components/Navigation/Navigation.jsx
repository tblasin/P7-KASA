import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Navigation/navigation.css';


const Navigation = () => {
    return (
        <div className="navigation">
         
                <NavLink to="/" className={(nav) => (nav.isActive ? "itemMenu" : "itemMenu nav-active")}>
                    Accueil
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "itemMenu" : "itemMenu nav-active")}>
                    A Propos
                </NavLink>  
            
        </div>
    );
};

export default Navigation;