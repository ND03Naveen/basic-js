import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react"
import "./quiz.css";
import BeenhereIcon from '@mui/icons-material/Beenhere';
import { Link } from "react-router-dom";

export function Quiz() {

    var [questionTopic, setQuestionTopic] = useState([
        { name: "typeof Operators", isSolved: false },
        { name: "Array Length Property", isSolved: false },
        { name: "Post-increment Operator (++)", isSolved: false },
        { name: "Accessing Object Properties", isSolved: false },
        { name: "Conditional Statements (if...else)", isSolved: false },
        { name: "Type Coercion", isSolved: false },
        { name: "String Length Property", isSolved: false },
        { name: "Accessing Array Elements", isSolved: false },
        { name: "Conditional Statements (if...else)", isSolved: false },
        { name: "Ternary Operator (Conditional Operator)", isSolved: false },
        { name: "Post-increment Operator (++) ", isSolved: false },
        { name: "String Length Property ", isSolved: false },
        { name: "While Loop", isSolved: false },
        { name: "For...of Loop", isSolved: false },
        { name: "Function Invocation and Return Values", isSolved: false },
        { name: "Logical Operators", isSolved: false },
        { name: "Accumulating Values in an Array", isSolved: false },
        { name: "Template Literals", isSolved: false },
        { name: "typeof Operator", isSolved: false },
        { name: "Function Parameters and Arguments", isSolved: false }
    ])

    useEffect(() => {
        var speech = new SpeechSynthesisUtterance();
        speech.text = "Welcome to the JavaScript Quiz! Test your knowledge and have fun learning JavaScript. Get ready to explore the world of coding with interactive questions. Let's begin your JavaScript journey!";
        speechSynthesis.speak(speech);    
        let solved = localStorage.getItem("solved").split(",");
        questionTopic = questionTopic.map((val,idx)=>{
            if(solved.indexOf(idx.toString())!=-1) val.isSolved = true;
            else val.isSolved = false;
            return val;
        })
        setQuestionTopic(questionTopic);
    }, [])

    return (
        <Grid container>
            {questionTopic.map((val, idx) => {
                return (
                    <Grid container className="questionContainer">
                        <Grid item xs={12} md={7} className="title">
                            {idx + 1}. {val.name}
                        </Grid>
                        <Grid item xs={12} md={3} className="buttonClass">
                            <Link to={"/quizQuestion?no="+idx} style={{textDecoration:"none",width:"100%"}}>
                            {val.isSolved?<Button variant="contained" style={{ background: "#00bfa5" }}><BeenhereIcon style={{fontSize: "20px",marginTop: "-2px",marginRight: "5px"}}/> Solved</Button>:<Button variant="contained" style={{ background: "#00bfa5" }}>Solve Challenge</Button>}
                            </Link>
                        </Grid>
                    </Grid>
                )
            })}
        </Grid>
    )
}