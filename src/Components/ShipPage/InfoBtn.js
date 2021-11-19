import React, { useState } from 'react';
import styles from './InfoBtn.module.css';

const InfoBtn = props => {
const [isClicked, setIsClicked] = useState(false);
   const infoBtnClickHandler = () => {
    const  btn = document.getElementById(`${props.ships.edited}btn`);
    const container = document.getElementById(`${props.ships.edited}`);
      if (!isClicked) {
        container.style.height = "24rem"; 
        container.scrollIntoView({behavior: 'smooth'});
        btn.innerHTML = "Close Ship Info";
        setIsClicked(true);
     } else if (isClicked) {
       container.style.height = "17.45rem";
       btn.innerHTML = "Show Ship Info";
       setIsClicked(false);
     }
   }

   return (
      <button className={styles.showInfo} onClick={infoBtnClickHandler} id={`${props.ships.edited}btn`}>Show Ship Info</button>
   )
}

export default InfoBtn;