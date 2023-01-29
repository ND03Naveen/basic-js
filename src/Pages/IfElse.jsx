import { Grid } from "@mui/material";
import CodeEditor from "../code Editor/codeEditor";
import NavigationButtons from "../navigationbuttonComp/navigationButtons";
function IfElse() {
    return (
        <Grid>
            <h2>Conditional Statement</h2>

            <NavigationButtons lName="Operator" lLink="/operator" rName="Functions" rLink="/functions"/>

            <p>It is used to conditionally execute the block of code.</p>
            <h3>False Values</h3>
            <p>
                <span className="keywords">0</span> &nbsp;,&nbsp;
                <span className="keywords">false</span> &nbsp;,&nbsp;
                <span className="keywords">null</span> &nbsp;,&nbsp;
                <span className="keywords">undefined</span> &nbsp;and &nbsp;
                <span className="keywords">""</span>
            </p>
            <h3>True Values</h3>
            <p>values other than the above are considered as true values.</p>
            <p>
                e.g,&nbsp;&nbsp;
                <span className="keywords">123</span> &nbsp;,&nbsp;
                <span className="keywords">-98</span> &nbsp;,&nbsp;
                <span className="keywords">true</span> &nbsp;,&nbsp;
                <span className="keywords">"bharathi"</span> &nbsp;,&nbsp;
                <span className="keywords">{`{}`}</span>&nbsp;,&nbsp;
                <span className="keywords">[]</span>&nbsp;,&nbsp;
                <span className="keywords">{`{"name": "Bharathi"}`}</span>&nbsp;and &nbsp;
                <span className="keywords">[1,2,3]</span>
            </p>
            <h3>If</h3>
            <p>The block will execute only if the condition is true. It is mostly used in undefined error handling.</p>
            <CodeEditor code={ifEg} />
            <p>Console Output: <span className="keywords">condition is true</span></p>

            <h3>If Else</h3>
            <p>There will be two blocks, one for the true condition and another one for the false condition.</p>
            <CodeEditor code={ifElseEg1} />
            <p>Console Output: <span className="keywords">condition is true</span></p>
            <CodeEditor code={ifElseEg2} />
            <p>Console Output: <span className="keywords">condition is false</span></p>

            <h3>If Else If</h3>
            <p>There will be more than two blocks, the condition will start from the top and if any one block condition is true, then it will execute that block and come out of the If Else If condition. It won't go to the below blocks.</p>
            <CodeEditor code={ifElseifEg} />
            <p>Console Output: <span className="keywords">Step2</span></p>

            <NavigationButtons lName="Operator" lLink="/operator" rName="Functions" rLink="/functions"/>

            <div className="powr-comments" id="d509f23a_1674578858"></div>
        </Grid>
    )
}

const ifEg = `if(1==1){\n  console.log("condition is true")\n}`;
const ifElseEg1 = `if(1==1){\n  console.log("condition is true")\n}\nelse{\n  console.log("condition is false")\n}`;
const ifElseEg2 = `if(1==2){\n  console.log("condition is true")\n}\nelse{\n  console.log("condition is false")\n}`;
const ifElseifEg = `if (1 == 2) {\n    console.log("Step1")\n}\nelse if (1 == 4) {\n    console.log("Step2")\n}\nelse if (1 == 4) {\n    console.log("Step3")\n}\nelse if (1 == 9) {\n    console.log("Step4")\n}\nelse {\n    console.log("Step5")\n}`;

export default IfElse;
