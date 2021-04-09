import { useEffect, useState, useContext } from "react"
import jobsContext from '../context/jobsContext.js'
import Fields from '../data/Fields.js'
import sortSlice10 from '../utils/SortSlice.js'
import { CircularProgress, Button } from '@material-ui/core'
import Top10ResultLinkEntry from './Top10ResultLinkEntry'

var fieldsArray = Fields.split(',')

function Top10Fields() {
    const { filter, fields, setFields } = useContext(jobsContext)
    const [isloaded, setloaded] = useState(false)

    useEffect(() => {
        setFields([])
        setloaded(false)
        fieldsArray.forEach((field) => {
            const url = `https://data.usajobs.gov/api/search?keyword=${field}&ResultsPerPage=1&Fields=min${filter ? "&" + filter : ""}`;
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
                    setFields((previous) => {
                        const newFields = [...previous];
                        newFields.push({ "field": field, "count": data.SearchResult.SearchResultCountAll });
                        return newFields
                    })
                return true;
                })
                .then(data => {setloaded(true)})
        })
    }, [filter, setFields])

    const loadingBar = isloaded ?
    (
        <ol>
        {sortSlice10(fields).map(obj => {
            return <Top10ResultLinkEntry type={'l'} name={obj.field} count={obj.count}/>
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