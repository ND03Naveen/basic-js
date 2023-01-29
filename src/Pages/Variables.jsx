import { Grid } from "@mui/material";
import CodeEditor from "../code Editor/codeEditor";
import NavigationButtons from "../navigationbuttonComp/navigationButtons";
function Variables() {
    return (
        <Grid>
            <h2>Javascript Variables</h2>
            <NavigationButtons lName="Variables" lLink="" rName="Operator" rLink="/operator"/>
            <p>It is used to store the value. The value may be a <span className="keywords">number</span>, <span className="keywords">string</span>, <span className="keywords">array</span>, <span className="keywords">boolean</span>, or <span className="keywords">object.</span></p>

            <CodeEditor code={valueTypeEg} />

            <p>In javascript, the variable can hold any type of value, it is not like any other language.</p>
            <p>Let us discuss this by comparing c language and Javascript variables with examples.</p>

            <CodeEditor code={comparisonEg} />

            <p>In the above comparison, we can see keywords(char, int, bool) are getting changed based on value but in Javascript, we can use var or let, or const to store any type of value.</p>

            <h3>Types of variables</h3>
            <p><span className="keywords">let </span>&nbsp; (block scope),&nbsp;
                <span className="keywords">var </span> &nbsp;(functional scope) and&nbsp;
                <span className="keywords">const </span> &nbsp;values can not be changeable.</p>

            <h3>Block Scope(Let)</h3>
            <p>Parenthesis ({ }) is called a block. let variable has lifetime only inside a block.</p>
            <CodeEditor code={letEg1} />
            <p>Console Output: <span className="keywords">Bharathi</span></p>
            <CodeEditor code={letEg2} />
            <p>Console Output: <span className="keywords">undefined</span></p>
            <p>because the let variable is created inside an if block, so we can access only within the if block.</p>

            <h3>Functional Scope(var)</h3>
            <p>var variable has a lifetime inside a functional block.</p>
            <CodeEditor code={varEg1} />
            <p>Console Output: <span className="keywords">Bharathi</span></p>
            <CodeEditor code={varEg2} />
            <p>Console Output: <span className="keywords">Bharathi</span></p>
            <p>because the var variable has a lifetime inside an entire function.</p>

            <h3>Const</h3>
            <p>The const variable value can not be changeable after setting some values in it.</p>
            <CodeEditor code={constEg} />
            <p>Console Output: <span className="keywords">Uncaught TypeError: Assignment to constant variable</span></p>
            <p>because the variable name is the const type and it's not changeable.</p>

            <NavigationButtons lName="Variables" lLink="" rName="Operator" rLink="/operator"/>
            
            <div className="powr-comments" id="31f74d4e_1674414411"></div>
        </Grid>
    )
}

const valueTypeEg = `number :\ne.g, 1,22.0,23.4566,-98,-8.11,etc...\n\nstring :\nUsed to store characters/words. \ne.g, "Bharathi", "Javascript", etc...\n\nboolean :\ntrue or false value.\n\nobject :\nUsed to store collection of information in a formatted way.\ne.g, user Detail \n{ "name":"Bharathi", "dob":"28-03-1996", "city":"kallakurichi" }\n\narray :\nUsed to store multiple numbers, strings, boolean, and objects.\ne.g, \n1.[1,2,3,4] \n2.["Bharathi", "Naveen"] \n3.[true, false, true] \n4.[{"name":"Naveen"},{"name":"Bharathi"}] \n5.[1, "Bharathi", true,{"name": "Naveen"}]`;
const comparisonEg = `To store the string value:\nIn C -&gt; char name[15] = "Bharathi";\nIn Js -&gt; var name = "Bharathi";\n\nTo store number value:\nIn C -&gt; int count = 1;\nIn Js -&gt; var count = 1;\n\nTo store Boolean value:\nIn C -&gt; bool isActive = true;\nIn Js -&gt; var isActive = true;`;
const letEg1 = `function demo() {\n  if(true){\n    let name = "Bharathi";\n    console.log(name);\n  }  \n}\n\ndemo();`;
const letEg2 = `function demo() {\n  if(true){\n    let name = "Bharathi";\n  }\n  console.log(name);\n}\n\ndemo();`;
const varEg1 = `function demo() {\n  if(true){\n    var name = "Bharathi";\n    console.log(name);\n  }  \n}\n\ndemo();`;
const varEg2 = `function demo() {\n  if(true){\n    var name = "Bharathi";\n  }\n  console.log(name);\n}\n\ndemo();`;
const constEg = `const name = "Bharathi";\nname = "naveen";`;
export default Variables;