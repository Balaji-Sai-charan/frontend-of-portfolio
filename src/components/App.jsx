import React, { useState } from 'react';
import Navbar from "./Navbar";
import Home from "./Home";
import Projects from "./Projects";
import Connect from "./Connect";
import Contact from "./Contact";
import Skills from "./Skills";
import About from "./About";
import Education from "./Education";
import Greeting from './Greetings'; 

function App() {
  const [showMainContent, setShowMainContent] = useState(false); // Initialize state

  const handleGreetingComplete = () => {
      setShowMainContent(true); // Set state to show main content
  };

  return (
    <div>
      {!showMainContent ? ( // Render Greeting if main content is not shown
        <Greeting onComplete={handleGreetingComplete} />
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Contact />
          <Connect />
        </>
      )}
    </div>
  );
}

export default App;
