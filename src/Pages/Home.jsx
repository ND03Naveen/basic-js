import { Grid } from "@mui/material";
import MultiActionAreaCard from "../MUI Component/cardComponent"

const patterns = [{
    name: "Star",
    link: "starPattern",
    output: ` 
    *`
},{
    name: "Vertical Line",
    link: "verticalLinePattern",
    output: ` 
    * 
    * 
    * 
    * 
    * `
},{
    name: "Horizontal Line",
    link: "horizontalLinepattern",
    output: ` 
    *  *  *  *  * `
},{
    name: "Square",
    link: "squarepattern",
    output: ` 
    *  *  *  *  *
    *  *  *  *  *
    *  *  *  *  *
    *  *  *  *  *
    *  *  *  *  *`
},{
    name: "Right Triangle",
    link: "rightTrianglepattern",
    output: ` 
    * 
    *  *
    *  *  *
    *  *  *  *
    *  *  *  *  *`
},{
    name: "Left Triangle",
    link: "leftTrianglepattern",
    output: ` 
    *  *  *  *  *
    *  *  *  *
    *  *  *
    *  * 
    *`
},{
    name: "Triangle",
    link: "trianglepattern",
    output: ` 
                *  
             *  *  *  
          *  *  *  *  *
       *  *  *  *  *  *  * 
    *  *  *  *  *  *  *  *  *`
},{
    name: "Reverse Triangle",
    link: "reversetrianglepattern",
    output: ` 
    *  *  *  *  *  *  *  *  *
       *  *  *  *  *  *  *
          *  *  *  *  *
             *  *  *  
                *  `
},{
    name: "Diamond",
    link: "diamondpattern",
    output: ` 
          *  
       *  *  *  
    *  *  *  *  *
       *  *  *   
          * `
}]

function Home() {
    return (
        <Grid>
            <h3>Patterns</h3>
            <Grid style={{display: "flex",justifyContent: "space-evenly",flexWrap:"wrap"}}>
                {
                    patterns.map((val, idx) => <MultiActionAreaCard name={val.name} output={val.output} link={val.link} />)
                }
            </Grid>
        </Grid>
    )
}

export default Home;