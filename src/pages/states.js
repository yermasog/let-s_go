
// import SearchContext from "../utils/SearchContext"
import Header from "../components/Header/Header"
import ImageCard from "../components/Image/ImageCard"
import Description from "../components/Description/Description";
import React, { useState } from "react";
import API from "../utils/API"


function States() {
   const [searchState, setSearchState] = useState(
     
   )

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
      <>
         <div className="grid-container">
            <form>
               <input
                  className="opaque"
                  type="text"
                  id="state"
                  name="state"
                  value={searchState}
                  onChange={handleInputChange}
                  placeholder="Search for a State"
               />

               <button
                  onClick={handleSubmit}
                  className="button success">Let's go!</button>
            </form>
            <Header />

            <div>
               sort/filter
         </div>

            <div className="grid-x grid-margin-x">
               <div className="cell small-3 box">
                  <ImageCard />
               </div>
               <div className="cell small-9 box">
                  <Description />
               </div>
            </div>
         </div>
      </>
   );
}

export default States;

