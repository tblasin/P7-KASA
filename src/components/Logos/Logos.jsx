import React from 'react';
import '../Logos/logos.css';

import { ReactComponent as LogoDesktop } from '../../assets/logos/LOGODesktop.svg'
import { ReactComponent as LogoMobile } from '../../assets/logos/LOGOMobile.svg'



const Logos = () => {
    return (
        <div className='logo'>
                <LogoDesktop id="logoDesktop"/>
                <LogoMobile id="logoMobile"/>
            </div>
            
    );
};

export default Logos;