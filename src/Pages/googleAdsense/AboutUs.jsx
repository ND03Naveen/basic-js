import { Grid } from "@mui/material";
function AboutUs() {
    return (
        <Grid>
            <h1 style={{borderBottom:"2px solid black",paddingBottom:"10px"}}>About Basic Js</h1>
            <p style={{fontSize: "18px"}}>Welcome to Basic Js, an online platform designed to help beginners learn JavaScript in a faster and easier way. Our goal is to provide you with a comprehensive understanding of JavaScript fundamentals, while also allowing you to practice your skills through a series of exercises.</p>
            <p style={{fontSize: "18px"}}>Our content covers only the most important topics of JavaScript, allowing you to learn quickly and efficiently. We also have a comments section on each page, where you can ask any questions you have and receive answers from our team of experts within 24 hours.</p>
            <p style={{fontSize: "18px"}}>Our author, Naveen N.D, is a web developer with extensive experience in JavaScript and a passion for teaching others. He has carefully curated our content to ensure that it is easy to understand and highly practical.</p>
            <p style={{fontSize: "18px"}}>In addition to our own content, we also recommend a range of resources to supplement your learning. These include:</p>
            <ul style={{listStyleType: "square", fontSize: "18px",marginLeft: "30px"}}>
                <li>"JavaScript: The Definitive Guide" by David Flanagan</li>
                <li>"Eloquent JavaScript" by Marijn Haverbeke</li>
                <li>"JavaScript and JQuery: Interactive Front-End Web Development" by Jon Duckett</li>
                <li>"You Don't Know JS" by Kyle Simpson</li>
                <li>"MDN Web Docs" - an online resource maintained by Mozilla</li>
            </ul>
            <p style={{fontSize: "18px"}}>We believe that with dedication and the right resources, anyone can learn JavaScript. So why not get started today? If you have any questions or feedback, please don't hesitate to get in touch with us at ndnaveensweeebe@gmail.com or call us at +91 8124359871.</p>
            <p style={{fontSize: "18px"}}>Thank you for choosing Basic Js as your learning platform!</p>
        </Grid>
    )
}

export default AboutUs;