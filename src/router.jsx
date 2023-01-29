import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import HtmlDOM from "./Pages/HtmlDOM"
import Variables from "./Pages/Variables";
import Functions from "./Pages/Functions";
import IfElse from './Pages/IfElse';
import Operator from './Pages/Operator';
import Loop from './Pages/Loop';
import String from './Pages/String';
import Array from './Pages/Array';
import TypeConversion from './Pages/TypeConversion';
import RegEx from './Pages/RegEx';
import Integration from './Pages/Integration';
import Home from "./Pages/Home";
import StartPattern from './Pattern/Star';
import VerticalLinePattern from './Pattern/VerticalLine';
import HorizontalLinepattern from './Pattern/HorizontalLine';
import SquarePattern from './Pattern/Square';
import RightTrianglepattern from './Pattern/RightTriangle';
import LeftTrianglepattern from './Pattern/LeftTriangle';
import Trianglepattern from './Pattern/Triangle';
import Reversetrianglepattern from './Pattern/Reversetriangle';
import Diamondpattern from './Pattern/Diamond';
function RouterComponent() {
    
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
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
                <Route path="/HtmlDOM" element={<HtmlDOM />}></Route>                
            </Routes>
        </React.Fragment>
    );
}

export default RouterComponent;