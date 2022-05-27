import "./Content.css";
import React from "react";
import { Routes, Route } from "react-router-dom"; // Importe esses arquivos
import Home from "../../Views/examples/Home";
import About from "../../Views/examples/About";
 
const Content = props => (
  <main className="Content">
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/home" exact element={<Home />} />
    </Routes>
   
  </main>
);
 
export default Content;