import SearchContext from "./utils/SearchContext";
import Home from "./pages/Home"
import States from "./pages/States"
import React, { useState } from "react";
import {BrowserRouter as Router, Route, useParams} from "react-router-dom";

function App() {
  const [searchState, setSearchState] = useState()

  return (
    <Router>
    <div>
      <SearchContext.Provider value={searchState}>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/search" render={() => <States />} />
     </SearchContext.Provider>
    </div>
    </Router>
  );
}

export default App;
