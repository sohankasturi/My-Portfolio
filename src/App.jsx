import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import { Navbar } from "./components";
import { About, Contact, Intro, Project } from "./pages";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Intro" element={<Intro />} />
          <Route path="/Projects" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}
