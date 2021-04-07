import React, { useState, useEffect } from 'react';
import jobsContext from './context/jobsContext.js'
import './App.css';
import NavBar from './components/NavBar.js'
import MainContent from './components/MainContent.js'
import FooterContent from './components/FooterContent.js'
import Jobs from './data/ExampleResults.json'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import About from './components/About.js'

function App() {
  const [jobs, setJobs] = useState({})

  useEffect(() => {
    const url = "https://data.usajobs.gov/api/search?JobCategoryCode=2210"
    setJobs(Jobs)
    // fetch(url, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'User-Agent': 'gordon.deng.1@us.af.mil',
    //     'Host': 'data.usajobs.gov',
    //     'Authorization-Key': '8anoUcMouBmDxVIpesVxLsxa0z2IyHXh2bL7iHZdvOA='
    //   }
    // })
    //   .then( response => response.json())
    //   .then( data => {
    //     console.log(data)
    //     setJobs(data)
    //    } )
    //    .catch((e)=>console.log(e))
  }, []);

  return (
    <div className="App">
      <jobsContext.Provider value={jobs}>
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