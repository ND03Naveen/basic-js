import { Grid } from "@mui/material";
import CodeEditor from "../code Editor/codeEditor";
import NavigationButtons from "../navigationbuttonComp/navigationButtons";
function Functions() {
    return (
        <Grid>
            <h2>Javascript Functions</h2>

            <NavigationButtons lName="If Else" lLink="/ifElse" rName="Loop" rLink="/loop"/>

            <p>It is a block/set of code which will do a specific action.</p>
            <p>The function will have two parts, Function definition and Function call.</p>
            <p><span className="keywords">Function definition</span> &nbsp; where we will define the purpose of the function.</p>
            <p><span className="keywords">Function call</span> &nbsp; to execute the function definition.</p>

            <h3>Advantage</h3>
            <p>Functions can be Reusable.</p>

            <h3>Function Argument</h3>
            <p>Through the arguments, we can send input to the function and it has no limit, we can send N number of arguments.</p>
            <p>Each function should have a return, that is the output of the function.</p>
            <h3>Example: Adding  2 numbers </h3>
            <CodeEditor code={Eg1} />
            <p>Console Output: <span className="keywords">3</span></p>
            <CodeEditor code={Eg2} />
            <p>Console Output: <span className="keywords">-9</span></p>

            <NavigationButtons lName="If Else" lLink="/ifElse" rName="Loop" rLink="/loop"/>

            <div className="powr-comments" id="99989504_1674578933"></div>
        </Grid>
    )
}

const Eg1 = `//function definition\nfunction add(a,b){ // a and b are called arguments\n   return a+b; \n}\n\n//function call\nlet result = add(1,2);\n\nconsole.log(result);`;
const Eg2 = `//function definition\nfunction add(a,b){ // a and b are called arguments\n   return a+b; \n}\n\n//function call\nlet result = add(-11,2);\n\nconsole.log(result);`;

export default Functions;