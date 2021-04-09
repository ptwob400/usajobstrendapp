import { useEffect, useState } from "react"
import States from '../data/States.json'
import sortSlice10 from '../utils/SortSlice.js'
import Top10ResultLinkEntry from './Top10ResultLinkEntry'
import { CircularProgress } from '@material-ui/core'

function Top10Locations() {
    const [states, setStates] = useState([])
    const [isloaded, setloaded] = useState(false)

    useEffect(() => {
        States.forEach((state) => {
            const url = `https://data.usajobs.gov/api/search?LocationName=${state}&ResultsPerPage=1&Fields=min`;
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
                    setStates((previous) => {
                        const newStates = [...previous];
                        newStates.push({ "state": state, "count": data.SearchResult.SearchResultCountAll });
                        return newStates
                    })
                })
                .then(data => {setloaded(true)})
        })
    }, [])

    const loadingBar = isloaded ?
        (
            <ol>
                {sortSlice10(states).map(obj => {
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
