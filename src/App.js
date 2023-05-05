// import './App.css';
import MainHome from "./Main/MainHome";
import NasaHome from "./Nasa/NasaHome";
import CovidHome from "./Covid/CovidHome";
import Cryptomain from "./Crypto/CryptoMain";
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <div className="App">
    
      <Routes>
        <Route path="/" Component={MainHome}></Route>
        <Route path="/nasa" Component={NasaHome}></Route>
        <Route path="/covid" Component={CovidHome}></Route>
        <Route path="/crypto" Component={Cryptomain}></Route>
      </Routes>
    </div>
  );
}

export default App;
