import React from "react";
import { Route, Routes } from "react-router-dom";


import About from "./Views/About/About";
import Admin from "./Views/Admin/Admin";
import Join from "./Components/Join/Join";
import Story from "./Components/Story/Story";
import Projects from "./Views/Projects/Projects";
import Stories from "./Views/Stories/Stories";
import Hero from "./Views/Landing/Hero";


function App() {
  return (
    <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/story" element={<Story/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/hummingbird" element={<Stories/>}/>
        <Route path="/adminstories" element={<Admin/>}/>
      </Routes>
  );
}

export default App;

