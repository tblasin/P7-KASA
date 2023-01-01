import React from 'react';
import '../styles/home.css';
import Banner from '../components/Banner/Banner';
import Card from '../components/Card/Card';
import IMG from '../assets/img/IMG.jpg';
import IMGMobile from '../assets/img/IMGMobile.jpg';


// Création de la page d'accueil "Home" et import des composants "Banner" et "Card" :

const Home = () => {

    return (
        <div className='home'>
                <div id="bannerDesktop">
                    <Banner  title="Chez vous, partout et ailleurs" src={IMG} alt="Background nature" />
                </div>
                <div id="bannerMobile" >
                    <Banner  title="Chez vous, partout et ailleurs" src={IMGMobile} alt="Background nature" />
                 </div>
                    <Card />       
        </div>      
    
    );
};

export default Home;