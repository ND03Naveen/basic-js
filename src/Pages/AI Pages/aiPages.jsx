import React, { useEffect, useState } from 'react';
import "./aiPages.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Button, Grid, Tooltip } from '@mui/material';
import { Link } from "react-router-dom";
import { useBodyContext } from "../../MUI Component/responsiveDrawer";

const Quiz = ({ question, options, answer, code }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="quiz">
            <h2 className="question">{question}</h2>
            {
                code ? (<SyntaxHighlighter language="javascript" className="code" style={darcula}>
                    {code}
                </SyntaxHighlighter>) : null
            }
            <ul className="options">
                {options.map((option, index) => (
                    <li
                        key={index}
                        className={`option ${selectedOption === option ? (option === answer ? 'correct' : 'incorrect') : ''}`}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const FunFact = ({ text }) => {
    return (
        <div className="fun-fact">
            <span className="emoji" role="img" aria-label="thought bubble emoji">
                💭
            </span>
            <p className="text">{text}</p>
        </div>
    );
};

const List = ({ items }) => (
    <ul className="list" style={{marginBottom:"20px"}}>
        {items.map((item, index) => (
            <li className="list__item" key={index}>
                <span className="list__item__label keywords">{item.split(":")[0]}:</span>
                <span className="list__item__value">{item.split(":")[1]}</span>
            </li>
        ))}
    </ul>
);
const AiPages = ({ data,commentID }) => {
    const bodyContext = useBodyContext();
    const [previous, setPrevious] = useState("");
    const [next, setNext] = useState("");
    useEffect(() => {
        for (let index = 0; index < bodyContext.menus.length; index++) {
            const element = bodyContext.menus[index];
            if ((element.label === data.topic) || ((element.label + " in JavaScript") === data.topic)) {
                if (bodyContext.menus[index - 1])
                    setPrevious(bodyContext.menus[index - 1].label);
                else setPrevious("");
                if (bodyContext.menus[index + 1])
                    setNext(bodyContext.menus[index + 1].label);
                else setNext("");
                break;
            }
        }
    }, [data.topic])

    const scrollToTop = (link) => {
        bodyContext.handleActiveMenu(link);
        document.documentElement.scrollTop = 0;
    }
    return (
        <div className="content">
            <h1 className="topic">{data.topic}</h1>
            {data.content.map((item, index) => {
                switch (item.type) {
                    case 'paragraph':
                        return <p key={index} className="paragraph">{item.text}</p>;
                    case 'funFact':
                        return <FunFact text={item.text} />;
                    case 'quiz':
                        return <Quiz question={item.question} options={item.options} answer={item.answer} code={item.code} />
                    case 'list':
                        return <List items={item.items} />
                    case 'code':
                        return item.code ?
                            (
                                <React.Fragment>
                                    <h2 className="question">{item.text}</h2>
                                    <SyntaxHighlighter className="code" language="javascript" style={darcula}>{item.code}</SyntaxHighlighter>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <SyntaxHighlighter className="code" language="javascript" style={darcula}>{item.text}</SyntaxHighlighter>
                                </React.Fragment>
                            )

                    default:
                        return null;
                }
            })}
            <Grid container style={{ justifyContent: "space-between" }}>
                <Grid item >
                    <Tooltip title={previous} placement={"right"} aria-label={previous}>
                        <Button onClick={previous ? ()=>scrollToTop("/" + previous) : null} disabled={!previous}>
                            <Link key={previous} to={"/" + previous} style={{ textDecoration: "none", color: "inherit" }}>
                                <SkipPreviousIcon className={previous ? 'naviagationBtn' : 'disableNavigationBtn'} />
                            </Link>
                        </Button>
                    </Tooltip>
                </Grid>
                <Grid item >
                    <Tooltip title={next} placement={"left"} aria-label={next}>
                        <Button onClick={next ? ()=>scrollToTop("/" + next)  : null} disabled={!next}>
                            <Link varient="button" key={next} to={"/" + next} style={{ textDecoration: "none", color: "inherit" }}>
                                <SkipNextIcon className={next ? 'naviagationBtn' : 'disableNavigationBtn'} /> 
                            </Link>
                        </Button>
                    </Tooltip>
                </Grid>
            </Grid>
            {/* comment */}
            {commentID?<div className="powr-comments" id={commentID}></div>:null}
        </div>
    );

};


export default AiPages;
