import { Grid } from "@mui/material";
import CodeEditor from "../code Editor/codeEditor";
import NavigationButtons from "../navigationbuttonComp/navigationButtons";
function RegEx() {
    return (
        <Grid>
            <h2>Javascript Regular Expression</h2>

            <NavigationButtons lName="Type Conversion" lLink="/typeConversion" rName="API Integration" rLink="/integration"/>

            <p>It is mostly used to do the validation.</p>

            <h3>Syntax</h3>
            <CodeEditor code={SyntaxEg} />

            <h3>Methods</h3>

            <h3><span className="keywords">.test()</span></h3>
            <p>It will check the given string is matching with the pattern. The return type of this method is true or false.</p>

            <CodeEditor code={regExEg1} />            
            <p>return true because pattern "naveen" is in "naveenBharathi"</p>

            <CodeEditor code={regExEg2} />            
            <p>It is case sensitive so it returns false because the pattern "NAVEEN" is in "naveenBharathi".</p>

            <h3><span className="keywords">i</span></h3>
            <CodeEditor code={regExEg3} />            
            <p>return true because we have added a case insensitive(i) modifier, so it will check irrespective of the case.</p>

            <h3><span className="keywords">^</span></h3>
            <CodeEditor code={regExEg4} />            
            <p>returns false because "naveenBharathi" is not starting with "Bharathi".</p>
            <CodeEditor code={regExEg5} />            
            <p>returns true because "naveenBharathi" is starting with "naveen".</p>

            <h3><span className="keywords">$</span></h3>
            <CodeEditor code={regExEg6} />            
            <p>returns true because "naveenBharathi" is end with "Bharathi".</p>
            <CodeEditor code={regExEg7} />            
            <p>returns false because "naveenBharathi" is not end with "naveen".</p>

            <h3><span className="keywords">|</span></h3>
            <CodeEditor code={regExEg8} />            
            <p>return true because "naveenBharathi" has "Bharathi".</p>
            <CodeEditor code={regExEg9} />            
            <p>return false because "naveenBharathi" doesn't have "javascript" or 343.</p>

            <h3>Using the variable in the pattern:</h3>
            <CodeEditor code={regExEg10} />
            <p>Console Output: <span className="keywords">true</span></p>

            <NavigationButtons lName="Type Conversion" lLink="/typeConversion" rName="API Integration" rLink="/integration"/>
            
            <div className="powr-comments" id="6cdb2430_1674713328"></div>
        </Grid>
    )
}

const SyntaxEg = `/pattern/modifier.method()`;
const regExEg1 = `/naveen/.test("naveenBharathi"); `;
const regExEg2 = `/NAVEEN/.test("naveenBharathi");`;
const regExEg3 = `/NAVEEN/i.test("naveenBharathi");`;
const regExEg4 = `/^Bharathi/.test("naveenBharathi"); `;
const regExEg5 = `/^naveen/.test("naveenBharathi"); `;
const regExEg6 = `/Bharathi$/.test("naveenBharathi"); `;
const regExEg7 = `/naveen$/.test("naveenBharathi"); `;
const regExEg8 = `/Bharathi|343/.test("naveenBharathi"); `;
const regExEg9 = `/javascript|343/.test("naveenBharathi");`;
const regExEg10 = `var name = "Bharathi";\nvar result = new RegExp(name).test("naveenBharathi");\nconsole.log(result);`;
export default RegEx;