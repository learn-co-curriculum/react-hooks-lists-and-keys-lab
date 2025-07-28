// src/components/App.js
import React from "react";
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import ProjectList from './ProjectList'; // <--- IMPORT PROJECTLIST
import projects from '../data/projects'; // <--- IMPORT PROJECTS DATA

// (Assuming you still have user data imports if needed for Home/About from previous labs)
// import user from '../data/user';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home /* ... pass props if needed from user ... */ />
      <About /* ... pass props if needed from user ... */ />
      <ProjectList projects={projects} /> {/* <--- RENDER PROJECTLIST AND PASS PROJECTS */}
    </div>
  );
}
export default App;
