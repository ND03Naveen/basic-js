import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import HtmlDOM from "./Pages/HtmlDOM"
import Variables from "./Pages/Variables"
function RouterComponent() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Variables />}></Route>
                <Route path="/HtmlDOM" element={<HtmlDOM />}></Route>
                <Route path="/variables" element={<Variables />}></Route>
            </Routes>
        </React.Fragment>
    );
}

export default RouterComponent;