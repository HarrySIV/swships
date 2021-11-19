import styles from './SearchBar.module.css' ;

let SearchBar = props => {

      //capture searchBar userInput
      const userInput = event => {
         props.onChange(event.target.value)
      } 

   //create searchBar as input field
   return (
      <input className={styles.input} type="text" placeholder="Search..." onChange={userInput} />
   )
}

export default SearchBar;