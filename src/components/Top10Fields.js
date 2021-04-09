import { useContext } from "react"
import jobsContext from '../context/jobsContext.js'
import sortSlice10 from '../utils/SortSlice.js'
import { CircularProgress } from '@material-ui/core'
import Top10ResultLinkEntry from './Top10ResultLinkEntry'
import Fields from '../data/Fields.js'

var fieldsArray = Fields.split(',')


function Top10Fields({filter}) {
    const { fields } = useContext(jobsContext)

    const loadingBar = fieldsArray.length === fields.length ?
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