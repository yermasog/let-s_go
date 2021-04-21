import React from "react";
import Searchbar from "../components/Search/Searchbar";


function Home(props) {
    return (
        <Searchbar handleInput={props.handleInput} handleSubmit={props.handleSubmit}/>
    );
  }
  
  export default Home;
  