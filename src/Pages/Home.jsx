import { Button, Grid } from "@mui/material";
import Card from '@mui/material/Card';
import { Link } from "react-router-dom";

const topics = [
    { name: "10 Days of JS", link: "/variables" },
    { name: "25 Days of JS", link: "/Introduction%20to%20JavaScript" },
    { name: "Quiz", link: "/quiz" },
    { name: "Pattern Excercise", link: "/pattern" },
]
export default function Home(params) {
    return (
        <Grid container spacing={4}>
            {topics.map(val => <Grid item xs={12} md={6}>
                <Card raised={true} style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "250px" }}>
                    <div style={{ height: "65%", display: "flex", alignItems: "center", fontSize: "45px", color: "grey" }}>{val.name}</div>
                    <Link to={val.link} style={{ textDecoration: "none" }}>
                        <Button variant="contained" style={{ background: "#00bfa5", padding: "5px 25px", fontSize: "22px" }}>Start</Button>
                    </Link>
                </Card>
            </Grid>)}


        </Grid>
    )
}