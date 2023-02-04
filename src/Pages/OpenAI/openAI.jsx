import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import "./openAi.css"
import { Button, Grid, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


import CodeEditor from "../../code Editor/codeEditor";


const client = axios.create({
    headers: {
        Authorization: 'Bearer ' + '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'
    },
});

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    height: "50px",
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: '100%',
        height: "70px"
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: "100%",
    height: "100%",
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        height: "100%",
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            '&:focus': {
                width: '100%',
            },
        },
    },
}));


const OpenAIPage = () => {
    const [answer, setAnswer] = useState("");
    const [helperText, setHelperText] = useState("Please press Enter to see the result");
    const [question, setQuestion] = useState("");
    const codeBlock = useRef(null);
    const callOpenAI = (question) => {
        setHelperText("Answer is getting Ready,please wait for sometime..");
        document.getElementById("header").click();
        const params = {
            prompt: question,
            model: "text-davinci-003",
            max_tokens: 4000,
            temperature: 0,
        };

        client
            .post("https://api.openai.com/v1/completions", params)
            .then((result) => {
                console.log(result.data.choices[0].text);
                // setAnswer(result.data.choices[0].text.trim());              
                if (document.getElementById("codeBlock"))
                    document.getElementById("codeBlock").style["display"] = "";
                if (document.getElementById("helperText"))
                    document.getElementById("helperText").style["display"] = "none";

                setTimeout(() => codeBlock.current.updateValue(result.data.choices[0].text.trim()), 1000);
                setHelperText("");
            })
            .catch((err) => {
                alert("Please wait for few second to get Answer/Question")
            });
    }

    const handleSearch = (e) => {
        setQuestion(e.target.value);
        setAnswer("");
        setHelperText("Please press Enter to see the result");
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) { //Enter keycode
            callOpenAI(e.target.value);
        }
        
        if (e.target.value) {
            if (document.getElementById("codeBlock"))
                document.getElementById("codeBlock").style["display"] = "none";
            if (document.getElementById("helperText"))
                document.getElementById("helperText").style["display"] = "";
            if (document.getElementById("sample"))
                document.getElementById("sample").style["display"] = "none";
        }
        else {
            if (document.getElementById("codeBlock"))
                document.getElementById("codeBlock").style["display"] = "none";
            if (document.getElementById("helperText"))
                document.getElementById("helperText").style["display"] = "none";
            if (document.getElementById("sample"))
                document.getElementById("sample").style["display"] = "";
        }

    }

    const handleSamplQues = (value) => {
        document.getElementById("search").value = value;
        setQuestion(value);
        callOpenAI(value);
        if (document.getElementById("helperText"))
            document.getElementById("helperText").style["display"] = "";
        if (document.getElementById("sample"))
            document.getElementById("sample").style["display"] = "none";

    }

    useEffect(() => {
        if (document.getElementById("codeBlock"))
            document.getElementById("codeBlock").style["display"] = "none";
        if (document.getElementById("helperText"))
            document.getElementById("helperText").style["display"] = "none";
    }, [])
    return (
        <Grid >
            <Grid container><h2 id="header">{"Get Answers to all your Questions".toUpperCase()}</h2></Grid>

            <Grid>
                <Paper elevation={3} style={{ marginTop: "20px", marginBottom: "40px" }} >
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            id="search"
                            placeholder="Search your doubts here…"
                            inputProps={{ 'aria-label': 'search' }}
                            onKeyDown={handleSearch}
                        />
                    </Search>
                </Paper>

            </Grid>

            <CodeEditor code={answer} id="codeBlock" ref={codeBlock} />

            <Grid id="helperText" style={{ textAlign: "center", color: "green", fontStyle: "italic", fontSize: "20px" }}>{helperText}</Grid>
            <Grid id="sample">
                <Grid>
                    <h3 style={{ textAlign: "center", color: "dimgrey", fontStyle: "italic" }}>Try Below Sample Question</h3>
                </Grid>
                {
                    ["Explain Loop in Js with Example", "Js Interview question with answer", "button code with html,css and js"].map(val => {
                        return <Grid key={val} container style={{ justifyContent: "center" }} onClick={() => handleSamplQues(val)}><span className='samplequestion'>{val}</span></Grid>
                    })
                }
            </Grid>

        </Grid>
    );
};

export default OpenAIPage;