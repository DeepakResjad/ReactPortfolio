import logo from './logo.svg';

import About from './components/About';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skills from './components/Skills';

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Routes>
          <Route path="/" exact element={<Hero/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/skills" element={<Skills/>} />        
        </Routes>    
      </div>      
    </Router>    
  );
}

export default App;
