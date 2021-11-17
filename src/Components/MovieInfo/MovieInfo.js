import React, { useState, useEffect } from 'react';

const MovieInfo = props => {
   const [shipInFilm, setShipInFilm] = useState([]);
   const [filteredMovieList, setFilteredMovieList] = useState([]);


   const getMovies = () => {
      const filmId = { films: props.ships.films.map( url => parseInt(url[28])) };
      for (let id of filmId.films) {
         switch (id) {
            case 1: setShipInFilm(shipInFilm.concat(props.movies[0].title)); break;
            case 2: setShipInFilm(shipInFilm.concat(props.movies[1].title)); break;
            case 3: setShipInFilm(shipInFilm.concat(props.movies[2].title)); break;
            case 4: setShipInFilm(shipInFilm.concat(props.movies[3].title)); break;
            case 5: setShipInFilm(shipInFilm.concat(props.movies[4].title)); break;
            case 6: setShipInFilm(shipInFilm.concat(props.movies[5].title)); break;
            default: return console.log(id);
         }
      } 
   }
   getMovies();

   return (
      <div>
         <h2>As Seen In: </h2>
         {shipInFilm.map(movieName => (
            <>
               <h3 className="title">{movieName.title}</h3> 
               <h5>Released: {movieName.release_date}</h5>
            </>
         ))}
      </div>
   )

}

export default MovieInfo;