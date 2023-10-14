import { BrowserRouter } from "react-router-dom";
import { About, Skills, Contact, Hero, Navbar, Projects, StarsCanvas} from "./components";


// const process = configDotenv;

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-hidden">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center cursor">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skills />
        <Projects /> 
        <div className="realtive z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
