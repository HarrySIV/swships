import React, { useState } from 'react'; 
import styles from './MovieInfo.module.css';

const ShowMovieBtn = props => {
const [movieToggleBtn, setMovieToggleBtn] = useState(false);

const toggleBtnHandler = () => {
   const btn = document.getElementById(`${props.ships.edited}tglBtn`);
   const moviePage = document.getElementById(`${props.ships.created}_movies`)
   if(!movieToggleBtn) {
      setMovieToggleBtn(true);
      moviePage.style.display = 'inline-block';
      btn.innerHTML = "x";
   } else if (movieToggleBtn) {
      setMovieToggleBtn(false);
      moviePage.style.display = 'none';
      btn.innerHTML = "+";
   }

}

return (
   <button
   className={styles.movieBtn} 
   onClick={toggleBtnHandler} 
   id={`${props.ships.edited}tglBtn`}>+</button>
)

}

export default ShowMovieBtn;