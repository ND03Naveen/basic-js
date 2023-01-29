import { Grid } from "@mui/material";
import CodeEditor from "../code Editor/codeEditor";
import NavigationButtons from "../navigationbuttonComp/navigationButtons";
function String() {
    return (
        <Grid>
            <h2>Javascript String</h2>

            <NavigationButtons lName="Loop" lLink="/loop" rName="Array" rLink="/array"/>

            <p>It is one of the data types and it is used to store characters/ words/statements.</p>
            <CodeEditor code={stringEg} />

            <h3>Methods</h3>

            <h3><span className="keywords">.length</span></h3>
            <p>It is used to find the number of characters in a string.</p>
            <CodeEditor code={lengthEg} />
            <p>Console Output: <span className="keywords">8</span></p>

            <h3><span className="keywords">.substring()</span></h3>
            <p>It is used to get a particular portion of the sentence.</p>
            <CodeEditor code={substringEg} />
            <p>Console Output: <span className="keywords">India</span></p>

            <h3><span className="keywords">.toUpperCase()</span></h3>
            <p>It is used to convert all the letters into capital letters.</p>
            <CodeEditor code={uppercaseEg} />
            <p>Console Output: <span className="keywords">BHARATHI</span></p>

            <h3><span className="keywords">.toLowerCase()</span></h3>
            <p>It is used to convert all the letters into small letters.</p>
            <CodeEditor code={lowercaseEg} />
            <p>Console Output: <span className="keywords">bharathi</span></p>

            <h3><span className="keywords">.replace()</span></h3>
            <p>It is used to replace any word from the sentence.</p>
            <CodeEditor code={replaceEg} />
            <p>Console Output: <span className="keywords">I was QA developer and I am from tamil nadhu</span></p>

            <h3><span className="keywords">.replaceAll()</span></h3>
            <p>It is used to replace all the mentioned word from the sentence .</p>
            <CodeEditor code={replaceallEg} />
            <p>Console Output: <span className="keywords"> I was QA developer and I was from tamil nadhu</span></p>

            <h3><span className="keywords">.trim()</span></h3>
            <p>It is used to remove the empty space from the start and end of the setence.</p>
            <CodeEditor code={trimEg} />
            <p>Console Output: <span className="keywords">bharathi</span></p>

            <NavigationButtons lName="Loop" lLink="/loop" rName="Array" rLink="/array"/>

            <div className="powr-comments" id="6e9d2e4e_1674713323"></div>
        </Grid>
    )
}

const stringEg = `var name = "Bharathi";\nvar address = "Tamil nadhu,India";`;
const lengthEg = `var name = "Bharathi";\nconsole.log(name.length);`;
const substringEg = `var address = "Tamil nadhu,India";\nvar country = address.substring(12,17);\nconsole.log(country);`;
const uppercaseEg = `var name ="Bharathi";\nname.toUpperCase();\nconsole.log(name);`;
const lowercaseEg = `var name ="BHARATHI";\nname.toLowerCase();\nconsole.log(name);`;
const replaceEg = `var bio = "I am QA developer and I am from tamil nadhu";\nbio.replace("am","was");`;
const replaceallEg = `var bio = "I am QA developer and I am from tamil nadhu";\nbio.replaceAll("am","was");`;
const trimEg = `var name =" bharathi ";\nname.trim;\nconsole.log(name);`;

export default String;