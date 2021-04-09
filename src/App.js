import React, { useState } from 'react';
import jobsContext from './context/jobsContext.js'
import './App.css';
import NavBar from './components/NavBar.js'
import MainContent from './components/MainContent.js'
import FooterContent from './components/FooterContent.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import About from './components/About.js'

function App() {
  const [ filter, setFilter ] = useState("")
  const [ fields, setFields ] = useState([])
  const [ keywords, setKeywords ] = useState([]);
  const [ locations, setLocations ] = useState([])
  

  return (

    <div className="App">
       <jobsContext.Provider value={{
          filter, 
          setFilter, 
          fields, 
          setFields,
          keywords,
          setKeywords,
          locations, 
          setLocations
        }}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <MainContent />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
          </Switch>
        </Router>
        <FooterContent />
      </jobsContext.Provider>
    </div>
  );
}

export default App;