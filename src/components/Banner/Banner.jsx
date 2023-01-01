import React from 'react';
import '../Banner/banner.css';


// Création du composant "Banner" réutilisable :

export default function Banner(props) {
    return (
        <div className='banner'>
           
            <h2 className='textBanner'>
                <span>{props.title}</span>
            </h2>
            <img className="bannerimg" src={props.src} alt={props.alt} />
            <div className='color-overlay'></div>
           
        </div> 
      
    );
}

