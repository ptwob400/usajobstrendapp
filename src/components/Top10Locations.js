import { useEffect, useState, useContext } from "react"
import jobsContext from '../context/jobsContext.js'
import States from '../data/States.json'
import sortSlice10 from '../utils/SortSlice.js'
import Top10ResultLinkEntry from './Top10ResultLinkEntry'
import { CircularProgress } from '@material-ui/core'
import FetchJobsData from '../utils/FetchJobsData.js'


function Top10Locations() {
    const [isloaded, setloaded] = useState(false)
    const { filter, locations, setLocations } = useContext(jobsContext)

    useEffect(() => {
        setLocations([])
        setloaded(false)
        FetchJobsData(States, "https://data.usajobs.gov/api/search?LocationName=", setLocations, filter, setloaded) 

    }, [filter, setLocations])

    const loadingBar = isloaded ?
        (
            <ol>
                {sortSlice10(locations).map(obj => {
                    return <Top10ResultLinkEntry key={obj.jobsId}type={'l'} name={obj.name} count={obj.count} filter={filter} />
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
