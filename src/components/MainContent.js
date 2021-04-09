import Top10Keywords from './Top10Keywords.js'
import Top10Locations from './Top10Locations.js'
import Top10Fields from './Top10Fields.js'
import DropDownMenu from './DropDownMenu.js'
import { Grid, Paper } from '@material-ui/core';

import './MainContent.css'

function MainContent() {
    return (<body className="Body">
        <section>
            <Grid container justify='center'>
                <Grid item>
                    <DropDownMenu />
                </Grid>
            </Grid>
            <Grid container justify='center'>
                <Grid item>
                    <Paper style={{ padding: 10, margin: 15, backgroundColor: "WhiteSmoke"}}>
                    <Top10Keywords />
                    </Paper>
                </Grid>
                <Grid item>
                <Paper style={{ padding: 10, margin: 15, backgroundColor: "WhiteSmoke"}}>
                    <Top10Locations />
                    </Paper>
                </Grid>
                <Grid item>
                <Paper style={{ padding: 10, margin: 15, backgroundColor: "WhiteSmoke"}}>
                    <Top10Fields />
                    </Paper>
                </Grid>
            </Grid>
        </section>
    </body>)
}

export default MainContent;