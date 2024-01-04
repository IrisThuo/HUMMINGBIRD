import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./Views/Landing/Hero"
import About from "./Views/About/About";
import Stories from "./Views/Stories/Stories";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/stories" element={<Stories/>}/>
      </Routes>
    </div>
  );
}

export default App;

