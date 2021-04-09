import { useEffect, useState, useContext } from "react"
import jobsContext from '../context/jobsContext.js'
import States from '../data/States.json'
import sortSlice10 from '../utils/SortSlice.js'
import Top10ResultLinkEntry from './Top10ResultLinkEntry'
import { CircularProgress } from '@material-ui/core'

function Top10Locations() {
    const [isloaded, setloaded] = useState(false)
    const { filter, locations, setLocations } = useContext(jobsContext)

    useEffect(() => {
        setLocations([])
        States.forEach((state) => {
            const url = `https://data.usajobs.gov/api/search?LocationName=${state}&ResultsPerPage=1&Fields=min${filter ? "&" + filter : ""}`;
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': 'gordon.deng.1@us.af.mil',
                    'Host': 'data.usajobs.gov',
                    'Authorization-Key': '8anoUcMouBmDxVIpesVxLsxa0z2IyHXh2bL7iHZdvOA='
                }
            })
                .then(response => response.json())
                .then(data => {
                    setLocations((previous) => {
                        const newStates = [...previous];
                        newStates.push({ "state": state, "count": data.SearchResult.SearchResultCountAll });
                        return newStates
                    })
                })
                .then(data => {setloaded(true)})
        })
    }, [filter, setLocations])

    const loadingBar = isloaded ?
        (
            <ol>
                {sortSlice10(locations).map(obj => {
                    return <Top10ResultLinkEntry type={'l'} name={obj.state} count={obj.count}/>
                })}
            </ol>
        ) :
        <div><CircularProgress /></div>

    return (
        <article>
            <h2>Top 10 Locations by Number of Available Jobs</h2>
            {loadingBar}
        </article>
    )
}

export default Top10Locations;
