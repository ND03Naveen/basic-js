import './App.css';
<<<<<<< HEAD
import TempleDataupload from "./templeDataupload"
// import ResponsiveDrawer from "./MUI Component/responsiveDrawer"

// function App() {
//   return (
//     <ResponsiveDrawer/>
//   );
// }
import { Route, Routes } from "react-router-dom";
=======
import {ResponsiveDrawer} from "./MUI Component/responsiveDrawer"
>>>>>>> 714b651d98a809f523febd1a6de1a17815ec5a00

function App() {
  let url  = window.location.href;
  return (
<<<<<<< HEAD
    <React.Fragment>
            <Routes>
                <Route path="/admin" element={<TempleDataupload/>}></Route>
            </Routes>
        </React.Fragment>
=======
    <ResponsiveDrawer url={url}/>
>>>>>>> 714b651d98a809f523febd1a6de1a17815ec5a00
  );
}

export default App;
