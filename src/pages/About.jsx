import React from 'react';
import Collapse from '../components/Dropdown/Collapse';
import '../styles/about.css';
import Banner from '../components/Banner/Banner';
import imgAbout from '../assets/img/imgAbout.png';
import imgAboutMobile from '../assets/img/imgAboutMob.jpg';


// Création de la page "à propos" et import des composants "Banner" et "Collapse" :

const About = () => {
    return (
        <div className='about'>
            <div id='bannerAboutDesktop'>
                <Banner src={imgAbout} alt="Background nature landscape"/>
            </div>  
            <div id='bannerAboutMobile'>
                <Banner src={imgAboutMobile} alt="Background nature landscape"/>
            </div>
                <div className='color-overlay2'></div>

            <div className='Container1'>
                    <Collapse 
                        title="Fiabilité" 
                        content="Les annonces postées sur Kasa garantissent une fiabilité totale. 
                                 Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
                    />
          
                    <Collapse 
                        title="Respect" 
                        content="La bienveillance fait partie des valeurs fondatrices de Kasa. 
                                 Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." 
                    />
               
                    <Collapse 
                        title="Service" 
                        content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                                 N'hésitez pas à nous contacter si vous avez la moindre question." 
                    />
               
                    <Collapse 
                        title="Sécurité" 
                        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
                                 chaque logement correspond aux critères de sécurité établis par nos services. 
                                 En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                                 Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." 
                    />
            </div>
        </div>  


    );
};

export default About;
