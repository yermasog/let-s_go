import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import "./Searchbar.css"

function Searchbar() {

    return (
        <>
            <div className="grid-container">
                <h1 className="center margin">let's go!</h1>
                <div className="opaque">
                <form noValidate autoComplete="off">
                    <TextField 
                    id="outlined-basic" 
                    label="search for a state" 
                    variant="filled"
                    color="primary"
                    fullWidth
                    />
                </form>
                </div>
                <br />
                <div className="center">
                <Button variant="contained" color="primary">
                    let's go!
                </Button>
                </div>
            </div>
        </>
    )

}

export default Searchbar;