import styles from './ShipPage.module.css';
import ShowMovieBtn from '../MovieInfo/ShowMovieBtn';

const ShipPage = props => {

   return (
      <div className={styles.shippage}>
               <h1 className={styles.model}>{props.ships.model}</h1>
               <ShowMovieBtn ships={props.ships} />
               <hr />
               <h3 className="shipClass">Class: {props.ships.starship_class}</h3>
               <h3 className="manufacturer">Manufacturer: {props.ships.manufacturer}</h3>
               <h3 className="hyper"> HyperDrive: {props.ships.hyperdrive_rating}</h3>
               <h3 className="speed">Atmo Speed: {props.ships.max_atmosphering_speed} kph</h3>
               <h4 className="length">Length: {props.ships.length} meters</h4>
               <h4 className="credits">Credits: {props.ships.cost_in_credits}</h4> 
      </div>
   )
}

export default ShipPage;