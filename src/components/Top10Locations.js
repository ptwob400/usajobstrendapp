import { useEffect, useState } from "react"
import States from '../data/States.json'
const statenumbers = {}


function Top10Locations() {
    const [states, setStates] = useState([])

    useEffect(() => {
        States.forEach((state) => {
            const url = `https://data.usajobs.gov/api/search?Keyword=${state}&ResultsPerPage=1&Fields=min`;
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
        })
    }, [])

    function sortSlice10(arr) {
        arr.sort((a, b) => { return b.count - a.count })
        return arr.slice(0, 10)
    }

    return (
        <article>
            <h2>Top 10 Locations by Number of Available Jobs</h2>
            <ol>
                {sortSlice10(states).map(obj => {
                    return <li>{obj.state} - Count: {obj.count}</li>
                })}
            </ol>
        </article>
    )
}

export default Top10Locations;

// {newStates.map(obj => {
//     return <nl>{obj.state} - Count:{obj.count}</nl>
// })}