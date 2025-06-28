import PropTypes from 'prop-types';
import ItemCharacter from "./ItemCharacter";

function CharacterList({ pcharacters, psearchName }) {
  return (
    <main>
      {pcharacters.length === 0 ? (
        <p className="no-results">
          <>
          Los archivos del Ministerio no contienen a <span className="search-term"> {psearchName}</span>. ¿Seguro que no es un muggle?
          </>
        </p>

      ) : (
        <ul className="character__list">
          {pcharacters.map((item) => (
            <ItemCharacter pitem={item} key={item.id} />
          ))}
        </ul>
      )}
    </main>
  );
}

CharacterList.propTypes = {
  pcharacters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  psearchName: PropTypes.string.isRequired,
};

export default CharacterList;
