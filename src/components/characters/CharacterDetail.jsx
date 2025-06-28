import PropTypes from 'prop-types';
import altImg from "../../images/altImg.png";
import { useParams,  Link  } from "react-router-dom";
import gryffindorImg from "../../images/gryffindor.png";
import slytherinImg from "../../images/slytherin.png";
import hufflepuffImg from "../../images/hufflepuff.png";
import ravenclawImg from "../../images/ravenclaw.png";


function CharacterDetail({ characters }) {
  const { characterId } = useParams();


  const character = characters.find(item => item.id === characterId);
  const houseClass = character.house ? character.house.toLowerCase() : "sin-casa";

  const houseIcons = {
  Gryffindor: gryffindorImg,
  Slytherin: slytherinImg,
  Hufflepuff: hufflepuffImg,
  Ravenclaw: ravenclawImg,
};

 
  if (!character) {
    return <p>Este personaje se ha desvanecido en la niebla mágica... 🪄</p>;
  }

  const imageSrc =
    character.image && character.image.trim() !== ""
      ? character.image
      : altImg;

  return (

    <> <Link to="/" className="back-button">
  ← Volver al listado
</Link>
  <div className={`character__card house-theme ${houseClass}`}>
  <div className="character__image-box">
    <img
      className="character__image"
      src={imageSrc}
      alt={`Imagen de ${character.name}`}
    />
  </div>

  <div className="character__details">
    <h2 className="character__name">{character.name}</h2>

    <p><span className="character__label">Especie:</span> {character.species}</p>
    <p><span className="character__label">Género:</span> {character.gender}</p>
    <p>
      <span className="character__label">Casa:</span>{" "}
      {character.house ? (
        <>
          <img
            src={houseIcons[character.house]}
            alt={`Escudo de ${character.house}`}
            className="house__icon"
          />
          {character.house}
        </>
      ) : (
        "Sin casa asignada"
      )}
    </p>
    <p>
      <span className="character__label">Estado:</span>{" "}
      {character.alive ? "🟢 Vivo" : "⚰️ Fallecido"}
    </p>
  </div>
  </div>
  </>
  )
}

CharacterDetail.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      species: PropTypes.string,
      gender: PropTypes.string,
      house: PropTypes.string,
      alive: PropTypes.bool,
      image: PropTypes.string,
    })
  ).isRequired,
};




export default CharacterDetail;
