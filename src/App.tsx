import Home from "./views/home/home";
import "./style.css";
import { Route, Routes } from "react-router-dom";

import Favourite from "./components/favourite/favourite";

function App() {
  return (
    <div>
      <Home />
      {/* <img
        src={require("./assets/background.png")}
        alt=""
        className="backgroundImg"
      /> */}

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes> */}
    </div>
  );
}

export default App;
