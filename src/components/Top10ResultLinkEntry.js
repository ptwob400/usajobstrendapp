import './Top10ResultLinkEntry.css'
import { Button } from '@material-ui/core'


function Top10ResultLinkEntry({ type, name, count, filter }) {
  if(type !== 'l' && type !== 'k'){
    type = 'k'
  }

  let filterString = "";
  if (filter) {
    if (filter === "PositionSchedule=1")
      filterString = "ws=1"
    if (filter === "PositionSchedule=2")
      filterString = "ws=2"
  }

  return (
    <li><Button href= {`https://www.usajobs.gov/Search/Results?${ filter ? filterString + "&" : "" }${type}=${name}`} style={{fontWeight: "750", color: "#314570", width: "90%", justifyContent: "left"}}>{name} - Jobs Available: {count}</Button></li>
  )
}

export default Top10ResultLinkEntry;
//https://www.usajobs.gov/Search/Results?k=office

