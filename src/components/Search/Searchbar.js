import TextField from '@material-ui/core/TextField';
import React, { useState } from "react";
import "./Searchbar.css"

function Searchbar() {

    const [searchState, setSearchState] = useState()

    const handleInputChange = event => {
        const value = event.target.value;
        setSearchState(value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        setSearchState(event.target.value)
        console.log(event.target.value);
    }

    return (
        <>
            <div className="grid-container">
                <div className="opaque">
                    <h1 className="center margin">Start Your Next National Park Adventure</h1>
                    <form noValidate autoComplete="off">
                        <TextField
                            id="state"
                            label="state"
                            variant="filled"
                            value={searchState}
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </form>
                </div>
                <div className="center">
                    <button onClick={handleSubmit.bind(searchState)} className="clear button mybutton success">Let's go!</button>
                </div>
            </div>
        </>
    )

}

export default Searchbar;