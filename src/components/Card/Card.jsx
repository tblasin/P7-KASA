import React from 'react';
import '../Card/card.css';
import LocationData from "../../LogementData/Logements.json";


export default function Cards() {
    return (
      <div className="allCardsContainer">
        <div className="Background">
          {LocationData.map((Location) => {
            return (
              <a href={`/Logement/${Location.id}`} key={Location.id}>
                <div className="card-container">
                  <div className="card-content">
                    <p className="Title">{Location.title}</p>
                  </div>
                  <img className="Cover" src={Location.cover} alt="Location" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
  
  