import { Grid } from "@mui/material";
import { useEffect } from "react";
import CodeEditor from "../code Editor/codeEditor";
import TouchAppOutlinedIcon from '@mui/icons-material/TouchAppOutlined';

function automateExample() {
  let username = document.getElementById("username");
  if(!username){
    clearInterval(playExample);
    return;
  }
  if (username.value) {
    setTimeout(() => username.value = "Bharathi", 100);
    setTimeout(() => username.value = "Bharath", 200);
    setTimeout(() => username.value = "Bharat", 300);
    setTimeout(() => username.value = "Bhara", 400);
    setTimeout(() => username.value = "Bhar", 500);
    setTimeout(() => username.value = "Bha", 600);
    setTimeout(() => username.value = "Bh", 700);
    setTimeout(() => username.value = "B", 800);
    setTimeout(() => username.value = "", 900);
    setTimeout(() => document.getElementById("touchIconSubmit").style.display = "", 1000);
    setTimeout(() => document.getElementById("touchIconSubmit").style.display = "none", 1300);
    setTimeout(() => document.getElementById("submit").style = "color:white;background:#55ac8f;border-color:white;margin-top:15px", 1300);
    setTimeout(() => document.getElementById("submit").style = "margin-top:15px", 1500);
    setTimeout(() => document.getElementById("submit").click(), 1500);
  }
  else {
    setTimeout(() => username.value = "B", 100);
    setTimeout(() => username.value = "Bh", 200);
    setTimeout(() => username.value = "Bha", 300);
    setTimeout(() => username.value = "Bhar", 400);
    setTimeout(() => username.value = "Bhara", 500);
    setTimeout(() => username.value = "Bharat", 600);
    setTimeout(() => username.value = "Bharath", 700);
    setTimeout(() => username.value = "Bharathi", 800);
    setTimeout(() => document.getElementById("touchIconSubmit").style.display = "", 900);
    setTimeout(() => document.getElementById("touchIconSubmit").style.display = "none", 1200);
    setTimeout(() => document.getElementById("submit").style = "color:white;background:#55ac8f;border-color:white;margin-top:15px", 1200);
    setTimeout(() => document.getElementById("submit").style = "margin-top:15px", 1400);
    setTimeout(() => document.getElementById("submit").click(), 1400);
  }
}
var playExample;
function HtmlDOM() {

  useEffect(() => {
    if (!playExample)
      playExample = setInterval(automateExample, 3200);
  }, [])

  const handleValidation = () => {
    var username = document.getElementById("username");
    var helperText = document.getElementById("helperText");
    if (!username.value) {
      username.style["border"] = "2px solid red";
      helperText.innerHTML = "User name should not be empty";
      helperText.style["color"] = "red"
    }
    else {
      username.style["border"] = "2px solid green";
      helperText.innerHTML = "User name is proper";
      helperText.style["color"] = "green"
    }
  }

  const handleUserName = () => {
    clearInterval(playExample);
  }
  return (
    <Grid>
      <h2>HTML DOM</h2>
      <p>It is used to update or modify the HTML dynamically. </p>
      <h3>Why its needed?</h3>
      <p>Without this, we can't do any updation on the website based on some actions.</p>
      <p> Let's take the below example,
      Here we are updating an HTML ( i.e, updating an input field border color and helper text)  when submit button is clicked based on entered value.</p>
      <Grid container className="HtmlOutput" >
        <Grid>
          <label htmlFor="username">User name *</label><br />
          <input required style={{ marginTop: "5px" }} type="text" id="username" name="username" onClick={handleUserName} /><br />
          <p style={{ margin: "0px", fontSize: "13px", fontStyle: "italic", marginTop: "2px" }} id="helperText">Manditory value</p>
          <button id="submit" style={{ marginTop: "15px" }} onClick={handleValidation}>SUBMIT</button><TouchAppOutlinedIcon id="touchIconSubmit" style={{ position: "relative", left: "-50px", top: "10px", display: "none" }} />
        </Grid>
      </Grid>
      <Grid>
        <h3>Code for the Above Example</h3>
        <CodeEditor code={fullExample} />
      </Grid>
      <h3>How to do it?</h3>
      <p>To do this we should have an id or class name for the element we want to update.</p>
      <h3>Let's breakdown the code line by line</h3>
      <h3>HTML</h3>
      <CodeEditor code={htmlExample} />
      <h3>JS</h3>
      <CodeEditor code={jsExample} />
      <p>In the above example, we have used only the id to access the element by we can also use the <span className="keywords" >class name</span>, <span className="keywords">tag name</span>, and <span className="keywords">CSS selector</span>. The only difference is, it will give an array of elements instead of a single element.</p>
      <div className="powr-comments" id="3d4ddae0_1674375475"></div>
    </Grid>
  );
}


const fullExample = '<html>\n\n<style>\n    #username {\n        margin-top: 5px;\n    }\n\n    #helperText {\n        margin: 0px;\n        font-size: 13px;\n        font-style: italic;\n        margin-top: 2px;\n    }\n</style>\n\n<body>\n    <h2>Validation </h2>\n    <label for="username">User name *</label><br>\n    <input id="username"><br>\n    <p id="helperText">Manditory value</p>\n    <button style="margin-top:15px" onclick="handleValidation()">SUBMIT</button>\n</body>\n\n\x3Cscript>\n    function handleValidation() {\n        var username = document.getElementById("username");\n        var helperText = document.getElementById("helperText");\n        if (!username.value) {\n            username.style["border"] = "2px solid red";\n            helperText.innerHTML = "User name should not be empty";\n            helperText.style["color"] = "red"\n        }\n        else {\n            username.style["border"] = "2px solid green";\n            helperText.innerHTML = "User name is proper";\n            helperText.style["color"] = "green"\n        }\n    }\n\x3C/script>\n\n</html>'
const htmlExample = '//label for the username field\n  <label for="username">User name *</label><br>\n  \n//username Field with id="username", it will be useful to access the value and change the border-color.\n  <input id="username"><br>\n  \n//helper text for the user name field, has an id="helperText", it will be useful to change the text and color.\n  <p id="helperText">Manditory value</p>\n  \n//button with click function, all the DOM operations are going to be happen inside it.\n  <button onclick="handleValidation()">SUBMIT</button>';
const jsExample = '\x3Cscript>\n    function handleValidation() { //function will execute when the button is clicked\n    \n        //document.getElementById -> To access the HTML Element by ID\n        \n        //stored the input field element into the username variable, we can use this variable to access and update the username field\n        var username = document.getElementById("username");\n        \n        //stored the input field helper text element into the username variable, we can use this variable to update the helper text\n        var helperText = document.getElementById("helperText");\n        \n        //username.value -> it gives the value entered in the User name field\n        if (!username.value) { //if the value is an empty        \n            username.style["border"] = "2px solid red"; //updating a username field border-color\n            helperText.innerHTML = "User name should not be empty"; //updating a helper text content\n            helperText.style["color"] = "red" //updating the helper text color\n        }\n        else { //if the input field has values\n            username.style["border"] = "2px solid green"; //updating a username field border-color\n            helperText.innerHTML = "User name is proper"; //updating a helper text content\n            helperText.style["color"] = "green" //updating the helper text color\n        }\n    }\n\x3C/script>';
export default HtmlDOM;