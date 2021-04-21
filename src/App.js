import SearchContext from "./utils/SearchContext";
import Home from "./pages/Home"
import States from "./pages/States"
import React, { useState } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import API from "./utils/API"

function App() {
  const [searchState, setSearchState] = useState()
 
    const handleInputChange = event => {
       setSearchState(event.target.value)
       console.log(event.target.value);
    }
 
    const handleSubmit = event => {
       event.preventDefault();
       setSearchState(event.target.value)
       apiSearch(searchState)
      
    }
 
    const apiSearch = query => {
       API.search(query)
          .then(res => console.log(res.data.data))
          .catch(err => console.log(err))
    }

  return (
    <Router>
    <div>
      <SearchContext.Provider value={searchState}>
        <Route exact path="/let-s_go" render={() => <Home handleInput={handleInputChange} handleSubmit={handleSubmit} />} />
        <Route path="/let-s_go/search" render={() => <States handleInput={handleInputChange} handleSubmit={handleSubmit} />} />
     </SearchContext.Provider>
    </div>
    </Router>
  );
}

export default App;
