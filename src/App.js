import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./Views/Landing/Hero"
import About from "./Views/About/About";

import Join from "./Components/Join/Join";
import Story from "./Components/Story/Story";
import Projects from "./Views/Projects/Projects";


function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/story" element={<Story/>}/>
        <Route path="/join" element={<Join/>}/>
      </Routes>
    </div>
  );
}

export default App;

