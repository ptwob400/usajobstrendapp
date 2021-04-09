import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import { Grid, Paper } from '@material-ui/core';
import HomeTwoToneIcon from '@material-ui/icons/Home';
import { Button, ButtonBase } from '@material-ui/core';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import HttpTwoToneIcon from '@material-ui/icons/HttpTwoTone';
import Logo from '../assets/Logo.JPG'

function NavBar() {
    return (
        <header className="App-header">
            <Link to='/' style={{textDecoration: 'none'}}>
            <ButtonBase
                    style={{margin: 15, backgroundColor: 'darkred', fontSize: 25, fontFamily: 'Roboto',}}
                >
                    <img src={Logo} style={{height: "75px", width: "150px"}}></img>
                </ButtonBase>
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
                    href='https://www.usajobs.gov/'
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