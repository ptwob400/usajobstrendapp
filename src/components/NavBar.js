import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import { Grid, Paper } from '@material-ui/core';
import HomeTwoToneIcon from '@material-ui/icons/Home';
import { Button } from '@material-ui/core';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import HttpTwoToneIcon from '@material-ui/icons/HttpTwoTone';

function NavBar() {
    return (
        <header className="App-header">
            <Link to='/' style={{textDecoration: 'none'}}>
            <Button
                    style={{margin: 15, backgroundColor: 'darkred', fontSize: 25, fontFamily: 'Roboto',}}
                >
                    USAJobs Today
                </Button>
            </Link>
            <div>            
                <Link to='/' style={{textDecoration: 'none'}}>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<HomeTwoToneIcon />}
                    style={{margin: 15, backgroundColor: 'cadetblue'}}
                >
                    Home
                </Button>
                </Link>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<HttpTwoToneIcon />}
                    style={{margin: 15, backgroundColor: 'cadetblue'}}
                >
                    USAJobs.gov
                </Button>
                <Link to='/about' style={{textDecoration: 'none'}}>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<InfoTwoToneIcon />}
                    style={{margin: 15, backgroundColor: 'cadetblue'}}
                >
                    About
                </Button>
                </Link>
            </div>
        </header>
    )
}

export default NavBar;