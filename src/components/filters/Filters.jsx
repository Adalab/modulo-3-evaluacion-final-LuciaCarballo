import PropTypes from "prop-types"

function Filters({psearchName, psetSearchName, phouse, psetHouse, pgender, psetGender, pstatus, psetStatus}) {

  const handleName = (ev) => {
    ev.preventDefault();
    psetSearchName(ev.target.value);
  } 

  const handleHouse = (ev) => {
      ev.preventDefault();
      psetHouse(ev.target.value);
    }

      const handleGender = (ev) => {
      ev.preventDefault();
      psetGender(ev.target.value);
            }

      const handleStatus = (ev) => {
      ev.preventDefault();
      psetStatus(ev.target.value);
      
    }

      const handleReset = () => {
      psetSearchName('');
      psetHouse('');
      psetGender('');
      psetStatus('');
      };


    return (
       
  <form className="filters"onSubmit={(e) => e.preventDefault()}>
  <h2 className="filters__title">Encantamiento de búsqueda</h2>

  <div className="filters__group">
    <label className="filters__label">
      <span>Nombre</span>
      <input
        className="filters__input"
        type="search"
        name="search"
        autoComplete="off"
        placeholder="Ej: Hermione Granger"
        value={psearchName}
        onChange={handleName}
      />
    </label>

    <label className="filters__label">
      <span>Casa</span>
      <select className="filters__select" value={phouse} onChange={handleHouse}>
        <option value="">Todas las casas</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </label>

    <label className="filters__label">
      <span>Género</span>
      <select className="filters__select" value={pgender} onChange={handleGender}>
        <option value="">Todo ser encantado</option>
        <option value="female">Bruja</option>
        <option value="male">Mago</option>
      </select>
    </label>

     <label className="filters__label">
      <span>Estado</span>
      <select className="filters__select" value={pstatus} onChange={handleStatus}>
        <option value="true">Todos</option>
        <option value="true">Vivo</option>
        <option value="false">Muerto</option>
      </select>
    </label>
  </div>
  <button className="filters__reset" type="button" onClick={handleReset}>
   Reiniciar conjuro
</button>
</form>
    );
}

Filters.propTypes = {
  psearchName: PropTypes.string.isRequired,
  psetSearchName: PropTypes.func.isRequired,
  phouse: PropTypes.string.isRequired,
  psetHouse: PropTypes.func.isRequired,
  pgender: PropTypes.string.isRequired,
  pstatus: PropTypes.string.isRequired,
  psetGender: PropTypes.func.isRequired,
  psetStatus: PropTypes.func.isRequired,
};

export default Filters