import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Resultat from "./resultat";
import Passe from "./passe";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resultat" element={<Resultat />} />
        <Route path="/passe" element={<Passe />} />
      </Routes>
    </Router>
  );
};
export default App;
