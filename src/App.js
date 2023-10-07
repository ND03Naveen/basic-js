import './App.css';
import TempleDataupload from "./templeDataupload"
import * as React from 'react';

// import ResponsiveDrawer from "./MUI Component/responsiveDrawer"

// function App() {
//   return (
//     <ResponsiveDrawer/>
//   );
// }
import { Route, Routes } from "react-router-dom";

function App() {
  let url  = window.location.href;
  return (
    <React.Fragment>
            <Routes>
                <Route path="/" element={<TempleDataupload/>}></Route>
            </Routes>
        </React.Fragment>
  );
}

export default App;
