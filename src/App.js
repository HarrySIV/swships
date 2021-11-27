import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import ShipPage from './Components/ShipPage/ShipPage';
import ShipInfo from './Components/ShipInfo/ShipInfo';
import InfoBtn from './Components/ShipPage/InfoBtn';
import SearchBar from './Components/SearchBar/SearchBar';
import axios from 'axios';

function App() {
  const [starships, setStarships] = useState([]);
  const [filteredStarship, setFilteredStarships] = useState([]);
  useEffect(() => {
    const fetchStarships = () => {
      axios.get('https://swapi.dev/api/starships')
      .then(res => setStarships(res.data.results))
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
      // fetch('https://swapi.dev/api/starships')
      // .then(response => response.json())
      // .then(data => setStarships(data.results));
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
        <div className={styles.ships} key={ships.created}>
          <div className={styles.container} id={ships.edited}>
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