import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import ShipPage from './Components/ShipPage/ShipPage';
import ShipInfo from './Components/ShipInfo/ShipInfo';
import InfoBtn from './Components/ShipPage/InfoBtn';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  const [starships, setStarships] = useState([]);
  const [filteredStarship, setFilteredStarships] = useState([]);
  useEffect(() => {
    const fetchStarships = () => {
      fetch('https://swapi.dev/api/starships')
      .then(response => response.json())
      .then(data => setStarships(data.results));
    }
  fetchStarships();
  }, []);

   //setStudents to a new array of filteredMovies
   const searchQueryHandler = text => {
    if (text) {
      const searchQuery = starships.filter(newFilteredStarships => {
      return newFilteredStarships.model.toLowerCase().includes(text.toLowerCase());
      })
      setFilteredStarships(searchQuery);
    } else if (!text) { return setFilteredStarships(starships);}
  }

  useEffect(() => {
    searchQueryHandler();
  }, [starships]);

  if(!filteredStarship.length) return (<h1>...</h1>);

  return (
    <>
      <SearchBar onChange={searchQueryHandler} />
      {filteredStarship.map(ships => (
        <div className={styles.ships}>
          <div className={styles.container} key={ships.created} id={ships.edited}>
            <ShipPage ships={ships} />
            <InfoBtn ships={ships}/>
            <ShipInfo ships={ships} />
          </div>
        </div>
      ))}
    </>
  )
}
export default App;