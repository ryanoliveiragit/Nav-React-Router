import "./Content.css";
import React from "react";
import { Routes, Route } from "react-router-dom"; // Importe esses arquivos
import Home from "../../Views/examples/Home";
import About from "../../Views/examples/About";
import Param from '../../Views/examples/Param'
import NotFound from "../../Views/examples/NotFound";
 
const Content = props => (
  <main className="Content">
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
      <Route path="/param/:id" element={<Param />} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
   
  </main>
);
 
export default Content;