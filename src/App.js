import React from "react";
import Home from "./components/NavBar";
import Signin from "./pages/Signin";
import Signout from "./pages/Signout";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signout" element={<Signout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
