
// import { NavLink}  from 'react-router-dom'


// import './NavBar.css'

// function NavBar() {
//     return (
//         <header className="Nav-header">
//             <h1>
//                 <NavLink exact to='/' activeClassName="active-link" >
//                     USJOBS Today
//                 </NavLink>
//             </h1>
//             <nav>            
//                 <NavLink exact to='/'  activeClassName="active-link" >
//                     Home
//                 </NavLink>
//                 <NavLink to='/trends'  activeClassName="active-link" >
//                     Trends
//                 </NavLink>
//                 <NavLink to='/about'  activeClassName="active-link" >

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
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

import './NavBar.css'

function NavBar() {
    return (
        <header className="Nav-header">
            <div>
                USAJobs Today
            </div>
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
                <Link to='/trends' style={{textDecoration: 'none'}}>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<TrendingUpIcon />}
                        style={{margin: 15, backgroundColor: 'cadetblue'}}
                    >
                        Trends
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