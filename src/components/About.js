import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


import './About.css'

function About() {
    return (
        <div className="About">
        <Card className="about-card">
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                About USAJobs Today
            </Typography>
            <Typography variant="body2" component="p">
            <p>USAJobs Today is an app that provides real time trend data to people seeking federal employment opportunities. Our mission is to offer people looking for employment the trend data they need to pursue the skills necessary to get hired. Our app delivers real time trends using multiple filters with links to the specific search results at USAJobs.gov to make your job search as efficient as possible.</p><br></br>
            </Typography>  
            <Typography gutterBottom variant="h5" component="h3">
                Team Members
            </Typography>
            <ul className="member-names">
                <li><a href="https://www.linkedin.com/in/richie-brennan/">Richard Brennan</a></li>
                <li><a href="https://www.linkedin.com/in/gdeng937/">G. Deng-It</a></li>
                <li><a href="https://www.linkedin.com/in/samantha-k-293065173">Sam Kesecker</a></li>
                <li><a href="https://www.linkedin.com/in/steven-lance-richards-89bb93149/">Steven Richards</a></li>
            </ul>
            </CardContent>
        </Card>
        </div>
    )
}

export default About;