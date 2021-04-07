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
      minWidth: 120
    }
  }));

function DropDownMenu () {
    const { category, setCategory } = useContext(jobsContext);
    const classes = useStyles();
    
    const handleUpdateCategory = (event) => {
        setCategory(event.target.value);
    }

    return (
        <div id="category-dropdown">
            <FormControl className={classes.formControl}>
                <InputLabel id="label-select-category">Trend Category</InputLabel>
                <Select 
                    onChange={handleUpdateCategory} 
                    labelId="label-select-category" 
                    id="select" 
                    value="category"
                >
                    <MenuItem value=""><em>Select a Category</em></MenuItem>
                    <MenuItem value="Locations">Locations</MenuItem>
                    <MenuItem value="Fields">Fields</MenuItem>
                    <MenuItem value="Keywords">Keywords</MenuItem>
                </Select>
 
            </FormControl>
        <div>{category}</div>
        </div>
    )
}

export default DropDownMenu;