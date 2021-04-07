import { BrowserRouter as Router,
    Switch,
    Route,
    Link 
   } from 'react-router-dom'

function NavBar() {
    return (
        <header className="App-header">
            <h1><Link to='/'>USAJobs Today</Link></h1>
            <a><Link to='/'>Home</Link></a>
            <a href="https://www.usajobs.gov/">USAJobs.gov</a>
            <a><Link to='/about'>About</Link></a>
        </header>
    )
}

export default NavBar;