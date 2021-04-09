import { useContext } from 'react';
import jobsContext from '../context/jobsContext.js'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

import './DropDownMenu.css';

const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2)
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width: 100
    }
  }));

function DropDownMenu () {
    const { filter,  setFilter } = useContext(jobsContext);
    const classes = useStyles();
    
    const handleUpdateCategory = (event) => {
        
        setFilter(event.target.value);
    }

    return (
        <div id="category-dropdown">
            <FormControl className={classes.formControl}>
                <InputLabel id="label-select-category">Filter</InputLabel>
                <Select 
                    onChange={handleUpdateCategory} 
                    labelId="label-select-category" 
                    id="select" 
                    value={filter}
                >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value="PositionSchedule=1">Full-Time</MenuItem>
                    <MenuItem value="PositionSchedule=2">Part-Time</MenuItem>
                </Select>
 
            </FormControl>
        </div>
    )
}

export default DropDownMenu;