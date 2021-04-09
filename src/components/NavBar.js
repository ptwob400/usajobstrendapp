import { NavLink}  from 'react-router-dom'


import './NavBar.css'

function NavBar() {
    return (
        <header className="Nav-header">
            <h1>
                <NavLink exact to='/' activeClassName="active-link" >
                    USJOBS Today
                </NavLink>
            </h1>
            <nav>            
                <NavLink exact to='/'  activeClassName="active-link" >
                    Home
                </NavLink>
                <NavLink to='/trends'  activeClassName="active-link" >
                    Trends
                </NavLink>
                <NavLink to='/about'  activeClassName="active-link" >
                    About
                </NavLink>
            </nav>
        </header>
    )
}

export default NavBar;