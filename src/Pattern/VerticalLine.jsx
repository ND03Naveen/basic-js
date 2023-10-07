import { Grid } from "@mui/material";
import CodeEditor from "../code Editor/codeEditor";
import { Link } from "react-router-dom";
import NavigationButtons from "../navigationbuttonComp/navigationButtons";

function VerticalLinePattern() {
    return (
        <Grid>
            <h3>Vertical Line Pattern</h3>

            <NavigationButtons lName="Star" lLink="/starPattern" rName="Horizontal Line" rLink="/horizontalLinepattern"/>

            <Grid container style={{ whiteSpace: "pre-wrap", color: "#40816b", fontSize: "24px", height: "200px", justifyContent: "center", alignItems: "center", marginBottom: "20px", boxShadow: "0px 2px 1px -1px #00bfa5, 0px 1px 1px 0px #00bfa5, 0px 1px 3px 0px #00bfa5" }}>
                <Grid >{
                    `* 
* 
* 
* 
* `}</Grid>
            </Grid>

            <p>This example has multiple rows/lines. to achieve this single-dimension array is enough. each console.log() prints the output in a new line.</p>

            <h3>Code for this pattern</h3>
            <h4>without array</h4>
            <CodeEditor code={withoutArrayEg} />

            <h4>with array</h4>
            <CodeEditor code={withArrayEg} />

            <p>if you are new to this website, please visit the <Link to={"/array"} style={{ width: "100%" }}>map</Link> method.</p>

            <p>If you know the simpler code than the above Example, please add it in the comment.</p>

            <NavigationButtons lName="Star" lLink="/starPattern" rName="Vertical Name" rLink="/horizontalLinepattern"/>

            <div className="powr-comments" id="c6f65a12_1686471136"></div>

        </Grid>
    )
}

const withoutArrayEg = `console.log("*");\nconsole.log("*");\nconsole.log("*");\nconsole.log("*");\nconsole.log("*");`;
const withArrayEg = `var pattern = ["*","*","*","*","*"];\npattern.map(val=>{\n    console.log(val);\n});`;
export default VerticalLinePattern;