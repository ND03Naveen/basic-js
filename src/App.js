import './App.css';
import {ResponsiveDrawer} from "./MUI Component/responsiveDrawer"

function App() {
  let url  = window.location.href;
  return (
    <ResponsiveDrawer url={url}/>
  );
}

export default App;
