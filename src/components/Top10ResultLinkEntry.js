import './Top10ResultLinkEntry.css'
import { Button } from '@material-ui/core'


function Top10ResultLinkEntry({ type, name, count }) {
  if(type !== 'l' && type !== 'k'){
    type = 'k'
  }

  return (
    <li><Button href= {`https://www.usajobs.gov/Search/Results?${type}=${name}`} style={{fontWeight: "750", color: "#314570", width: "90%", justifyContent: "left"}}>{name} - Jobs Available: {count}</Button></li>
  )
}

export default Top10ResultLinkEntry;
//https://www.usajobs.gov/Search/Results?k=office

