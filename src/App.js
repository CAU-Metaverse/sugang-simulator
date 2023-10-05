import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sugang from "./pages/Sugang";
import Home from "./pages/Home";
import Basket from "./pages/Basket";

import "./styles/cau-ui.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sugang" element={<Sugang />}></Route>
          <Route path="/basket" element={<Basket />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
