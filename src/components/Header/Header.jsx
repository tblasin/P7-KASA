import React from 'react';
import '../Header/header.css'
import Logos from '../Logos/Logos';
import Navigation from '../Navigation/Navigation';


const Header = () => {
    return (
       <div className="header">
            <Logos />
            <Navigation />
        </div>
    )
};

export default Header;