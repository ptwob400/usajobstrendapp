// [X] Create an array with keywords
// [X] iterate over the array and make api calls to usajobs.api for each word
// be sure to include "&ResultsPerPage=1&Fields=min"
// url - https://data.usajobs.gov/api/search?Keyword=Software&ResultsPerPage=1&Fields=min 
// [X] from the results, store the value of the "SearchResultCountAll" key in an array. 
// [X] display each item in this array in cards in descending order with the results number
import Keywords from '../data/Keywords.json'
import { useEffect, useState, useContext } from "react"
import jobsContext from '../context/jobsContext.js'
import sortSlice10 from '../utils/SortSlice.js'
import Top10ResultLinkEntry from './Top10ResultLinkEntry'
import { CircularProgress } from '@material-ui/core'
import FetchJobsData from '../utils/FetchJobsData.js'


function Top10Keywords() {
    const [isloaded, setloaded] = useState(false)
    const { filter, keywords, setKeywords } = useContext(jobsContext);

    useEffect(() => {
        setKeywords([])
        setloaded(false)
        FetchJobsData(Keywords, "https://data.usajobs.gov/api/search?Keyword=", setKeywords, filter, setloaded) 
    }, [filter, setKeywords])

    const loadingBar = isloaded ?
        (
            <ol>
                {sortSlice10(keywords).map(obj => {
                    return <Top10ResultLinkEntry key={obj.jobsId} type={'k'} name={obj.name} count={obj.count} filter={filter} />
                })}
            </ol>
        ) :
        <div><CircularProgress /></div>

    return (
        <article>
            <h2>Top 10 Industry Pre-Defined Keywords Results</h2>
            {loadingBar}
        </article>
    )
}

export default Top10Keywords;
