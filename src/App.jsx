import './styles/App.scss';
import Filters from './components/filters/Filters';
import Header from './components/layout/Header';
import CharacterList from './components/characters/CharacterList';
import CharacterDetail from './components/characters/CharacterDetail';
import Footer from './components/layout/Footer';

import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {

  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [house, setHouse] = useState("");

  useEffect (() => {
    fetch('https://hp-api.onrender.com/api/characters')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setCharacters(data);
    })

  }, []);

  
const filteredList= characters.filter(item => {
  const matchesName = item.name.toLowerCase().includes(searchName.toLowerCase());
  const matchesHouse = house === "" || item.house === house;
  return matchesName && matchesHouse;
});

 
  return (
  
    <>
    <Header />

    <Routes>
      <Route
        path="/"
        element={
          <>
            <Filters
              psearchName={searchName}
              psetSearchName={setSearchName}
              phouse={house}
              psetHouse={setHouse}
            />
            <CharacterList pcharacters={filteredList} />
            <Footer />
          </>
        }
      />

      <Route
        path="/character/:characterId"
        element={<CharacterDetail characters={characters} />}
      />
    </Routes>

    </>
  
  );  
  
}

export default App;

