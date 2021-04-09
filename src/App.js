import React, { useState, useEffect } from 'react';
import jobsContext from './context/jobsContext.js'
import './App.css';
import NavBar from './components/NavBar.js'
import MainContent from './components/MainContent.js'
import HomeContent from './components/HomeContent.js'
import FooterContent from './components/FooterContent.js'
import Jobs from './data/ExampleResults.json'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import About from './components/About.js'
import formatJSON from './utils/FormatJSON.js'

function App() {

  const [ jobs, setJobs ] = useState({})
  const [ category, setCategory ] = useState("")

  return (

    <div className="App">
       <jobsContext.Provider value={{jobs:jobs, category:category, setCategory:setCategory}}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <HomeContent />
            </Route>
            <Route path='/trends'>
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