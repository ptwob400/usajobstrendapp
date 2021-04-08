// [X] Create an array with keywords
// [X] iterate over the array and make api calls to usajobs.api for each word
    // be sure to include "&ResultsPerPage=1&Fields=min"
    // url - https://data.usajobs.gov/api/search?Keyword=Software&ResultsPerPage=1&Fields=min 
// [X] from the results, store the value of the "SearchResultCountAll" key in an array. 
// [X] display each item in this array in cards in descending order with the results number
import Keywords from '../data/Keywords.json'
import { useEffect, useState } from 'react'
import sortSlice10 from '../utils/SortSlice.js'
import Top10ResultLinkEntry from './Top10ResultLinkEntry'



function Top10Keywords() {
    const [keywords, setKeywords] = useState([]);

    useEffect(() => {
        Keywords.forEach((word) => {
            const url = `https://data.usajobs.gov/api/search?Keyword=${word}&ResultsPerPage=1&Fields=min`;
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
                    setKeywords((previous) => {
                        const newKeywords = [...previous];
                        newKeywords.push({ "word": word, "count": data.SearchResult.SearchResultCountAll});
                        return newKeywords
                    })
                })
        })
    }, [])

    return (
        <article>
            <h2>Top 10 Locations by Number of Available Jobs</h2>
            <ol>
                {sortSlice10(keywords).map(obj => {
                    return <Top10ResultLinkEntry type={'k'} name={obj.word} count={obj.count}/>
                })}
            </ol>
        </article>
    )
}

export default Top10Keywords;
