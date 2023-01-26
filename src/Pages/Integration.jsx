import { Grid } from "@mui/material";
import CodeEditor from "../code Editor/codeEditor";

function Integration() {
    return (
        <Grid>
            <h2>Javascript API Integration</h2>
            <p>It is a very important topic in frontend Development. It is used to interact with the back end. like adding some details to Database or retrieving values from Database.</p>
            
            <h3>Fetch</h3>
            <p>It is an inbuilt API integration method in javascript.</p>

            <h3>syntax</h3>
            <CodeEditor code={syntaxEg} />  

            <p>if API integration is a success, then the block will execute but if it fails catch block will execute.</p>
            <p>For example, we are going to integrate with public API, to get some information.</p>
            <p>Public API means, it is free to use for learning purposes.</p>

            <CodeEditor code={fetchEg} />
            <p>Console Output: <span className="keywords">{`{"fact": "some fact", "length":10}`}</span></p>
            
            <div className="powr-comments" id="f3690d13_1674713339"></div>
        </Grid>
    )
}

const syntaxEg = `fetch(URL,{"method": "GET/POST/PUT/DELETE"})\n.then(value=>console.log(value))\n.catch(error=>console.log(error));`;
const fetchEg = `fetch("https://catfact.ninja/fact",{"method": "GET"})\n.then(value=>console.log(value))\n.catch(error=>console.log(error));`;
export default Integration;