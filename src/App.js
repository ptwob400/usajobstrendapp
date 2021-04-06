import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [ jobs, setJobs ] = useState({})

  useEffect(()=>{
    const url = "https://data.usajobs.gov/api/search?JobCategoryCode=2210"

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'gordon.deng.1@us.af.mil',
        'Host': 'data.usajobs.gov',
        'Authorization-Key': '8anoUcMouBmDxVIpesVxLsxa0z2IyHXh2bL7iHZdvOA='
      }
    })
      .then( response => response.json())
      .then( data => {
        console.log(data)
        setJobs(data)
       } )
       .catch((e)=>console.log(e))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>USAJobs Today</h1>
        <a href="https://www.usajobs.gov/">USAJobs.gov</a>
        <a>About</a>
      </header>
      <body className="Body">
      <section>
        <article>Top 10 List of KeyWords</article>
        <article>Top 10 List of KeyWords</article> 
        <article>Top 10 List of KeyWords</article>  
      </section>
      </body>
      <footer>
      </footer>
    </div>
  );
}

export default App;