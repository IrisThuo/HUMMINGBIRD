import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./Views/Landing/Hero"
import About from "./Views/About/About";
import Stories from "./Views/Stories/Stories";
import Join from "./Components/Join/Join";
import Story from "./Components/Story/Story";


function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/stories" element={<Stories/>}/>
        <Route path="/story" element={<Story/>}/>
        <Route path="/join" element={<Join/>}/>
      </Routes>
    </div>
  );
}

export default App;

