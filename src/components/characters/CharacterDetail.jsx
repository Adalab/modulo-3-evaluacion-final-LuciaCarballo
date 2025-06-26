import altImg from "../../images/altImg.png";
import { useParams } from "react-router-dom";


function CharacterDetail({ characters }) {
  const { characterId } = useParams();


  const character = characters.find(item => item.id === characterId);

 
  if (!character) {
    return <p>Este personaje se ha desvanecido en la niebla mágica... 🪄</p>;
  }

  const imageSrc =
    character.image && character.image.trim() !== ""
      ? character.image
      : altImg;

  return (
    <li className="character__item">
      <img
        className="character__image"
        src={imageSrc}
        alt={`Imagen de ${character.name}`}
      />

      <p className="character__name">
        <label className="character__label"></label> {character.name}
      </p>

      <p className="character__species">
        <label className="character__label"></label> {character.species}
      </p>

      <p className="character__gender">
        <label className="character__label"></label> {character.gender}
      </p>

      <p className="character__house">
        <label className="character__label"></label>{" "}
        {character.house ? character.house : "Sin casa asignada"}
      </p>

      <p className="character__status">
        <label className="character__label"></label>{" "}
        {character.alive ? "Vivo" : "Fallecido"}
      </p>
    </li>
  );
}

export default CharacterDetail;
