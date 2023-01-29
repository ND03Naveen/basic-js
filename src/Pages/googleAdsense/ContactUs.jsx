import { Grid } from "@mui/material";
function ContactUs() {
    return (
        <Grid>
            <Grid container style={{ justifyContent: "center" }}><h1>Send Your FeedBack</h1></Grid>

            <Grid container style={{ justifyContent: "center" }}><h3>We will be happy to hear from you!</h3></Grid>

            <div >
                <div>
                    <h3 style={{fontWeight:"bold"}}>How to contact us?</h3>
                </div>
                <p style={{fontSize:"medium",color:"#6C757D"}}>
                    Feel free to send us an email anytime: <a href="mailto:ndnaveensweeebe@gmail.com">ndnaveensweeebe@gmail.com</a>
                </p>
                <p style={{fontSize:"medium",color:"#6C757D"}}>
                    We will try our best to respond in <b>less than 24 Hours</b>, Thanks!

                </p>

            </div>
        </Grid>
    )
}

export default ContactUs;