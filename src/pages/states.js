import React from "react";



function States() {
   return (
      <>
      <div className="grid-container">
         <form>
            <input
            className="opaque"
            type="text"
            id="state"
            name="state"
            value=""
            //  onChange={handleInputChange}
            placeholder="Search for a State"
            />
                       
            <button 
            //  onClick={}
            className="button success">Let's go!</button>
         </form>
         <div>
            state name: hero section 
         </div>
         <div>
            sort/filter
         </div>
         <div>
            <div>
               image
            </div>
            <div>
               description 
            </div>
         </div>
         </div>
      </>
   );
}

export default States;