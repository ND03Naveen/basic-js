import { Grid } from "@mui/material";
import CodeEditor from "../code Editor/codeEditor";
import NavigationButtons from "../navigationbuttonComp/navigationButtons";
function Loop() {
    return (
        <Grid>
            <h2>Javascript Loop</h2>

            <NavigationButtons lName="Functions" lLink="/functions" rName="String" rLink="/string" />

            <p>It is used to do the same work multiple times.</p>

            <h3>Syntax</h3>
            <CodeEditor code={SyntaxEg} />

            <p>Let's discuss, for example, printing numbers from 1 to 10.</p>

            <h3>Without loop</h3>
            <CodeEditor code={withoutLoopEg} />

            <h3>With loop</h3>
            <CodeEditor code={loopEg} />

            <p>From the above example, we can see the number of line differences between them. We can simply do it by using the loop.</p>

            <h3>Looping an object</h3>
            <p><span className="keywords">for in</span>&nbsp; method is to loop every attribute in the object.</p>
            <CodeEditor code={forinEg} />

            <p>Console Output: <br /><br />
                <span className="keywords">name Bharathi</span><br /><br />
                <span className="keywords">dob 28-03-1996</span><br /><br />
                <span className="keywords">city kallakurichi</span></p>

            <NavigationButtons lName="Functions" lLink="/functions" rName="String" rLink="/string" />

            <div className="powr-comments" id="2302a313_1674713336"></div>
        </Grid>
    )
}

const SyntaxEg = `for(initial value ; condition to stop the loop ; increment/decrement){\n\t//work\n}`;
const withoutLoopEg = `console.log(1);\nconsole.log(2);\nconsole.log(3);\nconsole.log(4);\nconsole.log(5);\nconsole.log(6);\nconsole.log(7);\nconsole.log(8);\nconsole.log(9);\nconsole.log(10);`;
const loopEg = `for(var i = 1 ; i&lt;=10 ; i++){\n\tconsole.log(i);\n}`;
const forinEg = `var user = {\n    "name": "Bharathi",\n    "dob": "28-03-1996",\n    "city": "kallakurichi"\n};\nfor (let key in user) {\n    console.log(key, user[key]);\n}`;
export default Loop;