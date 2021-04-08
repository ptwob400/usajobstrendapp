
function Top10ResultLinkEntry({ type, name, count }) {
  if(type !== 'l' && type !== 'k'){
    type = 'k'
  }

  return (
    <li><a href= {`https://www.usajobs.gov/Search/Results?${type}=${name}`}>{name} - Number of jobs available: {count}</a></li>
  )
}

export default Top10ResultLinkEntry;
//https://www.usajobs.gov/Search/Results?k=office
