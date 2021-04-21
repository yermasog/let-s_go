import styles from "./Header.module.css"
import SearchContext from "../../utils/SearchContext"
import React, { useContext } from "react";

function Header() {
    const search = useContext(SearchContext)
    console.log(search);
  
    return (
        <>
           <div className={styles.box}>
               <h1>{search}</h1>
           </div>
        </>
    )

}

export default Header;