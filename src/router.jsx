import * as React from 'react';
import { Route, Routes } from "react-router-dom";
// import HtmlDOM from "./Pages/HtmlDOM"
// import Variables from "./Pages/Variables";
// import Functions from "./Pages/Functions";
// import IfElse from './Pages/IfElse';
// import Operator from './Pages/Operator';
// import Loop from './Pages/Loop';
// import String from './Pages/String';
// import Array from './Pages/Array';
// import TypeConversion from './Pages/TypeConversion';
// import RegEx from './Pages/RegEx';
// import Integration from './Pages/Integration';
// import Home from "./Pages/Home";
// import StartPattern from './Pattern/Star';
// import VerticalLinePattern from './Pattern/VerticalLine';
// import HorizontalLinepattern from './Pattern/HorizontalLine';
// import SquarePattern from './Pattern/Square';
// import RightTrianglepattern from './Pattern/RightTriangle';
// import LeftTrianglepattern from './Pattern/LeftTriangle';
// import Trianglepattern from './Pattern/Triangle';
// import Reversetrianglepattern from './Pattern/Reversetriangle';
// import Diamondpattern from './Pattern/Diamond';
import Terms from './Pages/googleAdsense/Terms';
import ContactUs from './Pages/googleAdsense/ContactUs';
import AboutUs from './Pages/googleAdsense/AboutUs';
import PrivacyPolicy from './Pages/googleAdsense/PrivacyPolicy';


import AiPages from './Pages/AI Pages/aiPages';
import IntroductionToJavaScript from './Pages/AI Pages/IntroductionToJavaScript.json';
import VariablesAndDatatypes from './Pages/AI Pages/VariablesAndDatatypes.json';
import Operators from "./Pages/AI Pages/Operators.json";
import Conditionals from "./Pages/AI Pages/Conditionals.json";
import Loops from "./Pages/AI Pages/Loops.json";
import Arrays from "./Pages/AI Pages/Arrays.json";
import Functions from "./Pages/AI Pages/Functions.json";
import Recursive from "./Pages/AI Pages/Recursive.json";
import Objects from "./Pages/AI Pages/Objects.json";
import Events from "./Pages/AI Pages/Events.json";
import DOMManipulation from "./Pages/AI Pages/DOM Manipulation.json";
import DebuggingTechniques from "./Pages/AI Pages/Debugging Techniques.json";
import ErrorHandling from "./Pages/AI Pages/Error Handling.json";
import AJAX from "./Pages/AI Pages/AJAX.json";
import JSON from "./Pages/AI Pages/JSON.json";
import LocalStorage from "./Pages/AI Pages/Local Storage.json";
import ES6Features from "./Pages/AI Pages/ES6 Features.json";
import RegularExpressions from "./Pages/AI Pages/Regular Expressions.json";
import Promises from "./Pages/AI Pages/Promises.json";
import CallbackFunctions from "./Pages/AI Pages/Callback Functions.json";
import HigherOrderFunctions from "./Pages/AI Pages/Higher Order Functions.json";
import ArrowFunctions from "./Pages/AI Pages/Arrow Functions.json";
import SpreadandRestOperators from "./Pages/AI Pages/Spread and Rest Operators.json";
import Destructuring from "./Pages/AI Pages/Destructuring.json";
import TemplateLiterals from "./Pages/AI Pages/Template Literals.json";
import Classes from "./Pages/AI Pages/Classes.json";
import Inheritance from "./Pages/AI Pages/Inheritance.json";
import Modules from "./Pages/AI Pages/Modules.json";
import AsynchronousProgramming from "./Pages/AI Pages/Asynchronous Programming.json";
import WebAPIs from "./Pages/AI Pages/Web APIs.json";
import ThirdpartyLibraries from "./Pages/AI Pages/Third-party Libraries.json";
import Strings from "./Pages/AI Pages/Strings.json";
import Generators from "./Pages/AI Pages/Generators.json";
import Symbol from "./Pages/AI Pages/Symbol.json";
import SetsAndMaps from "./Pages/AI Pages/SetsAndMaps.json";

