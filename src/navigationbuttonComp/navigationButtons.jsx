import React from 'react';
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "../navigationbuttonComp/navigationButtons.css";
import {useBodyContext} from "../MUI Component/responsiveDrawer"
function NavigationButtons({lName,lLink,rName,rLink}) {
    const bodyContext = useBodyContext();

    const handleClick = (link) =>{
        bodyContext.handleActiveMenu(link);
    }
    return (
        <Grid container style={{ justifyContent: "space-between", marginBottom: "20px", marginTop:"15px" }}>
            <Grid item >
                <Link key={lName} to={lLink} style={{ textDecoration: "none", color: "inherit" }}>
                    <Button disabled={!lLink} onClick={()=>handleClick(lLink)} className={`${!lLink?"disableButton":null} navigationButton `}><ArrowBackIosIcon />&nbsp;{lName}</Button>
                </Link>
            </Grid>
            <Grid item >
                <Link key={rName} to={rLink} style={{ textDecoration: "none", color: "inherit" }}>
                    <Button disabled={!rLink} onClick={()=>handleClick(lLink)} className={`${!rLink?"disableButton":null} navigationButton `}>{rName}&nbsp;<ArrowForwardIosIcon /></Button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default NavigationButtons;