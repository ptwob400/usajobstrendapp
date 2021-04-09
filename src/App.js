import React, { useEffect, useState } from 'react';
import jobsContext from './context/jobsContext.js'
import './App.css';
import NavBar from './components/NavBar.js'
import MainContent from './components/MainContent.js'
import HomeContent from './components/HomeContent.js'
import FooterContent from './components/FooterContent.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import About from './components/About.js'
import FetchJobsData from './utils/FetchJobsData.js'
import Keywords from './data/Keywords.json'
import States from './data/States.json'
import Fields from './data/Fields.js'

var fieldsArray = Fields.split(',')

function App() {
  const [ filter, setFilter ] = useState("")
  const [ fields, setFields ] = useState([])
  const [ keywords, setKeywords ] = useState([]);
  const [ locations, setLocations ] = useState([])

  useEffect(() => {
      setKeywords([])
      FetchJobsData(Keywords, "https://data.usajobs.gov/api/search?Keyword=", setKeywords, filter) 
  }, [filter])


  useEffect(() => {
    setLocations([])
    FetchJobsData(States, "https://data.usajobs.gov/api/search?LocationName=", setLocations, filter) 

  }, [filter])

  
  useEffect(() => {
    setFields([])
    FetchJobsData(fieldsArray, "https://data.usajobs.gov/api/search?Keyword=", setFields, filter) 

  }, [filter])

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