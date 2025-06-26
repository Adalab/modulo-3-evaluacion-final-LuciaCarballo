function Filters({psearchName, psetSearchName, phouse, psetHouse}) {

    const handleName = (ev) => {
        ev.preventDefault();
        psetSearchName(ev.target.value);
    }
    const handleHouse = (ev) => {
        ev.preventDefault();
        psetHouse(ev.target.value);
    }

    return (
        <form className="filters">
            <input
                className="name__search"
                autoComplete="off"
                type="search"
                name="search"
                placeholder="Accio personaje"
                value={psearchName}
                onChange={handleName}                
            />

             <select value={phouse} onChange={handleHouse}>
                <option value="">Todas las casas</option>
                <option value="Gryffindor">Gryffindor</option>
                <option value="Slytherin">Slytherin</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Ravenclaw">Ravenclaw</option>
      </select>
        </form>
    );
}

export default Filters