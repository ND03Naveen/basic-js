import { Grid } from "@mui/material";
import CodeEditor from "../code Editor/codeEditor";
import NavigationButtons from "../navigationbuttonComp/navigationButtons";
function TypeConversion() {
    return (
        <Grid>
            <h2>Javascript Type Conversion</h2>

            <NavigationButtons lName="Array" lLink="/array" rName="Regular Expression" rLink="/regex"/>

            <p>From the below examples, we are going to learn how to convert from one type to another.</p>

            <p><span className="keywords">typeof()</span> method is used to check the type of the variable,</p>
            <CodeEditor code={typeofEg} />
            <p>In javascript, both array and object are considered object types.</p>

            <h3>Number to String</h3>
            <CodeEditor code={numberToStringEg} />
            <p>Console Output: <span className="keywords">"100"</span></p>

            <h3>String to Number</h3>
            <CodeEditor code={stringToNumberEg} />
            <p>Console Output: <span className="keywords">100</span></p>

            <h3>Array to String</h3>
            <CodeEditor code={arrayToStringEg} />
            <p>Console Output: <span className="keywords">"10,20,30"</span></p>

            <h3>String to Array</h3>
            <CodeEditor code={stringToArrayEg} />
            <p>Console Output: <span className="keywords">['10', '20', '30']</span></p>

            <h3>Object to String</h3>
            <CodeEditor code={objectToStringEg} />
            <p>Console Output: <span className="keywords">{` '{"name": "Bharathi"}'`}</span></p>

            <h3>String to Object</h3>
            <CodeEditor code={stringToObjectEg} />
            <p>Console Output: <span className="keywords">{` {name: 'Bharathi'}`}</span></p>

            <NavigationButtons lName="Array" lLink="/array" rName="Regular Expression" rLink="/regex"/>

            <div className="powr-comments" id="6662bf01_1686470694"></div>
        </Grid>
    )
}

const typeofEg = `typeof(1); //number\ntypeof("100"); //string\ntypeof([]); //object\ntypeof({}); //object`;
const numberToStringEg = `var mark = 100;\nvar stringValue = mark.toString();\nconsole.log(stringValue);`;
const stringToNumberEg = `var mark = "100";\nvar integerValue = Number(mark);\nconsole.log(integerValue);`;
const arrayToStringEg = `var mark = [10,20,30];\nvar stringValue = mark.join(",");\nconsole.log(stringValue);`;
const stringToArrayEg = `var mark = "10,20,30";\nvar arrayValue = mark.split(",");\nconsole.log(arrayValue);`;
const objectToStringEg = `var mark = {"name":"Bharathi"};\nvar stringValue = JSON.stringify(mark);\nconsole.log(stringValue);`;
const stringToObjectEg = `var user = '{"name":"Bharathi"}';\nvar objectValue = JSON.parse(user);\nconsole.log(objectValue);`;
export default TypeConversion;