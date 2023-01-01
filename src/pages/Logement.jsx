
import {useParams } from "react-router-dom";
import LogementFile from "../LogementData/Logements.json";
import "../styles/logement.css";
import Collapse from "../components/Dropdown/Collapse";
import Carrousel from "../components/Carrousel/Carrousel";
import Erreur from "../pages/Erreur";
import starPink from "../assets/img/pinkstar.svg";
import starGrey from "../assets/img/greystar.svg";


// Création de la page "Logement" et import des composants "carrousel" et "Collapse" + page "Erreur":

export default function Houses() {


  const ID = useParams();

    console.log(ID);

  
  const findLogement = LogementFile.find(
    (House) => House.id === ID.id
  );

  // Si Logement non trouvé, renvoyer la page d'erreur 404 :

  if (!findLogement) {
    return <Erreur />;
  }

  // Récupération des informations des rubriques "Tags" "équipements" et "rating" :
  
  const Tags = findLogement.tags;

  const Equipements = findLogement.equipments;

  const stars = findLogement.rating;

  const ratingArray = [];

  for (let i = 0; i < stars; i++) {
    ratingArray.push(
      <img
        key={"pinkStar" + i}
        className="stars"
        src={starPink}
        alt="Pink Stars"
      />
    );
  }

  for (let a = ratingArray.length; a < 5; a++) {
    ratingArray.push(
      <img
        key={"greyStar" + a}
        className="stars"
        src={starGrey}
        alt="Grey Stars"
      />
    );
  }

    // Insertion et affichage du composant "Carrousel" + détails logement, titres, tags, host, rating :
    
  return (
    <div className="logement">
      <div className="ContainerContent">
        <Carrousel slides={findLogement.pictures} />

        <div className="houseDetails">
          <div className="titleLocationTags">
            {findLogement && (
              <h1 className="titreLogement"> {findLogement.title}</h1>
            )}
            {findLogement && (
              <p className="location">{findLogement.location}</p>
            )}

            <div className="tags">
              {Tags.map((tag, eachTag) => (
                <button key={eachTag} className="tag">
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="hostRating">
            <div key={findLogement.host.name} className="host">
              <p className="name"> {findLogement.host.name} </p>
              <img className="picture" src={findLogement.host.picture} alt="host" />
            </div>
            <div className="rating">{ratingArray}</div>
          </div>
        </div>

        <div className="collapsesContainer">
          <div className="Collapses">
        
              <Collapse 
                title="Description"
                content={findLogement.description}
              />
  
              <Collapse
                  title="Equipements"
                  content={Equipements.map((Equip) =>(
                    <li key={Equip} style={{ listStyle: "none" }}>
                      {Equip}
                    </li> 
                  ))}
                />
       
          </div>
        </div>
      </div>
    
    </div>
  );
}