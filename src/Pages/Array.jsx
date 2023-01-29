import { Grid } from "@mui/material";
import CodeEditor from "../code Editor/codeEditor";
import NavigationButtons from "../navigationbuttonComp/navigationButtons";
function Array() {
    return (
        <Grid>
            <h2>Javascript Array</h2>

            <NavigationButtons lName="String" lLink="/string" rName="Type Conversion" rLink="/typeConversion"/>

            <p>It is one of the data types and it is used to store more than one value.</p>
            <CodeEditor code={arrayEg} />

            <h3>Methods</h3>

            <h3><span className="keywords">.map</span></h3>
            <p>It is used to loop and update each value in the array. return is very important inside the map function to get the updated values.</p>
            <p>This function has 3 arguments and all 3 are optional,</p>
            <p><span className="keywords">value</span>  current value of the array</p>
            <p><span className="keywords">index</span>  current index of the array</p>
            <p><span className="keywords">array</span>  whole array</p>
            <CodeEditor code={mapEg1} />
            <p>Console Output: <br /><br />
                <span className="keywords">10 0 [10,20,30]</span><br /><br />
                <span className="keywords">20 1 [10,20,30]</span><br /><br />
                <span className="keywords">30 2 [10,20,30]</span>
            </p>
            <CodeEditor code={mapEg2} />
            <p>Console Output: <br /><br />
                <span className="keywords">{`{"name":"Bharathi"} 0 [{"name":"Bharathi"},{"name":"Naveen"}]`}</span><br /><br />
                <span className="keywords">{`{"name":"Naveen"} 1 [{"name":"Bharathi"},{"name":"Naveen"}]`}</span>
            </p>
            <h3>Example: add 10 to each value of the array </h3>
            <CodeEditor code={mapEg3} />
            <p>Console Output: <span className="keywords">[11,12,13]</span></p>

            <h3><span className="keywords">.filter</span></h3>
            <p>It is used to filter the array. it won't update the value like the map, it just removes the values based on the condition.</p>
            <p>Inside a filter function, if the current loop returns false, that value gets removed from the array, if true it will be retained in the array. This function also has 3 arguments and all 3 are optional.</p>
            <h3>Example: filter value 10 and 40 from the below array</h3>
            <CodeEditor code={filterEg} />
            <p>Console Output: <span className="keywords">[20,40]</span></p>

            <h3><span className="keywords">.push</span></h3>
            <p>It is used to insert the values into an array. it will be added at end of the array.</p>
            <h3>Example: add one new user into array </h3>
            <CodeEditor code={pushEg} />
            <p>Console Output: <span className="keywords">{`[{"name":"Bharathi"},{"name":"Naveen"},"name":"NaveenBharathi"}]`}</span></p>

            <NavigationButtons lName="String" lLink="/string" rName="Type Conversion" rLink="/typeConversion"/>

            <div className="powr-comments" id="8c93aad3_1674713343"></div>
        </Grid>
    )
}


const arrayEg = `var names = ["Bharathi", "Naveen"];\nvar numbers = [1,2,3];\nvar arr = [1, "Bharathi"];`;
const mapEg1 = `var numbers = [10,20,30];\nnumbers.map((value,index,array) => {\n  console.log(value,index,array);\n});`;
const mapEg2 = `var user = [{"name":"Bharathi"},{"name":"Naveen"}];\nuser.map((value,index,array) => {\n  console.log(value,index,array);\n});`;
const mapEg3 = `var numbers = [1,2,3];\nnumbers = numbers.map(value => value + 10);\nconsole.log(numbers);`;
const filterEg = `var numbers = [10, 20, 30, 40];\nnumbers = numbers.filter(value => {\n    if (value == 10 || value == 40)\n        return false; // return false to remove from an array\n    else\n        return true; // return true to retain in an array\n});\nconsole.log(numbers);`;
const pushEg = `var user = [{"name":"Bharathi"},{"name":"Naveen"}];\nuser.push({"name":"NaveenBharathi"});\nconsole.log(user);`;

export default Array;