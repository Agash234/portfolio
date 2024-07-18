import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import Contact from './components/contact';
import About from './components/About';
import Project from './components/project';
import "./App.css"


const App=() => {
  return (
  <Router>
    <div className='App'>
      <header>
        <h1>My Portfolio</h1>
        <Navbar />
      </header>
      <main>
        <Routes> 
          <Route path="/"  element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/project" element={<Project />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </main>
      
    </div>
  </Router>
    
  );
};

export default App;