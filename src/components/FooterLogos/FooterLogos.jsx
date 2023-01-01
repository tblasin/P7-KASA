import React from 'react';
import '../FooterLogos/footerlogos.css'

import { ReactComponent as LogoFooter } from '../../assets/footerLogos/FooterLogo.svg'


const FooterLogos = () => {
    return (
      
        <div className='logofooter'>
            <LogoFooter id="FooterLogo"/>
        </div>
      
    );
};

export default FooterLogos;