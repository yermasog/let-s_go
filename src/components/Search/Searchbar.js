// import TextField from '@material-ui/core/TextField';
import React, { useState } from "react";
import "./Searchbar.css"

function Searchbar() {

    const [searchState, setSearchState] = useState()

    const handleInputChange = event => {
        setSearchState(event.target.value)
        console.log(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        setSearchState(event.target.value)
        console.log(searchState);
    }

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
                            value={searchState}
                            onChange={handleInputChange}
                            placeholder="Search for a State"
                        />
                        <div className="center non-opaque">
                            <button onClick={handleSubmit} className="clear button mybutton success">Let's go!</button>
                        </div>
                    </form>
                </div>
                </div>
        </>
    )

}

export default Searchbar;