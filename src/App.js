import './App.css';
import TempleDataupload from "./templeDataupload"
// import ResponsiveDrawer from "./MUI Component/responsiveDrawer"

// function App() {
//   return (
//     <ResponsiveDrawer/>
//   );
// }
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
            <Routes>
                <Route path="/admin" element={<TempleDataupload/>}></Route>
            </Routes>
        </React.Fragment>
  );
}

export default App;
