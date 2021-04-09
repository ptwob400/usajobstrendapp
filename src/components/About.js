import { Grid, Paper, Button } from '@material-ui/core';
import Logo from '../assets/Logo.JPG'

function About() {
    return (
        <div className="About">
            <Grid container justify='center' direction='row' wrap='wrap'>
                <Grid item xs={4}>
                    <img src={Logo} style={{ width: "auto", height: "370px", margin: 50 }}></img>
                </Grid>
                <Grid item xs={4}>
                    <Paper style={{ padding: 10, margin: 50, backgroundColor: "WhiteSmoke", width: 'fit-content', height: "350px" }}>
                        <h3>About USAJobs Today</h3>
                        <p>USAJobs Today is an app that provides real time trend data to people seeking federal employment opportunities.
                        Our mission is to offer people looking for employment the trend data they need to pursue the skills necessary to get hired.
                        Our app delivers real time trends using multiple filters with links to the specific search results at USAJobs.gov to make your
                        job search as efficient as possible.</p><br></br>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper style={{ padding: 10, margin: 50, backgroundColor: "WhiteSmoke", width: "300px", height: "350px"}}>
                        <h3>Team Members</h3>
                        <div>
                            <Button
                                variant="contained"
                                color = 'primary'
                                style={{ margin: 5, width: '100%'}}
                                href='https://www.linkedin.com/in/richie-brennan/'
                            >
                                Richard Brennan
                            </Button>
                        </div>
                        <div>
                            <Button
                                variant="contained"
                                color = 'primary'
                                style={{ margin: 5, width: '100%'}}
                                href='https://www.linkedin.com/in/gdeng937/'
                            >
                                G. Deng-It
                            </Button>
                        </div>
                        <div>
                            <Button
                                variant="contained"
                                color = 'primary'
                                style={{ margin: 5, width: '100%'}}
                                href='https://www.linkedin.com/in/samantha-k-293065173'
                            >
                                Sam Kesecker
                            </Button>
                        </div>
                        <div>
                            <Button
                                variant="contained"
                                color = 'primary'
                                style={{ margin: 5, width: '100%'}}
                                href='https://www.linkedin.com/in/steven-lance-richards-89bb93149/'
                            >
                                Steven Richards
                            </Button>
                        </div>
                    </Paper>
            </Grid>
            </Grid>
        </div >
    )
}

export default About;