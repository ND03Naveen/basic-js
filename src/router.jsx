import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import HtmlDOM from "./Pages/HtmlDOM"

function RouterComponent() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<HtmlDOM />}></Route>
                <Route path="/HtmlDOM" element={<HtmlDOM />}></Route>
            </Routes>
        </React.Fragment>
    );
}

export default RouterComponent;