import altImg from "../../images/altImg.png";
import { Link } from "react-router-dom";

function ItemCharacter({pitem}) {

    const imageSrc = pitem.image && pitem.image.trim() !== "" ? pitem.image : altImg;

    return (
      <>
      
       <li className= "character__item" >
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

export default ItemCharacter