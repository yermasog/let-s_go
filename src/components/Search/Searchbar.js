import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function Searchbar() {
    return (
        <>
            <h1>let's go!</h1>
            <form noValidate autoComplete="off">
                <TextField id="outlined-basic" label="search for a state" variant="filled" />
            </form>

            <Button variant="contained" color="primary">
                let's go!
            </Button>
        </>
    )

}

export default Searchbar;