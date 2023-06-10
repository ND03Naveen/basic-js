import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { Link } from "react-router-dom";

export default function MultiActionAreaCard({ name, output, link }) {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 345 }} style={{ marginBottom: "20px", boxShadow: "0px 2px 1px -1px #00bfa5, 0px 1px 1px 0px #00bfa5, 0px 1px 3px 0px #00bfa5" }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom component="div" style={{ fontSize: "16px", color: "#696d6c" }}>
            {name.toUpperCase()}
          </Typography>
          <Grid container style={{ whiteSpace: "pre-wrap", color: "#40816b", fontSize: "24px", height: "160px", justifyContent: "center", alignItems: "center" }}>
            <Grid>{output}</Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "flex-end", padding: "16px" }}>
        <Link to={"/"+link} style={{ textDecoration: "none", color: "inherit" }}>
          <Button size="small" className='buttonStyle'>
            Code
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}