function RouterComponent() {
    
    return (
        <React.Fragment>
            <Routes>
                {/* <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/pattern" element={<Home />}></Route>
                <Route path="/starPattern" element={<StartPattern />}></Route>
                <Route path="/verticalLinePattern" element={<VerticalLinePattern />}></Route>
                <Route path="/horizontalLinepattern" element={<HorizontalLinepattern />}></Route>
                <Route path="/squarepattern" element={<SquarePattern />}></Route>
                <Route path="/rightTrianglepattern" element={<RightTrianglepattern />}></Route>
                <Route path="/leftTrianglepattern" element={<LeftTrianglepattern />}></Route>
                <Route path="/trianglepattern" element={<Trianglepattern />}></Route>
                <Route path="/reversetrianglepattern" element={<Reversetrianglepattern />}></Route>
                <Route path="/diamondpattern" element={<Diamondpattern />}></Route>
                <Route path="/variables" element={<Variables />}></Route>
                <Route path="/operator" element={<Operator />}></Route>
                <Route path="/functions" element={<Functions />}></Route>
                <Route path="/ifElse" element={<IfElse />}></Route>
                <Route path="/loop" element={<Loop />}></Route>
                <Route path="/string" element={<String />}></Route>
                <Route path="/array" element={<Array />}></Route>
                <Route path="/typeConversion" element={<TypeConversion />}></Route>
                <Route path="/regex" element={<RegEx />}></Route>
                <Route path="/integration" element={<Integration />}></Route> 
                <Route path="/HtmlDOM" element={<HtmlDOM />}></Route>    */}
                <Route path="/" element={<AiPages commentID={"c04f17ea_1679249956"} data={IntroductionToJavaScript}/>}></Route>
                <Route path="/Introduction to JavaScript" element={<AiPages commentID={"c04f17ea_1679249956"} data={IntroductionToJavaScript}/>}></Route>
                <Route path="/Variables and Data Types" element={<AiPages commentID={"df0aa12a_1679250331"} data={VariablesAndDatatypes}/>}></Route>
                <Route path="/Operators" element={<AiPages commentID={"48d46fcc_1679250360"} data={Operators}/>}></Route>
                <Route path="/Conditionals" element={<AiPages commentID={"ef546a68_1679250387"} data={Conditionals}/>}></Route>
                <Route path="/Loops" element={<AiPages commentID={"97c3dacd_1679250414"} data={Loops}/>}></Route>
                <Route path="/Arrays" element={<AiPages commentID={"d8fad8b4_1679250437"} data={Arrays}/>}></Route>
                <Route path="/Functions" element={<AiPages commentID={"1785f83f_1679250462"} data={Functions}/>}></Route>
                <Route path="/Recursive" element={<AiPages commentID={"03b6fd1f_1679593875"} data={Recursive}/>}></Route>
                <Route path="/Objects" element={<AiPages commentID={"c06c67cc_1679250492"} data={Objects}/>}></Route>
                <Route path="/Events" element={<AiPages commentID={"de506834_1679250517"} data={Events}/>}></Route>
                <Route path="/DOM Manipulation" element={<AiPages commentID={"4e7d90f8_1679250545"} data={DOMManipulation}/>}></Route>
                <Route path="/Debugging Techniques" element={<AiPages commentID={"42ba477d_1679250576"} data={DebuggingTechniques}/>}></Route>
                <Route path="/Error Handling" element={<AiPages commentID={"0578b4fc_1679250601"} data={ErrorHandling}/>}></Route>
                <Route path="/AJAX" element={<AiPages commentID={"7fbf9a5b_1679250625"} data={AJAX}/>}></Route>
                <Route path="/JSON" element={<AiPages commentID={"47ff2057_1679250679"} data={JSON}/>}></Route>
                <Route path="/Local Storage" element={<AiPages commentID={"81b1882e_1679250702"} data={LocalStorage}/>}></Route>
                <Route path="/ES6 Features" element={<AiPages commentID={"9f3ae3af_1679250725"} data={ES6Features}/>}></Route>
                <Route path="/Regular Expressions" element={<AiPages commentID={"7d8494a4_1679250748"} data={RegularExpressions}/>}></Route>
                <Route path="/Promises" element={<AiPages commentID={"6d1014d8_1679250771"} data={Promises}/>}></Route>
                <Route path="/Callback Functions" element={<AiPages commentID={"e01ee0c2_1679250794"} data={CallbackFunctions}/>}></Route>
                <Route path="/Higher Order Functions" element={<AiPages commentID={"3e7f54df_1679250818"} data={HigherOrderFunctions}/>}></Route>
                <Route path="/Arrow Functions" element={<AiPages commentID={"559854a5_1679250859"} data={ArrowFunctions}/>}></Route>
                <Route path="/Spread and Rest Operators" element={<AiPages commentID={"46103142_1679250969"} data={SpreadandRestOperators}/>}></Route>
                <Route path="/Destructuring" element={<AiPages commentID={"fe5ba0e6_1679251008"} data={Destructuring}/>}></Route>
                <Route path="/Template Literals" element={<AiPages commentID={"f967365d_1679251045"} data={TemplateLiterals}/>}></Route>
                <Route path="/Classes" element={<AiPages commentID={"eb7d6fda_1679251080"} data={Classes}/>}></Route>
                <Route path="/Inheritance" element={<AiPages commentID={"caae080a_1679251114"} data={Inheritance}/>}></Route>
                <Route path="/Modules" element={<AiPages commentID={"fefc9eac_1679251140"} data={Modules}/>}></Route>
                <Route path="/Asynchronous Programming" element={<AiPages commentID={"5c57954d_1679251193"} data={AsynchronousProgramming}/>}></Route>
                <Route path="/Web APIs" element={<AiPages commentID={"7f14f58d_1679251230"} data={WebAPIs}/>}></Route>
                <Route path="/Third-party Libraries" element={<AiPages commentID={"b01b0727_1679251257"} data={ThirdpartyLibraries}/>}></Route>
                <Route path="/Strings" element={<AiPages commentID={"ddeba7b9_1679570208"} data={Strings}/>}></Route>
                <Route path="/Generators" element={<AiPages commentID={"683a40ab_1679593933"} data={Generators}/>}></Route>
                <Route path="/Symbol" element={<AiPages commentID={"e1d2e6f0_1679593932"} data={Symbol}/>}></Route>
                <Route path="/Sets And Maps" element={<AiPages commentID={"b21664a5_1679593924"} data={SetsAndMaps}/>}></Route>
                <Route path="/undefined" element={<p>No results found for your search term.</p>}></Route>
                <Route path="/contactUs" element={<ContactUs />}></Route> 
                <Route path="/terms" element={<Terms />}></Route> 
                <Route path="/privacyPolicy" element={<PrivacyPolicy />}></Route>
                <Route path="/aboutUs" element={<AboutUs />}></Route>                
            </Routes>
        </React.Fragment>
    );
}

export default RouterComponent;