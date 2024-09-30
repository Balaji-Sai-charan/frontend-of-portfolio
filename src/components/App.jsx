import Navbar from "./Navbar";
import Home from "./Home";
import Projects from "./Projects";
import Connect from "./Connect";
import Contact from "./Contact";
import Skills from "./Skills";
import About from "./About";
import Education from "./Education";
import Greeting from './Greeting'; 
function App() {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleGreetingComplete = () => {
      setShowMainContent(true);
  };

  return (
    <div>
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Connect />
      <Navbar />
    </div>
  );
}
export default App;
