import { useEffect, useState } from "react"
import Fields from '../data/Fields.js'
import sortSlice10 from '../utils/SortSlice.js'
import { CircularProgress } from '@material-ui/core'
var fieldsArray = Fields.split(',')

function Top10Fields() {
    const [fields, setFields] = useState([])
    const [isloaded, setloaded] = useState(false)

    useEffect(() => {
        fieldsArray.forEach((field) => {
            const url = `https://data.usajobs.gov/api/search?keyword=${field}&ResultsPerPage=1&Fields=min`;
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
                return data;
                })
                .then(data => {setloaded(true)})
        })
    }, [])

    const loadingBar = isloaded ?
    (
        <ol>
        {sortSlice10(fields).map(obj => {
            return <li><a href={`https://www.usajobs.gov/Search/Results?p=1&k=${obj.field}`}>{obj.field} - Number of jobs available: {obj.count}</a></li>
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