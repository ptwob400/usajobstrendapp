import v4 from 'uuid/dist/v4'
const FetchJobsData = (array, baseUrl, callback, filter, setloaded) => {
    array.forEach((item) => {
        const url = `${baseUrl}${item}&ResultsPerPage=1&Fields=min${filter ? "&" + filter : ""}`;
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
                callback((previous) => {
                    const newFields = [...previous];
                    newFields.push({ 
                        "name": item, 
                        "count": data.SearchResult.SearchResultCountAll,
                        "jobsId": v4()
                    });
                    return newFields
                })
            return true;
            })
            .then(data => {setloaded(true)})
    })

}

export default FetchJobsData;