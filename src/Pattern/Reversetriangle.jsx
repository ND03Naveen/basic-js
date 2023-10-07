import { Grid } from "@mui/material";
import CodeEditor from "../code Editor/codeEditor";
import { Link } from "react-router-dom";
import NavigationButtons from "../navigationbuttonComp/navigationButtons";

function ReverseTrianglePattern() {
    return (
        <Grid>
            <h3>Revese Triangle Pattern</h3>

            <NavigationButtons lName="Triangle" lLink="/trianglepattern" rName="Diamond" rLink="/diamondpattern"/>

            <Grid container style={{ whiteSpace: "pre-wrap", color: "#40816b", fontSize: "24px", height: "200px", justifyContent: "center", alignItems: "center", marginBottom: "20px", boxShadow: "0px 2px 1px -1px #00bfa5, 0px 1px 1px 0px #00bfa5, 0px 1px 3px 0px #00bfa5" }}>
                <Grid >{
                    `*  *  *  *  *  *  *  *  *
    *  *  *  *  *  *  *
        *  *  *  *  *
            *  *  *  
               *  `}</Grid>
            </Grid>

            <p>This example has multiple rows/lines and multiple columns. to achieve this two-dimension array is needed. Array inside an another array is called a two-dimension array.</p>

            <h3>Code for this pattern</h3>
            <h4>without array</h4>
            <CodeEditor code={withoutArrayEg} />

            <h3><span className="keywords">backtick ` `</span></h3>
            <p>It is used to store the string with multiple lines.</p>

            <h4>with array</h4>
            <CodeEditor code={withArrayEg} />

            <p>if you are new to this website, please visit the <Link to={"/array"} style={{ width: "100%" }}>map</Link> method and <Link to={"/typeConversion"} style={{ width: "100%" }}>join</Link> method.</p>

            <p>If you know the simpler code than the above Example, please add it in the comment.</p>

            <NavigationButtons lName="Triangle" lLink="/trianglepattern" rName="Diamond" rLink="/diamondpattern"/>

            <div className="powr-comments" id="bff92cc1_1686470939"></div>

        </Grid>
    )
}

const withoutArrayEg = 'console.log(` \n    *  *  *  *  *  *  *  *  *\n       *  *  *  *  *  *  *\n          *  *  *  *  *\n             *  *  *  \n                *  `)';
const withArrayEg = `var pattern = [\n["*","*","*","*","*","*","*","*","*"],\n[" ","*","*","*","*","*","*","*"," "],\n[" "," ","*","*","*","*","*"," "," "],\n[" "," "," ","*","*","*"," "," "," "],\n[" "," "," "," ","*"," "," "," "," "],\n];\n\npattern.map(val=>{\n    console.log(val.join(" "));\n});`;
export default ReverseTrianglePattern;