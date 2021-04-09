import './FooterContent.css'

function FooterContent() {
    return (
        <footer className="App-footer">
            <a href='https://www.usajobs.gov/'>
                    <img src="https://pbs.twimg.com/profile_images/807074566128496641/nfTYe3Ec_400x400.jpg" alt="USAJobs.gov" height="70px" width="90px" object-fit="contain" />
                </a>
            <p>USAJobs Today is not associated USAJobs.gov</p>
            <p>This app is made as part of the Galvanize SDI-04 Cohort</p>
        </footer>
    )
}

export default FooterContent;