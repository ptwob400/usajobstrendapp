import { useContext } from "react"
import jobsContext from '../context/jobsContext.js'
import sortSlice10 from '../utils/SortSlice.js'
import Top10ResultLinkEntry from './Top10ResultLinkEntry'
import { CircularProgress } from '@material-ui/core'
import States from '../data/States.json'

function Top10Locations({filter}) {
    const { locations } = useContext(jobsContext)

    const loadingBar = States.length === locations.length ?
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
