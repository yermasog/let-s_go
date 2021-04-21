
import React, { useContext } from "react";
import "./Searchbar.css"
import SearchContext from "../../utils/SearchContext"

function Searchbar(props) {

    const stateName = useContext(SearchContext)

    return (
        <>
            <div className="background">
                <div className="grid-container">
                    <h1 className="center margin opaque">Start Your Next National Park Adventure</h1>
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
                        <div className="center non-opaque">
                            <button
                            onClick={props.handleSubmit} 
                            className="clear button mybutton success">Let's go!</button>
                        </div>
                    </form>
                </div>
                </div>
        </>
    )

}

export default Searchbar;