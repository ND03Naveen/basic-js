import { Grid } from "@mui/material";
import CodeEditor from "../code Editor/codeEditor";
import NavigationButtons from "../navigationbuttonComp/navigationButtons";
function Operator() {
    return (
        <Grid>
            <h2>Javascript Operators</h2>

            <NavigationButtons lName="Variable" lLink="/variables" rName="If Else" rLink="/ifElse"/>

            <h3>== (Equal to)</h3>
            <p>This operator is used to compare the two values. The return value of this operator is true or false.</p>
            <CodeEditor code={equalEg1} />
            <p>Console Output: <span className="keywords">true</span></p>
            <CodeEditor code={equalEg2} />
            <p>Console Output: <span className="keywords">false</span></p>

            <h3>&& (AND)</h3>
            <p>This operator is used to check all the values are true. The return value of this operator is true or false.</p>
            <CodeEditor code={andEg1} />
            <p>Console Output: <span className="keywords">true</span></p>
            <CodeEditor code={andEg2} />
            <p>Console Output: <span className="keywords">false</span></p>

            <h3>|| (OR)</h3>
            <p>This operator is used to check any one of the values is true. The return value of this operator is true or false.</p>
            <CodeEditor code={orEg1} />
            <p>Console Output: <span className="keywords">true</span></p>
            <CodeEditor code={orEg2} />
            <p>Console Output: <span className="keywords">false</span></p>

            <h3>! (NOT)</h3>
            <p>This operator is used to reverse the value between true and false. The return value of this operator is true or false.</p>
            <CodeEditor code={notEg1} />
            <p>Console Output: <span className="keywords">true</span></p>
            <CodeEditor code={notEg2} />
            <p>Console Output: <span className="keywords">false</span></p>

            <h3>++ (Increment)</h3>
            <p>This operator is used to increase the value by 1.</p>
            <CodeEditor code={incrementEg} />
            <p>Console Output: <span className="keywords">2</span></p>

            <h3>-- (decrement)</h3>
            <p>This operator is used to decrement the value by 1.</p>
            <CodeEditor code={decrementEg} />
            <p>Console Output: <span className="keywords">10</span></p>

            <h3>?: (ternary)</h3>
            <p>This operator is shorthand for an if-else conditional statement.</p>
            <h3>using If Else</h3>
            <CodeEditor code={ifElseEg} />
            <p>Console Output: <span className="keywords">true</span></p>
            <h3>using ternary</h3>
            <CodeEditor code={ternaryEg} />
            <p>Console Output: <span className="keywords">true</span></p>

            <NavigationButtons lName="Variable" lLink="/variables" rName="If Else" rLink="/ifElse"/>

            <div className="powr-comments" id="bbfa5f74_1674713332"></div>
        </Grid>
    )
}

const equalEg1 = `var result = 1==1;\nconsole.log(result);'`;
const equalEg2 = `var result = 1==2;\nconsole.log(result);'`;
const andEg1 = `if(1 &amp;&amp; "Bharathi"){\n  console.log(true);\n}\nelse{\n  console.log(false);\n}`;
const andEg2 = `if(1 &amp;&amp; "Bharathi" &amp;&amp; 0){\n  console.log(true);\n}\nelse{\n  console.log(false);\n}`;
const orEg1 = `if(1 || 0){\n  console.log(true);\n}\nelse{\n  console.log(false);\n}`;
const orEg2 = `if(0 || null || false){\n  console.log(true);\n}\nelse{\n  console.log(false);\n}`;
const notEg1 = `if(1){\n  console.log(true);\n}\nelse{\n  console.log(false);\n}`;
const notEg2 = `if(!1){\n  console.log(true);\n}\nelse{\n  console.log(false);\n}`;
const incrementEg = `var count = 1;\ncount++;\nconsole.log(count);`;
const decrementEg = `var count = 11;\ncount--;\nconsole.log(count);`;
const ifElseEg = `if(1==1){\n  console.log("true")\n}\nelse{\n  console.log("false")\n}`;
const ternaryEg = `1==1?console.log("true"):console.log("false");`;
export default Operator;