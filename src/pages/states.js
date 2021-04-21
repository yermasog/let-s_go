// import ResultContext from "../utils/ResultContext"
import SearchContext from "../utils/SearchContext"
import Header from "../components/Header/Header"
import ImageCard from "../components/Image/ImageCard"
import Description from "../components/Description/Description";
import React, { useContext } from "react";



function States(props) {
  const stateName = useContext(SearchContext)
//   const results = useContext(ResultContext)

   return (
      <>
         <div className="grid-container">
            <form>
               <input
                  className="opaque"
                  type="text"
                  id="state"
                  name="state"
                  value={stateName}
                  onChange={props.handleInput}
                  placeholder="Search for a State"
               />

               <button
                  onClick={props.handleSubmit}
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

