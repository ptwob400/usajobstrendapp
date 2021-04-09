import { useEffect, useState, useContext } from "react"
import jobsContext from '../context/jobsContext.js'
import Fields from '../data/Fields.js'
import sortSlice10 from '../utils/SortSlice.js'
import { CircularProgress } from '@material-ui/core'
import Top10ResultLinkEntry from './Top10ResultLinkEntry'
import FetchJobsData from '../utils/FetchJobsData.js'

var fieldsArray = Fields.split(',')

function Top10Fields() {
    const { filter, fields, setFields } = useContext(jobsContext)
    const [isloaded, setloaded] = useState(false)

    useEffect(() => {
        setFields([])
        setloaded(false)
        FetchJobsData(fieldsArray, "https://data.usajobs.gov/api/search?keyword=", setFields, filter, setloaded) 
    }, [filter, setFields])

    const loadingBar = isloaded ?
    (
        <ol>
        {sortSlice10(fields).map(obj => {
            return <Top10ResultLinkEntry key={obj.jobsId} type={'k'} name={obj.name} count={obj.count} filter={filter}/>
        })}
        </ol>
    ) :
    <div><CircularProgress /></div>

    return (
        <article>
            <h2>Top 10 Fields by Number of Available Jobs</h2>
            {loadingBar}
        </article>
    )
}

export default Top10Fields;