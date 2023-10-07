import { Grid } from "@mui/material";
import "./ContactUs.css";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function ContactUs() {
    return (
        <Grid>
            <h1>Contact Us</h1>

            <div id="feedback">
                <h2>Send Your Feedback</h2>
                <p>We would love to hear from you! If you have any questions, comments, or suggestions, please don't hesitate to get in touch with us. You can reach us by email or social media.</p>
            </div>

            <div id="contact-info">
                <h2>How to Contact Us?</h2>
                <p>Feel free to send us an email anytime:</p>
                <a className="linka" href="mailto:ndnaveensweeebe@gmail.com">ndnaveensweeebe@gmail.com</a>
            </div>
            <div id="social-media">
                <h2>Social Media</h2>
                <ul className="customul">
                    <li className="customli" >
                        <a target="_blank" rel="noopener noreferrer" href="https://wa.me/8124359871"><WhatsAppIcon style={{ color: "#25D366" }}/></a>
                    </li>
                    <li className="customli" >
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/nd03nav"><InstagramIcon style={{ color: "#C13584" }}/></a>
                    </li>
                    <li className="customli" >
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/100069198360952/"><FacebookIcon style={{ color: "#3B5998" }}/></a>
                    </li>
                    <li className="customli" >
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/nd03nav"><TwitterIcon style={{ color: "#1DA1F2" }}/></a>
                    </li>
                    <li className="customli" >
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/naveen-nd-7602a8158/"><LinkedInIcon style={{ color: "#0077B5" }}/></a>
                    </li>
                </ul>
            </div>

            <p>We will do our best to respond to your messages as quickly as possible, usually within 24 hours. Thanks for choosing us as your learning platform!</p>
        </Grid>
    )
}

export default ContactUs;