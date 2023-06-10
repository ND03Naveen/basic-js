import { Grid } from "@mui/material";
import CodeEditor from "../code Editor/codeEditor";
import { Link } from "react-router-dom";
import NavigationButtons from "../navigationbuttonComp/navigationButtons";

function StartPattern() {
    return (
        <Grid>
            <h3>Star Pattern</h3>

            <NavigationButtons lName="Star" lLink="" rName="Vertical Name" rLink="/verticalLinePattern"/>

            <Grid container style={{ whiteSpace: "pre-wrap", color: "#40816b", fontSize: "24px", height: "200px", justifyContent: "center", alignItems: "center",marginBottom: "20px", boxShadow: "0px 2px 1px -1px #00bfa5, 0px 1px 1px 0px #00bfa5, 0px 1px 3px 0px #00bfa5" }}>
                <Grid>{`*`}</Grid>
            </Grid>

            <h3>Why do we want to learn pattern coding?</h3>
            <p>The array is a very important method in web development. so by doing the patterns coding we can master Array functionality.</p>

            <h3>console.log()</h3>
            <p>It's used to test our logic output. It won't do any impact on our website.</p>

            <h3>Code for this pattern</h3>
            <h4>without array</h4>
            <CodeEditor code={withoutArrayEg} />

            <h4>with array</h4>
            <CodeEditor code={withArrayEg} />

            <p>if you are new to this website, please visit the <Link to={"/array"} style={{width: "100%"}}>map</Link> method.</p>

            <NavigationButtons lName="Star" lLink="" rName="Vertical Name" rLink="/verticalLinePattern"/>

            <div className="powr-comments" id="caeb0fe5_1674980291"></div>

        </Grid>
    )
}

const withoutArrayEg = `console.log("*");`;
const withArrayEg = `var pattern = ["*"];\npattern.map(val=>{\n    console.log(val);\n});`;
export default StartPattern;