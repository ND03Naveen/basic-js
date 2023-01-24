import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import HtmlDOM from "./Pages/HtmlDOM"
import Variables from "./Pages/Variables";
import Functions from "./Pages/Functions";
import IfElse from './Pages/IfElse';
function RouterComponent() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Variables />}></Route>
                <Route path="/variables" element={<Variables />}></Route>
                <Route path="/functions" element={<Functions />}></Route>
                <Route path="/ifElse" element={<IfElse />}></Route>
                <Route path="/HtmlDOM" element={<HtmlDOM />}></Route>                
            </Routes>
        </React.Fragment>
    );
}

export default RouterComponent;