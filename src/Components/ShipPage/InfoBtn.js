import React, { useState } from 'react';
import styles from './InfoBtn.module.css';

const InfoBtn = props => {
const [isClicked, setIsClicked] = useState(false);
   const infoBtnClickHandler = () => {
     const container = document.getElementById(props.ships.id);
     if (!isClicked) {
       container.style.height = "24rem"; 
       setIsClicked(true);
     } else if (isClicked) {
       container.style.height = "17.45rem"; 
       setIsClicked(false);
     }
   }

   return (
      <button className={styles.showInfo} onClick={infoBtnClickHandler}>-></button>
   )
}

export default InfoBtn;