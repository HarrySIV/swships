import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import ShipPage from './Components/ShipPage/ShipPage';
import ShipInfo from './Components/ShipInfo/ShipInfo';
import InfoBtn from './Components/ShipPage/InfoBtn';
import SearchBar from './Components/SearchBar/SearchBar';
import MovieInfo from './Components/MovieInfo/MovieInfo';

function App() {
  const [starships, setStarships] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [filteredStarship, setFilteredStarships] = useState([]);
  useEffect(() => {
    const fetchStarships = () => {
      fetch('https://swapi.dev/api/starships')
      .then(response => response.json())
      .then(data => setStarships(data.results));
    }
  fetchStarships();
  }, []);

  useEffect(() => {
    const fetchMovieInfo = () => {
    fetch('https://swapi.dev/api/films')
    .then(response => response.json())
    .then(data => setMovieList(data.results));
    }
    fetchMovieInfo();
 }, []);

  if(!starships.length) return (<h1>...</h1>);;

  //setStudents to a new array of filteredStudents
  const searchQueryHandler = text => {
    if (text) {
      const searchQuery = starships.filter(newFilteredStarships => {
      return newFilteredStarships.model.toLowerCase().includes(text.toLowerCase());
      })
      setFilteredStarships(searchQuery);
    } else if (!text) { return setFilteredStarships(starships);}
  }

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
          <MovieInfo ships={ships} movies={movieList} />
        </div>
      ))}
    </>
  )
}
export default App;