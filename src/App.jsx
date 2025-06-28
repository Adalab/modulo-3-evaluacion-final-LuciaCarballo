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
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  useEffect (() => {
    fetch('https://hp-api.onrender.com/api/characters')
    .then((response) => response.json())
    .then((data) => {
      setCharacters(data);
    })

  }, []);

  
const filteredList= characters.filter(item => {
  const matchesName = item.name.toLowerCase().includes(searchName.toLowerCase());
  const matchesHouse = house === "" || item.house === house;
 const matchesGender = gender === "" || item.gender?.toLowerCase() === gender;
  const matchesStatus =
    status === "" ||
    (status === "true" && item.alive === true) ||
    (status === "false" && item.alive === false);
  return matchesName && matchesHouse && matchesGender && matchesStatus;
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
              pgender={gender}
              psetGender={setGender}
              pstatus={status}
              psetStatus={setStatus}
            />
            <CharacterList pcharacters={filteredList} psearchName={searchName} />
            <Footer />
          </>
        }
      />

      <Route
        path="/character/:characterId"
        element={<CharacterDetail characters={characters} />}
      />

      <Route path='*' element={<h2> ¡Revelio! Vaya... Parece que el hechizo no ha funcionado, no se ha encontrado la página</h2>}></Route>
    </Routes>

    </>
  
  );  
  
}

export default App;

