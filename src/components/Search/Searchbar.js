import TextField from '@material-ui/core/TextField';
import "./Searchbar.css"

function Searchbar() {

    return (
        <>
            <div className="grid-container">
                <div className="opaque">
                    <h1 className="center margin">Find Your Next National Park Adventure</h1>
                    <form noValidate autoComplete="off">
                        <TextField
                            id="outlined-basic"
                            label="search for a state"
                            variant="filled"
                            fullWidth
                        />
                    </form>
                </div>
                <div className="center">
                    <button className="clear button mybutton success">Let's go!</button>
                </div>
            </div>
        </>
    )

}

export default Searchbar;