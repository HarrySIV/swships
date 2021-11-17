import styles from './ShipInfo.module.css';

const ShipInfo = props => {

   return (
      <div className={styles.info_container}>
               <h5 className={styles.info_crew}>Crew: {props.ships.crew}</h5>
               <h5 className={styles.info_passengers}> Passengers: {props.ships.passengers}</h5>
               <h5 className={styles.info_cargo}>Cargo Capacity: {props.ships.cargo_capacity}</h5>
               <h5 className={styles.info_consum}>consumables: {props.ships.consumables}</h5>
      </div>
   )

}

export default ShipInfo;