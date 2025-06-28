import altImg from "../../images/altImg.png";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function ItemCharacter({pitem}) {

    const imageSrc = pitem.image && pitem.image.trim() !== "" ? pitem.image : altImg;
     const houseClass = pitem.house ? pitem.house.toLowerCase() : "sin-casa";

    return (
      <>
      
       <li className={`character__item house-theme ${houseClass}`} >
         <Link to={`/character/${pitem.id}`} className="character__link">
            <img 
              className= "character__image"
              src={imageSrc}
              alt={`Imagen de ${pitem.name}`} />

            <p className= "character__name" >
              <label className= "character__label">
              </label> {pitem.name}
            </p>

            <p className= "character__species" >
                <label className= "character__label">
                </label> {pitem.species}
            </p>
         </Link>
       </li>
      </>
    );
}

ItemCharacter.propTypes = {
  pitem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string,
    image: PropTypes.string,
    house: PropTypes.string
  }).isRequired,
};

export default ItemCharacter